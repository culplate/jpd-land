// Minimal dictionary for error pages to avoid bundling large i18n files
// This file is safe to import in Client Components (like error.tsx, not-found.tsx)
// Add your supported locales here

export const errorMessages = {
  en: {
    notFound: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.',
      backHome: 'Back to Home',
    },
    serverError: {
      title: '500 - Server Error',
      description: 'Something went wrong on our end.',
      tryAgain: 'Try Again',
    },
  },
  uk: {
    notFound: {
      title: '404 - Сторінку не знайдено',
      description: 'Сторінка, яку ви шукаєте, не існує.',
      backHome: 'Повернутися на головну',
    },
    serverError: {
      title: '500 - Помилка сервера',
      description: 'Щось пішло не так з нашого боку.',
      tryAgain: 'Спробувати знову',
    },
  },
  // Add more locales as needed:
  // es: {
  //   notFound: { title: '404 - Página No Encontrada', ... },
  //   serverError: { title: '500 - Error del Servidor', ... },
  // },
} as const;

export type ErrorDictionary = {
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  serverError: {
    title: string;
    description: string;
    tryAgain: string;
  };
};
