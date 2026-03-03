import styles from './Reviews.module.scss';
import { Dictionary } from '@/content/i18n/schema';
import { Carousel } from '@/components/ui/Carousel/Carousel';
import { ReviewCard } from '@/components/ui/ReviewCard/ReviewCard';
import { Section } from '@/components/ui/Section/Section';
import { Container } from '@/components/ui/Container/Container';
import { Title } from '@/components/ui/Title/Title';
import Image from 'next/image';

export function Reviews({ dict }: { dict: Dictionary['main']['reviews'] }) {
  return (
    <Section className={styles.section}>
      <Image
        src="/img/koi.png"
        alt="Koi karp abstract picture"
        width={643}
        height={999}
        quality={100}
        className={styles.koi}
      />
      <Container size="lg" className={styles.container}>
        <Title as="h2" size="h1" className={styles.title}>
          {dict.title}
        </Title>
        <div className={styles.carouselWrapper}>
          <Carousel breakout>
            {dict.reviews.map((review) => (
              <ReviewCard key={review.author} review={review} />
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
}
