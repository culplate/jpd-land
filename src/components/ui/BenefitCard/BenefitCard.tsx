'use client';

import { useEffect, useRef, useState } from 'react';
import { BenefitsCardItem } from '@/content/i18n/schema';
import styles from './BenefitCard.module.scss';
import { Text } from '../Text/Text';

interface BenefitCardProps {
  benefit: BenefitsCardItem;
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isHoverDevice = window.matchMedia(
      '(hover: hover) and (pointer: fine)'
    ).matches;
    if (isHoverDevice) return;

    const card = cardRef.current;
    if (!card) return;

    let timeout: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => setExpanded(true), 1000);
        } else {
          clearTimeout(timeout);
          setExpanded(false);
        }
      },
      { threshold: 1 }
    );

    observer.observe(card);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${expanded ? styles.expanded : ''}`}
    >
      <div className={styles.front}>
        <p className={styles.metric}>{benefit.metric}</p>
        <Text size="lg" weight="medium" className={styles.description}>
          {benefit.description}
        </Text>
      </div>
      <div className={styles.back}>
        <Text size="md" weight="medium">
          {benefit.fullInfo.title}
        </Text>
        <Text size="md" weight="light" className={styles.backDescription}>
          {benefit.fullInfo.description}
        </Text>
      </div>
    </div>
  );
}
