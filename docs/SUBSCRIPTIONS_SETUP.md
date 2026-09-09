# Daily Readings Subscription — Setup Guide

This explains how to turn on the $20/month Daily Readings subscription
(magic-link sign-in, persisted daily reads, and the Quarterly/Annual
Lookback) and, separately, what still has to happen before real billing
goes live. It mirrors [`docs/PROMO_CODES_SETUP.md`](./PROMO_CODES_SETUP.md)'s
structure — everything database-side happens once, in the Supabase
dashboard's SQL Editor.

This is entirely **additive**. One-time reading purchases (The Initiation,
The Unveiling, The Complete Blueprint, Partnership Blueprint, the Archetype
Quiz, and Group Readings) are completely unaffected — they never require
sign-in and keep working exactly as they do today.

## 1. Run the setup SQL once

1. Go to your Supabase project dashboard (the same project the promo-code
   system already uses).
2. Open **SQL Editor** in the left sidebar → **New query**.
3. Open [`supabase/subscriptions_daily_reads_schema.sql`](../supabase/subscriptions_daily_reads_schema.sql)
   in this repo, copy the **entire file**, and paste it into the query
   editor.
4. Click **Run**.

That's it — this creates the `subscribers` and `daily_reads` tables and
two secure functions (`upsert_subscriber_status`, `upsert_daily_read`) the
website uses. You only need to do this once per Supabase project.

`upsert_daily_read()` checks server-side that the caller's own `subscribers`
row has `status = 'active'` before it will write anything — being signed in
is not, by itself, enough to store daily reads. This means the $20/month
paywall is enforced by the database itself, not just by the website's UI:
someone can't get free daily storage by calling the function directly and
skipping the app's own "Subscribe" button. Verified directly against a real
local Postgres instance: a signed-in but non-subscribed user is refused
(`{"ok": false, "reason": "not_an_active_subscriber"}`), and the same call
succeeds once `upsert_subscriber_status('active', ...)` has been run for
that person.

## 2. Turn on email sign-in (magic link)

The subscription flow signs people in with a passwordless "magic link"
email — no password is ever collected or stored by this app.

1. In the Supabase dashboard, go to **Authentication → Providers → Email**
   and make sure the Email provider is enabled (it's on by default for
   new projects).
2. Under **Authentication → URL Configuration**, add your site's real URL
   (e.g. `https://yoursite.com`) to **Redirect URLs** — this is where
   Supabase sends people back to after they click the emailed link. The
   app already asks for a redirect back to the exact page it was on
   (`window.location.origin + window.location.pathname`), so just adding
   your site's root URL (or `https://yoursite.com/*`) covers it.
3. No other configuration is required — the app calls Supabase's
   `/auth/v1/otp` endpoint directly with the same Supabase URL and anon
   key already used for the promo-code system (see below), so there is
   no separate API key to configure for this step.

## 3. What env vars / config this needs

| What | Where it lives | Status |
|---|---|---|
| Supabase project URL + anon key | Already hardcoded in `public/index.html` as `SUPABASE_URL` / `SUPABASE_KEY` (the same two values `redeem_promo_code()` and the lead-capture save already use) | ✅ Already there — nothing new to add |
| `SQUARE_SUBSCRIPTION_LINK` | `public/index.html`, the `SQUARE_SUBSCRIPTION_LINK` JS variable, right above `startSubscriptionCheckout()` | ✅ **Live** — set to the real Square Payment Link |
| `SQUARE_SUBSCRIPTION_ACCESS_TOKEN`, `SQUARE_LOCATION_ID`, `SQUARE_SUBSCRIPTION_PLAN_ID` | Would be needed only for the FUTURE fully-automated path (section 5) | Not needed for launch — see section 4 |

Nothing here is a secret that needs to stay out of chat or code — a
Square **Payment Link** is a public checkout URL, safe to have visible in
`public/index.html` exactly like the one-time tiers' links in
`SQUARE_LINKS` already are. The values that must never appear in code,
chat, or committed files are a Square **API access token** or a webhook
signing secret — neither of those is needed for the live path below.

## 4. Billing is live — via a plain Square Payment Link, not the Subscriptions API

The $20/month subscription actually takes real payments today, the simple
way: a Payment Link created in the Square dashboard exactly like every
one-time tier's link (Square Dashboard → the same place you made the
other checkout links → set it to $20/month recurring → **Redirect URL**
set to `https://circle.w3bbworldwide.com/?paid=subscription-monthly`).
Square's own hosted checkout handles the recurring charge — no
Subscriptions-API access token, no Netlify function, no webhook needed
just to collect the money.

The one manual step that remains, until the FUTURE path in section 5 is
built: **activating a subscriber's access after they pay is done by
hand.** Square doesn't tell this app automatically that someone paid via
a plain Payment Link, so when you see a new $20/month payment land in
your Square dashboard, run this once in Supabase's SQL Editor:

```sql
-- Find the user's id first (Authentication -> Users in the dashboard, or:
select id, email from auth.users where email = 'someone@example.com';

-- Then activate them for 30 days:
insert into public.subscribers (user_id, status, current_period_start, current_period_end)
values ('<the-user-id-from-above>', 'active', now(), now() + interval '30 days')
on conflict (user_id) do update set status = 'active', current_period_start = now(), current_period_end = now() + interval '30 days';
```

Once that row is `active`, that person can:

- Sign in via magic link and see their subscription as active.
- Use **Today's Reading** (the exact same Nodal-Choice-driven solo
  reading pipeline as the one-time flow, just called against whatever
  birth data they already entered) and have that day's Node cards, Nodal
  Choice, wildcard card, and a minimal profile snapshot saved to
  `daily_reads` — enforced server-side (see `upsert_daily_read()` in
  `supabase/subscriptions_daily_reads_schema.sql`; a non-active user
  calling it directly is refused, not just blocked in the UI).
