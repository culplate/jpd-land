// Define your dictionary type structure here
// Add your own types based on your application needs

/** Per-page SEO: title and description for generateMetadata */
export type PageSeo = {
  title: string;
  description: string;
};

export type ProductId =
  | 'fujiyama'
  | 'yamato'
  | 'shori'
  | 'fujizakura'
  | 'shogun';

export type ProductDictionaryItem = {
  name: string;
  title: string;
  description: string;
  nutrition: string;
};

export type ProductsDictionary = {
  title: string;
  items: Record<ProductId, ProductDictionaryItem>;
};

export type PrivacySection = {
  heading: string;
  content: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: FooterLink[];
};

export type FooterDictionary = {
  brand: {
    name: string;
    description: string;
  };
  groups: {
    services: FooterGroup;
    company: FooterGroup;
    legal: FooterGroup;
  };
  social: FooterLink[];
  copyright: string;
  privacy: string;
  terms: string;
  cookies: string;
};

export type Dictionary = {
  name: string;
  // Common translations
  common: {
    welcome: string;
    loading: string;
    submit: string;
    cancel: string;
  };
  // Navigation (header)
  nav: {
    products: string;
    about: string;
    contact: string;
    login: string;
    contactUs: string;
  };
  footer: FooterDictionary;
  main: {
    hero: {
      title: string;
      description: string;
      button: string;
    };
  };
  products: ProductsDictionary;
  about: {
    title: string;
  };
  contact: {
    title: string;
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: PrivacySection[];
  };
  // Site-wide SEO defaults (layout / home fallback)
  seo: {
    title: string;
    description: string;
  };
  // Default Open Graph
  og: {
    title: string;
    description: string;
    siteName: string;
  };
  // Per-page metadata for generateMetadata on each route
  pages: {
    home: PageSeo;
    about: PageSeo;
    contact: PageSeo;
    products: PageSeo;
    privacy: PageSeo;
  };
};
