// netlify/functions/create-checkout.js
//
// Creates a Square "quick pay" Payment Link for an arbitrary dollar amount,
// server-side, so the client never sees (or needs) a Square access token.
//
// This is NEW, ADDITIVE infrastructure. It does not touch or replace the
// existing fixed-price SQUARE_LINKS / openPaymentModal() flow in
// public/index.html -- that keeps working exactly as it is.
//
// Square API reference verified against (see docs/SQUARE_DYNAMIC_CHECKOUT_SETUP.md
// for the full citation list and any open questions):
//   - POST https://connect.squareup.com/v2/online-checkout/payment-links
//     https://developer.squareup.com/reference/square/checkout-api/create-payment-link
//   - Checkout API guide: https://developer.squareup.com/docs/checkout-api
//   - Sandbox base URL:    https://connect.squareupsandbox.com
//   - Production base URL: https://connect.squareup.com
//
// Request shape used (quick pay):
//   POST /v2/online-checkout/payment-links
//   Headers: Authorization: Bearer <token>, Square-Version: <date>, Content-Type: application/json
//   Body: {
//     idempotency_key: "<fresh uuid per request>",
//     quick_pay: {
//       name: "<description>",
//       price_money: { amount: <integer cents>, currency: "USD" },
//       location_id: "<SQUARE_LOCATION_ID>"
//     },
//     checkout_options: {
//       redirect_url: "<site url>?paid=<redirectSlug>"
//     }
//   }
//
// Response shape used: { payment_link: { id, url, long_url, ... } }
//   `url` is the short square.link URL; `long_url` is the full
//   checkout.square.site URL. Either works as a redirect target -- we
//   prefer `url` and fall back to `long_url` if `url` is absent, since
//   Square's docs show both fields present on a successful response but
//   don't guarantee `url` is always populated for every account/link type.
//
// NOTE ON VERIFICATION: this environment could not reach
// developer.squareup.com directly (egress to that host is blocked), so the
// exact field names above were cross-checked via multiple independent web
// search results describing Square's own reference/example JSON, not by
// fetching the live doc page. The shapes above are consistent across every
// source found and match the well-established, stable Checkout API
// contract. Confirm against developer.squareup.com yourself before relying
// on this in production -- see the setup doc for details.

const SQUARE_VERSION = '2025-09-24'; // Recent, valid Square-Version date. Bump periodically.
const MAX_AMOUNT_CENTS = 1000000; // $10,000 safety cap against malformed/malicious requests.
const MIN_AMOUNT_CENTS = 1; // Must be a positive integer.

function jsonResponse(statusCode, bodyObj) {
  return {
    statusCode: statusCode,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bodyObj),
  };
}

