import type {Lang } from "./config";

/*
  MAIN TRANSLATIONS OBJECT is in the bottom of this file
*/

/*
  PARTIAL TRANSLATIONS OBJECT

  You can use this for children of main translations object.
  Its separated for egsample for blog post itp.
*/
export const blogRoutes: Routes = {
  firstpost: {
    pl: 'pierwszy-wpis',
    en: 'first-post',   
  },
  secondpost: {
    pl: 'drugi-wpis',
    en: 'second-post',
  },
  thirdpost: {
    pl: 'trzeci-wpis',
    en: 'third-post',
  },
  markdownstyleguide: {
    pl: 'stylowanie-markdown',
    en: 'markdown-style-guide',
  }
};

export const versionRoutes: Routes = {
  'v2017': {
    pl: '2017',
    en: '2017',
  },
  'v2025': {
    pl: '2025',
    en: '2025',
  },
  'vDefault': {
    pl: 'domyslna',
    en: 'default',
  }
};


/*
  MAIN TRANSLATIONS OBJECT

  Main object with translations for urls.
  Must contain all languages from config.ts/LOCALES
  Structure correspond to url parts - children are parts after "/"
*/
export const routes: Routes = {
  aboutUs: {
    pl: 'o-nas',
    en: 'about-us',
  },
  blog: {
    pl: 'blog',
    en: 'blog',
    children: blogRoutes
  },
  privacyPolicy: {
    pl: 'polityka-prywatnosci',
    en: 'privacy-policy',
  }, 
  cookies: {
    pl: 'ciasteczka',
    en: 'cookies',
  },
  termsOfService: {
    pl: 'regulamin',
    en: 'termsOfService',
  },
  deep: {
    pl: 'gleboko',
    en: 'deep',
    children: {
      deeper: {
        pl: 'glebiej',
        en: 'deeper',
        children: {
          nested: {
            pl: 'zagniezdzone',
            en: 'nested',
          }
        }
      }
    }
  },
  ...versionRoutes
};

export const fragmentRoutes: Routes = {
  banner: {
    pl: 'baner',
    en: 'banner',
  },
  about: {
    pl: 'o-zlocie',
    en: 'about',
  },
  directions: {
    pl: 'dojazd',
    en: 'directions',
  },
  accomodation: {
    pl: 'zakwaterowanie',
    en: 'accomodation', 
  },
  cattering: {
    pl: 'wyzywienie',
    en: 'catering',
  },
  schedule: {
    pl: 'program',
    en: 'schedule',
  },  
  tracks: {
    pl: 'trasy',
    en: 'tracks',
  },
  registry: {
    pl: 'rejestracja',
    en: 'registry',
  },
  tShirts: {
    pl: 'koszulki',
    en: 't-shirts',
  },
  contact: {
    pl: 'kontakt',
    en: 'contact',
  }
};

/*  
  DO NOT CHANGE !!!! 
  - its only types to make sure that structure of routes is correct  
*/
export type RouteNode = {
  [lang in Lang]: string;
} & {
  children?: Routes; 
};

export type Routes = {
  [key: string]: RouteNode;
};



