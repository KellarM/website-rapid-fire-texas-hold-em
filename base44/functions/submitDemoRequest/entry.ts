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

    // Send email via Gmail connector
    const { accessToken } = await base44.asServiceRole.connectors.getConnection('gmail');

    const recipientEmail = 'kellar_em@yahoo.ca';

    const emailLines = [
      `MIME-Version: 1.0`,
      `To: ${recipientEmail}`,
      `Subject: New Demo Request from ${full_name}`,
      `Content-Type: text/plain; charset=UTF-8`,
      ``,
      `New demo request submitted on the XFH Game Studio website.`,
      ``,
      `Name:     ${full_name}`,
      `Company:  ${company || 'Not provided'}`,
      `Email:    ${email}`,
      `Role:     ${role_interest || 'Not specified'}`,
      ``,
      `Message:`,
      message || 'No message provided.',
    ];

    const rawEmail = emailLines.join('\r\n');

    const encoded = btoa(
      Array.from(new TextEncoder().encode(rawEmail), (b) => String.fromCharCode(b)).join('')
    )
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

    const gmailData = await gmailRes.json();
    console.log('Gmail response status:', gmailRes.status, JSON.stringify(gmailData));

    if (!gmailRes.ok) {
      console.error('Gmail send failed:', JSON.stringify(gmailData));
      // Still return success since the form data was saved
      return Response.json({ success: true, emailWarning: 'Email notification could not be sent.' });
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error:', error.message);
    return Response.json({ error: error.message }, { status: 500 });
  }
});