function freshIdempotencyKey() {
  // Netlify Functions run on Node 18+, which provides crypto.randomUUID()
  // globally. Fall back to a small RFC4122-ish v4 implementation just in
  // case an older runtime is ever configured.
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0;
    var v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function resolveSiteUrl() {
  // Netlify automatically provides URL (the site's primary/production URL)
  // and DEPLOY_PRIME_URL (the URL of this specific deploy, e.g. a deploy
  // preview) as env vars to every function invocation. DEPLOY_PRIME_URL is
  // the more correct choice for a redirect target during previews/branch
  // deploys (so a preview redirects back to itself, not production); it
  // also equals the production URL on production deploys. We allow an
  // explicit SITE_URL override for cases where neither is reliable (e.g.
  // a custom domain not yet reflected in Netlify's env).
  return (
    process.env.SITE_URL ||
    process.env.DEPLOY_PRIME_URL ||
    process.env.URL ||
    ''
  );
}

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed. Use POST.' });
  }

  var payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (e) {
    return jsonResponse(400, { error: 'Invalid JSON body.' });
  }

  var amountCents = payload.amountCents;
  var description = typeof payload.description === 'string' ? payload.description.trim() : '';
  var redirectSlug = typeof payload.redirectSlug === 'string' ? payload.redirectSlug.trim() : '';

  if (!Number.isInteger(amountCents) || amountCents < MIN_AMOUNT_CENTS || amountCents > MAX_AMOUNT_CENTS) {
    return jsonResponse(400, {
      error: 'amountCents must be a positive integer no greater than ' + MAX_AMOUNT_CENTS + ' (i.e. $' + (MAX_AMOUNT_CENTS / 100).toFixed(2) + ').',
    });
  }
  if (!description) {
    return jsonResponse(400, { error: 'description is required.' });
  }
  if (!redirectSlug) {
    return jsonResponse(400, { error: 'redirectSlug is required.' });
  }

  var accessToken = process.env.SQUARE_ACCESS_TOKEN;
  var locationId = process.env.SQUARE_LOCATION_ID;
  var squareEnv = (process.env.SQUARE_ENV || 'sandbox').toLowerCase();

  if (!accessToken || !locationId) {
    // Never include env var names/values or any other internal detail in
    // what's sent to the client -- log server-side only.
    console.error('create-checkout: missing SQUARE_ACCESS_TOKEN and/or SQUARE_LOCATION_ID env vars.');
    return jsonResponse(500, { error: 'Checkout is not configured. Please contact the site owner.' });
  }
  if (squareEnv !== 'sandbox' && squareEnv !== 'production') {
    console.error('create-checkout: invalid SQUARE_ENV value "' + squareEnv + '" (expected sandbox or production).');
    return jsonResponse(500, { error: 'Checkout is misconfigured. Please contact the site owner.' });
  }

  var siteUrl = resolveSiteUrl();
  if (!siteUrl) {
    console.error('create-checkout: could not resolve site URL from SITE_URL/DEPLOY_PRIME_URL/URL env vars.');
    return jsonResponse(500, { error: 'Checkout is not configured. Please contact the site owner.' });
  }

  var redirectUrl = siteUrl.replace(/\/$/, '') + '/?paid=' + encodeURIComponent(redirectSlug);

  var apiBase = squareEnv === 'production'
    ? 'https://connect.squareup.com'
    : 'https://connect.squareupsandbox.com';

  var requestBody = {
    idempotency_key: freshIdempotencyKey(),
    quick_pay: {
      name: description,
      price_money: {
        amount: amountCents,
        currency: 'USD',
      },
      location_id: locationId,
    },
    checkout_options: {
      redirect_url: redirectUrl,
    },
  };

  var squareResponse;
  try {
    squareResponse = await fetch(apiBase + '/v2/online-checkout/payment-links', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken,
        'Square-Version': SQUARE_VERSION,
      },
      body: JSON.stringify(requestBody),
    });
  } catch (networkErr) {
    console.error('create-checkout: network error calling Square API:', networkErr);
    return jsonResponse(502, { error: 'Could not reach the payment provider. Please try again.' });
  }

  var squareJson;
  try {
    squareJson = await squareResponse.json();
  } catch (parseErr) {
    console.error('create-checkout: failed to parse Square API response as JSON:', parseErr);
    return jsonResponse(502, { error: 'Unexpected response from the payment provider.' });
  }

  if (!squareResponse.ok) {
    // Log the real Square error server-side for debugging, but never pass
    // it (or the access token) back to the client.
    console.error('create-checkout: Square API returned an error:', squareResponse.status, JSON.stringify(squareJson));
    return jsonResponse(502, { error: 'The payment provider rejected the request. Please try again or contact the site owner.' });
  }

  var paymentLink = squareJson && squareJson.payment_link;
  var checkoutUrl = paymentLink && (paymentLink.url || paymentLink.long_url);

  if (!checkoutUrl) {
    console.error('create-checkout: Square API response missing payment_link.url/long_url:', JSON.stringify(squareJson));
    return jsonResponse(502, { error: 'The payment provider did not return a checkout link. Please try again.' });
  }

  return jsonResponse(200, { checkoutUrl: checkoutUrl });
};
