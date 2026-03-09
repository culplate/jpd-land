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
    contactsTitle: 'Contact Us',
    phone: '+48666777333',
    email: 'example@example.com',
    address: 'Kyiv, Yaroslaviv Val St 15',
    description:
      'Official representative office of JPD in Ukraine. Full range of premium lines. Direct deliveries from Japan, guaranteeing originality and freshness of the product.',
    privacy: 'Privacy Policy',
    terms: 'Terms&Agreements',
    designCopyright: '© {year} Japan Pet Design. All rights reserved.',
  },
  main: {
    hero: {
      title: 'Welcome to our website',
      description: 'This is a description of our website',
      button: 'Get started',
    },
    reviews: {
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
    history: {
      title: 'JPD – over 200 years of tradition',
      cards: [
        {
          year: '1819',
          title: 'Beginning of the Yoshida family dynasty',
          description:
            'In 1819 in Japan, the Yoshida family began breeding and selling ornamental goldfish. This laid the foundation for a centuries-long tradition renowned for its focus on quality and the well-being of the fish.',
        },
        {
          year: '1940s',
          title: 'Yoshida Fish Farm',
          description:
            'In the mid-20th century, the activity transformed into a structured operation – Yoshida Fish Farm. The farm specialized in professional breeding of ornamental fish and refining methods for their care and husbandry.',
        },
        {
          year: '1969',
          title: 'Founding of Japan Pet Design (JPD)',
          description:
            'On July 1, 1969, the company 日本動物薬品株式会社 began operating as a manufacturer systematically developing products for ornamental fish. From this point, the foundation was laid for what is now known as the JPD brand.',
        },
        {
          year: '1970–1990s',
          title: 'Innovation and development',
          description:
            'JPD shaped a product range associated with Japanese precision and disciplined quality. The brand strengthened its focus on prevention and treatment, developing scientific approaches to the health of ornamental fish.',
        },
      ],
    },
    benefits: {
      title: 'Modern JPD: The wisdom of generations in every pellet',
      cards: [
        {
          metric: '207',
          description: 'Years of tradition',
          fullInfo: {
            title: 'Yoshida Family Tradition',
            description:
              'Traditional koi care knowledge passed down through six generations of the Yoshida family since 1819.',
          },
        },
        {
          metric: '20+',
          description: 'Countries of partners',
          fullInfo: {
            title: 'International recognition',
            description:
              'Premium koi feed trusted by professional breeders and showcased at major Koi Shows around the world.',
          },
        },
        {
          metric: '54',
          description: 'Years of leadership',
          fullInfo: {
            title: 'Brand Heritage',
            description:
              'Decades of expertise that helped establish JPD as a globally respected standard in koi nutrition.',
          },
        },
        {
          metric: '100%',
          description: 'Scientific approach',
          fullInfo: {
            title: 'Health and Growth',
            description:
              'Formulated with input from scientists at Mie University and the National Fisheries University, supporting optimal growth and strong natural immunity in koi.',
          },
        },
      ],
    },
  },
  products: {
    title: 'Products',
    sections: {
      benefits: 'Benefits',
      ingredients: 'Ingredients',
      nutrition: 'Nutritional value',
      features: 'Features',
      breadcrumb: 'Back to products',
      relatedProducts: 'Related products',
    },
    page: {
      fujiyama: {
        name: 'Fujiyama',
        features: 'Staple line, large pellets, high digestibility.',
        benefits: 'Steady growth, ideal for everyday feeding.',
        ingredients:
          'Fish meal, tofu, corn, wheat, rice husks, wheat chaff, vitamins, minerals.',
        nutrition: [
          {
            title: 'Crude Protein',
            value: 'min 35%',
          },
          {
            title: 'Crude Fat',
            value: 'min 5%',
          },
          {
            title: 'Crude Fiber',
            value: 'max 2.7%',
          },
          {
            title: 'Crude Ash',
            value: 'max 13%',
          },
          {
            title: 'Moisture',
            value: 'max 10%',
          },
          {
            title: 'Phosphorus',
            value: '0.7%',
          },
          {
            title: 'Calcium',
            value: '0.4%',
          },
          {
            title: 'Sodium',
            value: '0.1%',
          },
        ],
        imageLink: '/img/food/fujiyama-poster.jpg',
      },
      yamato: {
        name: 'Yamato',
        features:
          'JPD Yamato is a high-quality koi food made from natural ingredients and designed to keep koi in excellent condition.\n\nThe formula is based on high-quality aquatic animal protein sources that provide balanced nutrition and support healthy koi growth.\n\nThe food contains natural color enhancers, including astaxanthin and microalgae components, which help maintain the bright, natural coloration of koi.\n\nThe pellets are floating, keep their shape for a long time in water, and produce minimal waste. \n\n Do not feed this food in water which is, or will soon be below 55°F (13°C).',
        benefits:
          'A highly nutritious formula supports active growth and helps maintain koi in excellent physical condition.\n\nNatural ingredients and appetite stimulants improve feed intake.\n\nAstaxanthin and other natural pigments enhance the coloration of the fish.\n\nLactoferrin helps improve the fish’s natural resistance to diseases.\n\nThe pellets do not break apart in the water, helping to maintain better water quality.',
        ingredients:
          'Fish Meal, Cuttlefish Meal, Wheat Flour, Corn, Bean Oil Cake, Sodium phosphate, vitamins, minerals, and astaxanthin.',
        nutrition: [
          { title: 'Crude Protein', value: 'min 34.0%' },
          { title: 'Crude Fat', value: 'min 7.0%' },
          { title: 'Crude Fiber', value: 'max 3.0%' },
          { title: 'Crude Ash', value: 'max 10.0%' },
          { title: 'Moisture', value: 'max 10.0%' },
        ],
        imageLink: '/img/food/yamato-poster.jpg',
      },
      shori: {
        name: 'Shori',
        features:
          'JPD Shori is a premium koi food manufactured with rich nutrition of high protein and high fat for maximum koi growth. Fortified with astaxanthin, which is necessary for koi color enhancement. This food contains Probiotics (Toyoserin) which helps digestion.',
        benefits:
          'All ingredients in this food are selected carefully with dietician studies and JPD technology. This food is formulated with high quality fish and plant protein which makes a good digestibility for koi.\n\n It should be noted that this food is high in protein (45%) but also low in ash (8.5%). The ash is digested slowly because high protein fish meal is used. Astaxanthin makes reds redder and vitamin C makes whites whiter. These ingredients make for a shinier, beautiful body. \n\n This food is formulated with probiotics which reduces the waste in the water and regulates the functions of the intestines. This food does not degrade the water quality, because the pellet keeps its shape for a long time in the water.',
        ingredients:
          'Fish Meal, Krill Meal, Wheat Flour, Soybean Cake, Corn, Gluten Meal, Defatted Rice Bran, Fish Oil, Calcium Phosphate, Garlic Powder, Salt, Toyoserin (Probiotics), Astaxanthin.\n\n Vitamins: Vitamin A, Vitamin D3, Vitamin E, Vitamin B1, Vitamin B2, Pantothenic Acid, Vitamin B12, Niacin, Vitamin B6, Folic Acid, Biotin, Para Amino Benzoic Acid, Inositol, Heat-resistant Vitamin C, Vitamin K3, Choline.\n\n Minerals: Ferric Sulfate, Copper Sulfate, Manganese Carbonate, Zinc Carbonate, Cobalt Carbonate, Calcium Iodate, Magnesium Carbonate.',
        nutrition: [
          { title: 'Crude Protein', value: 'min 45.0%' },
          { title: 'Crude Fat', value: 'min 8.0%' },
          { title: 'Crude Fiber', value: 'max 4.0%' },
          { title: 'Moisture', value: 'max 11.0%' },
          { title: 'Crude Ash', value: 'max 15.0%' },
          { title: 'Phosphorous', value: 'min 1.2%' },
          { title: 'Calcium', value: 'max 1.7%' },
        ],
        imageLink: '/img/food/shori-poster.jpg',
      },
      fujizakura: {
        name: 'Fujizakura',
        features:
          'JPD Fujizakura - is a premium koi food enriched with heat-resistant vitamin C, Torula yeast and β-glucan, which support fish health and immunity.\n\nContains astaxanthin, which enhances natural koi coloration and makes colours more saturated.\n\nMade from high-quality fish meal and krill meal, making the food highly palatable and appetising for koi.',
        benefits:
          "This food contains specially selected additives, including seaweed extract, β-glucan and yeast cell wall components, which act as natural immunostimulants. They support the fish's immune system and help it respond faster to external stimuli.\n\nThis food is especially recommended when fish are under stress due to environmental changes. It is also well suited for maintaining the condition of koi being prepared for shows.\n\nPellets retain their shape in water for a long time, so the food does not degrade water quality.\n\nStress is one of the main causes of disease in fish. The food is enriched with stable vitamin C, which helps reduce the impact of stress.\n\nAstaxanthin enhances red tones, and vitamin C makes white colours brighter. This gives koi bodies a natural shine and saturated, harmonious coloration.",
        ingredients:
          'Wheat flour, fish meal, squid meal, soybean cake, corn gluten, defatted rice bran, wheat germ, fish oil, calcium phosphate, salt, Toyoserin (probiotics).\n\nVitamins: A, D3, E, K3, B1, B2, pantothenic acid, B12, niacin, B6, folic acid, biotin.\n\nMinerals: cobalt carbonate, calcium iodate, magnesium carbonate.',
        nutrition: [
          { title: 'Crude Protein', value: 'min 37.0%' },
          { title: 'Crude Fat', value: 'min 6.0%' },
          { title: 'Crude Fiber', value: 'max 4.0%' },
          { title: 'Moisture', value: 'max 11.0%' },
          { title: 'Crude Ash', value: 'max 14.0%' },
          { title: 'Phosphorous', value: 'min 1.2%' },
          { title: 'Calcium', value: 'max 1.7%' },
        ],
        imageLink: '/img/food/fujizakura-poster.jpg',
      },
      shogun: {
        name: 'Shogun',
        features:
          'JPD Shogun - is a premium koi food enriched with wheat germ and probiotics, suitable for year-round use.\n\nContains probiotics that help keep the aquatic environment clean.\n\nMade from high-quality fish meal and cuttlefish meal, making the food particularly attractive and tasty for koi.',
        benefits:
          'This is a basic daily food from the affordable range, designed for regular feeding. Thanks to its balanced formula, it can also be combined with other JPD foods.\n\nThe recipe combines fish meal, feed oils and grain components that stimulate koi appetite and promote active food consumption.\n\nVitamin C helps maintain a clean white colour on the fish body. Pellets retain their shape in water for a long time, so the food does not degrade water quality.',
        ingredients:
          'Wheat flour, fish meal, soybean cake, cuttlefish meal, Haematococcus (microalgae), lactoferrin, natural astaxanthin, vitamins and minerals.',
        nutrition: [
          { title: 'Crude Protein', value: 'min 36.0%' },
          { title: 'Crude Fat', value: 'min 7.0%' },
          { title: 'Crude Fiber', value: 'max 2.5%' },
          { title: 'Moisture', value: 'max 10.0%' },
          { title: 'Crude Ash', value: 'max 7.1%' },
          { title: 'Phosphorous', value: 'min 0.9%' },
          { title: 'Calcium', value: 'max 1.3%' },
        ],
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
        description: 'Premium growth formula with astaxanthin and probiotics.',
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
    history: {
      title: 'JPD History',
      cards: [
        {
          year: '1819',
          title: 'Beginning of the Yoshida family dynasty',
          description:
            'In 1819 in Japan, the Yoshida family began breeding and selling ornamental goldfish. This laid the foundation for a centuries-old tradition known as "Kingyo no Yoshida" - one of the oldest dynasties of goldfish breeders in Japan. This period laid the foundation for expertise in fish health and ornamental fish keeping.',
          imageLink: null,
        },
        {
          year: '1895',
          title: 'Recognition in Ranchu breeding',
          description:
            'By the end of the 19th century, the Yoshida family was already participating in professional Ranchu rankings and exhibitions - one of the most prestigious breeds of goldfish. This confirms the high level of breeding work and the professional status of the family in ornamental fish farming.',
          imageLink: null,
        },
        {
          year: '1940s',
          title: 'Yoshida Fish Farm',
          description:
            'In the mid-20th century, the activity transformed into a structured farm - Yoshida Fish Farm. The farm specializes in professional breeding and care of ornamental fish, which became a practical basis for the further development of fish health products.',
          imageLink: null,
        },
        {
          year: '1956',
          title: 'Start of product manufacturing',
          description:
            'In 1966, Yoshida Shoten emerged, marking a step from a family business to a market-oriented enterprise. During this period, ornamental fish breeding and care practices were transformed into commercial products and recommendations for aquarists.',
          imageLink: null,
        },
        {
          year: '1959',
          title: 'Founding of Japan Pet Design (JPD)',
          description:
            'On July 1, 1969, the company 日本動物薬品株式会社 began operating as a manufacturer systematically developing products for ornamental fish. From this moment, what is known today as Japan Pet Design (JPD) - feeds, health preparations for fish, and solutions for stable aquarium environments - was formed.',
          imageLink: null,
        },
        {
          year: '1970-90s',
          title: 'Innovation and development',
          description:
            'During these years, JPD shaped an assortment associated with Japanese precision and quality discipline. The brand strengthened its focus on prevention and treatment, developed scientific approaches to fish health, and introduced new lines for aquaristics, notably the famous Green F series. It solidified its reputation as a manufacturer trusted by koi and goldfish owners.',
          imageLink: null,
        },
        {
          year: '2000s',
          title: 'International presence',
          description:
            'JPD actively participates in international exhibitions and industry events: Interzoo (Germany), CIPS (China), Aquarama (Singapore), Japan Pet Fair. The brand enters the European and global markets.',
          imageLink: null,
        },
      ],
    },
    productsCarousel: {
      title: 'JPD Feeds in Ukraine',
    },
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
