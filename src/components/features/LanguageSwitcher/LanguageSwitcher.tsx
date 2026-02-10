'use client';

import type { Route } from 'next';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from '@/lib/locales/locales';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import styles from './LanguageSwitcher.module.scss';

const LOCALE_NAMES: Record<string, string> = {
  en: 'English',
  uk: 'Українська',
};

export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;

    let newPathname = pathname;

    // Remove current locale from pathname if it exists
    if (currentLocale !== DEFAULT_LOCALE) {
      newPathname = pathname.replace(`/${currentLocale}`, '') || '/';
    }

    // Add new locale prefix if it's not the default locale
    if (newLocale !== DEFAULT_LOCALE) {
      newPathname = `/${newLocale}${newPathname}`;
    }

    router.push(newPathname as Route);
  };

  return (
    <div className={styles.switcher}>
      {LOCALES.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={`${styles.button} ${
            locale === currentLocale ? styles.active : ''
          }`}
          aria-label={`Switch to ${LOCALE_NAMES[locale] || locale}`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
