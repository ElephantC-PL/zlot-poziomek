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
      v2017: '2017',
      v2025: '2025',
      v2026: '2026'
    },
    section: {
        banner: 'Baner',
        about: 'O zlocie',
        directions: 'Dojazd',
        accomodation: 'Nocleg',
        cattering: 'Wyżywienie',
        schedule: 'Program',
        tracks: 'Trasy',
        registry: 'Rejestracja',
        tShirts: 'Koszulki',
        contact: 'Kontakt'
    },
    sectionsFragments: {
      getGpxFile: 'Pobierz trasę w postaci GPX'
    },
    footer: {
      copyright: 'Zlot Poziomek PL',
      privacyPolicy: 'Polityka prywatności',
      cookies: 'Ciasteczka',
      termsOfService: 'Regulamin',
      previousVersions: 'Strony poprzednich zlotów',
      askWebsite: 'Masz pytania dotyczące strony? Napisz:',     
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
      v2025: '2025',
      v2026: '2026'    
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
     sectionsFragments: {
      getGpxFile: 'Get the route as a GPX file'
    },
    footer: {
      copyright: 'Zlot Poziomek PL',
      privacyPolicy: 'Privacy policy',
      cookies: 'Cookies',
      termsOfService: 'Terms of Service',
      previousVersions: 'Previous editions pages',
      askWebsite: 'Have questions about the website? Contact us:'
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
