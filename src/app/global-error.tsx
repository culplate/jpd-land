'use client';

import { useEffect } from 'react';
import { errorMessages } from '@/content/i18n/error-messages';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const messages = errorMessages.en;

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: 'var(--color-bg, #fff)',
          color: 'var(--color-text, #111)',
        }}
      >
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '28rem' }}>
          <h1 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
            {messages.serverError.title}
          </h1>
          <p style={{ marginBottom: '1.5rem', opacity: 0.9 }}>
            {messages.serverError.description}
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              cursor: 'pointer',
              backgroundColor: 'var(--color-primary, #0070f3)',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
            }}
          >
            {messages.serverError.tryAgain}
          </button>
        </div>
      </body>
    </html>
  );
}
