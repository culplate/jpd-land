import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';
import type { ProductId, NutritionItem } from '@/content/i18n/schema';
import Image from 'next/image';
import {
  Text,
  Title,
  Link,
  Accordion,
  Section,
  Container,
} from '@/components/ui';
import type { AccordionItem } from '@/components/ui';
import {
  ProductMobile,
  ProductDesktop,
} from '@/components/sections/products/ProductDetail';
import { ProductsCarousel } from '@/components/sections/about/ProductsCarousel/ProductsCarousel';
import styles from './page.module.scss';

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

const MOBILE_HERO: Record<ProductId, string> = {
  fujiyama: '/img/food/fujiyama-sq.png',
  yamato: '/img/food/yamato-sq.png',
  shori: '/img/food/shori-sq.png',
  fujizakura: '/img/food/fujizakura-sq.png',
  shogun: '/img/food/shogun-sq.png',
};

const DESKTOP_HERO: Record<ProductId, string> = {
  fujiyama: '/img/food/fujiyama-poster.jpg',
  yamato: '/img/food/yamato-poster.jpg',
  shori: '/img/food/shori-poster.jpg',
  fujizakura: '/img/food/fujizakura-poster.jpg',
  shogun: '/img/food/shogun-poster.png',
};

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
  const productCard = dict.products.card[productParam];

  const mobileHero = MOBILE_HERO[productParam];
  const desktopHero = DESKTOP_HERO[productParam];
  const relatedProductIds = PRODUCT_IDS.filter((id) => id !== productParam);

  const accordionItems: AccordionItem[] = [
    {
      id: 'features',
      title: dict.products.sections.features,
      content: (
        <Text as="p" size="md" className={styles.accordionContent}>
          {product.features}
        </Text>
      ),
    },
    {
      id: 'benefits',
      title: dict.products.sections.benefits,
      content: (
        <Text as="p" size="md" className={styles.accordionContent}>
          {product.benefits}
        </Text>
      ),
    },
    {
      id: 'ingredients',
      title: dict.products.sections.ingredients,
      content: (
        <Text as="p" size="md" className={styles.accordionContent}>
          {product.ingredients}
        </Text>
      ),
    },
    {
      id: 'nutrition',
      title: dict.products.sections.nutrition,
      content: (
        <div className={styles.accordionContent}>
          {product.nutrition.map((item: NutritionItem, index: number) =>
            item.title ? (
              <div key={index} className={styles.nutritionItem}>
                <Text as="span" size="md" weight="medium">
                  {item.title}
                </Text>
                <Text
                  as="span"
                  size="md"
                  weight="light"
                  className={styles.nutritionValue}
                >
                  {item.value}
                </Text>
              </div>
            ) : (
              <Text key={index} as="p" size="md">
                {item.value}
              </Text>
            )
          )}
        </div>
      ),
    },
  ];

  return (
    <main>
      <Section padding="sm" className={styles.section}>
        <Container size="xl" className={styles.container}>
          <div className={styles.bgWrapper}>
            <Image
              src="/img/bg/bg-product.png"
              alt=""
              fill
              sizes="(min-width: 768px) 50vw, 0px"
              className={styles.bgImage}
              quality={100}
              loading="lazy"
            />
          </div>
          <div className={styles.mobileOnly}>
            <ProductMobile
              product={product}
              japaneseName={productCard.japaneseName}
              mobileHero={mobileHero}
            />
          </div>
          <div className={styles.content}>
            <div className={styles.desktopOnly}>
              <ProductDesktop product={product} desktopHero={desktopHero} />
            </div>
            <div className={styles.contentMain}>
              <Title as="h1" size="h1" className={styles.productName}>
                {product.name}
              </Title>
              <Link
                href="/products"
                className={styles.breadcrumb}
                variant="underline"
                size="sm"
              >
                {dict.products.sections.breadcrumb}
              </Link>
              <Accordion items={accordionItems} className={styles.accordion} />
            </div>
          </div>
        </Container>
      </Section>

      <ProductsCarousel
        dict={{
          ...dict.about.productsCarousel,
          title: dict.products.sections.relatedProducts,
        }}
        productCards={dict.products.card}
        productIds={relatedProductIds}
      />
    </main>
  );
}
