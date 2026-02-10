'use client';

import { useEffect } from 'react';
import { errorMessages } from '@/content/i18n/error-messages';
import { DEFAULT_LOCALE, type Locale } from '@/lib/locales/i18n-config';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const messages = errorMessages[DEFAULT_LOCALE as Locale] || errorMessages.en;

  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
      <h1>{messages.serverError.title}</h1>
      <p>{messages.serverError.description}</p>
      <button onClick={reset}>{messages.serverError.tryAgain}</button>
    </div>
  );
}
