import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { siteConfig } from '@/config/site';

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  model: 50,
  year: 10,
  message: 2000,
  services: 10,
  serviceLength: 100,
  details: 5,
  detailLength: 200,
};

// Best effort per serverless instance. Stops a script hammering the SMTP account,
// and only counts valid submissions so a customer fixing a typo is never locked out.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);

  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent);
    return true;
  }

  if (submissions.size > 1000) submissions.clear();
  submissions.set(ip, [...recent, now]);
  return false;
}

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-real-ip') ??
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    'unknown'
  );
}

// Simple HTML entity encoding to prevent XSS in emails
function escapeHtml(str: string): string {
  const htmlEntities: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return str.replace(/[&<>"']/g, (char) => htmlEntities[char]);
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@<>",;:()]+@[^\s@<>",;:()]+\.[^\s@<>",;:()]+$/;
  return emailRegex.test(email) && email.length <= LIMITS.email;
}

function isValidPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
  return phone.length <= LIMITS.phone && /^\+?[0-9]{10,15}$/.test(cleaned);
}

// Trim and collapse line breaks for values that end up on a single line
function cleanLine(value: unknown): string {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';
}

function cleanList(value: unknown, maxItems: number, maxLength: number): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map(cleanLine)
    .filter(Boolean)
    .slice(0, maxItems)
    .map((item) => item.slice(0, maxLength));
}

interface Lead {
  name: string;
  email: string;
  phone: string;
  model: string;
  year: string;
  services: string[];
  details: string[];
  message: string;
}

// Returns plain text values. HTML escaping happens only when building the HTML email.
function validateInput(body: Record<string, unknown>):
  | { valid: true; data: Lead }
  | { valid: false; error: string } {
  const name = cleanLine(body.name);
  const email = cleanLine(body.email).toLowerCase();
  const phone = cleanLine(body.phone);
  const model = cleanLine(body.model);
  const year = cleanLine(body.year);
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (name.length < 2) {
    return { valid: false, error: 'Please enter your name (at least 2 characters).' };
  }
  if (name.length > LIMITS.name) {
    return { valid: false, error: `Please shorten your name to ${LIMITS.name} characters or fewer.` };
  }
  if (!isValidEmail(email)) {
    return { valid: false, error: 'Please enter a valid email address.' };
  }
  if (phone && !isValidPhone(phone)) {
    return { valid: false, error: 'Please enter a valid phone number with area code, or leave it blank.' };
  }
  if (model.length > LIMITS.model || year.length > LIMITS.year) {
    return { valid: false, error: 'Please select a vehicle model and year from the list.' };
  }
  if (message.length > LIMITS.message) {
    return { valid: false, error: `Please shorten your message to ${LIMITS.message} characters or fewer.` };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      phone,
      model,
      year,
      services: cleanList(body.services, LIMITS.services, LIMITS.serviceLength),
      details: cleanList(body.details, LIMITS.details, LIMITS.detailLength),
      message,
    },
  };
}

function buildHtmlEmail(lead: Lead): string {
  const name = escapeHtml(lead.name);
  const email = escapeHtml(lead.email);
  const phone = escapeHtml(lead.phone);
  const telHref = escapeHtml(lead.phone.replace(/[^\d+]/g, ''));
  const model = escapeHtml(lead.model);
  const year = escapeHtml(lead.year);
  const services = lead.services.length > 0 ? lead.services.map(escapeHtml).join(', ') : 'Not specified';
  const details = lead.details.map(escapeHtml);
  const message = escapeHtml(lead.message);

  return `
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
                  ${phone ? `<a href="tel:${telHref}" style="color: #00d4ff; text-decoration: none;">${phone}</a>` : 'Not provided'}
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
            <p style="margin: 0; line-height: 1.6;">${services}</p>
            ${details.map((detail) => `<p style="margin: 10px 0 0; line-height: 1.6; color: #00d4ff;">${detail}</p>`).join('')}
          </div>

          ${message ? `
          <div style="background: #111; border-radius: 8px; padding: 25px; margin-bottom: 20px;">
            <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: #00d4ff; margin: 0 0 20px 0;">Message</h2>
            <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
            ${phone ? `<a href="tel:${telHref}" style="display: inline-block; background: linear-gradient(135deg, #00d4ff 0%, #7b2dff 100%); color: #000; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: 600; margin-right: 10px;">Call Now</a>` : ''}
            <a href="mailto:${email}" style="display: inline-block; background: #333; color: #fff; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: 500;">Reply</a>
          </div>

          <p style="text-align: center; color: #555; font-size: 12px; margin-top: 30px;">
            This lead was submitted via futuredetail.com
          </p>
        </div>
      `;
}

function buildTextEmail(lead: Lead): string {
  const services = lead.services.length > 0 ? lead.services.join(', ') : 'Not specified';
  const details = lead.details.length > 0 ? `\n${lead.details.join('\n')}` : '';

  return `
New Lead from FUTURE DETAIL Website

CUSTOMER INFORMATION
Name: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone || 'Not provided'}

VEHICLE DETAILS
Model: ${lead.model || 'Not specified'}
Year: ${lead.year || 'Not specified'}

SERVICES INTERESTED IN
${services}${details}

MESSAGE
${lead.message || 'No message provided'}

---
Reply to this email to contact the customer directly.
      `;
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return NextResponse.json({ success: false, message: 'Invalid request.' }, { status: 400 });
  }

  const fields = body as Record<string, unknown>;

  // Honeypot: real visitors never see this field. Report success so bots don't adapt.
  if (typeof fields.company === 'string' && fields.company.trim().length > 0) {
    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  }

  const validation = validateInput(fields);
  if (!validation.valid) {
    return NextResponse.json({ success: false, message: validation.error }, { status: 400 });
  }

  if (isRateLimited(getClientIp(request))) {
    return NextResponse.json(
      {
        success: false,
        message: `We've received several messages from you already. Please call us at ${siteConfig.contact.phone} if you need anything else.`,
      },
      { status: 429 }
    );
  }

  const lead = validation.data;

  try {
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      throw new Error('SMTP_USER and SMTP_PASS must be set');
    }

    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Fail fast so the customer sees the phone number instead of an endless spinner
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 15000,
    });

    await transporter.sendMail({
      from: `"FUTURE DETAIL Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || siteConfig.contact.email,
      replyTo: lead.email,
      subject: `New Lead: ${lead.name} - ${lead.model || 'Tesla'} ${lead.year}`.trim().slice(0, 100),
      html: buildHtmlEmail(lead),
      text: buildTextEmail(lead),
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error: unknown) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
