/*
    Object with translations.
    It shoud contain all texts from uniwersal components in all languages from config.ts/LOCALES.
    It shoudn't contain translations of page content.
*/
export const ui = {
  pl: {
    name: 'Zlot Poziomek',
    title: 'Zlot Poziomek – Międzynarodowy Zlot Rowerów Poziomych',   
    description: 'Zlot Poziomek 2026 – międzynarodowe spotkanie miłośników rowerów poziomych w malowniczej Dolinie Baryczy.', 
    version: {
      vDefault: 'Domyślna',    
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
      copyright: 'Zlot Poziomek',
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
    name: 'Zlot Poziomek',
    title: 'Zlot Poziomek – International Recumbent Bike Rally',   
    description: 'Zlot Poziomek 2026 – an international gathering of recumbent bike enthusiasts in the picturesque Barycz Valley.',
    version: {
      vDefault: 'Default', 
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
      copyright: 'Zlot Poziomek',
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
  },
  cs: {
    name: 'Zlot Poziomek',
    title: 'Zlot Poziomek – Mezinárodní sraz lehokol',   
    description: 'Zlot Poziomek 2026 – mezinárodní setkání nadšenců lehokolů v malířské Dolině Baryczy.',
    version: {
      vDefault: 'Domyšlná',
      v2026: '2026'
    },
    section: {
      banner: 'Baner',
      about: 'O srazu',
      directions: 'Doprava',
      accomodation: 'Ubytování',
      cattering: 'Výživa',
      schedule: 'Rozpis',
      tracks: 'Trasy',
      registry: 'Registrace',
      tShirts: 'Trička',
      contact: 'Kontakt'
    },
      sectionsFragments: {
      getGpxFile: 'Stáhnout trasu jako GPX soubor'
    },
    footer: {
      copyright: 'Zlot Poziomek',
      privacyPolicy: 'Zásady ochrany osobních údajů',
      cookies: 'Cookies',
      termsOfService: 'Podmínky služby',
      previousVersions: 'Stránky předchozích zlotů',
      askWebsite: 'Máte dotazy ohledně webu? Kontaktujte nás:'
    },
    meta: {
      description: 'Vítejte na mé stránce!',
    },
    buttons: {
      accept: 'Přijmout',
      reject: 'Odmítnout'
    },
    cookiesStatus: {
      unknown: 'Bez nastavení (uživatel nevybral)',
      accepted: 'Cookies přijaty',
      rejected: 'Cookies odmítnuty'
    }
  }
} as const;
