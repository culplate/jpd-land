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

export type NutritionItem = {
  title: string;
  value: string;
};

/** Product data for the product detail page (name, features, benefits, ingredients, nutrition, image) */
export type ProductPageItem = {
  name: string;
  features: string;
  benefits: string;
  ingredients: string;
  nutrition: NutritionItem[];
  packaging: string;
  imageLink: string;
};

export type ReviewCardItem = {
  title: string;
  review: string;
  author: string;
};

export type HistoryCardItem = {
  year: string;
  title: string;
  description: string;
  imageLink?: string | null;
};

export type BenefitsCardItem = {
  metric: string;
  description: string;
  fullInfo: {
    title: string;
    description: string;
  };
};

/** Product data for the product card (listing / grid) */
export type ProductCardItem = {
  name: string;
  japaneseName: string;
  description: string;
  imageLink: string;
};

export type ProductPageSections = {
  benefits: string;
  ingredients: string;
  nutrition: string;
  features: string;
  packaging: string;
  breadcrumb: string;
  relatedProducts: string;
};

export type ProductsDictionary = {
  title: string;
  sections: ProductPageSections;
  page: Record<ProductId, ProductPageItem>;
  card: Record<ProductId, ProductCardItem>;
};

export type PrivacySection = {
  heading: string;
  content: string;
};

export type FooterDictionary = {
  contactsTitle: string;
  phone: string;
  email: string;
  address: string;
  description: string;
  privacy: string;
  terms: string;
  designCopyright: string;
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
      titleMain: string;
      titleSub: string;
      description: string;
      button: string;
    };
    reviews: {
      title: string;
      button: string;
      reviews: ReviewCardItem[];
    };
    history: {
      title: string;
      cards: HistoryCardItem[];
    };
    benefits: {
      title: string;
      cards: BenefitsCardItem[];
    };
  };
  products: ProductsDictionary;
  about: {
    title: string;
    history: {
      title: string;
      cards: HistoryCardItem[];
    };
    productsCarousel: {
      title: string;
    };
  };
  contact: {
    title: string;
    form: {
      namePlaceholder: string;
      emailPlaceholder: string;
      phonePlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successMessage: string;
      errorMessage: string;
    };
    validation: {
      nameMin: string;
      nameMax: string;
      emailInvalid: string;
      emailMax: string;
      phoneInvalid: string;
      phoneMax: string;
    };
  };
  privacy: {
    title: string;
    lastUpdated: string;
    sections: PrivacySection[];
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
