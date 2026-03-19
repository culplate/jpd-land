import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { buildPageMetadata } from '@/lib/locales/metadata';
import { getBaseUrl } from '@/lib/site-url';
import { JsonLd } from '@/lib/json-ld';
import type { ProductId } from '@/content/i18n/schema';
import { ProductsList } from '@/components/sections/products/ProductsList/ProductsList';

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
    '/products',
    dict.pages.products,
    dict.og.siteName
  );
}

const PRODUCT_IDS: ProductId[] = [
  'fujiyama',
  'yamato',
  'shori',
  'fujizakura',
  'shogun',
];

export default async function Products({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  const baseUrl = getBaseUrl();
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: dict.products.title,
    itemListElement: PRODUCT_IDS.map((id, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${baseUrl}${prefix}/products/${id}`,
      name: dict.products.card[id].name,
    })),
  };

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <ProductsList
        title={dict.products.title}
        productCards={dict.products.card}
      />
    </>
  );
}
