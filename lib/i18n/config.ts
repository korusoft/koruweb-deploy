export const i18n = {
  defaultLocale: 'es',
  locales: ['es', 'en'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const languageNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

// Key for storing locale preference in localStorage
export const LOCALE_STORAGE_KEY = 'koru-preferred-locale';
