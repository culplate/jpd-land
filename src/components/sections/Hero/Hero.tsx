import {
  Container,
  Section,
  Title,
  Text,
  Button,
  GradientText,
  Animate,
  AnimateItem,
} from '@/components/ui';
import styles from './Hero.module.scss';
import { Dictionary } from '@/content/i18n/schema';

export function Hero({ dict }: { dict: Dictionary['main']['hero'] }) {
  return (
    <Section id="hero" padding="xl" background="white">
      <Container size="lg">
        <div className={styles.hero}>
          <div className={styles.content}>
            <Animate variant="fadeInDown" delay={0.1}>
              <div className={styles.badge}>
                <span className={styles.badgeText}>
                  ✨ Next.js Starter Template
                </span>
              </div>
            </Animate>

            <Animate variant="fadeInUp" delay={0.2}>
              <Title as="h1" align="center" className={styles.title}>
                Production-Ready Template
                <GradientText> For Client Projects</GradientText>
              </Title>
            </Animate>

            <Animate variant="fadeInUp" delay={0.3}>
              <Text size="lg" align="center" className={styles.description}>
                Internal agency template for building scalable, modern websites.
                Pre-configured with best practices, component architecture, and
                styling system ready for your next client project.
              </Text>
            </Animate>

            <Animate variant="fadeInUp" delay={0.4} className={styles.actions}>
              <Button variant="cta" size="lg">
                Start New Project
              </Button>
              <Button variant="outlined" size="lg">
                View Components
              </Button>
            </Animate>

            <Animate stagger staggerDelay={0.15} delay={0.5}>
              <div className={styles.stats}>
                <AnimateItem variant="scaleIn">
                  <div className={styles.stat}>
                    <span className={styles.statValue}>SSR</span>
                    <span className={styles.statLabel}>Server-Side Ready</span>
                  </div>
                </AnimateItem>
                <AnimateItem variant="scaleIn">
                  <div className={styles.stat}>
                    <span className={styles.statValue}>SCSS</span>
                    <span className={styles.statLabel}>
                      Mobile-First Styling
                    </span>
                  </div>
                </AnimateItem>
                <AnimateItem variant="scaleIn">
                  <div className={styles.stat}>
                    <span className={styles.statValue}>TS</span>
                    <span className={styles.statLabel}>Type-Safe Code</span>
                  </div>
                </AnimateItem>
              </div>
            </Animate>
          </div>

          <Animate variant="scaleIn" delay={0.4} className={styles.visual}>
            <div className={styles.visualCard}>
              <div className={styles.visualCardHeader}></div>
              <div className={styles.visualCardContent}></div>
            </div>
          </Animate>
        </div>
      </Container>
    </Section>
  );
}
