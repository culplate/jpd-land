'use client';

import { useState } from 'react';
import { icons } from '@/app/assets/icons';
import styles from './Accordion.module.scss';
import { Text } from '../Text/Text';

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  className?: string;
};

export function Accordion({ items, className = '' }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`${styles.accordion} ${className}`.trim()}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.header}
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
              id={`accordion-header-${item.id}`}
            >
              <Text
                as="span"
                size="md"
                weight="medium"
                className={styles.title}
              >
                {item.title}
              </Text>
              <svg
                className={styles.arrow}
                aria-hidden
                style={{
                  transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
                }}
              >
                <use xlinkHref={`${icons.src}#arrow`} />
              </svg>
            </button>
            <div
              id={`accordion-content-${item.id}`}
              role="region"
              aria-labelledby={`accordion-header-${item.id}`}
              className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}
            >
              <Text as="p" className={styles.contentInner}>
                {item.content}
              </Text>
            </div>
          </div>
        );
      })}
    </div>
  );
}
