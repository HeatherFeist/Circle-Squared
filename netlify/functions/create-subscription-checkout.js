// netlify/functions/create-subscription-checkout.js
//
// STUB -- SQUARE SUBSCRIPTIONS ARE NOT YET LIVE. See "SQUARE SUBSCRIPTIONS
// -- NOT YET LIVE" in docs/SUBSCRIPTIONS_SETUP.md for the full explanation
// of what still needs to happen (a Catalog subscription-plan object
// created in the Square dashboard, plus a Subscriptions-API-scoped access
// token) before this function does anything real.
//
// This mirrors netlify/functions/create-checkout.js's existing pattern
// (server holds the Square credential, client never does) but for the
// Subscriptions API instead of one-time Payment Links. It is intentionally
// separate from create-checkout.js, which keeps handling one-time tier
// purchases exactly as before -- nothing in this file touches that flow.
//
// Square Subscriptions API reference (see docs/SUBSCRIPTIONS_SETUP.md for
// the same "could not reach developer.squareup.com directly from this
// environment" caveat already noted in docs/SQUARE_DYNAMIC_CHECKOUT_SETUP.md
// for the one-time-checkout stub -- confirm against the live docs before
// relying on this):
//   - POST https://connect.squareup.com/v2/subscriptions
//     ("CreateSubscription") -- body: { location_id, plan_variation_id,
//     customer_id, start_date, ... }. plan_variation_id is the Catalog
//     object ID for the subscription plan created in the Square dashboard
//     (Square Dashboard -> Items & Orders -> Subscriptions -- NOT the same
//     kind of object as a one-time Payment Link).
//   - A Square Customer must exist first: POST
//     https://connect.squareup.com/v2/customers (or search for an existing
//     one by email) to get a customer_id.
//   - Square's subscription lifecycle webhooks (subscription.created,
//     invoice.payment_made, subscription.updated, etc.) are the reliable
//     way to know a subscription actually started/renewed/failed --
//     there is no webhook receiver built yet either. When one exists, it
//     must call the upsert_subscriber_status() SECURITY DEFINER RPC (see
//     supabase/subscriptions_daily_reads_schema.sql) to update this
//     user's `subscribers` row -- never write to that table directly.
//
// NEVER put a real SQUARE_SUBSCRIPTION_PLAN_ID, a Subscriptions-API access
// token, or a webhook signing secret in this file or any other file that
// gets committed to git. Those belong only in Netlify's Environment
// Variables settings -- see docs/SUBSCRIPTIONS_SETUP.md.

function jsonResponse(statusCode, bodyObj) {
  return {
    statusCode: statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObj),
  };
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed. Use POST.' });
  }

  var planId = process.env.SQUARE_SUBSCRIPTION_PLAN_ID;
  var accessToken = process.env.SQUARE_SUBSCRIPTION_ACCESS_TOKEN;
  var locationId = process.env.SQUARE_LOCATION_ID;

  if (!planId || !accessToken || !locationId) {
    // Honest, non-broken response: subscriptions are not configured yet.
    // The client-side gate (public/index.html's SQUARE_SUBSCRIPTION_PLAN_ID
    // check) should already prevent this from ever being called in that
    // state, but this function refuses safely either way.
    console.error('create-subscription-checkout: SQUARE_SUBSCRIPTION_PLAN_ID / SQUARE_SUBSCRIPTION_ACCESS_TOKEN / SQUARE_LOCATION_ID not all set -- Square Subscriptions is not yet live.');
    return jsonResponse(501, { error: 'Subscriptions are launching soon and are not configured yet. Please check back shortly.' });
  }

  // TODO(owner, once the three env vars above are all set to real values):
  // implement the real Square Subscriptions API call described in the
  // header comment above -- look up/create the Square Customer for the
  // request's email, then POST /v2/subscriptions with
  // { location_id: locationId, plan_variation_id: planId, customer_id, ... },
  // using `accessToken` as the Authorization: Bearer header (a token
  // scoped for the Subscriptions API -- NOT the SQUARE_ACCESS_TOKEN
  // create-checkout.js already uses for one-time Payment Links). Until
  // that is written and tested against a real Square sandbox account,
  // this function intentionally goes no further than the response below.
  return jsonResponse(501, { error: 'Subscription checkout is not implemented yet.' });
};
