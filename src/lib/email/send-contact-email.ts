import { Resend } from 'resend';
import type { ContactFormData } from '@/lib/validations/contact';
import { requireEnv } from '@/utils/env';
import { escapeHtml } from '@/utils/sanitize';

const resend = new Resend(requireEnv('RESEND_API_KEY'));
const CONTACT_TO_EMAIL = requireEnv('CONTACT_TO_EMAIL');
const CONTACT_FROM_EMAIL = requireEnv('CONTACT_FROM_EMAIL');

export async function sendContactEmail(data: ContactFormData) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = escapeHtml(data.phone || '-');
  const safeMessage = escapeHtml(data.message || '').replaceAll('\n', '<br />');

  const subject = `Нове повідомлення з форми контакту від ${safeName}`;

  const html = `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
      <h2 style="margin-bottom: 16px;">Нове повідомлення з форми контакту</h2>

      <p><strong>Ім'я:</strong> ${safeName}</p>
      <p><strong>Електронна пошта:</strong> ${safeEmail}</p>
      <p><strong>Телефон:</strong> ${safePhone}</p>

      <div style="margin-top: 20px;">
        <strong>Повідомлення:</strong>
        <div style="margin-top: 8px; padding: 12px; background: #f5f5f5; border-radius: 8px;">
          ${safeMessage}
        </div>
      </div>
    </div>
  `;

  const text = `
Нове повідомлення з форми контакту

Ім'я: ${data.name}
Електронна пошта: ${data.email}
Телефон: ${data.phone || '-'}
Повідомлення:
${data.message}
  `.trim();

  const { error } = await resend.emails.send({
    from: CONTACT_FROM_EMAIL,
    to: CONTACT_TO_EMAIL,
    replyTo: data.email,
    subject,
    html,
    text,
  });

  if (error) {
    throw new Error(`Resend API error: ${error.message}`);
  }
}
