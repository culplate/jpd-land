import { Container, Section, Link } from '@/components/ui';
import styles from './Footer.module.scss';
import { Locale } from '@/lib/locales/i18n-config';
import type { FooterDictionary } from '@/content/i18n/schema';

type FooterProps = {
  locale: Locale;
  footer: FooterDictionary;
};

export function Footer({ locale, footer }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const copyright = footer.copyright.replace('{year}', String(currentYear));

  return (
    <Section padding="lg" background="white">
      <Container size="full">
        <footer className={styles.footer}>
          <div className={styles.content}>
            <div className={styles.brand}>
              <h3 className={styles.brandName}>{footer.brand.name}</h3>
              <p className={styles.brandDescription}>
                {footer.brand.description}
              </p>
              <div className={styles.social}>
                {footer.social.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={styles.socialLink}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.linksGrid}>
              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>
                  {footer.groups.services.title}
                </h4>
                <ul className={styles.linkList}>
                  {footer.groups.services.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>
                  {footer.groups.company.title}
                </h4>
                <ul className={styles.linkList}>
                  {footer.groups.company.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>
                  {footer.groups.legal.title}
                </h4>
                <ul className={styles.linkList}>
                  {footer.groups.legal.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.bottom}>
            <p className={styles.copyright}>{copyright}</p>
            <div className={styles.bottomLinks}>
              <Link href={`/${locale}/privacy`} className={styles.bottomLink}>
                {footer.privacy}
              </Link>
              <Link href="#terms" className={styles.bottomLink}>
                {footer.terms}
              </Link>
              <Link href="#cookies" className={styles.bottomLink}>
                {footer.cookies}
              </Link>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
}
