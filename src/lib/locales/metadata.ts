import type { Metadata } from 'next';
import type { PageSeo } from '@/content/i18n/schema';
import type { Locale } from '@/lib/locales/i18n-config';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';

export function buildPageMetadata(
  locale: Locale,
  path: string,
  page: PageSeo,
  siteName: string
): Metadata {
  const baseUrl = getBaseUrl();

  const languages: Record<string, string> = {};
  LOCALES.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}${path}`;
  });
  languages['x-default'] = `${baseUrl}/${DEFAULT_LOCALE}${path}`;

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${baseUrl}/${locale}${path}`,
      siteName,
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}${path}`,
      languages,
    },
  };
}
