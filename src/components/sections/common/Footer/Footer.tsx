import {
  Container,
  Section,
  Link,
  CurrentYear,
  Text,
  Title,
} from '@/components/ui';
import styles from './Footer.module.scss';
import type { Locale } from '@/lib/locales/i18n-config';
import type { FooterDictionary } from '@/content/i18n/schema';
import { icons } from '@/app/assets/icons/index';

type FooterProps = {
  locale: Locale;
  footer: FooterDictionary;
};

export function Footer({ locale, footer }: FooterProps) {
  const [prefix, suffix] = footer.designCopyright.split('{year}');

  return (
    <footer aria-label="Site footer">
      <Section>
        <Container size="xl" className={styles.footer}>
          <svg
            width="146"
            height="56"
            className={styles.cloudLarge}
            aria-hidden="true"
          >
            <use xlinkHref={`${icons.src}#cloud2`} />
          </svg>
          <svg
            width="96"
            height="31"
            className={styles.cloudSmall}
            aria-hidden="true"
          >
            <use xlinkHref={`${icons.src}#cloud1`} />
          </svg>
          <div className={styles.content}>
            <Title
              as="h2"
              size="h1"
              id="footer-contacts"
              className={styles.contactsTitle}
            >
              {footer.contactsTitle}
            </Title>

            <div className={styles.mainRow}>
              <address
                className={styles.address}
                aria-labelledby="footer-contacts"
              >
                <a
                  href={`tel:${footer.phone.replace(/\s/g, '')}`}
                  className={styles.contactItem}
                  aria-label={`Phone: ${footer.phone}`}
                >
                  <Text as="span" size="md" weight="medium">
                    {footer.phone}
                  </Text>
                </a>
                <a
                  href={`mailto:${footer.email}`}
                  className={styles.contactItem}
                  aria-label={`Email: ${footer.email}`}
                >
                  <Text as="span" size="md" weight="medium">
                    {footer.email}
                  </Text>
                </a>

                <Text as="span" size="md" weight="medium">
                  {footer.address}
                </Text>
              </address>
              <Text
                as="p"
                size="md"
                weight="light"
                className={styles.description}
              >
                {footer.description}
              </Text>
            </div>

            <div className={styles.bottom}>
              <nav className={styles.bottomLinks} aria-label="Legal">
                <Link href="/privacy">{footer.privacy}</Link>
                <Link href="#terms">{footer.terms}</Link>
              </nav>
              <Text as="p" size="sm" weight="light">
                {prefix}
                <CurrentYear />
                {suffix}
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
