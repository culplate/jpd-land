'use client';

import { usePathname } from 'next/navigation';
import { Link, LinkProps } from './Link';
import { useLocale } from '@/lib/locales/locales';
import { DEFAULT_LOCALE } from '@/lib/locales/i18n-config';

export interface NavLinkProps extends Omit<LinkProps, 'active' | 'variant'> {
  exactMatch?: boolean;
}

/**
 * NavLink - Client-side navigation link with automatic active state detection
 * Use this for navigation menus where active state is needed
 */
export function NavLink({ href, exactMatch = false, ...props }: NavLinkProps) {
  const pathname = usePathname() ?? '';
  const locale = useLocale();

  // Remove current locale prefix from pathname for comparison
  const stripLocale = (path: string) => {
    if (locale === DEFAULT_LOCALE) return path;
    const prefix = `/${locale}`;
    if (!path.startsWith(prefix)) return path;

    const withoutLocale = path.slice(prefix.length);
    return withoutLocale === '' ? '/' : withoutLocale;
  };

  const normalize = (path: string) => {
    if (path === '/') return '/';
    return path.endsWith('/') ? path.slice(0, -1) : path;
  };

  const currentPath = normalize(stripLocale(pathname));
  const targetPath = normalize(href);

  // Determine if link is active (compare locale-stripped path with original href)
  const isActive = exactMatch
    ? currentPath === targetPath
    : currentPath.startsWith(targetPath);

  return <Link href={href} variant="nav" active={isActive} {...props} />;
}
