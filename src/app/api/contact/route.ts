import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations/contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: result.error.issues },
        { status: 400 }
      );
    }

    if (result.data.website !== '') {
      console.log('Honeypot triggered', result.data.website);
      return NextResponse.json({ success: true });
    }

    const { name, email, phone, message } = result.data;

    // TODO: Process the contact form (send email, save to DB, etc.)
    console.log('Contact form submission:', { name, email, phone, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
