import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { buildPageMetadata } from '@/lib/locales/metadata';
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

export default async function Products({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <main>
      <ProductsList
        title={dict.products.title}
        productCards={dict.products.card}
      />
    </main>
  );
}
