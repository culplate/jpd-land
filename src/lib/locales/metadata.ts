import type { Metadata } from 'next';
import type { PageSeo } from '@/content/i18n/schema';
import type { Locale } from '@/lib/locales/i18n-config';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';

function buildLocaleUrl(baseUrl: string, locale: Locale, path: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return path ? `${baseUrl}${prefix}${path}` : `${baseUrl}${prefix}`;
}

type PageMetadataOptions = {
  ogImage?: string;
};

export function buildPageMetadata(
  locale: Locale,
  path: string,
  page: PageSeo,
  siteName: string,
  options?: PageMetadataOptions
): Metadata {
  const baseUrl = getBaseUrl();
  const pageUrl = buildLocaleUrl(baseUrl, locale, path);

  const languages: Record<string, string> = {};
  LOCALES.forEach((loc) => {
    languages[loc] = buildLocaleUrl(baseUrl, loc, path);
  });
  languages['x-default'] = buildLocaleUrl(baseUrl, DEFAULT_LOCALE, path);

  const ogImage = options?.ogImage
    ? `${baseUrl}${options.ogImage}`
    : `${baseUrl}/opengraph-image.png`;

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: pageUrl,
      siteName,
      locale,
      type: 'website',
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
      languages,
    },
  };
}
