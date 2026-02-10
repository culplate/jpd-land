import { createElement, HTMLAttributes, ReactNode } from 'react';
import styles from './GradientText.module.scss';

export interface GradientTextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

export function GradientText({
  children,
  as = 'span',
  className = '',
  ...props
}: GradientTextProps) {
  const classNames = [styles.gradient, className].filter(Boolean).join(' ');

  return createElement(
    as,
    {
      className: classNames,
      ...props,
    },
    children
  );
}
