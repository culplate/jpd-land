# Next.js Starter Template

A production-ready Next.js starter template with TypeScript, SCSS modules, and a comprehensive UI component library.

## Features

- ⚡️ **Next.js 16** - Latest version with App Router
- 🎨 **TypeScript** - Full type safety
- 💅 **SCSS Modules** - Component-scoped styling
- 🧩 **UI Component Library** - Pre-built, customizable components
- 🎭 **Framer Motion** - Animation library (motion)
- 📦 **clsx** - Utility for constructing className strings
- 🔍 **ESLint + Prettier** - Code quality and formatting
- ♿️ **Accessibility First** - WCAG compliant components

## UI Components

This template includes a set of flexible, minimal-styled components:

### Layout

- **Container** - Responsive width containers with size variants
- **Section** - Section wrapper with padding and background options

### Typography

- **Title** - Heading component with fluid typography (h1-h6)
- **Text** - Body text with size, weight, and color variants

### Interactive

- **Button** - Button with variants (CTA, primary, outlined, ghost, text)
- **Link** - Next.js Link wrapper with auto-detection of external links and active states

### Utilities

- Comprehensive SCSS mixins for responsive design, focus states, hover detection, text utilities
- CSS custom properties for easy theming

See [Component Documentation](./src/components/ui/README.md) for detailed usage.

## Getting Started

### Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build

```bash
npm run build
npm run start
```

### Code Quality

```bash
# Lint
npm run lint
npm run lint:fix

# Format
npm run format
```

## Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button/
│   │   ├── Link/
│   │   ├── Title/
│   │   ├── Text/
│   │   ├── Container/
│   │   ├── Section/
│   │   └── index.ts     # Barrel export
│   └── examples/        # Component usage examples
├── styles/
│   ├── globals.scss     # Global styles
│   └── _mixins.scss     # SCSS mixins and utilities
└── app/                 # Next.js App Router pages
```

## Customization

### Theming

All components use CSS custom properties. Define your theme in `src/styles/globals.scss`:

```scss
:root {
  --color-primary: #0066cc;
  --color-cta: #ff6b35;
  --color-text: #1f2937;
  // ... more variables
}
```

### Component Variants

Components are designed to be easily extended. Add new variants by:

1. Updating the TypeScript interface
2. Adding the corresponding SCSS class
3. Including the variant in the className logic

## Example Usage

```tsx
import { Button, Container, Link, Section, Text, Title } from '@/components/ui';

export default function Page() {
  return (
    <Section padding="xl">
      <Container size="lg">
        <Title as="h1" gradient>
          Welcome
        </Title>
        <Text size="lg" color="muted">
          Get started by editing this page
        </Text>
        <Button variant="cta" size="lg">
          Get Started
        </Button>
        <Link href="/about" variant="underline">
          Learn more
        </Link>
      </Container>
    </Section>
  );
}
```

## Tech Stack

- **Framework:** Next.js 16
- **Language:** TypeScript 5
- **Styling:** SCSS Modules
- **Animation:** Framer Motion (motion)
- **Linting:** ESLint + Prettier
- **Package Manager:** npm/yarn/pnpm

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Framer Motion](https://www.framer.com/motion)
- [Component Documentation](./src/components/ui/README.md)

## License

MIT
