import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { getBaseUrl } from '@/lib/site-url';
import { Section, Container, Title } from '@/components/ui';
import styles from './PrivacyPage.module.scss';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  if (!LOCALES.includes(locale)) return {};
  const dict = await getDictionary(locale);
  const baseUrl = getBaseUrl();
  const page = dict.pages.privacy;
  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${baseUrl}/${locale}/privacy`,
      siteName: dict.og.siteName,
      locale,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/privacy`,
    },
  };
}

export default async function Privacy({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { title, lastUpdated, sections } = dict.privacy;

  return (
    <Section padding="lg" background="white">
      <Container size="lg">
        <div className={styles.privacy}>
          <Title as="h1" size="3xl" className={styles.title}>
            {title}
          </Title>
          <p className={styles.lastUpdated}>{lastUpdated}</p>
          <div className={styles.content}>
            {sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <Title as="h2" size="xl" className={styles.sectionHeading}>
                  {section.heading}
                </Title>
                <p className={styles.sectionContent}>{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
