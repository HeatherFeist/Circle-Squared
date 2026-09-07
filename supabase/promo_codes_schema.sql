-- ============================================================
-- Circles Squared -- Promo Codes schema
-- ============================================================
-- Run this once in the Supabase SQL Editor for this project
-- (Supabase Dashboard -> SQL Editor -> New query -> paste this whole file
-- -> Run). See docs/PROMO_CODES_SETUP.md for the plain-language walkthrough
-- of what this does and how to create/manage codes afterward.
--
-- Design goals (matching the rest of this project's Supabase usage):
--   * Row Level Security is ON, with NO direct anon SELECT/INSERT/UPDATE
--     grants on the table itself -- a customer (or anyone reading the
--     site's public anon key out of index.html) can never list, guess, or
--     tamper with codes by querying the REST API directly.
--   * The ONLY way the public anon key can interact with promo codes is
--     through the redeem_promo_code() function below, which is
--     SECURITY DEFINER (runs with the table owner's privileges regardless
--     of the caller) and only ever answers "is THIS ONE code valid for
--     THIS ONE tier" -- it never echoes back a list of codes, and a wrong
--     guess gets back a generic "not found", not a hint.
--   * Redemption (the times_used increment) happens atomically in the same
--     UPDATE ... WHERE ... RETURNING statement as the validity check, so
--     two people redeeming the last use of a single-use code at the same
--     moment cannot both succeed (see the function body for details).
-- ============================================================

create table if not exists public.promo_codes (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,               -- stored uppercased; matched case-insensitively
  applies_to text,                          -- a tier slug (e.g. 'blueprint', 'archetype-quiz',
                                             -- 'group5') or null / 'all' for any tier
  max_uses integer,                         -- null = unlimited uses
  times_used integer not null default 0,
  active boolean not null default true,
  expires_at timestamptz,                   -- null = never expires
  created_at timestamptz not null default now()
);

-- Keep codes stored uppercase no matter how they were inserted, so the
-- unique constraint and the RPC's case-insensitive match agree.
create or replace function public.promo_codes_uppercase_code()
returns trigger
language plpgsql
as $$
begin
  new.code := upper(trim(new.code));
  return new;
end;
$$;

drop trigger if exists trg_promo_codes_uppercase on public.promo_codes;
create trigger trg_promo_codes_uppercase
  before insert or update on public.promo_codes
  for each row execute function public.promo_codes_uppercase_code();

alter table public.promo_codes enable row level security;
-- No policies are created for anon/authenticated -- with RLS enabled and
-- zero policies, PostgREST's anon role gets ZERO direct access (no SELECT,
-- INSERT, UPDATE, or DELETE) to this table. The only door in is the
-- SECURITY DEFINER function below, whose own EXECUTE grant is separate
-- from table-level RLS.

-- ------------------------------------------------------------
-- redeem_promo_code(p_code, p_tier_slug)
-- ------------------------------------------------------------
-- Validates a promo code for a given tier slug and, only on a fully valid
-- redemption, atomically increments times_used in the same statement as
-- the validity check -- so a single-use code can never be redeemed twice
-- by two concurrent requests (the UPDATE's WHERE clause re-checks
-- max_uses at the row level; only one of two simultaneous UPDATEs can
-- actually affect the row and return it, because Postgres serializes
-- concurrent UPDATEs to the same row and the second one re-evaluates its
-- WHERE clause against the already-incremented value).
--
-- Returns a JSON object: { "valid": boolean, "reason": text }
--   reason values: null (success), 'not_found', 'inactive', 'expired',
--   'wrong_tier', 'max_uses_reached'
create or replace function public.redeem_promo_code(p_code text, p_tier_slug text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code text := upper(trim(coalesce(p_code, '')));
  v_row public.promo_codes;
  v_updated public.promo_codes;
begin
  if v_code = '' then
    return jsonb_build_object('valid', false, 'reason', 'not_found');
  end if;

  select * into v_row from public.promo_codes where code = v_code;

  if v_row.id is null then
    return jsonb_build_object('valid', false, 'reason', 'not_found');
  end if;

  if not v_row.active then
    return jsonb_build_object('valid', false, 'reason', 'inactive');
  end if;

  if v_row.expires_at is not null and v_row.expires_at < now() then
    return jsonb_build_object('valid', false, 'reason', 'expired');
  end if;

  if v_row.applies_to is not null
     and lower(v_row.applies_to) <> 'all'
     and lower(v_row.applies_to) <> lower(coalesce(p_tier_slug, '')) then
    return jsonb_build_object('valid', false, 'reason', 'wrong_tier');
  end if;

  -- Atomic check-and-increment: only succeeds if the code is still under
  -- its max_uses AT THE MOMENT OF THE UPDATE, not at the moment we first
  -- read it above (that first read was just for the cheap failure
  -- messages -- active/expired/wrong_tier don't need row-locking).
  update public.promo_codes
     set times_used = times_used + 1
   where id = v_row.id
     and active
     and (max_uses is null or times_used < max_uses)
  returning * into v_updated;

  if v_updated.id is null then
    -- Someone else used the last slot between our read above and this
    -- UPDATE, or it was deactivated in that window.
    return jsonb_build_object('valid', false, 'reason', 'max_uses_reached');
  end if;

  return jsonb_build_object('valid', true, 'reason', null);
end;
$$;

-- Grant execution to the anon role (the site's public anon key), matching
-- how other public-facing write paths in this project are RPC-gated
-- rather than given direct table access. No grants are given on
-- public.promo_codes itself -- only on this function.
grant execute on function public.redeem_promo_code(text, text) to anon;
grant execute on function public.redeem_promo_code(text, text) to authenticated;
