import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/sections/common/Header/Header';
import { Footer } from '@/components/sections/common/Footer/Footer';
import { LOCALES, type Locale } from '@/lib/locales/i18n-config';
import { getDictionary } from '@/lib/locales/locales';
import { getBaseUrl } from '@/lib/site-url';
import { Toaster } from 'react-hot-toast';
import { JsonLd } from '@/lib/json-ld';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

type LayoutProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!LOCALES.includes(locale)) {
    return {};
  }

  const baseUrl = getBaseUrl();

  return {
    metadataBase: new URL(baseUrl),
    manifest: '/site.webmanifest',
    appleWebApp: {
      title: 'JPD Ukraine',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: dict.og.siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: dict.footer.phone,
      email: dict.footer.email,
      contactType: 'customer service',
    },
    address: {
      '@type': 'PostalAddress',
      ...dict.footer.structuredAddress,
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: dict.og.siteName,
    url: baseUrl,
    inLanguage: locale,
  };

  return (
    <html lang={locale}>
      <body className={`${manrope.variable}`}>
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <Header nav={dict.nav} />
        <main>{children}</main>
        <Footer locale={locale as Locale} footer={dict.footer} />
        <Toaster position="top-right" containerClassName="toast-container" />
      </body>
    </html>
  );
}
