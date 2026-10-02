// functions/api/elevenlabs-tts.js
//
// A CLOUDFLARE PAGES FUNCTION (same convention as
// functions/api/square-subscription-webhook.js -- see that file's own
// header comment for the general Pages Functions reference links).
// functions/api/elevenlabs-tts.js handles requests to /api/elevenlabs-tts.
//
// WHY THIS EXISTS AS A BACKEND FUNCTION AND NOT A DIRECT CLIENT CALL: an
// ElevenLabs API key is a real, billable secret -- unlike the free native
// browser voice or the fully-client-side Kokoro model, ElevenLabs charges
// per character and must never be embedded in public/index.html, where
// anyone viewing page source (or the network tab) could copy it and run
// up the project owner's bill. This function holds that key server-side
// (an environment variable, set in the Cloudflare dashboard -- Pages
// project -> Settings -> Environment variables -- never committed to
// git) and is the ONLY thing that ever talks to ElevenLabs directly. The
// browser talks to this function instead, never to ElevenLabs.
//
// SCOPE (confirmed directly with the project owner, not assumed): this is
// deliberately used ONLY for narrating an already-PAID, unlocked reading
// (narrateBlueprintReading()/narratePartnershipReading() in
// public/index.html) -- the free pre-purchase reveal and teaser
// (initRevealScreen()/startOracleReading()) are NEVER routed through this
// endpoint, and keep using the free native browser voice exactly as
// before. This keeps real, recurring per-character cost tied only to
// visitors who have actually paid, not every anonymous visitor who
// reaches the free reveal.
//
// ElevenLabs Text-to-Speech API reference (checked this session, not
// assumed): POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}
// with header `xi-api-key: <key>`, JSON body { text, model_id, ... },
// returns raw audio bytes (audio/mpeg by default) directly in the
// response body -- there is no separate "poll for result" step. Per-
// request character limits vary by model (Eleven Flash v2.5: 40,000;
// Multilingual v2: 10,000) -- this app's own narration call sites already
// send short, per-section highlight text (a couple of paragraphs at
// most, never a whole multi-page reading in one call), so no chunking is
// needed on this function's side for any of those real limits to matter.
// Model fixed to "eleven_multilingual_v2" here (a well-established,
// quality-focused current model) rather than exposed as another setting
// the project owner has to configure -- voice_id is the one thing left
// admin-configurable (see public/index.html's admin panel), since voice
// choice is a real preference and model choice is a technical default.

function jsonResponse(statusCode, bodyObj) {
  return new Response(JSON.stringify(bodyObj), {
    status: statusCode,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPost(context) {
  var env = context.env;
  var apiKey = env.ELEVENLABS_API_KEY;

  if (!apiKey) {
    // Honest, non-broken response: ElevenLabs is not configured yet. The
    // client-side gate (public/index.html checks for a configured voice
    // ID before even attempting this call) should already prevent this
    // from being called in that state, but this function refuses safely
    // either way -- the caller falls back to the native voice on any
    // non-ok response from here.
    console.error('elevenlabs-tts: ELEVENLABS_API_KEY not set in this Pages project’s environment variables.');
    return jsonResponse(501, { error: 'The enhanced voice is not configured yet.' });
  }

  var body;
  try {
    body = await context.request.json();
  } catch (e) {
    return jsonResponse(400, { error: 'Invalid request body.' });
  }

  var text = body && body.text;
  var voiceId = body && body.voiceId;

  if (!text || typeof text !== 'string' || !text.trim()) {
    return jsonResponse(400, { error: 'No text provided to narrate.' });
  }
  if (!voiceId || typeof voiceId !== 'string') {
    return jsonResponse(400, { error: 'No ElevenLabs voice is configured.' });
  }
  // A real, enforced cap on this server side too -- not just trusting the
  // client to only ever send short per-section highlights. 4,000
  // characters is comfortably under every real per-request model limit
  // checked above, while still rejecting an unexpectedly huge request
  // (a bug upstream, or a misuse attempt) before it reaches ElevenLabs
  // and gets billed.
  if (text.length > 4000) {
    return jsonResponse(400, { error: 'This text is too long for a single narration request.' });
  }

  var elevenLabsRes;
  try {
    elevenLabsRes = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + encodeURIComponent(voiceId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xi-api-key': apiKey,
        'Accept': 'audio/mpeg'
      },
      body: JSON.stringify({
        text: text,
        model_id: 'eleven_multilingual_v2'
      })
    });
  } catch (networkErr) {
    console.error('elevenlabs-tts: network error calling ElevenLabs:', networkErr);
    return jsonResponse(502, { error: 'Could not reach the enhanced voice service.' });
  }

  if (!elevenLabsRes.ok) {
    var errText = '';
    try { errText = await elevenLabsRes.text(); } catch (e2) {}
    console.error('elevenlabs-tts: ElevenLabs returned status ' + elevenLabsRes.status + ': ' + errText);
    return jsonResponse(elevenLabsRes.status, { error: 'The enhanced voice service could not narrate this text.' });
  }

  // Stream the real audio bytes straight back to the browser -- no
  // buffering or re-encoding needed, this function is a thin, honest
  // pass-through that never sees (and never logs) the actual audio.
  return new Response(elevenLabsRes.body, {
    status: 200,
    headers: { 'Content-Type': 'audio/mpeg' }
  });
}
