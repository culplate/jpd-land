import { Text } from '../Text/Text';
import styles from './ReviewCard.module.scss';
import { ReviewCardItem } from '@/content/i18n/schema';

export function ReviewCard({ review }: { review: ReviewCardItem }) {
  return (
    <div className={styles.card}>
      <Text as="p" size="md" weight="medium" className={styles.title}>
        {review.title}
      </Text>
      <Text as="p" size="md" weight="light" className={styles.review}>
        {review.review}
      </Text>
      <Text as="p" size="md" weight="light" className={styles.author}>
        {review.author}
      </Text>
    </div>
  );
}
