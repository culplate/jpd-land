import type { MetadataRoute } from 'next';
import { LOCALES } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';

/** Locale routes (path segments only, no leading slash) */
const localeRoutes = ['', 'about', 'contact', 'products'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const routes: MetadataRoute.Sitemap = [];

  // Root URL (typically redirects to default locale)
  routes.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });

  LOCALES.forEach((locale) => {
    localeRoutes.forEach((path, index) => {
      const url = path
        ? `${baseUrl}/${locale}/${path}`
        : `${baseUrl}/${locale}`;
      const isHome = path === '';
      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency: isHome ? 'weekly' : 'monthly',
        priority: isHome ? 1.0 : 0.7,
      });
    });
  });

  return routes;
}
