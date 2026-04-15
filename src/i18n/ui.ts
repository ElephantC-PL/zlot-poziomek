/*
    Object with translations.
    It shoud contain all texts from uniwersal components in all languages from config.ts/LOCALES.
    It shoudn't contain translations of page content.
*/
export const ui = {
  pl: {
    name: 'Astro Blog',
    nav: {
      home: 'Start',
      about: 'O nas',
      blog: 'Blog',
      nested: 'Zagnieżdżone',
    },
    version: {
      vDefault: 'Domyślna',
      v2026: '2026',
      v2025: '2025'
    },
    section: {
      section1: 'Sekcja 1',
      section2: 'Sekcja 2',
      section3: 'Sekcja 3',
    },
    footer: {
      copyright: 'Twoje imię tutaj. Wszelkie prawa zastrzeżone.',
      privacyPolicy: 'Polityka prywatności',
      cookies: 'Ciasteczka',
      termsOfService: 'Regulamin'
    },
    meta: {
      description: 'Witaj na mojej stronie!',
    },
    buttons: {
      accept: 'Akceptuj',
      reject: 'Odrzuć'
    },
    cookiesStatus: {
      unknown: 'Brak ustawień (użytkownik nie wybrał)',
      accepted: 'Ciasteczka zaakceptowane',
      rejected: 'Ciasteczka odrzucone'
    }
  },
  en: {
    name: 'Astro Blog',
    nav: {
      home: 'Home',
      about: 'About us',
      blog: 'Blog',
      nested: 'Nested',
    },
    version: {
      vDefault: 'Default',
      v2026: '2026',
      v2025: '2025'
    },
    section: {
      section1: 'Section 1',
      section2: 'Section 2',
      section3: 'Section 3',
    },
    footer: {
      copyright: 'Your name here. All rights reserved.',
      privacyPolicy: 'Privacy policy',
      cookies: 'Cookies',
      termsOfService: 'Terms of Service'
    },
    meta: {
      description: 'Welcome to my website!',
    },
    buttons: {
      accept: 'Accept',
      reject: 'Reject'
    },
    cookiesStatus: {
      unknown: 'No settings (user has not chosen)',
      accepted: 'Cookies accepted',
      rejected: 'Cookies rejected'
    }
  }
} as const;
