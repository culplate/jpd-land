import Image from 'next/image';
import { Title, Text, Link } from '@/components/ui';
import styles from './ProductCard.module.scss';
import { icons } from '@/app/assets/icons';

export type ProductCardSize = 'sm' | 'regular' | 'grid';

export interface ProductCardProps {
  name: string;
  japaneseName: string;
  description: string;
  imageLink: string;
  imageAlt?: string;
  size?: ProductCardSize;
  href?: string;
  className?: string;
}

const IMAGE_SIZES: Record<ProductCardSize, { width: number; height: number }> =
  {
    sm: { width: 234, height: 234 },
    regular: { width: 320, height: 320 },
    grid: { width: 400, height: 400 },
  };

export function ProductCard({
  name,
  japaneseName,
  description,
  imageLink,
  imageAlt,
  size = 'regular',
  href,
  className = '',
}: ProductCardProps) {
  const { width, height } = IMAGE_SIZES[size];
  const alt = imageAlt ?? name;

  const content = (
    <>
      <span className={styles.japaneseName} aria-hidden>
        {japaneseName}
      </span>
      <span className={styles.content}>
        <span className={styles.imageWrapper}>
          <Image
            fetchPriority="auto"
            src={imageLink}
            alt={alt}
            width={width}
            height={height}
            className={styles.image}
            quality={100}
            sizes={
              size === 'sm'
                ? '234px'
                : size === 'grid'
                  ? '(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw'
                  : '356px'
            }
          />
        </span>
        <span className={styles.nameRow}>
          <Title as="h3" size="h3" className={styles.name}>
            {name}
          </Title>
          <svg className={styles.arrow} aria-hidden>
            <use xlinkHref={`${icons.src}#arrow`} />
          </svg>
        </span>
        <Text as="p" size="md" weight="normal" className={styles.description}>
          {description}
        </Text>
      </span>
    </>
  );

  const classNames = [styles.card, styles[size], className]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <Link href={href} className={classNames} aria-label={name}>
        {content}
      </Link>
    );
  }

  return <article className={classNames}>{content}</article>;
}
