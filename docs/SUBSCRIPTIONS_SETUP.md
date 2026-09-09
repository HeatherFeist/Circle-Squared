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
| `SQUARE_SUBSCRIPTION_ACCESS_TOKEN`, `SQUARE_WEBHOOK_SIGNATURE_KEY`, `SUPABASE_SERVICE_ROLE_KEY` | Needed only for the automated-activation webhook (section 5), in **Cloudflare Pages'** environment variables — not Netlify's | Not needed to keep taking payments — see section 4 |
| `SQUARE_LOCATION_ID`, `SQUARE_SUBSCRIPTION_PLAN_ID` | Only relevant to the older, unused Subscriptions-API-driven checkout stub (`netlify/functions/create-subscription-checkout.js`) | Not used by the live path or by the webhook in section 5 |

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

## 5. Automated activation via a real Square webhook (built — needs your setup steps)

**Not required to keep taking payments — section 4's Payment Link path
already takes real money today, and nothing here changes that.** This
section replaces the old "optional future upgrade" sketch (a
Subscriptions-API-driven checkout) with what was actually built: a real
webhook receiver, `functions/api/square-subscription-webhook.js` — a
**Cloudflare Pages Function** (this site's real production host is
Cloudflare Pages, not Netlify) — that Square calls automatically on
billing events for the existing Payment Link, and which updates
`subscribers.status` itself. Once the steps below are done, the manual
SQL step in section 4 stops being necessary for new payments; until they
are done, section 4's manual step remains exactly as necessary as it is
today, and nothing about this endpoint existing breaks anything —
Square simply won't be calling it yet.

This does NOT use the Subscriptions API's `CreateSubscription` call or a
Catalog plan-variation ID the way the old sketch in this section used to
describe — `netlify/functions/create-subscription-checkout.js` (a stub
for that different approach) is still in the repo but still unused; this
Part uses the plain Payment Link that's already live, plus Square's own
webhook notifications about it.

### 5.1 What events this listens for, and why (verified this session)

Square signs and sends webhook notifications for real billing events tied
to the existing recurring Payment Link. `functions/api/square-subscription-webhook.js`
listens for:

- **`invoice.payment_made`** — a payment for a billing cycle succeeded.
  Primary, high-confidence signal: Square's own Invoices API webhook
  documentation covers this event, and Square's Subscription Billing
  documentation describes each subscription billing cycle as itself being
  invoiced under the hood — this is why a Payment-Link-based subscription
  still produces invoice events even though it was never created through
  the `CreateSubscription` API call directly. Marks the subscriber
  `active` with a fresh 30-day period.
- **`invoice.payment_failed`** — an automatic renewal charge failed.
  Marks the subscriber `paused` (not `canceled` — a single failed card
  isn't the same as someone actively canceling).
- **`invoice.canceled`** — marks the subscriber `canceled`.
- **`subscription.created` / `subscription.updated`** — handled as a
  secondary, defensive signal on the underlying Subscription object's own
  `status` field (`ACTIVE` / `CANCELED` / `DEACTIVATED` / `PAUSED`),
  mapped to this app's own status values. This session could not fully
  confirm from Square's docs whether a dashboard-created recurring
  Payment Link's subscription reports cancellations through this event
  family, through the invoice events above, or both — handling both
  families is the safe choice either way.

**Identifying who paid:** a plain Payment Link never gets a
`customer_id`/`reference_id` set by this app at creation time, so the
webhook handler fetches the full Invoice (`GET /v2/invoices/{id}`, using
the invoice id in the webhook payload) and reads its
`primary_recipient.email_address` field — Square's own Invoice/
InvoiceRecipient object reference documents this as a snapshot of the
buyer's email taken directly onto the invoice, no separate customer
lookup needed for that path. For the `subscription.*` path, the payload
gives a `customer_id` instead, so the handler calls
`GET /v2/customers/{customer_id}` and reads that Customer object's
`email_address`.

**Signature verification:** every notification carries an
`x-square-hmacsha256-signature` header — an HMAC-SHA256 of the exact
notification URL concatenated with the raw request body, signed with the
webhook subscription's own **signature key** (generated by Square only
when you create the webhook subscription in the dashboard — a different
value from the Square API access token). The handler recomputes this and
rejects (401) anything that doesn't match, or anything at all if
`SQUARE_WEBHOOK_SIGNATURE_KEY` isn't set — before ever parsing the body.

**A caveat, stated plainly:** this environment's network egress proxy
blocks `developer.squareup.com` and `squareup.com` directly (the same
limitation already noted in `netlify/functions/create-subscription-checkout.js`
and `docs/SQUARE_DYNAMIC_CHECKOUT_SETUP.md`), so everything above was
verified through web search against Square's documentation and SDK
source rather than a direct fetch of Square's own pages. Re-check against
developer.squareup.com directly once you have real access, especially
the `subscription.*` event behavior for a dashboard-created recurring
Payment Link specifically (as opposed to a `CreateSubscription`-API-made
one), before fully trusting it unattended at real volume.

