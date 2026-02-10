'use client';

import NextLink from 'next/link';
import { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Link.module.scss';
import { UrlObject } from 'url';
import { useCreateHref } from '@/lib/locales/hooks';

// use Link everywhere by default, except for page navigation links
export interface LinkProps extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href'
> {
  children: ReactNode;
  href: string;
  variant?: 'default' | 'button' | 'underline' | 'nav';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  active?: boolean;
  className?: string;
}

export function Link({
  children,
  href,
  variant = 'default',
  size = 'md',
  external = false,
  active = false,
  className = '',
  ...props
}: LinkProps) {
  const createHref = useCreateHref();

  // Auto-detect external links
  const isExternal =
    external || href.startsWith('http') || href.startsWith('//');

  // Check if it's an anchor link
  const isAnchor = href.startsWith('#');

  const classNames = [
    styles.link,
    styles[variant],
    styles[size],
    active && variant === 'nav' && styles.active,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Anchor link (smooth scroll to section)
  if (isAnchor) {
    return (
      <a href={href} className={classNames} {...props}>
        {children}
      </a>
    );
  }

  // External link
  if (isExternal) {
    return (
      <a
        href={href}
        className={classNames}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  // Internal Next.js link with locale handling
  const localizedHref = createHref(href);

  return (
    <NextLink
      href={localizedHref as unknown as UrlObject}
      className={classNames}
      {...props}
    >
      {children}
    </NextLink>
  );
}
