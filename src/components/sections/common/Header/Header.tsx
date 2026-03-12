'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const mobileMenuOverlay =
    isMobileMenuOpen &&
    typeof document !== 'undefined' &&
    createPortal(
      <>
        <div
          className={styles.backdrop}
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
        <nav
          className={`${styles.nav} ${styles.navOpen}`}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) {
              setIsMobileMenuOpen(false);
            }
          }}
        >
          <Link href="/" className={styles.menuLogo} aria-label="Home page">
            <svg className={styles.logoIconLg}>
              <use xlinkHref={`${icons.src}#logo`}></use>
            </svg>
          </Link>
          <button
            type="button"
            className={styles.closeButton}
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <svg className={styles.closeIcon}>
              <use xlinkHref={`${icons.src}#close`}></use>
            </svg>
          </button>
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
          <LanguageSwitcher className={styles.languageSwitcher} />
        </nav>
      </>,
      document.body
    );

  return (
    <header className={styles.header}>
      {mobileMenuOverlay}
      <Container size="xl">
        <div className={styles.wrapper}>
          <Link href="/" className={styles.logo} aria-label="Home page">
            <svg className={`${styles.logoIconLg}`}>
              <use xlinkHref={`${icons.src}#logo`}></use>
            </svg>
            <svg className={`${styles.logoIconSm}`}>
              <use xlinkHref={`${icons.src}#logo-sm`}></use>
            </svg>
          </Link>

          <nav className={styles.nav}>
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
            <LanguageSwitcher className={styles.languageSwitcher} />
          </nav>
          <button
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className={styles.burgerIcon}>
              <use xlinkHref={`${icons.src}#burger`}></use>
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
}
