import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { buildPageMetadata } from '@/lib/locales/metadata';
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

  return (
    <>
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
