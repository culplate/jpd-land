import Image from 'next/image';
import styles from './ProductDesktop.module.scss';
import type { ProductPageItem } from '@/content/i18n/schema';

export type ProductDesktopProps = {
  product: ProductPageItem;
  desktopHero: string;
};

export function ProductDesktop({ product, desktopHero }: ProductDesktopProps) {
  return (
    <div className={styles.productImageWrapper}>
      <Image
        src={desktopHero}
        alt={`${product.name} JPD koi food product photo`}
        width={361}
        height={600}
        className={styles.productImage}
        quality={75}
        sizes="(min-width: 768px) 40vw, 0px"
      />
    </div>
  );
}
