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

    // Send email via Gmail
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    const emailBody = [
      `New demo request submitted on the XFH Game Studio website.`,
      ``,
      `Name:     ${full_name}`,
      `Company:  ${company || 'Not provided'}`,
      `Email:    ${email}`,
      `Role:     ${role_interest || 'Not specified'}`,
      ``,
      `Message:`,
      message || 'No message provided.',
      ``,
      `---`,
      `Submitted: ${new Date().toLocaleString('en-CA', { timeZone: 'America/Edmonton' })} (MST)`,
    ].join('\n');

    const mimeMessage = [
      `To: Kellarm@xfhgamestudioltd.com`,
      `Subject: New Demo Request from ${full_name}`,
      `Content-Type: text/plain; charset=utf-8`,
      ``,
      emailBody,
    ].join('\n');

    const encoded = btoa(unescape(encodeURIComponent(mimeMessage)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '');

    const gmailRes = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ raw: encoded }),
    });

    if (!gmailRes.ok) {
      const err = await gmailRes.text();
      console.error('Gmail send error:', err);
    }

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});