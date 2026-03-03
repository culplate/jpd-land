import { Dictionary } from './schema';

const uk: Dictionary = {
  name: 'Назва компанії',
  common: {
    welcome: 'Ласкаво просимо',
    loading: 'Завантаження...',
    submit: 'Надіслати',
    cancel: 'Скасувати',
  },
  nav: {
    products: 'Продукти',
    about: 'Про нас',
    contact: 'Контакти',
    login: 'Увійти',
    contactUs: 'Зв’язатися',
  },
  footer: {
    brand: {
      name: 'Назва клієнта',
      description:
        'Замініть це на короткий опис компанії клієнта або слоган. Коротко та запам’ятовувано.',
    },
    groups: {
      services: {
        title: 'Послуги',
        links: [
          { label: 'Послуги', href: '#services' },
          { label: 'Портфоліо', href: '#portfolio' },
          { label: 'Рішення', href: '#solutions' },
          { label: 'Ресурси', href: '#resources' },
        ],
      },
      company: {
        title: 'Компанія',
        links: [
          { label: 'Про нас', href: '#about' },
          { label: 'Команда', href: '#team' },
          { label: 'Кар’єра', href: '#careers' },
          { label: 'Контакти', href: '#contact' },
        ],
      },
      legal: {
        title: 'Правова інформація',
        links: [
          { label: 'Політика конфіденційності', href: '#privacy' },
          { label: 'Умови використання', href: '#terms' },
          { label: 'Політика cookies', href: '#cookies' },
          { label: 'Карта сайту', href: '#sitemap' },
        ],
      },
    },
    social: [
      { label: 'Twitter', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'Instagram', href: '#' },
    ],
    copyright: '© {year} Назва клієнта. Усі права захищені.',
    privacy: 'Конфіденційність',
    terms: 'Умови',
    cookies: 'Cookies',
  },
  main: {
    hero: {
      title: 'JPD: Імператорський стандарт харчування для Коі',
      description: 'Це опис нашого сайту',
      button: 'Переглянути всі',
    },
    reviews: {
      title: 'Наші замовники цінують в JPD',
      reviews: [
        {
          title: 'Відгук',
          review:
            'Lorem ipsum dolor sit amet consectetur. Accumsan sapien tellus eros eros est vitae mi laoreet neque. Scelerisque felis nullam arcu id nunc ut congue quam.',
          author: 'Владислав Б.',
        },
        {
          title: 'Відгук',
          review:
            'Lorem ipsum dolor sit amet consectetur. Accumsan sapien tellus eros eros est vitae mi laoreet neque. Scelerisque felis nullam arcu id nunc ut congue quam.',
          author: 'Віталій Б.',
        },
        {
          title: 'Відгук',
          review:
            'Lorem ipsum dolor sit amet consectetur. Accumsan sapien tellus eros eros est vitae mi laoreet neque. Scelerisque felis nullam arcu id nunc ut congue quam.',
          author: 'Олександр Б.',
        },
      ],
    },
    history: {
      title: 'JPD - понад 200 років традицій',
      cards: [
        {
          year: '1819',
          title: 'Початок родинної династії Yoshida',
          description:
            'У 1819 році в Японії родина Yoshida розпочала діяльність у сфері розведення та продажу декоративних золотих риб. Це стало основою для формування багатовікової традиції, відомої увагою до якості та добробуту риб.',
          imageLink: null,
        },
        {
          year: '1940-ві',
          title: 'Yoshida Fish Farm',
          description:
            'У середині XX століття діяльність трансформується у структуроване господарство – Yoshida Fish Farm. Ферма спеціалізується на професійному розведенні декоративних риб та вдосконаленні методів їх утримання.',
          imageLink: null,
        },
        {
          year: '1969',
          title: 'Заснування Japan Pet Design (JPD)',
          description:
            '1 липня 1969 року компанія 日本動物薬品株式会社 починає роботу як виробник, який системно розвиває напрям продукції для декоративних риб. Саме з цього моменту формується те, що сьогодні відоме як бренд JPD.',
          imageLink: null,
        },
        {
          year: '1970-1990-ті',
          title: 'Інновації та розвиток',
          description:
            'JPD формує асортимент, який асоціюється з японською точністю та дисципліною якості. Бренд посилює напрями профілактики та лікування, розвиває наукові підходи до здоровʼя декоративних риб.',
          imageLink: null,
        },
      ],
    },
  },
  products: {
    title: 'Продукти',
    page: {
      fujiyama: {
        name: 'Fujiyama',
        features: 'Базова лінійка, великі гранули, висока засвоюваність.',
        benefits: 'Стабільний ріст, ідеально для щоденного годування.',
        ingredients: 'Рибне борошно, пшениця, вітаміни та мінерали.',
        nutrition:
          'Збалансована формула для стабільного росту. Високий вміст білка, ідеально для щоденного годування.',
        imageLink: '/img/food/fujiyama-poster.jpg',
      },
      yamato: {
        name: 'Yamato',
        features: 'Підсилення кольору, плаваючі гранули, преміум формула.',
        benefits: 'Яскраві червоні та білі візерунки (Iroage).',
        ingredients: 'Пігменти, рибне борошно, натуральні добавки.',
        nutrition:
          'Вирощування та покращення кольору. Багатий на пігменти для глибшого, насиченішого забарвлення.',
        imageLink: '/img/food/yamato-poster.jpg',
      },
      shori: {
        name: 'Shori',
        features: 'Швидкий набір ваги, супер-преміум, формула Katsugoi.',
        benefits: 'Міцна тілобудова, підходить для виставкових кой.',
        ingredients: 'Високобілкові компоненти, жири, вітаміни.',
        nutrition:
          'Висококалорійна формула, підтримує швидкий ріст та розвиток тіла.',
        imageLink: '/img/food/shori-poster.jpg',
      },
      fujizakura: {
        name: 'Fujizakura',
        features: 'Здоровʼя та ріст, комбінована формула.',
        benefits: 'Травлення, життєвість, загальний стан кой.',
        ingredients: 'Преміум злаки, пробіотики, вітаміни.',
        nutrition:
          'Високий ріст та догляд за здоровʼям. Підтримує травлення та загальний стан.',
        imageLink: '/img/food/fujizakura-poster.jpg',
      },
      shogun: {
        name: 'Shogun',
        features: 'Усесезонний, засвоюється в холодній та теплій воді.',
        benefits: 'Годування цілий рік без зміни корму.',
        ingredients: 'Адаптивна формула, збалансовані макронутрієнти.',
        nutrition:
          'Засвоюється у теплій та холодній воді. Збалансоване харчування для стабільного годування у будь-який сезон.',
        imageLink: '/img/food/shogun-poster.png',
      },
    },
    card: {
      fujiyama: {
        name: 'Fujiyama',
        japaneseName: '富士山',
        description: 'Базовий раціон, легке засвоєння.',
        imageLink: '/img/food/fujiyama-sq.png',
      },
      yamato: {
        name: 'Yamato',
        japaneseName: '大和錦',
        description: 'Яскраві кольори, природне забарвлення.',
        imageLink: '/img/food/yamato-sq.png',
      },
      shori: {
        name: 'Shori',
        japaneseName: '勝鯉',
        description: 'Швидкий ріст, супер-преміум формула.',
        imageLink: '/img/food/shori-sq.png',
      },
      fujizakura: {
        name: 'Fujizakura',
        japaneseName: '富士桜',
        description: 'Зміцнення імунітету, захист здоровʼя.',
        imageLink: '/img/food/fujizakura-sq.png',
      },
      shogun: {
        name: 'Shogun',
        japaneseName: '将軍',
        description: 'Для холодної води, всесезонний.',
        imageLink: '/img/food/shogun-sq.png',
      },
    },
  },
  about: {
    title: 'Про нас',
  },
  contact: {
    title: 'Контакти',
  },
  privacy: {
    title: 'Політика конфіденційності',
    lastUpdated: 'Останнє оновлення: лютий 2026',
    sections: [
      {
        heading: 'Інформація, яку ми збираємо',
        content:
          'Ми збираємо інформацію, яку ви надаєте нам безпосередньо, наприклад при створенні облікового запису, зв’язку з нами або підписці на розсилку. Це може включати ваше ім’я, електронну адресу, номер телефону та будь-яку іншу інформацію, яку ви обираєте надати.',
      },
      {
        heading: 'Як ми використовуємо вашу інформацію',
        content:
          'Ми використовуємо зібрану інформацію для надання, підтримки та покращення наших послуг, обробки транзакцій, надсилання технічних повідомлень і підтримки, а також для відповіді на ваші коментарі та запитання.',
      },
      {
        heading: 'Поширення інформації',
        content:
          'Ми не поширюємо вашу персональну інформацію серед третіх сторін, за винятком випадків, описаних у цій політиці, або за вашою згодою. Ми можемо ділитися інформацією з постачальниками послуг, які допомагають нам у веденні бізнесу, за умови угод про конфіденційність.',
      },
      {
        heading: 'Безпека даних',
        content:
          'Ми впроваджуємо відповідні технічні та організаційні заходи для захисту вашої персональної інформації від несанкціонованого доступу, зміни, розголошення або знищення.',
      },
      {
        heading: 'Ваші права',
        content:
          'Ви можете отримати доступ, виправити або видалити свою персональну інформацію в будь-який час. Ви також можете заперечити проти або обмежити певну обробку ваших даних. Зв’яжіться з нами, якщо ви хочете скористатися цими правами.',
      },
      {
        heading: 'Контакти',
        content:
          'Якщо у вас виникли запитання щодо цієї Політики конфіденційності, будь ласка, зв’яжіться з нами через сторінку контактів або електронною поштою за адресою, вказаною на нашому сайті.',
      },
    ],
  },
  seo: {
    title: 'Next Starter | Головна',
    description: 'Мета-опис сайту та головної сторінки за замовчуванням.',
  },
  og: {
    title: 'Next Starter',
    description: 'Опис за замовчуванням для Open Graph та соцмереж.',
    siteName: 'Next Starter',
  },
  pages: {
    home: {
      title: 'Next Starter | Головна',
      description: 'Ласкаво просимо на наш сайт. Це головна сторінка.',
    },
    about: {
      title: 'Про нас | Next Starter',
      description: 'Дізнайтеся більше про нас та нашу діяльність.',
    },
    contact: {
      title: 'Контакти | Next Starter',
      description: 'Зв’яжіться з нами.',
    },
    products: {
      title: 'Продукти | Next Starter',
      description: 'Перегляньте наші продукти та послуги.',
    },
    privacy: {
      title: 'Політика конфіденційності | Next Starter',
      description:
        'Ознайомтеся з нашою політикою конфіденційності та дізнайтеся, як ми збираємо, використовуємо та захищаємо ваші дані.',
    },
  },
};

export default uk;
