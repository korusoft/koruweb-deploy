'use client';

import { useCallback } from 'react';
import { useDictionary } from '@/components/providers/DictionaryProvider';
import { i18n } from '@/lib/i18n/config';

export function useLocalizedPath() {
  const { lang } = useDictionary();

  const localizedPath = useCallback(
    (path: string) => {
      // Handle root path
      if (path === '/') {
        return `/${lang}`;
      }
      // Handle paths that already start with language prefix
      for (const locale of i18n.locales) {
        if (path.startsWith(`/${locale}/`) || path === `/${locale}`) {
          return path;
        }
      }
      // Add language prefix
      return `/${lang}${path.startsWith('/') ? path : `/${path}`}`;
    },
    [lang]
  );

  return localizedPath;
}

export function useCurrentLanguage() {
  const { lang } = useDictionary();
  return lang;
}
