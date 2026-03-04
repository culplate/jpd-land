import styles from './HistoryCard.module.scss';
import { Locale } from '@/lib/locales/locales';
import type { HistoryCardItem } from '@/content/i18n/schema';
import { icons } from '@/app/assets/icons';
import { Text } from '../Text/Text';
import { Link } from '@/components/ui';

type HistoryCardSmProps = {
  locale: Locale;
  card: HistoryCardItem;
};

export function HistoryCardSm({ locale, card }: HistoryCardSmProps) {
  return (
    <Link href="/about" className={styles.link}>
      <div className={styles.card}>
        <svg className={styles.icon}>
          <use xlinkHref={`${icons.src}#arrow`} />
        </svg>

        <Text className={styles.year} size="md" weight="medium">
          {card.year}
        </Text>

        <div className={styles.contentWrapper}>
          <Text className={styles.title} size="md" weight="medium">
            {card.title}
          </Text>
          <Text
            className={styles.description}
            size="md"
            weight="light"
            lineClamp={5}
          >
            {card.description}
          </Text>
        </div>
      </div>
    </Link>
  );
}
