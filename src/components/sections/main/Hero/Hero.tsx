import {
  Carousel,
  Container,
  Section,
  Title,
  ProductCard,
  Button,
} from '@/components/ui';
import styles from './Hero.module.scss';
import type { Dictionary, ProductCardItem } from '@/content/i18n/schema';
import Image from 'next/image';

const HERO_PRODUCT_IDS = ['shori', 'shogun', 'fujizakura'] as const;

type HeroProps = {
  dict: Dictionary['main']['hero'];
  locale: string;
  productCards: {
    shori: ProductCardItem;
    shogun: ProductCardItem;
    fujizakura: ProductCardItem;
  };
};

export function Hero({ dict, locale, productCards }: HeroProps) {
  return (
    <Section
      id="hero"
      padding="sm"
      background="white"
      className={styles.section}
    >
      <Image
        src="/img/sakura-L.png"
        alt="Sakura branch left"
        width={273.3}
        height={163.6}
        className={`${styles.bgImage} ${styles.sakuraLeft}`}
      />
      <Image
        src="/img/sakura-R.png"
        alt="Sakura branch right"
        width={260}
        height={124.8}
        className={`${styles.bgImage} ${styles.sakuraRight}`}
      />
      <Image
        src="/img/moon.png"
        alt="red moon"
        width={171}
        height={251}
        className={`${styles.bgImage} ${styles.moon}`}
      />
      <Container size="xl" className={styles.container}>
        <Title as="h1" size="h1" align="center">
          {/* TODO update font sizes */}
          {dict.title}
        </Title>
      </Container>

      <Carousel
        className={styles.productCards}
        desktopMode="static"
        ariaLabel={dict.title}
      >
        {HERO_PRODUCT_IDS.map((id) => {
          const card = productCards[id];
          return (
            <ProductCard
              key={id}
              size="regular"
              href={`/${locale}/products/${id}`}
              name={card.name}
              japaneseName={card.japaneseName}
              description={card.description}
              imageLink={card.imageLink}
            />
          );
        })}
      </Carousel>
      <div className={styles.buttonWrapper}>
        <Button href={`/${locale}/products`}>{dict.button}</Button>
      </div>
    </Section>
  );
}
