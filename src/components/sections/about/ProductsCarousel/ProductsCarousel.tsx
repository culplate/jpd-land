import {
  Carousel,
  Section,
  ProductCard,
  Title,
  Container,
} from '@/components/ui';
import styles from './ProductsCarousel.module.scss';
import type {
  Dictionary,
  ProductCardItem,
  ProductId,
} from '@/content/i18n/schema';

const DEFAULT_PRODUCT_IDS: ProductId[] = [
  'shori',
  'fujizakura',
  'shogun',
  'yamato',
];

type ProductsCarouselProps = {
  dict: Dictionary['about']['productsCarousel'];
  productCards: Record<ProductId, ProductCardItem>;
  /** When provided, renders only these product IDs (e.g. to exclude current product on detail page) */
  productIds?: ProductId[];
};

export function ProductsCarousel({
  dict,
  productCards,
  productIds = DEFAULT_PRODUCT_IDS,
}: ProductsCarouselProps) {
  return (
    <Section
      id="products-carousel"
      padding="sm"
      background="white"
      className={styles.section}
    >
      <Container size="xl" className={styles.header}>
        <Title as="h2" size="h1" className={styles.title}>
          {dict.title}
        </Title>
      </Container>
      <div className={styles.carouselWrapper}>
        <Carousel
          className={styles.carousel}
          desktopMode="scroll"
          ariaLabel={dict.title}
        >
          {productIds.map((id) => {
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
      </div>
    </Section>
  );
}
