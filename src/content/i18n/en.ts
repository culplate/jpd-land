import { Dictionary } from './schema';

// Default language dictionary - use this as a template for other languages
const en: Dictionary = {
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
  },
  about: {
    title: 'About',
  },
  contact: {
    title: 'Contact',
  },
};

export default en;
