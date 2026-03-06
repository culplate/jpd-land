import styles from './HistoryCardLg.module.scss';
import type { HistoryCardItem } from '@/content/i18n/schema';
import { Text } from '../Text/Text';

type HistoryCardLgProps = {
  card: HistoryCardItem;
};

export function HistoryCardLg({ card }: HistoryCardLgProps) {
  return (
    <div className={styles.card}>
      <Text className={styles.year} size="md" weight="medium">
        {card.year}
      </Text>

      <div className={styles.contentWrapper}>
        <Text className={styles.title} size="md" weight="medium">
          {card.title}
        </Text>
        <Text className={styles.description} size="md" weight="light">
          {card.description}
        </Text>
      </div>
    </div>
  );
}
