import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';
import type { ProductId } from '@/content/i18n/schema';

type Props = {
  params: Promise<{ locale: string }>;
};

const PRODUCT_IDS: ProductId[] = [
  'fujiyama',
  'yamato',
  'shori',
  'fujizakura',
  'shogun',
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!LOCALES.includes(locale)) return {};

  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();
  const page = dict.pages.products;

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${baseUrl}/${locale}/products`,
      siteName: dict.og.siteName,
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/products`,
    },
  };
}

export default async function Products({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const products = dict.products.items;

  return (
    <main>
      <h1>{dict.products.title}</h1>
      <ul>
        {PRODUCT_IDS.map((id) => {
          const product = products[id];

          return (
            <li key={id}>
              <Link href={`/${locale}/products/${id}`}>{product.name}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
