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
    cs: '2026',
  },
  'vDefault': {
    pl: 'domyslna',
    en: 'default',
    cs: 'ingenious',
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
    cs: 'banner',
  },
  about: {
    pl: 'o-zlocie',
    en: 'about',
    cs: 'o-srazu',
  },
  directions: {
    pl: 'dojazd',
    en: 'directions',
    cs: 'doprava',
  },
  accomodation: {
    pl: 'zakwaterowanie',
    en: 'accomodation',
    cs: 'ubytovani',
  },
  cattering: {
    pl: 'wyzywienie',
    en: 'catering',
    cs: 'vyzva',
  },
  schedule: {
    pl: 'program',
    en: 'schedule',
    cs: 'rozpis',
  },  
  tracks: {
    pl: 'trasy',
    en: 'tracks',
    cs: 'trasy',
  },
  registry: {
    pl: 'rejestracja',
    en: 'registry',
    cs: 'registrace',
  },
  tShirts: {
    pl: 'koszulki',
    en: 't-shirts',
    cs: 'tricka',
  },
  contact: {
    pl: 'kontakt',
    en: 'contact',
    cs: 'kontakt',
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



