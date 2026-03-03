import styles from './History.module.scss';
import { Container, HistoryCardSm } from '@/components/ui';
import { Section } from '@/components/ui/Section/Section';
import { Title } from '@/components/ui/Title/Title';
import { Text } from '@/components/ui/Text/Text';

import { icons } from '@/app/assets/icons';

import { Locale } from '@/lib/locales/locales';
import type { Dictionary } from '@/content/i18n/schema';

type HistoryProps = {
  dict: Dictionary['main']['history'];
  locale: Locale;
};

export function History({ locale, dict }: HistoryProps) {
  return (
    <Section id="history" padding="sm" background="white">
      <Container size="xl" className={styles.container}>
        <Title as="h2" size="h1" className={styles.title}>
          {dict.title}
        </Title>
        <div className={styles.cards}>
          {dict.cards.map((card) => (
            <HistoryCardSm key={card.year} locale={locale} card={card} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
