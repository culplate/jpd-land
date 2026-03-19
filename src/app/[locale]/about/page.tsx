import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { buildPageMetadata } from '@/lib/locales/metadata';
import { getBaseUrl } from '@/lib/site-url';
import { JsonLd } from '@/lib/json-ld';
import { History } from '@/components/sections/about/History/History';
import { ProductsCarousel } from '@/components/sections/about/ProductsCarousel/ProductsCarousel';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!LOCALES.includes(locale)) return {};

  const dict = await getDictionary(locale);

  return buildPageMetadata(
    locale,
    '/about',
    dict.pages.about,
    dict.og.siteName
  );
}

export default async function About({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const baseUrl = getBaseUrl();
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  const aboutPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: dict.pages.about.title,
    description: dict.pages.about.description,
    url: `${baseUrl}${prefix}/about`,
  };

  return (
    <>
      <JsonLd data={aboutPageJsonLd} />
      <History dict={dict.about.history} />
      <ProductsCarousel
        dict={dict.about.productsCarousel}
        productCards={dict.products.card}
      />
    </>
  );
}
