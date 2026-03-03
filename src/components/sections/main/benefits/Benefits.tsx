import { Dictionary } from '@/content/i18n/schema';
import styles from './Benefits.module.scss';
import { Carousel } from '@/components/ui/Carousel/Carousel';
import { BenefitsCard } from '@/components/ui/BenefitsCard/BenefitsCard';
import { Section } from '@/components/ui/Section/Section';
import { Container } from '@/components/ui/Container/Container';
import { Title } from '@/components/ui/Title/Title';
import Image from 'next/image';

export function Benefits({ dict }: { dict: Dictionary['main']['benefits'] }) {
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
              <BenefitsCard key={review.title} benefitData={review} />
            ))}
          </Carousel>
        </div>
      </Container>
    </Section>
  );
}
