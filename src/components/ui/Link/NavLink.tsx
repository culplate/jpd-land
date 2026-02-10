'use client';

import { usePathname } from 'next/navigation';
import { Link, LinkProps } from './Link';

export interface NavLinkProps extends Omit<LinkProps, 'active' | 'variant'> {
  exactMatch?: boolean;
}

/**
 * NavLink - Client-side navigation link with automatic active state detection
 * Use this for navigation menus where active state is needed
 */
export function NavLink({ href, exactMatch = false, ...props }: NavLinkProps) {
  const pathname = usePathname();

  // Determine if link is active
  const isActive = exactMatch ? pathname === href : pathname?.startsWith(href);

  return <Link href={href} variant="nav" active={isActive} {...props} />;
}
