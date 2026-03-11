import {
  Carousel,
  Section,
  ProductCard,
  Button,
  Container,
} from '@/components/ui';
import type { Locale } from '@/lib/locales/i18n-config';
import styles from './ProductsPreview.module.scss';
import type { Dictionary, ProductCardItem } from '@/content/i18n/schema';

const PRODUCTS_PREVIEW_IDS = ['yamato', 'fujiyama', 'shori'] as const;

type ProductsPreviewProps = {
  dict: Dictionary['main']['hero'];
  locale: Locale;
  productCards: {
    yamato: ProductCardItem;
    fujiyama: ProductCardItem;
    shori: ProductCardItem;
  };
};

export function ProductsPreview({
  dict,
  locale,
  productCards,
}: ProductsPreviewProps) {
  return (
    <Section id="products-preview" padding="lg" className={styles.section}>
      <Carousel
        className={styles.productCards}
        desktopMode="auto"
        ariaLabel={dict.titleMain + ' ' + dict.titleSub}
      >
        {PRODUCTS_PREVIEW_IDS.map((id) => {
          const card = productCards[id];
          return (
            <ProductCard
              key={id}
              size="regular"
              href={`/products/${id}`}
              name={card.name}
              japaneseName={card.japaneseName}
              description={card.description}
              imageLink={card.imageLink}
            />
          );
        })}
      </Carousel>
      <Container className={styles.buttonWrapper}>
        <Button href="/products">{dict.button}</Button>
      </Container>
    </Section>
  );
}
