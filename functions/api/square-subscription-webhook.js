// functions/api/square-subscription-webhook.js
//
// A CLOUDFLARE PAGES FUNCTION (not a Netlify function -- this repo's real
// production host is Cloudflare Pages; see the top-of-file notes added to
// netlify.toml and netlify/functions/*.js in this same change for why
// those files exist but are not what's actually running). Cloudflare's
// file-based routing convention maps this file's path directly to a
// route: functions/api/square-subscription-webhook.js handles requests to
// /api/square-subscription-webhook. Exporting `onRequestPost` means only
// POST is handled here (Square only ever POSTs webhook notifications);
// any other method falls through to Cloudflare's default 405.
// Reference: https://developers.cloudflare.com/pages/functions/get-started/
// and https://developers.cloudflare.com/pages/functions/api-reference/ --
// `context.request` is a standard Web Fetch API Request, `context.env`
// exposes this Pages project's environment variables/secrets (set in the
// Cloudflare dashboard: Pages project -> Settings -> Environment
// variables -- NOT Netlify's process.env), and the handler returns a
// standard Web Fetch API Response.
//
// ============================================================
// WHAT THIS AUTOMATES (see docs/SUBSCRIPTIONS_SETUP.md section 5)
// ============================================================
// Today, activating a subscriber's `public.subscribers.status` after a
// real $20/month payment through the live Square Payment Link
// (SQUARE_SUBSCRIPTION_LINK in public/index.html) is a human running one
// SQL statement in Supabase's SQL Editor. This function is the automated
// replacement: Square calls this URL itself, on real billing events, and
// this function updates that same `subscribers` row without a human
// involved. Until the Square-dashboard + Cloudflare-env-var setup steps
// in docs/SUBSCRIPTIONS_SETUP.md section 5 are actually completed by the
// project owner, this endpoint exists but nothing calls it -- the manual
// SQL step documented in section 4 remains necessary and nothing here
// changes that until then.
//
// ============================================================
// WHAT WEBHOOK EVENTS THIS HANDLES, AND WHY (researched this session --
// see the PR body for the full citation list; this environment's egress
// proxy blocks developer.squareup.com and squareup.com directly, the
// same documented limitation already noted in
// netlify/functions/create-subscription-checkout.js and
// docs/SQUARE_DYNAMIC_CHECKOUT_SETUP.md, so everything below is sourced
// from Square's own documentation and SDK source AS SURFACED THROUGH WEB
// SEARCH, not a direct fetch of developer.squareup.com. Re-verify against
// developer.squareup.com directly before relying on this in production.)
// ============================================================
//
// A Square Payment Link configured for recurring billing in the Seller
// Dashboard is backed by the SAME underlying Subscriptions API data model
// Square documents publicly (a Subscription object tied to a Customer and
// a Subscription Plan Variation) -- Square's own CreatePaymentLink
// endpoint documentation states it "can generate a Square-hosted checkout
// page for buyers to pay and subscribe to a subscription plan variation."
// Each billing cycle of a Subscription is itself billed via the Invoices
// API under the hood (Square's docs on "Subscription Billing and
// Invoices" describe subscriptions generating invoices per billing
// period), which is why this handler listens for BOTH families of event:
//
//   - invoice.payment_made  -- fires when a payment tied to an invoice
//     completes. This is the HIGH-CONFIDENCE, primary signal used here to
//     mark a subscriber active: Square's own community/forum guidance
//     says to "track the payment status of subscriptions by subscribing
//     to the invoice.payment_made webhook event of the Invoices API."
//   - invoice.payment_failed -- fires when a scheduled/automatic payment
//     for an invoice fails (e.g. a card decline on renewal). Treated here
//     as 'paused', not 'canceled' -- a single failed renewal charge is
//     not the same as the subscriber actively canceling, and Square may
//     still retry or send the customer a pay-now link.
//   - invoice.canceled -- fires when an invoice itself is canceled.
//   - subscription.created / subscription.updated -- fires on the
//     Subscription object's own lifecycle (Square's docs describe the
//     payload as including `customer_id`, `plan_variation_id`, and a
//     `status` field such as ACTIVE, CANCELED, PAUSED, DEACTIVATED).
//     Handled defensively here as a SECONDARY signal, in case Square's
//     dashboard-created recurring Payment Link surfaces subscription
//     lifecycle changes (particularly cancellation) through this event
//     family rather than (or in addition to) an invoice event. LOWER
//     CONFIDENCE than the invoice.* path above: this session could not
//     directly confirm from Square's docs that a plain dashboard-created
//     recurring Payment Link's subscription emits subscription.* events
//     identically to a subscription created via the Subscriptions API's
//     own CreateSubscription call. Handling it is a safe no-op if it
//     never fires for this integration; NOT handling it would risk never
//     hearing about a cancellation if it turns out this IS how Square
//     reports it for this product.
//
// IDENTIFYING THE PERSON: a plain Payment Link (unlike the API-driven
// CreateSubscription flow) is never given a customer_id or reference_id
// by this app at creation time -- Square itself creates/matches the
// Customer record from what the buyer types into its hosted checkout
// page. So the realistic, and only, way to tie a webhook event back to a
// specific person is the buyer's EMAIL ADDRESS, fetched via a follow-up
// Square API call using the IDs the webhook payload itself contains:
//   - For invoice.* events: the notification payload's data.object.invoice
//     contains (at minimum) the invoice `id`. This handler calls
//     `GET /v2/invoices/{invoice_id}` to fetch the full Invoice object,
//     which contains `primary_recipient.email_address` directly (Square's
//     InvoiceRecipient object reference documents email_address as a
//     field of the invoice's primary_recipient -- a "snapshot of customer
//     data" taken onto the invoice itself, so no separate customer
//     lookup is needed once the full invoice is fetched).
//   - For subscription.* events: the payload contains a `customer_id`
//     but no email directly, so this handler calls
//     `GET /v2/customers/{customer_id}` to fetch the Customer object and
//     read its `email_address` field.
//
// SIGNATURE VERIFICATION: Square signs every webhook notification with an
// HMAC-SHA256 signature, sent in the `x-square-hmacsha256-signature`
// header. Per Square's own "Verify and Validate an Event Notification"
// documentation (as surfaced through web search -- see PR body): the
// signature is computed over the CONCATENATION of the webhook's exact
// notification URL (the full URL Square is configured to POST to) and the
// raw request body (in that order, URL then body, with no separator),
// HMAC-SHA256'd using the webhook subscription's own signature key (a
// value generated by Square only when the webhook subscription is
// created/viewed in the dashboard -- NOT the Square API access token),
// then base64-encoded, and compared against the header value. This is
// DIFFERENT from generic "HMAC of body only" schemes some other webhook
// providers use -- the notification URL is part of what's signed here.
// This must be verified, and must fail closed, before the body is parsed
// or trusted in any way.
//
// NEVER hardcode a real webhook signature key, Square access token, or
// Supabase service-role key anywhere in this file or any other committed
// file -- all three are read from context.env below and must be set only
// in the Cloudflare Pages dashboard's Environment Variables.

