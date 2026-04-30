import type {Lang } from "./config";

/*
  MAIN TRANSLATIONS OBJECT is in the bottom of this file
*/

/*
  PARTIAL TRANSLATIONS OBJECT

  You can use this for children of main translations object.
  Its separated for egsample for blog post itp.
*/


export const versionRoutes: Routes = {
  'v2026': {
    pl: '2026',
    en: '2026',
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



