import type { MetadataRoute } from 'next';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';
import type { ProductId } from '@/content/i18n/schema';

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
  lastModified: Date;
};

// Update lastModified when page content actually changes
const staticRoutes: StaticRoute[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0, lastModified: new Date('2026-03-19') },
  { path: 'about', changeFrequency: 'monthly', priority: 0.7, lastModified: new Date('2026-03-19') },
  { path: 'products', changeFrequency: 'monthly', priority: 0.8, lastModified: new Date('2026-03-19') },
  { path: 'contact', changeFrequency: 'monthly', priority: 0.6, lastModified: new Date('2026-03-19') },
  { path: 'privacy', changeFrequency: 'yearly', priority: 0.3, lastModified: new Date('2026-02-01') },
];

const PRODUCT_IDS: ProductId[] = [
  'fujiyama',
  'yamato',
  'shori',
  'fujizakura',
  'shogun',
];

const PRODUCT_LAST_MODIFIED = new Date('2026-03-19');

function buildUrl(baseUrl: string, locale: string, path?: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return path ? `${baseUrl}${prefix}/${path}` : `${baseUrl}${prefix}`;
}

function buildAlternates(baseUrl: string, path?: string) {
  const languages: Record<string, string> = {};
  LOCALES.forEach((locale) => {
    languages[locale] = buildUrl(baseUrl, locale, path);
  });
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const routes: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    staticRoutes.forEach(({ path, changeFrequency, priority, lastModified }) => {
      routes.push({
        url: buildUrl(baseUrl, locale, path || undefined),
        lastModified,
        changeFrequency,
        priority,
        alternates: buildAlternates(baseUrl, path || undefined),
      });
    });

    PRODUCT_IDS.forEach((id) => {
      routes.push({
        url: buildUrl(baseUrl, locale, `products/${id}`),
        lastModified: PRODUCT_LAST_MODIFIED,
        changeFrequency: 'monthly',
        priority: 0.6,
        alternates: buildAlternates(baseUrl, `products/${id}`),
      });
    });
  });

  return routes;
}
