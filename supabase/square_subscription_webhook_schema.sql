-- ============================================================
-- Circles Squared -- Square Subscription Webhook: server-side activation
-- ============================================================
-- Run this once in the Supabase SQL Editor for this project, AFTER
-- supabase/subscriptions_daily_reads_schema.sql has already been run
-- (this file adds one new function alongside the `subscribers` table
-- that file creates -- it does not redefine or touch that table, and
-- does not touch `upsert_subscriber_status()` or `upsert_daily_read()`
-- at all). See docs/SUBSCRIPTIONS_SETUP.md section 5 for the plain-
-- language walkthrough of the webhook this function supports.
--
-- WHY THIS IS A SEPARATE FUNCTION FROM upsert_subscriber_status():
-- upsert_subscriber_status() is deliberately hard-coded to write only to
-- auth.uid() -- the calling (signed-in) user's own row -- because its
-- caller is the client-side app acting on behalf of one browser session.
-- That is exactly correct there and must never change.
--
-- The Square webhook receiver (functions/api/square-subscription-webhook.js,
-- a Cloudflare Pages Function) is a completely different kind of caller:
-- a trusted server-to-server request from Square, with NO Supabase user
-- session/JWT of its own, that needs to activate/update *some other*
-- person's row identified only by the email address on the Square
-- Invoice/Customer record. auth.uid() is null for that caller, so
-- upsert_subscriber_status() would (correctly) refuse it. A new
-- function is the right fix, not weakening the existing one.
--
-- SAFETY MODEL (why this cannot become the privilege-escalation gap that
-- was closed earlier in upsert_daily_read()):
--   * This function is granted EXECUTE only to the `service_role`
--     Postgres role -- never to `anon` or `authenticated`. Supabase's
--     PostgREST layer resolves the caller's Postgres role from the JWT
--     used to call the API; a request signed with the anon or a user's
--     access token is authenticated as `anon`/`authenticated` and gets a
--     plain "permission denied for function" error attempting to call
--     this RPC, regardless of what p_email/p_user_id it tries to pass.
--     Only a request signed with the actual Supabase **service-role
--     key** (SUPABASE_SERVICE_ROLE_KEY -- a genuine secret, kept only in
--     Cloudflare Pages' environment variables, never in any committed
--     file) is authenticated as `service_role` and can call it.
--   * It still looks the target user up by email itself (rather than
--     trusting a caller-supplied user_id) so the webhook handler never
--     needs to embed a Supabase user id anywhere -- only the email
--     Square's own API returns for that invoice/customer.
--   * It is intentionally narrow: it does exactly one thing (upsert one
--     subscribers row for the auth.users row matching an email), the
--     same "one clear job" shape as upsert_subscriber_status() and
--     upsert_daily_read() before it.
-- ============================================================

-- ------------------------------------------------------------
-- activate_subscriber_by_email(p_email, p_status, p_square_subscription_id,
--                               p_current_period_start, p_current_period_end)
-- ------------------------------------------------------------
-- SECURITY DEFINER so it can read auth.users (not otherwise exposed to
-- PostgREST) and write public.subscribers regardless of caller, but its
-- own EXECUTE grant (below) is what actually restricts who may invoke it
-- at all -- SECURITY DEFINER alone does not make a function public.
--
-- Returns a JSON object: { "ok": boolean, "reason": text }
--   reason values on failure: 'missing_email', 'invalid_status',
--   'no_matching_user'
create or replace function public.activate_subscriber_by_email(
  p_email text,
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
  v_email text := lower(trim(coalesce(p_email, '')));
  v_uid uuid;
  v_row public.subscribers;
begin
  if v_email = '' then
    return jsonb_build_object('ok', false, 'reason', 'missing_email');
  end if;

  if p_status not in ('active', 'paused', 'canceled', 'pending') then
    return jsonb_build_object('ok', false, 'reason', 'invalid_status');
  end if;

  -- auth.users.email is not guaranteed unique-per-case by Postgres itself
  -- (Supabase normalizes on sign-up, but match case-insensitively here
  -- too, matching how Square's own buyer email is free-typed text with
  -- no case guarantee). Take the earliest-created match if somehow more
  -- than one row matches, rather than erroring.
  select id into v_uid
    from auth.users
   where lower(email) = v_email
   order by created_at asc
   limit 1;

  if v_uid is null then
    return jsonb_build_object('ok', false, 'reason', 'no_matching_user');
  end if;

  insert into public.subscribers (user_id, status, square_subscription_id, current_period_start, current_period_end)
  values (v_uid, p_status, p_square_subscription_id, p_current_period_start, p_current_period_end)
  on conflict (user_id) do update
    set status = excluded.status,
        square_subscription_id = coalesce(excluded.square_subscription_id, public.subscribers.square_subscription_id),
        current_period_start = coalesce(excluded.current_period_start, public.subscribers.current_period_start),
        current_period_end = coalesce(excluded.current_period_end, public.subscribers.current_period_end)
  returning * into v_row;

  return jsonb_build_object('ok', true, 'status', v_row.status, 'user_id', v_row.user_id);
end;
$$;

-- PostgreSQL grants EXECUTE on a newly created function to the PUBLIC
-- pseudo-role by default -- which would otherwise silently hand anon AND
-- authenticated the ability to call this function too, undoing every
-- other safeguard above. Real Supabase projects revoke EXECUTE from
-- PUBLIC on new `public`-schema functions by default, but this line
-- makes that explicit and does not rely on it (verified locally against
-- a plain Postgres 16 instance with none of Supabase's own default-
-- privilege setup applied -- see the PR body's test transcript: without
-- this REVOKE, an `authenticated`-role caller could call this function
-- successfully despite the GRANT below naming only service_role).
revoke execute on function public.activate_subscriber_by_email(text, text, text, timestamptz, timestamptz) from public;

-- The entire safety model above rests on this one line: EXECUTE is
-- granted ONLY to service_role. Do not add a grant for anon or
-- authenticated to this function, ever -- doing so would let any
-- signed-in (or even anonymous) caller activate or cancel ANY OTHER
-- user's subscription just by knowing/guessing their email address,
-- which is exactly the class of bug closed elsewhere in this project's
-- RLS/grant design (see the header comments in
-- supabase/subscriptions_daily_reads_schema.sql and
-- supabase/promo_codes_schema.sql).
grant execute on function public.activate_subscriber_by_email(text, text, text, timestamptz, timestamptz) to service_role;
