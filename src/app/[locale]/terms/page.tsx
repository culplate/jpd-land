import type { Metadata } from 'next';
import { getDictionary } from '@/lib/locales/locales';
import { LOCALES } from '@/lib/locales/i18n-config';
import type { Locale } from '@/lib/locales/i18n-config';
import { buildPageMetadata } from '@/lib/locales/metadata';
import { Section, Container, Title } from '@/components/ui';
import styles from '../privacy/PrivacyPage.module.scss';

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
    '/terms',
    dict.pages.terms,
    dict.og.siteName
  );
}

export default async function Terms({ params }: Props) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const { title, lastUpdated, sections } = dict.terms;

  return (
    <Section padding="lg">
      <Container size="lg">
        <div className={styles.privacy}>
          <Title as="h1" className={styles.title}>
            {title}
          </Title>
          <p className={styles.lastUpdated}>{lastUpdated}</p>
          <div className={styles.content}>
            {sections.map((section, index) => (
              <div key={index} className={styles.section}>
                <Title as="h2" size="h3" className={styles.sectionHeading}>
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
