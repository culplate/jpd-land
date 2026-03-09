import styles from './Benefits.module.scss';
import { Dictionary } from '@/content/i18n/schema';

import { Container } from '@/components/ui/Container/Container';
import { Section } from '@/components/ui/Section/Section';
import { Title } from '@/components/ui/Title/Title';
import { BenefitCard } from '@/components/ui/BenefitCard/BenefitCard';
import { Carousel } from '@/components/ui/Carousel/Carousel';

export function Benefits({ dict }: { dict: Dictionary['main']['benefits'] }) {
  return (
    <Section padding="lg" className={styles.section}>
      <Container size="lg">
        <Title className={styles.title}>{dict.title}</Title>
        <Carousel desktopMode="auto" breakout className={styles.cards}>
          {dict.cards.map((card) => (
            <BenefitCard key={card.metric} benefit={card} />
          ))}
        </Carousel>
      </Container>
    </Section>
  );
}
