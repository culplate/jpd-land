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
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    login: 'Login',
    contactUs: 'Contact Us',
  },
  footer: {
    brand: {
      name: 'Client Name',
      description:
        "Replace this with your client's brief company description or tagline. Keep it concise and memorable.",
    },
    groups: {
      services: {
        title: 'Services',
        links: [
          { label: 'Services', href: '#services' },
          { label: 'Portfolio', href: '#portfolio' },
          { label: 'Solutions', href: '#solutions' },
          { label: 'Resources', href: '#resources' },
        ],
      },
      company: {
        title: 'Company',
        links: [
          { label: 'About', href: '#about' },
          { label: 'Team', href: '#team' },
          { label: 'Careers', href: '#careers' },
          { label: 'Contact', href: '#contact' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '#privacy' },
          { label: 'Terms of Service', href: '#terms' },
          { label: 'Cookie Policy', href: '#cookies' },
          { label: 'Sitemap', href: '#sitemap' },
        ],
      },
    },
    social: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
    copyright: '© {year} Client Name. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
  },
  main: {
    hero: {
      title: 'Welcome to our website',
      description: 'This is a description of our website',
      button: 'Get started',
    },
    benefits: {
      title: 'Our customers value in JPD',
      reviews: [
        {
          title: 'Review',
          review:
            'Lorem ipsum dolor sit amet consectetur. Accumsan sapien tellus eros eros est vitae mi laoreet neque. Scelerisque felis nullam arcu id nunc ut congue quam.',
          author: 'Vladyslav B.',
        },
        {
          title: 'Review',
          review:
            'Lorem ipsum dolor sit amet consectetur. Accumsan sapien tellus eros eros est vitae mi laoreet neque. Scelerisque felis nullam arcu id nunc ut congue quam.',
          author: 'Vitalii B.',
        },
        {
          title: 'Review',
          review:
            'Lorem ipsum dolor sit amet consectetur. Accumsan sapien tellus eros eros est vitae mi laoreet neque. Scelerisque felis nullam arcu id nunc ut congue quam.',
          author: 'Oleksandr B.',
        },
      ],
    },
  },
  products: {
    title: 'Products',
    page: {
      fujiyama: {
        name: 'Fujiyama',
        features: 'Staple line, large pellets, high digestibility.',
        benefits: 'Steady growth, ideal for everyday feeding.',
        ingredients: 'Fish meal, wheat, vitamins and minerals.',
        nutrition:
          'Balanced formula for steady growth. High in protein, ideal for everyday feeding.',
        imageLink: '/img/food/fujiyama-poster.jpg',
      },
      yamato: {
        name: 'Yamato',
        features: 'Color enhancement, floating pellets, premium formula.',
        benefits: 'Vibrant red and white patterns (Iroage).',
        ingredients: 'Pigments, fish meal, natural additives.',
        nutrition:
          'Breeding and color enhancement. Rich in pigments for deeper, richer coloration.',
        imageLink: '/img/food/yamato-poster.jpg',
      },
      shori: {
        name: 'Shori',
        features: 'Rapid weight gain, super-premium, Katsugoi formula.',
        benefits: 'Robust body mass, suited for show koi.',
        ingredients: 'High-protein components, fats, vitamins.',
        nutrition:
          'High-calorie formula, supports rapid growth and body development.',
        imageLink: '/img/food/shori-poster.jpg',
      },
      fujizakura: {
        name: 'Fujizakura',
        features: 'Health and growth, combined formula.',
        benefits: 'Digestion, vitality, overall koi well-being.',
        ingredients: 'Premium grains, probiotics, vitamins.',
        nutrition:
          'High-growth and health care. Supports digestion and overall condition.',
        imageLink: '/img/food/fujizakura-poster.jpg',
      },
      shogun: {
        name: 'Shogun',
        features: 'All-season, digestible in cold and warm water.',
        benefits: 'Year-round feeding without changing food.',
        ingredients: 'Adaptive formula, balanced macronutrients.',
        nutrition:
          'Digestible in warm and cold water. Balanced nutrition for consistent feeding in any season.',
        imageLink: '/img/food/shogun-poster.png',
      },
    },
    card: {
      fujiyama: {
        name: 'Fujiyama',
        japaneseName: '富士山',
        description: 'Basic diet, easy digestion.',
        imageLink: '/img/food/fujiyama-sq.png',
      },
      yamato: {
        name: 'Yamato',
        japaneseName: '大和錦',
        description: 'Bright colors, natural coloring.',
        imageLink: '/img/food/yamato-sq.png',
      },
      shori: {
        name: 'Shori',
        japaneseName: '勝鯉',
        description: 'Fast growth, super-premium formula.',
        imageLink: '/img/food/shori-sq.png',
      },
      fujizakura: {
        name: 'Fujizakura',
        japaneseName: '富士桜',
        description: 'Immunity strengthening, health protection.',
        imageLink: '/img/food/fujizakura-sq.png',
      },
      shogun: {
        name: 'Shogun',
        japaneseName: '将軍',
        description: 'For cold water, all-season.',
        imageLink: '/img/food/shogun-sq.png',
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
