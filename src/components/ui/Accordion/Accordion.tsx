'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
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
  const [openId, setOpenId] = useState<string | null>('features');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={`${styles.accordion} ${className}`.trim()}>
      {items.map((item) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isOpen={openId === item.id}
          onToggle={toggle}
        />
      ))}
    </div>
  );
}

type AccordionPanelProps = {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
};

function AccordionPanel({ item, isOpen, onToggle }: AccordionPanelProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const measure = useCallback(() => {
    if (!contentRef.current || !wrapperRef.current) return;
    const height = contentRef.current.scrollHeight;
    wrapperRef.current.style.setProperty('--content-height', `${height}px`);
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [measure]);

  return (
    <div className={styles.item}>
      <button
        type="button"
        className={styles.header}
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${item.id}`}
        id={`accordion-header-${item.id}`}
      >
        <Text as="span" size="md" weight="medium" className={styles.title}>
          {item.title}
        </Text>
        <svg
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
          aria-hidden
        >
          <use xlinkHref={`${icons.src}#arrow`} />
        </svg>
      </button>
      <div
        ref={wrapperRef}
        id={`accordion-content-${item.id}`}
        role="region"
        aria-labelledby={`accordion-header-${item.id}`}
        className={`${styles.contentWrapper} ${isOpen ? styles.open : ''}`}
      >
        <div ref={contentRef} className={styles.contentInner}>
          {item.content}
        </div>
      </div>
    </div>
  );
}
