import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';
import type { ProductId } from '@/content/i18n/schema';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Section } from '@/components/ui';

type Props = {
  params: Promise<{ locale: string; product: string }>;
};

const PRODUCT_IDS: ProductId[] = [
  'fujiyama',
  'yamato',
  'shori',
  'fujizakura',
  'shogun',
];

function isProductId(value: string): value is ProductId {
  return (PRODUCT_IDS as readonly string[]).includes(value);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam, product: productParam } = await params;
  const locale = localeParam as Locale;

  if (!LOCALES.includes(locale) || !isProductId(productParam)) {
    return {};
  }

  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();
  const product = dict.products.page[productParam];

  return {
    title: product.name,
    description: product.benefits,
    openGraph: {
      title: product.name,
      description: product.benefits,
      url: `${baseUrl}/${locale}/products/${productParam}`,
      siteName: dict.og.siteName,
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/products/${productParam}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { locale, product: productParam } = await params;

  if (!isProductId(productParam)) {
    notFound();
  }

  const dict = await getDictionary(locale);
  const product = dict.products.page[productParam];

  return (
    <main>
      <Section>
        <Container>
          <Link href={`/${locale}/products`}>Back to products</Link>
          <h1>{product.name}</h1>
          <Image
            src={product.imageLink}
            alt={`${product.name} JPD koi food product photo`}
            width={400}
            height={400}
          />
          <p>
            <strong>Features:</strong> {product.features}
          </p>
          <p>
            <strong>Benefits:</strong> {product.benefits}
          </p>
          <p>
            <strong>Ingredients:</strong> {product.ingredients}
          </p>
          <p>
            <strong>Nutrition:</strong> {product.nutrition}
          </p>
        </Container>
      </Section>
    </main>
  );
}
