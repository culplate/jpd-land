'use client';

import { useParams } from 'next/navigation';
import { DEFAULT_LOCALE, type Locale, isValidLocale } from './i18n-config';

export function useLocale(): Locale {
  const params = useParams();
  const locale = params?.locale as string;

  if (locale && isValidLocale(locale)) {
    return locale as Locale;
  }

  return DEFAULT_LOCALE;
}

export function useCreateHref() {
  const locale = useLocale();

  return (href: string): string => {
    // If it's already an absolute URL or starts with special characters, return as is
    if (
      href.startsWith('http') ||
      href.startsWith('//') ||
      href.startsWith('#')
    ) {
      return href;
    }

    // If it's the default locale, no prefix needed
    if (locale === DEFAULT_LOCALE) {
      return href;
    }

    // Add locale prefix for non-default locales
    const normalizedHref = href.startsWith('/') ? href : `/${href}`;
    return `/${locale}${normalizedHref}`;
  };
}