function jsonResponse(status, bodyObj) {
  return new Response(JSON.stringify(bodyObj), {
    status: status,
    headers: { 'content-type': 'application/json' },
  });
}

// Constant-ish-time byte comparison (avoids an obvious early-exit
// short-circuit on the first mismatched byte). Not a substitute for using
// the Web Crypto API's own HMAC comparison where available, but this
// project's runtime (Cloudflare Workers / Pages Functions) does not
// expose a built-in "verify HMAC digest" helper, so the comparison is
// done here after independently recomputing the expected signature via
// crypto.subtle.
function timingSafeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  if (a.length !== b.length) return false;
  var mismatch = 0;
  for (var i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

function bufferToBase64(buf) {
  var bytes = new Uint8Array(buf);
  var binary = '';
  for (var i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  // btoa is available in the Workers/Pages Functions runtime.
  return btoa(binary);
}

async function verifySquareSignature(signatureKey, notificationUrl, rawBody, signatureHeader) {
  if (!signatureKey || !notificationUrl || !signatureHeader) return false;
  try {
    var encoder = new TextEncoder();
    var keyData = encoder.encode(signatureKey);
    var cryptoKey = await crypto.subtle.importKey(
      'raw',
      keyData,
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );
    var signedData = encoder.encode(notificationUrl + rawBody);
    var signatureBuf = await crypto.subtle.sign('HMAC', cryptoKey, signedData);
    var expected = bufferToBase64(signatureBuf);
    return timingSafeEqual(expected, signatureHeader);
  } catch (err) {
    console.error('square-subscription-webhook: signature verification threw', err);
    return false;
  }
}

function squareApiBase(env) {
  // Mirrors netlify/functions/create-checkout.js's own sandbox/production
  // base URL switch -- default to production, allow an explicit opt-in
  // to Square's sandbox base URL for testing before this goes live.
  return env.SQUARE_ENVIRONMENT === 'sandbox'
    ? 'https://connect.squareupsandbox.com'
    : 'https://connect.squareup.com';
}

async function squareApiGet(env, path) {
  var res = await fetch(squareApiBase(env) + path, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + env.SQUARE_SUBSCRIPTION_ACCESS_TOKEN,
      'Square-Version': '2024-08-21',
      'Content-Type': 'application/json',
    },
  });
  var body = await res.json().catch(function () { return null; });
  if (!res.ok) {
    throw new Error('Square API GET ' + path + ' failed: ' + res.status + ' ' + JSON.stringify(body));
  }
  return body;
}

