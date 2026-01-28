import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone } = req.body;

  try {
    const data = await resend.emails.send({
      // IMPORTANT: If you haven't verified a domain on Resend, 
      // you MUST use 'onboarding@resend.dev' as the 'from' address.
      from: 'Maraton Landing <onboarding@resend.dev>',
      
      // Send to YOUR email address
      to: ['vitalkess@gmail.com'], 
      
      subject: `Nowe zgłoszenie: ${name}`,
      html: `
        <h1>Nowe zgłoszenie na Maraton</h1>
        <p><strong>Imię:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <hr />
        <p><i>Wysłano z landing page'a</i></p>
      `
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}