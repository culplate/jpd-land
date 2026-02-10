import { Container, Section, Link } from '@/components/ui';
import styles from './Footer.module.scss';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Solutions', href: '#solutions' },
      { label: 'Resources', href: '#resources' },
    ],
    company: [
      { label: 'About', href: '#about' },
      { label: 'Team', href: '#team' },
      { label: 'Careers', href: '#careers' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'Sitemap', href: '#sitemap' },
    ],
    social: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
  };

  return (
    <Section padding="lg" background="white">
      <Container size="xl">
        <footer className={styles.footer}>
          <div className={styles.content}>
            <div className={styles.brand}>
              <h3 className={styles.brandName}>Client Name</h3>
              <p className={styles.brandDescription}>
                Replace this with your client&apos;s brief company description
                or tagline. Keep it concise and memorable.
              </p>
              <div className={styles.social}>
                {links.social.map((link) => (
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
                <h4 className={styles.linkGroupTitle}>Services</h4>
                <ul className={styles.linkList}>
                  {links.product.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Company</h4>
                <ul className={styles.linkList}>
                  {links.company.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.linkGroup}>
                <h4 className={styles.linkGroupTitle}>Legal</h4>
                <ul className={styles.linkList}>
                  {links.legal.map((link) => (
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
            <p className={styles.copyright}>
              © {currentYear} Client Name. All rights reserved.
            </p>
            <div className={styles.bottomLinks}>
              <Link href="#privacy" className={styles.bottomLink}>
                Privacy
              </Link>
              <Link href="#terms" className={styles.bottomLink}>
                Terms
              </Link>
              <Link href="#cookies" className={styles.bottomLink}>
                Cookies
              </Link>
            </div>
          </div>
        </footer>
      </Container>
    </Section>
  );
}
