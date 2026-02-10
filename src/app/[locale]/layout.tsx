import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/sections/Header/Header';
import { Footer } from '@/components/sections/Footer/Footer';
import {
  LOCALES,
  DEFAULT_LOCALE,
  type Locale,
} from '@/lib/locales/i18n-config';
import { getDictionary } from '@/lib/locales/locales';
import { getBaseUrl } from '@/lib/site-url';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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

  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();

  const languages: Record<string, string> = {};
  LOCALES.forEach((loc) => {
    languages[loc] = `${baseUrl}/${loc}`;
  });

  // x-default points to the default locale
  languages['x-default'] = `${baseUrl}/${DEFAULT_LOCALE}`;

  return {
    metadataBase: new URL(baseUrl),
    title: dict.seo.title,
    description: dict.seo.description,
    openGraph: {
      title: dict.og.title,
      description: dict.og.description,
      url: `${baseUrl}/${locale}`,
      siteName: dict.og.siteName,
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages,
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

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
