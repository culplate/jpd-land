import { ReactNode } from 'react';
import styles from './Section.module.scss';

export interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl' | undefined;
}

export function Section({
  children,
  id,
  className = '',
  padding = 'sm',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[padding]} ${className}`}
    >
      {children}
    </section>
  );
}
