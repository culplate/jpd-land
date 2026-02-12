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
    home: 'Головна',
    about: 'Про нас',
    contact: 'Контакти',
  },
  main: {
    hero: {
      title: 'Ласкаво просимо на наш сайт',
      description: 'Це опис нашого сайту',
      button: 'Почати',
    },
  },
  products: {
    title: 'Продукти',
    items: {
      fujiyama: {
        name: 'Fujiyama',
        title: 'Fujiyama — Базова',
        description: 'Базовий корм для японських кой для вирощування та розведення, натхненний горою Фуджі.',
        nutrition: 'Збалансована формула для стабільного росту. Високий вміст білка, ідеально для щоденного годування.',
      },
      yamato: {
        name: 'Yamato',
        title: 'Yamato — Колір',
        description: 'Корм для покращення забарвлення Yamato Nishiki та інших кой. Підсилює яскраві червоні та білі візерунки.',
        nutrition: 'Вирощування та покращення кольору (Iroage). Багатий на пігменти для глибшого, насиченішого забарвлення.',
      },
      shori: {
        name: 'Shori',
        title: 'Shori — Набір ваги',
        description: 'Формула для швидкого набору ваги виставкових кой. Сприяє розвитку міцної тілобудови.',
        nutrition: 'Формула Katsugoi (переможна короп). Висококалорійна, підтримує швидкий ріст та розвиток тіла.',
      },
      fujizakura: {
        name: 'Fujizakura',
        title: 'Fujizakura — Здоровʼя',
        description: 'Формула для здоровʼя, що поєднує підтримку росту з піклуванням про самопочуття кой. Названа на честь сакури Фуджі.',
        nutrition: 'Високий ріст та догляд за здоровʼям. Підтримує травлення, життєвість та загальний стан кой.',
      },
      shogun: {
        name: 'Shogun',
        title: 'Shogun — Усесезонний',
        description: 'Універсальний корм для всіх сезонів, підходить для високих і низьких температур води. Годування цілий рік.',
        nutrition: 'Засвоюється у теплій та холодній воді. Збалансоване харчування для стабільного годування у будь-який сезон.',
      },
    },
  },
  about: {
    title: 'Про нас',
  },
  contact: {
    title: 'Контакти',
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
  },
};

export default uk;
