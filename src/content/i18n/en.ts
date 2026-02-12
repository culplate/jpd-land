import { Dictionary } from './schema';

// Default language dictionary - use this as a template for other languages
const en: Dictionary = {
  name: 'Company Name',
  common: {
    welcome: 'Welcome',
    loading: 'Loading...',
    submit: 'Submit',
    cancel: 'Cancel',
  },
  nav: {
    home: 'Home',
    about: 'About',
    contact: 'Contact',
  },
  main: {
    hero: {
      title: 'Welcome to our website',
      description: 'This is a description of our website',
      button: 'Get started',
    },
  },
  products: {
    title: 'Products',
    items: {
      fujiyama: {
        name: 'Fujiyama',
        title: 'Fujiyama — Staple',
        description: 'Essential staple food for Japanese koi cultivation and breeding, inspired by Mount Fuji.',
        nutrition: 'Balanced formula for steady growth. High in protein, ideal for everyday feeding.',
      },
      yamato: {
        name: 'Yamato',
        title: 'Yamato — Color',
        description: 'Color-enhancing formula for Yamato Nishiki and other koi. Promotes vibrant red and white patterns.',
        nutrition: 'Breeding and color enhancement (Iroage). Rich in pigments for deeper, richer coloration.',
      },
      shori: {
        name: 'Shori',
        title: 'Shori — Gain Weight',
        description: 'High weight-gain formula for show koi. Helps develop robust body mass and competitive condition.',
        nutrition: 'Katsugoi (victorious carp) formula. High calorie, supports rapid growth and body development.',
      },
      fujizakura: {
        name: 'Fujizakura',
        title: 'Fujizakura — Health',
        description: 'Health management formula combining growth support with wellness. Named after Mount Fuji cherry.',
        nutrition: 'High-growth and health care. Supports digestion, vitality, and overall koi well-being.',
      },
      shogun: {
        name: 'Shogun',
        title: 'Shogun — All Season',
        description: 'Versatile all-season food suitable for both high and low water temperatures. Year-round feeding.',
        nutrition: 'Digestible in warm and cold water. Balanced nutrition for consistent feeding in any season.',
      },
    },
  },
  about: {
    title: 'About',
  },
  contact: {
    title: 'Contact',
  },
  seo: {
    title: 'Next Starter | Home',
    description: 'Default meta description for the site and home page.',
  },
  og: {
    title: 'Next Starter',
    description: 'Default Open Graph description for social sharing.',
    siteName: 'Next Starter',
  },
  pages: {
    home: {
      title: 'Next Starter | Home',
      description: 'Welcome to our website. This is the home page.',
    },
    about: {
      title: 'About | Next Starter',
      description: 'Learn more about us and what we do.',
    },
    contact: {
      title: 'Contact | Next Starter',
      description: 'Get in touch with us.',
    },
    products: {
      title: 'Products | Next Starter',
      description: 'Browse our products and services.',
    },
  },
};

export default en;
