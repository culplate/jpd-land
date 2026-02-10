import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LOCALES, DEFAULT_LOCALE } from '@/lib/locales/i18n-config';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if the pathname already has a locale
  const pathnameHasLocale = LOCALES.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If pathname has a locale and it's the default locale, redirect to root
  if (
    pathname.startsWith(`/${DEFAULT_LOCALE}/`) ||
    pathname === `/${DEFAULT_LOCALE}`
  ) {
    const newPathname = pathname.replace(`/${DEFAULT_LOCALE}`, '') || '/';
    return NextResponse.redirect(new URL(newPathname, request.url));
  }

  // If pathname already has a valid non-default locale, continue
  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Check if it's a Next.js internal path or static file
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // For root and other paths without locale, serve default locale content
  // by rewriting to default locale internally (without changing URL)
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Match all pathnames except for:
    // - API routes
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public files (images, etc.)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
