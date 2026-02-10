/**
 * Base URL for the site. Use for metadata, sitemap, robots, canonicals.
 * - NEXT_PUBLIC_SITE_URL when set (production)
 * - https://VERCEL_URL when deployed on Vercel (preview/production)
 * - http://localhost:3000 when running locally
 */
export function getBaseUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}
