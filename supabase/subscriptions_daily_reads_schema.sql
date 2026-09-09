-- ============================================================
-- Circles Squared -- Subscriptions + Daily Reads schema
-- ============================================================
-- Run this once in the Supabase SQL Editor for this project
-- (Supabase Dashboard -> SQL Editor -> New query -> paste this whole file
-- -> Run). See docs/SUBSCRIPTIONS_SETUP.md for the plain-language
-- walkthrough of what this does. This file mirrors the design and style
-- of supabase/promo_codes_schema.sql -- same project, same conventions.
--
-- This schema assumes Supabase Auth (email magic-link / OTP sign-in,
-- already the standard `auth.users` table Supabase provisions for every
-- project) is the identity behind both tables below. No password is ever
-- stored or handled by this app -- Supabase Auth owns that entirely.
--
-- Design goals (matching the rest of this project's Supabase usage):
--   * Row Level Security is ON for both tables.
--   * `subscribers` is READ-ONLY from the client (a user may SELECT only
--     their own row). Every WRITE to `subscribers` happens exclusively
--     through the upsert_subscriber_status() SECURITY DEFINER RPC below
--     -- never a direct anon/authenticated table write. This mirrors
--     redeem_promo_code()'s pattern in promo_codes_schema.sql: the
--     client can never set its own subscription to "active" by simply
--     UPDATEing the row.
--   * `daily_reads` lets a signed-in user SELECT only their own rows
--     directly (needed for the Lookback feature's date-range read), but
--     every WRITE still goes through the upsert_daily_read() SECURITY
--     DEFINER RPC below, upserting on the (user_id, read_date) unique
--     constraint so re-visiting today's reading updates today's row
--     rather than creating a duplicate -- the same atomic
--     check-then-write discipline redeem_promo_code() uses for its
--     times_used increment, adapted here to an upsert instead of a
--     conditional UPDATE.
-- ============================================================

-- ------------------------------------------------------------
-- subscribers
-- ------------------------------------------------------------
create table if not exists public.subscribers (
  user_id uuid primary key references auth.users(id) on delete cascade,
  square_subscription_id text,              -- null until Square Subscriptions is actually wired up (see docs/SUBSCRIPTIONS_SETUP.md's "SQUARE SUBSCRIPTIONS -- NOT YET LIVE" section)
  status text not null default 'pending'
    check (status in ('active', 'paused', 'canceled', 'pending')),
  current_period_start timestamptz,
  current_period_end timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.subscribers_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists trg_subscribers_updated_at on public.subscribers;
create trigger trg_subscribers_updated_at
  before update on public.subscribers
  for each row execute function public.subscribers_set_updated_at();

alter table public.subscribers enable row level security;

-- Table-level SELECT grant is required for the policy below to be
-- reachable at all (RLS restricts WHICH rows a grant can see -- it is
-- not a substitute for the grant itself). No INSERT/UPDATE/DELETE grant
-- is given to anon/authenticated at all, so even with RLS somehow
-- misconfigured there is no write path here -- the only door in for
-- writes is the upsert_subscriber_status() SECURITY DEFINER function
-- below, which does not go through PostgREST table grants.
grant select on public.subscribers to authenticated;

-- A signed-in user may read ONLY their own subscriber row.
create policy "select own subscriber row"
  on public.subscribers for select
  to authenticated
  using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- upsert_subscriber_status(p_status, p_square_subscription_id, p_current_period_start, p_current_period_end)
-- ------------------------------------------------------------
-- The ONLY way any row in `subscribers` is ever created or changed.
-- SECURITY DEFINER so it runs with the table owner's privileges
-- regardless of caller, but it ALWAYS writes to auth.uid() -- the
-- caller's own row -- never a user_id passed in as a parameter, so a
-- signed-in user can never set another user's subscription status.
--
-- Intended callers (per docs/SUBSCRIPTIONS_SETUP.md): a server-side
-- Square Subscriptions webhook handler (not yet built -- billing is not
-- yet live) authenticating as the subscriber via a service-role key, or
-- (for local/manual testing before that webhook exists) a project owner
-- running this RPC by hand from the SQL Editor via `select
-- public.upsert_subscriber_status(...)` while impersonating a user, or a
-- direct `insert`/`update` run manually in the SQL Editor with the
-- table-owner role (SQL Editor queries run with elevated privileges, not
-- through PostgREST/RLS, so this is unaffected by the policy above).
create or replace function public.upsert_subscriber_status(
  p_status text,
  p_square_subscription_id text default null,
  p_current_period_start timestamptz default null,
  p_current_period_end timestamptz default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_row public.subscribers;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;

  if p_status not in ('active', 'paused', 'canceled', 'pending') then
    return jsonb_build_object('ok', false, 'reason', 'invalid_status');
  end if;

  insert into public.subscribers (user_id, status, square_subscription_id, current_period_start, current_period_end)
  values (v_uid, p_status, p_square_subscription_id, p_current_period_start, p_current_period_end)
  on conflict (user_id) do update
    set status = excluded.status,
        square_subscription_id = coalesce(excluded.square_subscription_id, public.subscribers.square_subscription_id),
        current_period_start = coalesce(excluded.current_period_start, public.subscribers.current_period_start),
        current_period_end = coalesce(excluded.current_period_end, public.subscribers.current_period_end)
  returning * into v_row;

  return jsonb_build_object('ok', true, 'status', v_row.status);
end;
$$;

grant execute on function public.upsert_subscriber_status(text, text, timestamptz, timestamptz) to authenticated;
-- Deliberately NOT granted to anon -- a subscriber row only ever makes
-- sense for a signed-in user (auth.uid() is null for anon, and the
-- function already refuses to write when it is).

-- ------------------------------------------------------------
-- daily_reads
-- ------------------------------------------------------------
create table if not exists public.daily_reads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  read_date date not null,
  north_node_card text,
  south_node_card text,
  nodal_choice text check (nodal_choice in ('north', 'south', 'both')),  -- null = no choice made yet
  nodal_choice_at timestamptz,
  personal_day_wildcard_card text,
  raw_profile_snapshot jsonb,   -- minimal profile fields needed to redisplay/regenerate this day's read later (see upsert_daily_read()'s comment) -- never the full generated reading text itself
  created_at timestamptz not null default now(),
  unique (user_id, read_date)
);

create index if not exists idx_daily_reads_user_date on public.daily_reads (user_id, read_date);

alter table public.daily_reads enable row level security;

-- Table-level SELECT grant only -- no INSERT/UPDATE/DELETE grant is given
-- here at all, so even with RLS somehow misconfigured there is no write
-- path via PostgREST table access; every write goes through
-- upsert_daily_read() below, so a client can never insert a row for
-- another user_id or edit a past day's stored data outside the upsert's
-- own rules.
grant select on public.daily_reads to authenticated;

-- A signed-in user may read ONLY their own rows -- needed directly (no
-- RPC required) for the Lookback feature's date-range fetch.
create policy "select own daily reads"
  on public.daily_reads for select
  to authenticated
  using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- upsert_daily_read(...)
-- ------------------------------------------------------------
-- The ONLY way any row in `daily_reads` is ever created or changed.
-- SECURITY DEFINER, always writes to auth.uid() -- the caller's own
-- user_id -- never a parameter, so a signed-in user can never write
-- another user's daily read. Upserts on the (user_id, read_date) unique
-- constraint: re-visiting today's reading (e.g. changing a Nodal Choice
-- partway through the day) updates today's existing row instead of
-- creating a duplicate, exactly the race-condition-safe atomic
-- check-and-write discipline redeem_promo_code() uses elsewhere in this
-- project (there via a conditional UPDATE...RETURNING, here via
-- INSERT...ON CONFLICT...DO UPDATE -- the same underlying Postgres
-- guarantee that a single statement's write is atomic even under
-- concurrent calls for the same row).
create or replace function public.upsert_daily_read(
  p_read_date date,
  p_north_node_card text default null,
  p_south_node_card text default null,
  p_nodal_choice text default null,
  p_nodal_choice_at timestamptz default null,
  p_personal_day_wildcard_card text default null,
  p_raw_profile_snapshot jsonb default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_row public.daily_reads;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;

  if p_read_date is null then
    return jsonb_build_object('ok', false, 'reason', 'missing_read_date');
  end if;

  if p_nodal_choice is not null and p_nodal_choice not in ('north', 'south', 'both') then
    return jsonb_build_object('ok', false, 'reason', 'invalid_nodal_choice');
  end if;

  insert into public.daily_reads (
    user_id, read_date, north_node_card, south_node_card,
    nodal_choice, nodal_choice_at, personal_day_wildcard_card, raw_profile_snapshot
  )
  values (
    v_uid, p_read_date, p_north_node_card, p_south_node_card,
    p_nodal_choice, p_nodal_choice_at, p_personal_day_wildcard_card, p_raw_profile_snapshot
  )
  on conflict (user_id, read_date) do update
    set north_node_card = excluded.north_node_card,
        south_node_card = excluded.south_node_card,
        nodal_choice = excluded.nodal_choice,
        nodal_choice_at = excluded.nodal_choice_at,
        personal_day_wildcard_card = excluded.personal_day_wildcard_card,
        raw_profile_snapshot = excluded.raw_profile_snapshot
  returning * into v_row;

  return jsonb_build_object('ok', true, 'read_date', v_row.read_date);
end;
$$;

grant execute on function public.upsert_daily_read(date, text, text, text, timestamptz, text, jsonb) to authenticated;
-- Deliberately NOT granted to anon -- daily reads only ever make sense
-- for a signed-in subscriber, and the function already refuses to write
-- when auth.uid() is null.
