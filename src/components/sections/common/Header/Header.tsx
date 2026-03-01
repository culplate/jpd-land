'use client';

import { useState } from 'react';
import { Container, NavLink } from '@/components/ui';
import { Link } from '@/components/ui/Link/Link';
import { LanguageSwitcher } from '@/components/features';
import styles from './Header.module.scss';
import { icons } from '@/app/assets/icons';
import type { Dictionary } from '@/content/i18n/schema';
type HeaderProps = {
  nav: Dictionary['nav'];
};

export function Header({ nav }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container size="xl">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo}>
            <svg className={styles.logoIcon}>
              <use xlinkHref={`${icons.src}#logo`}></use>
            </svg>
          </Link>

          <nav
            className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
          >
            <ul className={styles.navList}>
              <li>
                <NavLink href="/products">{nav.products}</NavLink>
              </li>
              <li>
                <NavLink href="/about">{nav.about}</NavLink>
              </li>
              <li>
                <NavLink href="/contact">{nav.contact}</NavLink>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={styles.hamburger}></span>
          </button>
        </div>
      </Container>
    </header>
  );
}
