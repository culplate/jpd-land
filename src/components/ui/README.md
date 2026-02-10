# UI Components

A collection of reusable UI components with TypeScript support and minimal styling for easy customization.

## Installation

All components are exported from `@/components/ui`:

```tsx
import {
  Button,
  Link,
  NavLink,
  Title,
  Text,
  Container,
  Section,
} from '@/components/ui';
```

## Components

### Button

A flexible button component with multiple variants and states.

**Props:**

- `variant`: "cta" | "primary" | "secondary" | "outlined" | "ghost" | "text" (default: "primary")
- `size`: "sm" | "md" | "lg" (default: "md")
- `fullWidth`: boolean (default: false)
- `loading`: boolean (default: false)
- `disabled`: boolean (default: false)
- All standard HTML button attributes

**Example:**

```tsx
import { Button } from '@/components/ui';

// CTA button (Call-to-action with accent color)
<Button variant="cta" size="lg">Get Started</Button>

// Primary button
<Button variant="primary" onClick={handleClick}>Submit</Button>

// Outlined button
<Button variant="outlined">Cancel</Button>

// Loading state
<Button loading>Processing...</Button>

// Full width
<Button fullWidth>Full Width Button</Button>
```

### Link

A Next.js Link wrapper with variants. SSR-friendly by default.

**Props:**

- `href`: string (required)
- `variant`: "default" | "button" | "underline" | "nav" (default: "default")
- `size`: "sm" | "md" | "lg" (default: "md")
- `external`: boolean (default: false, auto-detected for http/https)
- `active`: boolean (default: false, manually control active state)
- All standard HTML anchor attributes

**Example:**

```tsx
import { Link } from '@/components/ui';

// Default link
<Link href="/about">About Us</Link>

// Button-styled link
<Link href="/contact" variant="button">Contact</Link>

// Navigation link with manual active state
<Link href="/products" variant="nav" active={true}>Products</Link>

// External link (opens in new tab)
<Link href="https://example.com" external>External Site</Link>

// Underlined link
<Link href="/terms" variant="underline">Terms & Conditions</Link>
```

### NavLink

A client-side navigation link with automatic active state detection. Use this for navigation menus.

**Props:**

- `href`: string (required)
- `size`: "sm" | "md" | "lg" (default: "md")
- `exactMatch`: boolean (default: false, exact path match for active state)
- All standard HTML anchor attributes (except variant - always uses "nav")

**Example:**

```tsx
import { NavLink } from '@/components/ui';

// Navigation link with auto active state
<NavLink href="/products">Products</NavLink>

// Exact match (only active on exact path)
<NavLink href="/" exactMatch>Home</NavLink>
```

### Title

Heading component with fluid typography and gradient support.

**Props:**

- `as`: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" (default: "h2")
- `size`: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" (auto-sized by heading level)
- `weight`: "normal" | "medium" | "semibold" | "bold" (default: "semibold")
- `align`: "left" | "center" | "right" (default: "left")
- `gradient`: boolean (default: false)
- All standard HTML heading attributes

**Example:**

```tsx
import { Title } from '@/components/ui';

// H1 with automatic 4xl size
<Title as="h1">Main Heading</Title>

// H2 with custom size
<Title as="h2" size="2xl">Section Title</Title>

// Centered gradient title
<Title as="h1" align="center" gradient>
  Beautiful Gradient
</Title>

// Custom weight
<Title as="h3" weight="bold">Bold Heading</Title>
```

### Text

Typography component for body text with various styling options.

**Props:**

- `as`: "p" | "span" | "div" | "label" (default: "p")
- `size`: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" (default: "md")
- `weight`: "normal" | "medium" | "semibold" | "bold" (default: "normal")
- `align`: "left" | "center" | "right" (default: "left")
- `color`: "default" | "muted" | "primary" | "secondary" | "error" | "success" (default: "default")
- `truncate`: boolean (default: false, single-line truncation)
- `lineClamp`: number (multi-line truncation)
- All standard HTML element attributes

**Example:**

```tsx
import { Text } from '@/components/ui';

// Basic paragraph
<Text>This is a paragraph of text.</Text>

// Small muted text
<Text size="sm" color="muted">Helper text</Text>

// Bold primary colored text
<Text weight="bold" color="primary">Important note</Text>

// Truncated text (single line)
<Text truncate>Very long text that will be truncated...</Text>

// Line clamped text (multi-line, 3 lines max)
<Text lineClamp={3}>
  Long description that will be clamped to 3 lines...
</Text>

// Span element
<Text as="span" size="sm">Inline text</Text>
```

### Container

Layout container with responsive max-widths.

**Props:**

- `size`: "sm" | "md" | "lg" | "xl" | "full" (default: "full")
- `className`: string
- All standard HTML div attributes

**Example:**

```tsx
import { Container } from '@/components/ui';

// Full width container
<Container>Content</Container>

// Medium width container
<Container size="md">Constrained content</Container>
```

### Section

Section wrapper with padding and background variants.

**Props:**

- `id`: string (for scroll anchoring)
- `padding`: "sm" | "md" | "lg" | "xl" (default: "md")
- `background`: "white" | "gray" | "primary" | "transparent" (default: "transparent")
- `className`: string
- All standard HTML section attributes

**Example:**

```tsx
import { Section } from '@/components/ui';

// Basic section
<Section padding="lg">
  <Container>Content</Container>
</Section>

// Section with background
<Section id="features" background="gray" padding="xl">
  <Container>Features content</Container>
</Section>
```

## Styling & Customization

All components use CSS custom properties (CSS variables) for easy theming. These are defined in `src/styles/globals.scss`:

```scss
:root {
  // Primary Colors
  --color-primary: #0066cc;
  --color-primary-hover: #0052a3;
  --color-cta: #ff6b35;
  --color-cta-hover: #e85a2a;
  --color-secondary: #6b7280;
  --color-secondary-hover: #4b5563;

  // Text Colors
  --color-text: #1f2937;
  --color-text-muted: #6b7280;
  --color-text-white: #ffffff;

  // Background Colors
  --color-white: #ffffff;
  --color-background-gray: #f9fafb;
  --color-background-hover: #f3f4f6;

  // Border Colors
  --color-border: #d1d5db;
  --color-border-hover: #9ca3af;

  // Semantic Colors
  --color-error: #dc2626;
  --color-success: #16a34a;

  // Focus
  --color-focus: #005fcc;

  // Gradient
  --color-gradient-from: #0066cc;
  --color-gradient-to: #ff6b35;

  // Navigation
  --color-nav: inherit;
  --color-nav-hover: var(--color-primary);
  --color-nav-active: var(--color-primary);
}
```

Simply modify these values in `globals.scss` to customize the entire theme.

## SCSS Mixins

Available mixins in `@/styles/mixins`:

```scss
@use '@/styles/mixins' as *;

// Responsive breakpoints
@include media($bp-tablet) {
  /* styles */
}
@include media($bp-laptop) {
  /* styles */
}

// Fluid typography
@include fontSize(16px, 24px);

// Focus visible styles
@include focus-visible;

// Hover (only on devices that support hover)
@include hover {
  /* hover styles */
}

// Text utilities
@include truncate;
@include line-clamp(3);

// Accessibility
@include visually-hidden;

// Button reset
@include button-reset;

// Transitions
@include transition(background-color, color, transform);
```

## Accessibility

All components follow accessibility best practices:

- Semantic HTML elements
- Proper focus indicators
- ARIA attributes where needed
- Keyboard navigation support
- Screen reader friendly

## TypeScript

All components are fully typed with exported TypeScript interfaces for easy prop discovery and type safety.
