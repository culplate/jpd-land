import { Button } from '@/components/ui';
import { Text } from '../Text/Text';
import styles from './ReviewCard.module.scss';
import { ReviewCardItem } from '@/content/i18n/schema';

type ReviewCardProps = {
  review: ReviewCardItem;
  buttonText: string;
};

export function ReviewCard({ review, buttonText }: ReviewCardProps) {
  return (
    <div className={styles.card}>
      <Text as="p" size="md" weight="medium" className={styles.title}>
        {review.title}
      </Text>
      <Text as="p" size="md" weight="light" className={styles.review}>
        {review.review}
      </Text>
      <Button href="/products" className={styles.button}>
        {buttonText}
      </Button>
      <Text as="p" size="md" weight="light" className={styles.author}>
        {review.author}
      </Text>
    </div>
  );
}
