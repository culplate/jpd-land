import { createElement, HTMLAttributes, ReactNode } from 'react';
import styles from './Title.module.scss';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3';
  weight?: 'normal' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  className?: string;
}

export function Title({
  children,
  as = 'h2',
  size,
  weight = 'medium',
  align = 'left',
  gradient = false,
  className = '',
  ...props
}: TitleProps) {
  const defaultSizes: Record<string, 'h1' | 'h2' | 'h3'> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h3',
    h5: 'h3',
    h6: 'h3',
  };

  const headingSize = size ?? defaultSizes[as];

  const classNames = [
    styles.title,
    styles[headingSize],
    styles[`weight-${weight}`],
    styles[`align-${align}`],
    gradient && styles.gradient,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return createElement(as, { className: classNames, ...props }, children);
}
