import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { buildPageMetadata } from '@/lib/locales/metadata';
import { getBaseUrl } from '@/lib/site-url';
import { JsonLd } from '@/lib/json-ld';
import { ContactForm } from '@/components/features/ContactForm/ContactForm';
import { Section } from '@/components/ui/Section/Section';
import { Container } from '@/components/ui/Container/Container';
import { Title } from '@/components/ui/Title/Title';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;

  if (!LOCALES.includes(locale)) return {};

  const dict = await getDictionary(locale);

  return buildPageMetadata(
    locale,
    '/contact',
    dict.pages.contact,
    dict.og.siteName
  );
}

export default async function Contact({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: dict.og.siteName,
    description: dict.footer.description,
    url: baseUrl,
    image: `${baseUrl}/logo.png`,
    telephone: dict.footer.phone,
    email: dict.footer.email,
    address: {
      '@type': 'PostalAddress',
      ...dict.footer.structuredAddress,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.4997814,
      longitude: 30.3632584,
    },
  };

  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <Section padding="xl">
        <Container size="lg">
          <Title as="h1" size="h1">
            {dict.contact.title}
          </Title>
          <ContactForm dict={dict.contact} />
        </Container>
      </Section>
    </>
  );
}
