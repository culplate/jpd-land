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
        description:
          'Essential staple food for Japanese koi cultivation and breeding, inspired by Mount Fuji.',
        nutrition:
          'Balanced formula for steady growth. High in protein, ideal for everyday feeding.',
      },
      yamato: {
        name: 'Yamato',
        title: 'Yamato — Color',
        description:
          'Color-enhancing formula for Yamato Nishiki and other koi. Promotes vibrant red and white patterns.',
        nutrition:
          'Breeding and color enhancement (Iroage). Rich in pigments for deeper, richer coloration.',
      },
      shori: {
        name: 'Shori',
        title: 'Shori — Gain Weight',
        description:
          'High weight-gain formula for show koi. Helps develop robust body mass and competitive condition.',
        nutrition:
          'Katsugoi (victorious carp) formula. High calorie, supports rapid growth and body development.',
      },
      fujizakura: {
        name: 'Fujizakura',
        title: 'Fujizakura — Health',
        description:
          'Health management formula combining growth support with wellness. Named after Mount Fuji cherry.',
        nutrition:
          'High-growth and health care. Supports digestion, vitality, and overall koi well-being.',
      },
      shogun: {
        name: 'Shogun',
        title: 'Shogun — All Season',
        description:
          'Versatile all-season food suitable for both high and low water temperatures. Year-round feeding.',
        nutrition:
          'Digestible in warm and cold water. Balanced nutrition for consistent feeding in any season.',
      },
    },
  },
  about: {
    title: 'About',
  },
  contact: {
    title: 'Contact',
  },
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: February 2026',
    sections: [
      {
        heading: 'Information We Collect',
        content:
          'We collect information you provide directly to us, such as when you create an account, contact us, or subscribe to our newsletter. This may include your name, email address, phone number, and any other information you choose to provide.',
      },
      {
        heading: 'How We Use Your Information',
        content:
          'We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices and support messages, and to respond to your comments and questions.',
      },
      {
        heading: 'Information Sharing',
        content:
          'We do not share your personal information with third parties except as described in this policy or with your consent. We may share information with service providers who assist us in operating our business, subject to confidentiality agreements.',
      },
      {
        heading: 'Data Security',
        content:
          'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      },
      {
        heading: 'Your Rights',
        content:
          'You may access, correct, or delete your personal information at any time. You may also object to or restrict certain processing of your data. Contact us if you wish to exercise these rights.',
      },
      {
        heading: 'Contact Us',
        content:
          'If you have questions about this Privacy Policy, please contact us through our contact page or by email at the address provided on our website.',
      },
    ],
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
    privacy: {
      title: 'Privacy Policy | Next Starter',
      description:
        'Read our privacy policy and learn how we collect, use, and protect your data.',
    },
  },
};

export default en;
