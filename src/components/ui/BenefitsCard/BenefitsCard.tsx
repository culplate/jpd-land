import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import styles from './BenefitsCard.module.scss';
import { BenefitsCardItem } from '@/content/i18n/schema';

export function BenefitsCard({
  benefitData,
}: {
  benefitData: BenefitsCardItem;
}) {
  return (
    <div className={styles.card}>
      <Text as="p" size="md" weight="medium" className={styles.title}>
        {benefitData.title}
      </Text>
      <Text as="p" size="md" weight="light" className={styles.review}>
        {benefitData.review}
      </Text>
      <Text as="p" size="md" weight="light" className={styles.author}>
        {benefitData.author}
      </Text>
    </div>
  );
}
