import { getCollection } from 'astro:content';
import type { Lang } from '../i18n/config';
import { CURRENT_VERSION, SECTIONS_ORDER } from '../version.config';

export async function getSections(lang: Lang, version?: string) {
  const all = await getCollection('version');

  if (!version) version = CURRENT_VERSION;

  const sectionsRaw = all
  .map((entry) => {
    const [entryVersion, section, entryLang] = entry.id.split('/');

    return {
      ...entry,
      version: entryVersion,
      section,
      lang: entryLang,
    };
  })
  .filter(
    (entry) => entry.lang === lang && entry.version === version.toLowerCase()
  );

  const sections = SECTIONS_ORDER
  .map((type) =>
    sectionsRaw.find((s) => s.data.type === type)
  )
  .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return sections;
}

export async function getMenu(lang: Lang, version?: string) {
  const sections = await getSections(lang, version);
  return sections.map((section) => section.data.type);
}