### 5.2 The database side: a new function, not a change to the old one

`upsert_subscriber_status()` (the function the client-side app already
uses) deliberately writes only to `auth.uid()` — the signed-in caller's
own row. The webhook is a trusted server-to-server caller with no
Supabase user session at all, so it needs a different, narrower door:
`activate_subscriber_by_email()`, added in
`supabase/square_subscription_webhook_schema.sql` (run this file once in
the Supabase SQL Editor, after `subscriptions_daily_reads_schema.sql` —
it only adds one new function, it does not touch `subscribers`,
`upsert_subscriber_status()`, or `upsert_daily_read()` at all). It looks
up the `auth.users` row matching the email Square gave us and upserts
that person's `subscribers` row — and its `EXECUTE` privilege is granted
**only to the `service_role` Postgres role**, with an explicit
`revoke ... from public` first (Postgres grants `EXECUTE` on new
functions to `PUBLIC` by default — this was verified directly against a
real local Postgres instance this session: without that explicit revoke,
a normal signed-in `authenticated` caller could call this function and
activate or cancel *anyone's* subscription just by knowing their email;
with the revoke in place, both `anon` and `authenticated` callers get a
clean "permission denied for function" and only a request signed with the
real service-role key succeeds). See that file's own header comment for
the full safety reasoning.

### 5.3 Setup steps (what you actually need to do)

1. **Deploy this branch to Cloudflare Pages** (or merge it) so
   `functions/api/square-subscription-webhook.js` is live at
   `https://circle.w3bbworldwide.com/api/square-subscription-webhook`.
2. **Run `supabase/square_subscription_webhook_schema.sql`** once in the
   Supabase SQL Editor (same place you ran the other schema files).
3. **Set these in the Cloudflare dashboard** (Cloudflare dashboard → your
   Pages project → **Settings → Environment variables**, for the
   Production environment):

   | Variable | What it is |
   |---|---|
   | `SQUARE_SUBSCRIPTION_ACCESS_TOKEN` | A real Square API access token (the same name already referenced elsewhere in this doc/repo) — needs permission to call the Invoices and Customers APIs (`GET /v2/invoices/{id}`, `GET /v2/customers/{id}`) |
   | `SQUARE_WEBHOOK_SIGNATURE_KEY` | The signature key Square generates in step 4 below — a secret, never the access token |
   | `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase project's **service role** key (Supabase dashboard → Project Settings → API → `service_role` secret) — a genuine secret, completely different from the anon `SUPABASE_KEY` already hardcoded client-side in `public/index.html`, and must never be put in any committed file or client-side code |
   | `SUPABASE_URL` | The same Supabase project URL already used elsewhere (e.g. `https://xyzco.supabase.co`) |

   (`SQUARE_ENVIRONMENT=sandbox` is also supported, for testing against
   Square's sandbox APIs before touching production — omit it, or set it
   to anything else, for production.)
4. **Create the webhook subscription in the Square dashboard.** Square
   Dashboard → Developer/Webhooks settings → create a new webhook
   subscription, notification URL set to the exact Cloudflare Pages
   Function URL from step 1, subscribed to these event types:
   `invoice.payment_made`, `invoice.payment_failed`, `invoice.canceled`,
   `subscription.created`, `subscription.updated`. Saving it shows you
   the **signature key** — copy that into `SQUARE_WEBHOOK_SIGNATURE_KEY`
   from step 3.
5. **Verify it's working.** Either make one real (or Sandbox) test
   payment through the existing `SQUARE_SUBSCRIPTION_LINK` and confirm
   the corresponding `subscribers` row goes `active` without you running
   any SQL by hand, or — if your Square dashboard's webhook subscription
   page offers a "Send Test Event" / test-notification feature — use that
   first to confirm the endpoint returns a `200` and logs correctly
   before relying on a real payment.

Until all five steps above are done, subscriber activation stays the
manual one-SQL-statement step described in section 4 — that's the live,
intended state today, not a bug or a blocker, and it stays a safe fallback
even after the webhook is live (nothing stops you from still running the
manual SQL for an edge case the webhook doesn't catch).

## 6. Where this data shows up

`daily_reads` rows are never surfaced anywhere in the existing Admin
Panel purchase list (that list is specifically about one-time and promo
purchases). A subscriber's own saved reads and Lookback synthesis are only
ever visible to that signed-in subscriber, through the RLS policies in
`supabase/subscriptions_daily_reads_schema.sql` — nobody else, including
the site owner reading the database directly outside the SQL Editor's
elevated access, can see another subscriber's daily choices through the
app's own anon-key API surface.
