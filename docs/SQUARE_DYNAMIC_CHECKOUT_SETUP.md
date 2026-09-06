# Dynamic Square Checkout — Setup Guide

This document explains how to configure and test the new serverless function
(`netlify/functions/create-checkout.js`) that creates a Square checkout link
on the fly, for an arbitrary dollar amount. It is separate, additive
infrastructure — it does **not** change or replace the existing fixed-price
Square Payment Links already used elsewhere on the site.

## 1. Set environment variables in Netlify

Go to **Netlify dashboard → your site → Site configuration → Environment
variables**, and add these three:

| Variable | What it is | Where to find it |
|---|---|---|
| `SQUARE_ACCESS_TOKEN` | Your Square API access token. This is a secret credential that lets the server create checkout links on your behalf. | Square Developer Dashboard (developer.squareup.com/apps) → your application → **Credentials**. There is a separate token for **Sandbox** and for **Production** — use the Sandbox one first (see step 4). |
| `SQUARE_LOCATION_ID` | The ID of the specific Square business location payments should be attributed to. | Square Developer Dashboard → your application → **Locations** (or the Square Dashboard → Account & Settings → Locations). |
| `SQUARE_ENV` | Either `sandbox` or `production`. Controls which Square environment (and which of the two access tokens above) is used. Defaults to `sandbox` if not set — it never silently defaults to production. | You choose this value; it is not something you copy from Square. |

**Important:** after adding or changing these, you need to trigger a new
deploy (or "Clear cache and deploy site") for the function to pick them up.

## 2. Never put these values in code or chat

**Never paste `SQUARE_ACCESS_TOKEN`, `SQUARE_LOCATION_ID`, or any other
Square credential into the codebase, into a chat with any AI assistant
(including Claude), or into any file that gets committed to git.** They
belong **only** in Netlify's Environment Variables settings, which are not
part of the git repository and are not visible in the site's source code.
If a credential is ever pasted somewhere it shouldn't be, treat it as
compromised and regenerate it from the Square Developer Dashboard
immediately.

## 3. Test it once deployed

1. Make sure `SQUARE_ENV=sandbox` and the **sandbox** `SQUARE_ACCESS_TOKEN` /
   `SQUARE_LOCATION_ID` are set (see step 4 for why sandbox comes first).
2. Deploy the site (or a deploy preview) with these variables set.
3. Open the live site in a browser and open the browser's developer console
   (F12 or right-click → Inspect → Console).
4. Run:
   ```js
   createDynamicCheckout(1000, "Test charge", "test").catch(e => console.error(e));
   ```
5. This should redirect the page to a real Square-hosted checkout page for
   **$10.00**. That confirms the function, environment variables, and Square
   account are all wired correctly.
6. **To safely cancel without being charged:** on Square's sandbox checkout
   page, simply close the tab / navigate away instead of entering payment
   details and submitting. No charge occurs unless you complete the
   checkout form and submit it. If you want to see the full flow complete,
   see the sandbox test card below — sandbox charges are never real money.

## 4. Use Sandbox before Production

Always test with `SQUARE_ENV=sandbox` first. Square's sandbox environment
looks and behaves like the real thing but never moves real money, and it
provides dedicated test card numbers for exactly this purpose.

**Standard Square sandbox test card:**

- Card number: `4111 1111 1111 1111`
- Expiration date: any valid future date (e.g. `12/30`)
- CVV: any 3 digits (e.g. `111`)
- Postal code: any valid 5-digit ZIP (e.g. `94103`)

Only switch `SQUARE_ENV` to `production` — and swap in the **production**
`SQUARE_ACCESS_TOKEN` / `SQUARE_LOCATION_ID` — once you've confirmed the
sandbox flow works end-to-end and you're ready to accept real charges.

## Notes on API verification

The exact request/response shape used by `create-checkout.js` was verified
against Square's own documentation and reference material:

- Checkout API guide: https://developer.squareup.com/docs/checkout-api
- Create Payment Link reference: https://developer.squareup.com/reference/square/checkout-api/create-payment-link

This sandboxed development environment could not directly fetch
`developer.squareup.com` (that host is blocked by the environment's network
egress policy), so the field names were cross-checked via multiple
independent search results quoting Square's own example JSON and reference
tables, rather than by loading the live page directly. Every source found
agreed on the same shapes (`idempotency_key`, `quick_pay.name`,
`quick_pay.price_money.{amount,currency}`, `quick_pay.location_id`,
`checkout_options.redirect_url`, and a response containing
`payment_link.url` / `payment_link.long_url`), and this matches Square's
long-stable Checkout API contract. Before going live, a human should do a
final check of the live reference page and, ideally, one real sandbox
request, since this could not be tested against Square's live servers from
within this environment.
