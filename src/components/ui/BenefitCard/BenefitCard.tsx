import { BenefitsCardItem } from '@/content/i18n/schema';
import styles from './BenefitCard.module.scss';
import { Text } from '../Text/Text';

interface BenefitCardProps {
  benefit: BenefitsCardItem;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <div className={styles.card}>
      <Text className={styles.metric}>{benefit.metric}</Text>
      <Text size="lg" weight="medium" className={styles.description}>
        {benefit.description}
      </Text>
    </div>
  );
}
