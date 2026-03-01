// Configure your supported locales here
// Example: ['en', 'es', 'fr', 'de', 'ja', etc.]
export const LOCALES = ['uk', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'uk';

export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}
