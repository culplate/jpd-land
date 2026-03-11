import { Section, Container, Title, ProductCard } from '@/components/ui';
import styles from './ProductsList.module.scss';
import type { ProductId, ProductCardItem } from '@/content/i18n/schema';

const PRODUCT_IDS: ProductId[] = [
  'shori',
  'fujizakura',
  'shogun',
  'fujiyama',
  'yamato',
];

type ProductsListProps = {
  title: string;
  productCards: Record<ProductId, ProductCardItem>;
};

export function ProductsList({ title, productCards }: ProductsListProps) {
  return (
    <Section id="products-list" padding="sm" className={styles.section}>
      <Container size="xl" className={styles.container}>
        <Title as="h1" size="h1" className={styles.title}>
          {title}
        </Title>
        <ul className={styles.grid} role="list">
          {PRODUCT_IDS.map((id) => {
            const card = productCards[id];
            return (
              <li key={id} className={styles.gridItem}>
                <ProductCard
                  size="grid"
                  href={`/products/${id}`}
                  name={card.name}
                  japaneseName={card.japaneseName}
                  description={card.description}
                  imageLink={card.imageLink}
                  imageAlt={`${card.name} JPD koi food product photo`}
                  className={styles.card}
                />
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
