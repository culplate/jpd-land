import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    cssChunking: true,
  },
  typedRoutes: true,
  sassOptions: {
    includePaths: ['./src/styles'],
    additionalData: `@use '@/styles/mixins' as *; @use '@/styles/colors' as *;`,
  },
  images: {
    dangerouslyAllowSVG: true,
    qualities: [25, 50, 75, 90, 100],
  },
};

export default nextConfig;
