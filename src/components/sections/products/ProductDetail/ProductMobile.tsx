import Image from 'next/image';
import styles from './ProductMobile.module.scss';
import type { ProductPageItem } from '@/content/i18n/schema';

export type ProductMobileProps = {
  product: ProductPageItem;
  japaneseName: string;
  mobileHero: string;
};

export function ProductMobile({
  product,
  japaneseName,
  mobileHero,
}: ProductMobileProps) {
  return (
    <div className={styles.hero}>
      <span className={styles.japaneseName} aria-hidden>
        {japaneseName}
      </span>
      <div className={styles.imageWrapper}>
        <Image
          src={mobileHero}
          alt={`${product.name} JPD koi food product photo`}
          width={400}
          height={400}
          className={styles.image}
          quality={100}
          priority
          sizes="100vw"
        />
      </div>
    </div>
  );
}
