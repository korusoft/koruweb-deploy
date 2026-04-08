export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const;

export type Locale = (typeof i18n)['locales'][number];

export const languageNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
};

// Key for storing locale preference in localStorage
export const LOCALE_STORAGE_KEY = 'koru-preferred-locale';
