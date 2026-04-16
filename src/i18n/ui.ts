/*
    Object with translations.
    It shoud contain all texts from uniwersal components in all languages from config.ts/LOCALES.
    It shoudn't contain translations of page content.
*/
export const ui = {
  pl: {
    name: 'Astro Blog',    
    version: {
      vDefault: 'Domyślna',
      v2017: '2017'
    },
    section: {
        banner: 'Baner',
        about: 'O zlocie',
        directions: 'Dojazd',
        accomodation: 'Zakwaterowanie',
        cattering: 'Wyzywienie',
        schedule: 'Program',
        tracks: 'Trasy',
        registry: 'Rejestracja',
        tShirts: 'Koszulki',
        contact: 'Kontakt'
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
    version: {
      vDefault: 'Default',
      v2017: '2017',      
    },
    section: {
      banner: 'Banner',
      about: 'About',
      directions: 'Directions',
      accomodation: 'Accommodation',
      cattering: 'Catering',
      schedule: 'Schedule',
      tracks: 'Tracks',
      registry: 'Registry',
      tShirts: 'T-Shirts',
      contact: 'Contact'
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
