import type { Metadata } from 'next';
import { Link } from '@/components/ui';
import { errorMessages } from '@/content/i18n/error-messages';
import { DEFAULT_LOCALE, type Locale } from '@/lib/locales/i18n-config';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const messages = errorMessages[DEFAULT_LOCALE as Locale] || errorMessages.en;

  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>{messages.notFound.title}</h1>
      <p>{messages.notFound.description}</p>
      <Link href="/">{messages.notFound.backHome}</Link>
    </div>
  );
}
