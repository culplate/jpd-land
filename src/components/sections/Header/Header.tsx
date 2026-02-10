'use client';

import { useState } from 'react';
import { Container, Button, NavLink } from '@/components/ui';
import { LanguageSwitcher } from '@/components/features';
import styles from './Header.module.scss';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container size="xl">
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <span className={styles.logoText}>Client Logo</span>
          </div>

          <nav
            className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
          >
            <ul className={styles.navList}>
              <li>
                <NavLink href="#hero">Home</NavLink>
              </li>
              <li>
                <NavLink href="#demo">Services</NavLink>
              </li>
              <li>
                <NavLink href="#about">About</NavLink>
              </li>
              <li>
                <NavLink href="#contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.actions}>
            <LanguageSwitcher />
            <Button variant="ghost" size="sm" className={styles.signIn}>
              Login
            </Button>
            <Button variant="cta" size="sm">
              Contact Us
            </Button>
          </div>

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
