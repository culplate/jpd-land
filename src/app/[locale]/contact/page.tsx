import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  if (!LOCALES.includes(locale)) return {};
  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();
  const page = dict.pages.contact;
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${baseUrl}/${locale}/contact`,
      siteName: dict.og.siteName,
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
    },
  };
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <h1>Contact page</h1>
    </>
  );
}
