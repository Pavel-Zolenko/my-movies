import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        lang: 'en-US',
        nav: {
          home: 'Home',
          movies: 'Movies',
        },
        title: {
          trending: 'Trending today',
          error: 'Error',
        },
        buttons: {
          back: 'Back',
          overview: 'Overview',
          cast: 'Cast',
          reviews: 'Reviews',
          trailer: 'Trailer',
        },
      },
    },
    uk: {
      translation: {
        lang: 'uk-UA',
        nav: {
          home: 'Домашня',
          movies: 'Фільми',
        },
        title: {
          trending: 'Популярні сьогодні',
          error: 'Помилка',
        },
        buttons: {
          back: 'Назад',
          overview: 'Огляд',
          cast: 'В ролях',
          reviews: 'Відгуки',
          trailer: 'Трейлер',
        },
      },
    },
  },
});

export default i18n;