- Use **Your Lookback** to see a real, computed synthesis of everything
  saved so far.

Manual activation is fine to launch with at low volume — it's the same
honest, incremental approach this project has used before (see the promo
code system). Automate it later (section 5) if volume justifies the extra
integration work.

**Testing note:** the same SQL above works for a test account too — just
use a test email you control.

```sql
-- Find the user's id first (Authentication -> Users in the dashboard, or:
select id, email from auth.users where email = 'someone@example.com';

-- Then, as the table owner (SQL Editor runs with elevated privileges, not
-- through the anon-key RLS path), either call the RPC directly:
select public.upsert_subscriber_status('active', null, now(), now() + interval '30 days');
-- (this only works if you're impersonating that user's JWT; simplest from
-- the SQL Editor is a direct insert/update instead:)
insert into public.subscribers (user_id, status, current_period_start, current_period_end)
values ('<the-user-id-from-above>', 'active', now(), now() + interval '30 days')
on conflict (user_id) do update set status = 'active', current_period_start = now(), current_period_end = now() + interval '30 days';
```

## 5. OPTIONAL FUTURE UPGRADE — fully automated billing via the Subscriptions API

**Not required to launch — section 4's Payment Link path already takes
real money today.** This section documents the fully-automated
alternative: instead of a human running one SQL statement per new
subscriber, Square's own Subscriptions API and webhooks keep
`subscribers.status` accurate automatically. Worth building once volume
makes the manual step from section 4 a real burden, not before. The
client-side gate, the database schema, and a stub serverless function for
this path are all in place and tested, but no part of it is wired up to
actually run yet:

1. **Create a subscription plan in the Square dashboard.** Go to the
   Square Dashboard → **Items & Orders → Subscriptions** and create a new
   subscription plan (name it something like "Daily Readings", $20/month,
   monthly cadence). Saving it gives you a **Catalog subscription-plan
   object ID** (and, underneath it, a **plan variation ID** — Square's
   Subscriptions API creates subscriptions against the *variation* ID,
   not the top-level plan ID; the dashboard will show you both).
2. **Generate a Subscriptions-API-scoped access token.** In the Square
   Developer Dashboard (developer.squareup.com/apps) → your application →
   **Credentials**, get an access token with the Subscriptions API scope
   enabled. **This must be a different token from the one-time-checkout
   `SQUARE_ACCESS_TOKEN`** already used by `create-checkout.js` — do not
   reuse that value here, even though both live in Netlify's environment
   variables. Use the **Sandbox** token first and test end-to-end before
   ever touching the **Production** one, exactly like
   `docs/SQUARE_DYNAMIC_CHECKOUT_SETUP.md`'s existing "Use Sandbox before
   Production" guidance for one-time checkout.
3. **Set three environment variables in Netlify** (Netlify dashboard →
   your site → Site configuration → Environment variables):

   | Variable | What it is |
   |---|---|
   | `SQUARE_SUBSCRIPTION_PLAN_ID` | The plan **variation** ID from step 1 |
   | `SQUARE_SUBSCRIPTION_ACCESS_TOKEN` | The Subscriptions-API-scoped token from step 2 |
   | `SQUARE_LOCATION_ID` | Can reuse the same value `create-checkout.js` already uses, if it's the same business location |

   Trigger a new deploy after setting these.
4. **Set the client-side `SQUARE_SUBSCRIPTION_PLAN_ID` value** in
   `public/index.html` (the JS variable, in the "SQUARE SUBSCRIPTIONS
   billing" section, right next to `startSubscriptionCheckout()`) to the
   same plan variation ID from step 1. While this is empty (the shipped
   default), the Subscribe button always shows "Subscriptions Launching
   Soon" and never attempts a checkout — this is intentional, so nothing
   silently breaks or mis-charges a customer before steps 1–3 are done.
5. **Implement the real API call.** `netlify/functions/create-subscription-checkout.js`
   is a stub: it checks that the three env vars above are set and, if
   they are, still returns "not implemented yet" — the actual call to
   Square's `POST /v2/subscriptions` (documented in that file's header
   comment, alongside the Customer-lookup step that has to happen first)
   needs to be written and tested against a real Square sandbox account
   before this goes further. `startSubscriptionCheckout()` in
   `public/index.html` has a matching `TODO` comment naming exactly where
   the client-side call to that function belongs once it exists.
6. **Build a webhook receiver.** Square's subscription lifecycle webhooks
   (`subscription.created`, `subscription.updated`, `invoice.payment_made`,
   etc.) are the reliable way to know a subscription actually started,
   renewed, or failed — not just the initial checkout redirect. That
   receiver (not yet built) must call the `upsert_subscriber_status()`
   RPC (see `supabase/subscriptions_daily_reads_schema.sql`) to update the
   right user's `subscribers` row — it must never write to that table
   directly, and it must authenticate as that specific user (e.g. via a
   Supabase service-role key looked up by the Square customer's email/
   metadata), matching every other write path in this project's Supabase
   usage.

Until these steps are done, subscriber activation stays the manual
one-SQL-statement step described in section 4 — that's the live,
intended state today, not a bug or a blocker.

## 6. Where this data shows up

`daily_reads` rows are never surfaced anywhere in the existing Admin
Panel purchase list (that list is specifically about one-time and promo
purchases). A subscriber's own saved reads and Lookback synthesis are only
ever visible to that signed-in subscriber, through the RLS policies in
`supabase/subscriptions_daily_reads_schema.sql` — nobody else, including
the site owner reading the database directly outside the SQL Editor's
elevated access, can see another subscriber's daily choices through the
app's own anon-key API surface.
