import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import '@/styles/globals.scss';
import { Header } from '@/components/sections/common/Header/Header';
import { Footer } from '@/components/sections/common/Footer/Footer';
import { LOCALES, type Locale } from '@/lib/locales/i18n-config';
import { getDictionary } from '@/lib/locales/locales';
import { getBaseUrl } from '@/lib/site-url';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
});

type LayoutProps = {
  params: Promise<{ locale: string }>;
};

// TODO: ADDITIONALLY ADD JSON-LD SCHEMA FOR EACH PAGE
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
    // TODO: ADD IMAGES "/android-chrome-512x512.png" and "/android-chrome-192x192.png" to the project and manifest
    // TODO opengraph-image.png, twitter-image.png, apple-icon.png, apple-touch-icon.png, favicon.ico, icon.png into APP directory
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

  return (
    <html lang={locale}>
      <body className={`${manrope.variable}`}>
        <Header nav={dict.nav} />
        <main>{children}</main>
        <Footer locale={locale as Locale} footer={dict.footer} />
        <Toaster position="top-right" containerClassName="toast-container" />
      </body>
    </html>
  );
}
