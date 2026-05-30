import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const { event_name, session_id, occurred_at, device, screen_width, referrer, section, label, href, seconds } = body;

    if (!event_name) {
      return Response.json({ error: 'event_name is required' }, { status: 400 });
    }

    const payload = {
      event_name,
      session_id: session_id || null,
      occurred_at: occurred_at || new Date().toISOString(),
      device: device || null,
      screen_width: screen_width || null,
    };

    if (referrer !== undefined) payload.referrer = referrer;
    if (section !== undefined) payload.section = section;
    if (label !== undefined) payload.label = label;
    if (href !== undefined) payload.href = href;
    if (seconds !== undefined) payload.seconds = seconds;

    // Use service role so unauthenticated visitors can still write analytics
    await base44.asServiceRole.entities.AnalyticsEvent.create(payload);

    return Response.json({ success: true });
  } catch (error) {
    console.error('trackAnalyticsEvent error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});