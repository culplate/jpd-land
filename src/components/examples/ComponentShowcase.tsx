/**
 * Component Showcase - Example usage of all UI components
 * This file can be deleted in production - it's for reference only
 */

import {
  Button,
  Container,
  Link,
  NavLink,
  Section,
  Text,
  Title,
} from '@/components/ui';
import styles from './ComponentShowcase.module.scss';

export function ComponentShowcase() {
  return (
    <div className={styles.showcase}>
      {/* Titles Section */}
      <Section padding="xl" background="white">
        <Container size="lg">
          <Title as="h1" align="center" gradient>
            Component Showcase
          </Title>
          <Text align="center" color="muted" size="lg">
            A collection of reusable UI components
          </Text>
        </Container>
      </Section>

      {/* Buttons Section */}
      <Section padding="xl">
        <Container size="lg">
          <div className={styles.section}>
            <Title as="h2" size="2xl">
              Buttons
            </Title>
            <Text color="muted">Various button styles and sizes</Text>
          </div>

          <div className={styles.buttonGrid}>
            <Button variant="cta">CTA Button</Button>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="text">Text Button</Button>
          </div>

          <div className={styles.buttonGrid}>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>

          <div className={styles.buttonGrid}>
            <Button loading>Loading State</Button>
          </div>

          <div className={styles.buttonGrid}>
            <Button fullWidth>Full Width Button</Button>
          </div>
        </Container>
      </Section>

      {/* Links Section */}
      <Section padding="xl" background="gray">
        <Container size="lg">
          <div className={styles.section}>
            <Title as="h2" size="2xl">
              Links
            </Title>
            <Text color="muted">Navigation and external links</Text>
          </div>

          <div className={styles.linkGrid}>
            <Link href="/">Default Link</Link>
            <Link href="/" variant="button">
              Button Link
            </Link>
            <Link href="/" variant="underline">
              Underlined Link
            </Link>
            <NavLink href="/">Nav Link (with active state)</NavLink>
            <Link href="https://nextjs.org" external>
              External Link
            </Link>
          </div>
        </Container>
      </Section>

      {/* Typography Section */}
      <Section padding="xl">
        <Container size="lg">
          <div className={styles.section}>
            <Title as="h2" size="2xl">
              Typography
            </Title>
            <Text color="muted">Titles and text components</Text>
          </div>

          <div className={styles.typographyStack}>
            <Title as="h1">Heading 1 (h1)</Title>
            <Title as="h2">Heading 2 (h2)</Title>
            <Title as="h3">Heading 3 (h3)</Title>
            <Title as="h4">Heading 4 (h4)</Title>
            <Title as="h5">Heading 5 (h5)</Title>
            <Title as="h6">Heading 6 (h6)</Title>
          </div>

          <div className={styles.textStack}>
            <Text size="2xl">Extra Large Text (2xl)</Text>
            <Text size="xl">Extra Large Text (xl)</Text>
            <Text size="lg">Large Text (lg)</Text>
            <Text size="md">Medium Text (md) - Default</Text>
            <Text size="sm">Small Text (sm)</Text>
            <Text size="xs">Extra Small Text (xs)</Text>
          </div>

          <div className={styles.textStack}>
            <Text weight="normal">Normal Weight</Text>
            <Text weight="medium">Medium Weight</Text>
            <Text weight="semibold">Semibold Weight</Text>
            <Text weight="bold">Bold Weight</Text>
          </div>

          <div className={styles.textStack}>
            <Text color="default">Default Color</Text>
            <Text color="muted">Muted Color</Text>
            <Text color="primary">Primary Color</Text>
            <Text color="secondary">Secondary Color</Text>
            <Text color="error">Error Color</Text>
            <Text color="success">Success Color</Text>
          </div>

          <div className={styles.truncateDemo}>
            <Text truncate>
              This is a very long text that will be truncated with an ellipsis
              when it exceeds the container width
            </Text>
            <Text lineClamp={2} className={styles.textStack}>
              This is a longer text that will be clamped to exactly 2 lines. Any
              content beyond the second line will be hidden with an ellipsis.
              This is useful for card descriptions and previews.
            </Text>
          </div>
        </Container>
      </Section>

      {/* Container Sizes Section */}
      <Section padding="xl" background="gray">
        <Container size="lg">
          <div className={styles.section}>
            <Title as="h2" size="2xl">
              Container Sizes
            </Title>
            <Text color="muted">Different container width options</Text>
          </div>

          <div className={styles.containerStack}>
            <Container size="sm" className={styles.containerDemo}>
              <Text>Small Container (sm)</Text>
            </Container>
            <Container size="md" className={styles.containerDemo}>
              <Text>Medium Container (md)</Text>
            </Container>
            <Container size="lg" className={styles.containerDemo}>
              <Text>Large Container (lg)</Text>
            </Container>
            <Container size="xl" className={styles.containerDemo}>
              <Text>Extra Large Container (xl)</Text>
            </Container>
          </div>
        </Container>
      </Section>
    </div>
  );
}
