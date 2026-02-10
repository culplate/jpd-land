import {
  Container,
  Section,
  Title,
  Text,
  Button,
  Animate,
  AnimateItem,
} from '@/components/ui';
import styles from './Demo.module.scss';

export function Demo() {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Development',
      description:
        'Pre-built component library and clear architecture reduce setup time. Start building features immediately without configuration overhead.',
    },
    {
      icon: '🎨',
      title: 'Scalable Structure',
      description:
        'Organized component types (ui, features, sections) ensure the codebase stays maintainable as projects grow in complexity.',
    },
    {
      icon: '📱',
      title: 'Mobile-First SCSS',
      description:
        'Responsive design system with CSS variables, nested media queries, and modern SCSS patterns for consistent styling.',
    },
    {
      icon: '🔒',
      title: 'Type Safety',
      description:
        'Full TypeScript support with strict typing enforced. Catch errors during development, not in production.',
    },
    {
      icon: '♿',
      title: 'Best Practices Included',
      description:
        'SEO-optimized SSR, accessibility standards, and performance patterns built in. Focus on features, not infrastructure.',
    },
    {
      icon: '🚀',
      title: 'Ready for Production',
      description:
        'Opinionated setup with linting, formatting, and clear coding standards. Deploy with confidence from day one.',
    },
  ];

  return (
    <Section id="demo" padding="xl" background="gray">
      <Container size="lg">
        <div className={styles.demo}>
          <Animate variant="fadeInUp" className={styles.header}>
            <Title as="h2" align="center">
              Built for <span className={styles.highlight}>Client Success</span>
            </Title>
            <Text size="lg" align="center" className={styles.subtitle}>
              Everything your team needs to deliver high-quality websites
              faster. No setup friction, just results.
            </Text>
          </Animate>

          <Animate
            stagger
            staggerDelay={0.1}
            delay={0.2}
            className={styles.features}
          >
            {features.map((feature, index) => (
              <AnimateItem key={index} variant="fadeInUp">
                <div className={styles.feature}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>
                </div>
              </AnimateItem>
            ))}
          </Animate>

          <Animate variant="scaleIn" delay={0.3} className={styles.cta}>
            <div className={styles.ctaCard}>
              <Title as="h3" align="center" className={styles.ctaTitle}>
                Start Your Next Project
              </Title>
              <Text align="center" className={styles.ctaText}>
                Clone this repository and customize it for your client&apos;s
                needs. All components, styles, and architecture are ready to
                use.
              </Text>
              <div className={styles.ctaActions}>
                <Button variant="cta" size="lg">
                  Clone Template
                </Button>
                <Button variant="ghost" size="lg">
                  Read Documentation
                </Button>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </Section>
  );
}
