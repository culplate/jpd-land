import type { MetadataRoute } from 'next';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';
import type { ProductId } from '@/content/i18n/schema';

type StaticRoute = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
};

const staticRoutes: StaticRoute[] = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: 'about', changeFrequency: 'monthly', priority: 0.7 },
  { path: 'products', changeFrequency: 'monthly', priority: 0.8 },
  { path: 'contact', changeFrequency: 'monthly', priority: 0.6 },
  { path: 'privacy', changeFrequency: 'yearly', priority: 0.3 },
];

const PRODUCT_IDS: ProductId[] = [
  'fujiyama',
  'yamato',
  'shori',
  'fujizakura',
  'shogun',
];

function buildUrl(baseUrl: string, locale: string, path?: string): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return path ? `${baseUrl}${prefix}/${path}` : `${baseUrl}${prefix}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const routes: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    staticRoutes.forEach(({ path, changeFrequency, priority }) => {
      routes.push({
        url: buildUrl(baseUrl, locale, path || undefined),
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    });

    PRODUCT_IDS.forEach((id) => {
      routes.push({
        url: buildUrl(baseUrl, locale, `products/${id}`),
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    });
  });

  return routes;
}
