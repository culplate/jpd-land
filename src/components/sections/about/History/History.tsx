import Image from 'next/image';
import styles from './History.module.scss';
import { Container, HistoryCardLg } from '@/components/ui';
import { Section } from '@/components/ui/Section/Section';
import { Title } from '@/components/ui/Title/Title';

import type { Dictionary } from '@/content/i18n/schema';

type HistoryProps = {
  dict: Dictionary['about']['history'];
};

export function History({ dict }: HistoryProps) {
  return (
    <Section id="history" padding="sm" className={styles.section}>
      <Container size="xl" className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.illustration}>
            <Image
              src="/img/bg/bg-history-illu.png"
              alt=""
              fill
              sizes="(max-width: 1023px) 100vw, 40vw"
              className={styles.illustrationImage}
              quality={100}
            />
          </div>
          <div className={styles.content}>
            <Title as="h2" size="h1" className={styles.title}>
              {dict.title}
            </Title>
            <div className={styles.cards}>
              {dict.cards.map((card) => (
                <HistoryCardLg key={card.year} card={card} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
