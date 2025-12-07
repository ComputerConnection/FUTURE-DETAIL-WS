import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, model, year, services, message } = body;

    // Create transporter with SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format services list
    const servicesList = Array.isArray(services) 
      ? services.join(', ') 
      : services || 'Not specified';

    // Email content
    const mailOptions = {
      from: `"FUTURE DETAIL Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'everett@futuredetail.com',
      replyTo: email,
      subject: `New Lead: ${name} - ${model || 'Tesla'} ${year || ''}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background: #000; color: #fff; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 24px; font-weight: 300; letter-spacing: 0.1em; margin: 0;">FUTURE DETAIL</h1>
            <p style="color: #888; margin-top: 5px;">New Contact Form Submission</p>
          </div>
          
          <div style="background: #111; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #00d4ff; margin: 0 0 20px 0;">Customer Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; text-align: right; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; text-align: right;">
                  <a href="mailto:${email}" style="color: #00d4ff; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; text-align: right;">
                  <a href="tel:${phone}" style="color: #00d4ff; text-decoration: none;">${phone}</a>
                </td>
              </tr>
            </table>
          </div>
          
          <div style="background: #111; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #00d4ff; margin: 0 0 20px 0;">Vehicle Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Model</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; text-align: right; font-weight: 500;">${model || 'Not specified'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; color: #888;">Year</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #333; text-align: right;">${year || 'Not specified'}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #111; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #00d4ff; margin: 0 0 20px 0;">Services Interested In</h2>
            <p style="margin: 0; line-height: 1.6;">${servicesList}</p>
          </div>
          
          ${message ? `
          <div style="background: #111; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #00d4ff; margin: 0 0 20px 0;">Message</h2>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
            <a href="tel:${phone}" style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #7b2dff 100%); color: #000; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: 600; margin-right: 10px;">Call Now</a>
            <a href="mailto:${email}" style="display: inline-block; background: #333; color: #fff; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: 500;">Reply</a>
          </div>
          
          <p style="text-align: center; color: #555; font-size: 12px; margin-top: 30px;">
            This lead was submitted via futuredetail.com
          </p>
        </div>
      `,
      text: `
New Lead from FUTURE DETAIL Website

CUSTOMER INFORMATION
Name: ${name}
Email: ${email}
Phone: ${phone}

VEHICLE DETAILS
Model: ${model || 'Not specified'}
Year: ${year || 'Not specified'}

SERVICES INTERESTED IN
${servicesList}

MESSAGE
${message || 'No message provided'}

---
Reply to this email to contact the customer directly.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}

