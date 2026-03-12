import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';
import { sendContactEmail } from '@/lib/email/send-contact-email';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed' },
        { status: 400 }
      );
    }

    if (result.data.website !== '') {
      console.log('Honeypot triggered', result.data.website);
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const { name, email, phone, message } = result.data;

    console.log('Contact form submission:', { name, email, phone, message });

    await sendContactEmail(result.data);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Internal server error at contact form submission', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