async function activateSubscriberByEmail(env, email, status, squareSubscriptionId, periodStart, periodEnd) {
  var url = env.SUPABASE_URL + '/rest/v1/rpc/activate_subscriber_by_email';
  var res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Both apikey and Authorization must be the SERVICE ROLE key here --
      // the anon key (SUPABASE_KEY, used client-side) cannot call this
      // function at all (see supabase/square_subscription_webhook_schema.sql:
      // EXECUTE is granted only to the service_role Postgres role).
      'apikey': env.SUPABASE_SERVICE_ROLE_KEY,
      'Authorization': 'Bearer ' + env.SUPABASE_SERVICE_ROLE_KEY,
    },
    body: JSON.stringify({
      p_email: email,
      p_status: status,
      p_square_subscription_id: squareSubscriptionId || null,
      p_current_period_start: periodStart || null,
      p_current_period_end: periodEnd || null,
    }),
  });
  var result = await res.json().catch(function () { return null; });
  if (!res.ok) {
    console.error('square-subscription-webhook: activate_subscriber_by_email RPC failed', res.status, JSON.stringify(result));
    return { ok: false, reason: 'rpc_http_error' };
  }
  return result;
}

// Square's own recommendation (per their webhook docs, as surfaced this
// session) is to return a 2xx quickly and avoid erroring loudly on events
// you don't recognize or don't need to act on -- an error response makes
// Square retry the delivery, and repeated retries of an event this
// handler was never going to act on differently just waste both sides'
// time. So every branch below that isn't a hard signature failure
// returns 200, even "nothing to do" branches, and every error is logged
// rather than thrown past the top-level handler.
export async function onRequestPost(context) {
  var env = context.env;
  var request = context.request;

  var signatureKey = env.SQUARE_WEBHOOK_SIGNATURE_KEY;
  if (!signatureKey) {
    console.error('square-subscription-webhook: SQUARE_WEBHOOK_SIGNATURE_KEY is not set -- refusing to process any webhook until it is configured (see docs/SUBSCRIPTIONS_SETUP.md section 5).');
    return jsonResponse(401, { error: 'Webhook not configured.' });
  }

  var rawBody = await request.text();
  var signatureHeader = request.headers.get('x-square-hmacsha256-signature');
  var notificationUrl = request.url; // the exact URL Square POSTed to

  var verified = await verifySquareSignature(signatureKey, notificationUrl, rawBody, signatureHeader);
  if (!verified) {
    console.error('square-subscription-webhook: signature verification failed -- rejecting before parsing the body.');
    return jsonResponse(401, { error: 'Invalid signature.' });
  }

  var event;
  try {
    event = JSON.parse(rawBody);
  } catch (err) {
    console.error('square-subscription-webhook: body was not valid JSON despite a valid signature', err);
    return jsonResponse(200, { ok: false, reason: 'malformed_body' });
  }

  var eventType = event && event.type;

  try {
    if (!env.SQUARE_SUBSCRIPTION_ACCESS_TOKEN || !env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) {
      console.error('square-subscription-webhook: SQUARE_SUBSCRIPTION_ACCESS_TOKEN / SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not all set -- cannot act on event type ' + eventType + ' yet.');
      return jsonResponse(200, { ok: false, reason: 'not_configured' });
    }

    if (eventType === 'invoice.payment_made' || eventType === 'invoice.payment_failed' || eventType === 'invoice.canceled') {
      var invoiceStub = event.data && event.data.object && event.data.object.invoice;
      var invoiceId = invoiceStub && invoiceStub.id;
      if (!invoiceId) {
        console.error('square-subscription-webhook: ' + eventType + ' event had no invoice id in payload', JSON.stringify(event.data));
        return jsonResponse(200, { ok: false, reason: 'missing_invoice_id' });
      }

      var invoiceRes = await squareApiGet(env, '/v2/invoices/' + invoiceId);
      var invoice = invoiceRes && invoiceRes.invoice;
      var email = invoice && invoice.primary_recipient && invoice.primary_recipient.email_address;
      if (!email) {
        console.error('square-subscription-webhook: invoice ' + invoiceId + ' had no primary_recipient.email_address -- cannot match to a subscriber.');
        return jsonResponse(200, { ok: false, reason: 'no_recipient_email' });
      }

      var newStatus =
        eventType === 'invoice.payment_made' ? 'active' :
        eventType === 'invoice.payment_failed' ? 'paused' :
        'canceled'; // invoice.canceled

      var now = new Date();
      var periodStart = now.toISOString();
      var periodEnd = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();

      var result = await activateSubscriberByEmail(
        env,
        email,
        newStatus,
        invoice.subscription_id || null,
        newStatus === 'active' ? periodStart : null,
        newStatus === 'active' ? periodEnd : null
      );
      console.log('square-subscription-webhook: ' + eventType + ' for ' + email + ' -> ' + newStatus, JSON.stringify(result));
      return jsonResponse(200, { ok: true, handled: eventType, result: result });
    }

    if (eventType === 'subscription.created' || eventType === 'subscription.updated') {
      var subStub = event.data && event.data.object && event.data.object.subscription;
      var customerId = subStub && subStub.customer_id;
      var squareStatus = subStub && subStub.status; // e.g. ACTIVE, CANCELED, PAUSED, DEACTIVATED
      if (!customerId || !squareStatus) {
        console.error('square-subscription-webhook: ' + eventType + ' event missing customer_id/status', JSON.stringify(event.data));
        return jsonResponse(200, { ok: false, reason: 'missing_subscription_fields' });
      }

      var statusMap = {
        ACTIVE: 'active',
        CANCELED: 'canceled',
        DEACTIVATED: 'canceled',
        PAUSED: 'paused',
      };
      var mappedStatus = statusMap[squareStatus];
      if (!mappedStatus) {
        // e.g. PENDING -- a subscription that exists but hasn't taken its
        // first successful payment yet. Nothing to activate on; the
        // invoice.payment_made path above is what actually flips someone
        // to 'active'. Log and no-op rather than guessing.
        console.log('square-subscription-webhook: ' + eventType + ' had unmapped status ' + squareStatus + ' -- no action taken.');
        return jsonResponse(200, { ok: true, handled: eventType, action: 'no_mapping_for_status' });
      }

      var customerRes = await squareApiGet(env, '/v2/customers/' + customerId);
      var customerEmail = customerRes && customerRes.customer && customerRes.customer.email_address;
      if (!customerEmail) {
        console.error('square-subscription-webhook: customer ' + customerId + ' had no email_address -- cannot match to a subscriber.');
        return jsonResponse(200, { ok: false, reason: 'no_customer_email' });
      }

      var subResult = await activateSubscriberByEmail(
        env,
        customerEmail,
        mappedStatus,
        subStub.id || null,
        null,
        null
      );
      console.log('square-subscription-webhook: ' + eventType + ' for ' + customerEmail + ' -> ' + mappedStatus, JSON.stringify(subResult));
      return jsonResponse(200, { ok: true, handled: eventType, result: subResult });
    }

    // Any other event type: acknowledge and ignore, per Square's own
    // guidance against erroring on events a receiver doesn't act on.
    console.log('square-subscription-webhook: received unhandled event type ' + eventType + ' -- ignoring.');
    return jsonResponse(200, { ok: true, handled: false, eventType: eventType });
  } catch (err) {
    // Never let an unexpected error surface as a 5xx that triggers a
    // Square retry storm for an event this handler may have already
    // partially processed -- log it and acknowledge instead.
    console.error('square-subscription-webhook: unhandled error processing event type ' + eventType, err && err.stack ? err.stack : err);
    return jsonResponse(200, { ok: false, reason: 'internal_error' });
  }
}

// Any non-POST method (Square only ever sends POST for webhooks) gets a
// plain, honest response rather than Cloudflare's default 405 page.
export async function onRequestGet() {
  return jsonResponse(405, { error: 'This endpoint only accepts POST webhook notifications from Square.' });
}
