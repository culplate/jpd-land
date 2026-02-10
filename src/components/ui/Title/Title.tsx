import { createElement, HTMLAttributes, ReactNode } from 'react';
import styles from './Title.module.scss';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  className?: string;
}

export function Title({
  children,
  as = 'h2',
  size,
  weight = 'semibold',
  align = 'left',
  gradient = false,
  className = '',
  ...props
}: TitleProps) {
  // Default sizes based on heading level if not specified
  const defaultSizes: Record<string, string> = {
    h1: '4xl',
    h2: '3xl',
    h3: '2xl',
    h4: 'xl',
    h5: 'lg',
    h6: 'md',
  };

  const headingSize = size || defaultSizes[as];

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
