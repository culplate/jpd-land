import { createElement, HTMLAttributes, ReactNode } from 'react';
import styles from './Text.module.scss';

export interface TextProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  as?: 'p' | 'span' | 'div' | 'label';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right';
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'error' | 'success';
  truncate?: boolean;
  lineClamp?: number;
  className?: string;
}

export function Text({
  children,
  as = 'p',
  size = 'md',
  weight = 'normal',
  align = 'left',
  color = 'default',
  truncate = false,
  lineClamp,
  className = '',
  style,
  ...props
}: TextProps) {
  const classNames = [
    styles.text,
    styles[size],
    styles[`weight-${weight}`],
    styles[`align-${align}`],
    styles[`color-${color}`],
    truncate && styles.truncate,
    lineClamp && styles.lineClamp,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const combinedStyle = lineClamp
    ? { ...style, '--line-clamp': lineClamp }
    : style;

  return createElement(
    as,
    {
      className: classNames,
      style: combinedStyle,
      ...props,
    },
    children
  );
}
