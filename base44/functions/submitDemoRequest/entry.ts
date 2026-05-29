import { createClientFromRequest } from 'npm:@base44/sdk@0.8.25';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json();

    const { full_name, company, email, role_interest, message } = body;

    if (!full_name || !email) {
      return Response.json({ error: 'Full name and email are required.' }, { status: 400 });
    }

    // Save to database
    await base44.asServiceRole.entities.DemoRequest.create({
      full_name,
      company: company || '',
      email,
      role_interest: role_interest || '',
      message: message || '',
      submitted_at: new Date().toISOString(),
      status: 'New',
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});