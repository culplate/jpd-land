import { Dictionary } from '@/content/i18n/schema';
import { LOCALES, DEFAULT_LOCALE, Locale, isValidLocale } from './i18n-config';

export { LOCALES, DEFAULT_LOCALE, type Locale, isValidLocale };
export { useLocale, useCreateHref } from './hooks';

// Dynamic imports for code splitting and lazy loading
// Add imports for each locale you support
const dictionaries = {
  en: () => import('@/content/i18n/en').then((module) => module.default),
  uk: () => import('@/content/i18n/uk').then((module) => module.default),
  // Add more locales here:
  // es: () => import('@/content/i18n/es').then((module) => module.default),
  // fr: () => import('@/content/i18n/fr').then((module) => module.default),
  // de: () => import('@/content/i18n/de').then((module) => module.default),
};

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (!isValidLocale(locale)) {
    return dictionaries[DEFAULT_LOCALE]();
  }

  const dictionaryLoader = dictionaries[locale as Locale];

  if (!dictionaryLoader) {
    return dictionaries[DEFAULT_LOCALE]();
  }

  return dictionaryLoader();
}

export function getLocaleFromAcceptLanguage(acceptLanguage: string): Locale {
  // Parse Accept-Language header and find best match
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [locale, qString] = lang.trim().split(';q=');
      const quality = qString ? parseFloat(qString) : 1;
      return { locale: locale.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Check for exact matches
  for (const { locale } of languages) {
    if ((LOCALES as readonly string[]).includes(locale)) {
      return locale as Locale;
    }
  }

  // Fallback to default locale
  return DEFAULT_LOCALE;
}
