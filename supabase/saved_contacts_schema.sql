-- ============================================================
-- Circles Squared -- Saved Contacts schema
-- ============================================================
-- Run this once in the Supabase SQL Editor for this project (Supabase
-- Dashboard -> SQL Editor -> New query -> paste this whole file -> Run).
-- Mirrors the design and style of supabase/subscriptions_daily_reads_schema.sql
-- and supabase/promo_codes_schema.sql -- same project, same conventions.
--
-- What this is for: a subscriber can save a family member or friend's
-- birth info once (e.g. the moment a new baby is born) and reuse it later
-- for a Group or Partnership Reading, instead of re-typing it every time.
-- This came directly from a real request: someone wanting to record a
-- newborn's exact birth date/time immediately so it's never lost.
--
-- Design goals (matching the rest of this project's Supabase usage):
--   * Row Level Security is ON.
--   * A signed-in user may SELECT only their own saved_contacts rows
--     directly (needed for listing their own contacts in the UI), but
--     every WRITE (insert, update, delete) goes through a SECURITY
--     DEFINER RPC below -- never a direct anon/authenticated table write.
--     This is the same discipline redeem_promo_code() and
--     upsert_daily_read() already use elsewhere in this project.
--   * This is a paid-subscriber perk, not a free-tier feature: every RPC
--     below checks `exists (select 1 from subscribers where user_id =
--     auth.uid() and status = 'active')` server-side before writing --
--     the same real, non-client-trusting enforcement upsert_daily_read()
--     already uses for the exact same reason (a client-side gate alone
--     could be bypassed by calling the RPC directly).
-- ============================================================

-- ------------------------------------------------------------
-- saved_contacts
-- ------------------------------------------------------------
create table if not exists public.saved_contacts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  label text,                          -- how THIS subscriber refers to them privately (e.g. "Nephew's son", "Mom") -- never shown to anyone but the owner
  full_name text not null,
  used_name text,                      -- optional nickname override -- same pattern as the main intake form's "Used Name" field; null falls back to full_name at reading time, same rule the one-time flow already uses
  birth_date date not null,
  birth_time time,                     -- null when birth_time_unknown is true or simply not provided
  birth_time_unknown boolean not null default false,
  birth_place text,                    -- free-text place -- powers Ascendant/Moon sign lookups elsewhere in the app when present
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.saved_contacts_set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists trg_saved_contacts_updated_at on public.saved_contacts;
create trigger trg_saved_contacts_updated_at
  before update on public.saved_contacts
  for each row execute function public.saved_contacts_set_updated_at();

create index if not exists idx_saved_contacts_user on public.saved_contacts (user_id, created_at desc);

alter table public.saved_contacts enable row level security;

-- Table-level SELECT grant only -- no INSERT/UPDATE/DELETE grant is given
-- here at all, so even with RLS somehow misconfigured there is no write
-- path via PostgREST table access; every write goes through the RPCs
-- below, so a client can never insert a row for another user_id or edit/
-- delete a contact outside those RPCs' own rules.
grant select on public.saved_contacts to authenticated;

-- A signed-in user may read ONLY their own saved contacts.
create policy "select own saved contacts"
  on public.saved_contacts for select
  to authenticated
  using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- upsert_saved_contact(...)
-- ------------------------------------------------------------
-- The ONLY way any row in `saved_contacts` is ever created or changed.
-- SECURITY DEFINER, always writes to auth.uid() -- the caller's own
-- user_id -- never a parameter, so a signed-in user can never write or
-- overwrite another user's saved contact.
--
-- p_contact_id: null -> insert a new contact. A real id -> update that
-- contact, but ONLY if it already belongs to the caller (enforced by the
-- `where id = p_contact_id and user_id = v_uid` clause below) -- passing
-- someone else's id here simply matches zero rows and returns
-- 'not_found', it can never edit another subscriber's contact.
create or replace function public.upsert_saved_contact(
  p_contact_id uuid default null,
  p_label text default null,
  p_full_name text default null,
  p_used_name text default null,
  p_birth_date date default null,
  p_birth_time time default null,
  p_birth_time_unknown boolean default false,
  p_birth_place text default null,
  p_notes text default null
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_row public.saved_contacts;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;

  -- Server-side enforcement of the paid-perk gate -- never trust the
  -- client-side UI gate alone, same discipline upsert_daily_read() uses.
  if not exists (
    select 1 from public.subscribers
    where user_id = v_uid and status = 'active'
  ) then
    return jsonb_build_object('ok', false, 'reason', 'not_an_active_subscriber');
  end if;

  if p_full_name is null or length(trim(p_full_name)) = 0 then
    return jsonb_build_object('ok', false, 'reason', 'missing_full_name');
  end if;

  if p_birth_date is null then
    return jsonb_build_object('ok', false, 'reason', 'missing_birth_date');
  end if;

  if p_contact_id is not null then
    update public.saved_contacts
      set label = p_label,
          full_name = p_full_name,
          used_name = p_used_name,
          birth_date = p_birth_date,
          birth_time = case when p_birth_time_unknown then null else p_birth_time end,
          birth_time_unknown = p_birth_time_unknown,
          birth_place = p_birth_place,
          notes = p_notes
      where id = p_contact_id and user_id = v_uid
      returning * into v_row;

    if v_row.id is null then
      return jsonb_build_object('ok', false, 'reason', 'not_found');
    end if;
  else
    insert into public.saved_contacts (
      user_id, label, full_name, used_name, birth_date, birth_time, birth_time_unknown, birth_place, notes
    )
    values (
      v_uid, p_label, p_full_name, p_used_name, p_birth_date,
      case when p_birth_time_unknown then null else p_birth_time end,
      p_birth_time_unknown, p_birth_place, p_notes
    )
    returning * into v_row;
  end if;

  return jsonb_build_object('ok', true, 'id', v_row.id);
end;
$$;

grant execute on function public.upsert_saved_contact(uuid, text, text, text, date, time, boolean, text, text) to authenticated;
-- Deliberately NOT granted to anon -- a saved contact only ever makes
-- sense for a signed-in, actively-subscribed user, and the function
-- already refuses to write when either condition isn't met.

-- ------------------------------------------------------------
-- delete_saved_contact(p_contact_id)
-- ------------------------------------------------------------
-- SECURITY DEFINER, deletes only a row that both belongs to the caller
-- AND matches the given id -- passing someone else's id deletes nothing
-- and returns 'not_found' rather than silently succeeding.
create or replace function public.delete_saved_contact(p_contact_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_deleted_id uuid;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'not_authenticated');
  end if;

  if not exists (
    select 1 from public.subscribers
    where user_id = v_uid and status = 'active'
  ) then
    return jsonb_build_object('ok', false, 'reason', 'not_an_active_subscriber');
  end if;

  delete from public.saved_contacts
    where id = p_contact_id and user_id = v_uid
    returning id into v_deleted_id;

  if v_deleted_id is null then
    return jsonb_build_object('ok', false, 'reason', 'not_found');
  end if;

  return jsonb_build_object('ok', true, 'id', v_deleted_id);
end;
$$;

grant execute on function public.delete_saved_contact(uuid) to authenticated;
