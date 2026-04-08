'use client';

import { useDictionary } from '@/components/providers/DictionaryProvider';

export function useTranslation() {
  const { dictionary, lang } = useDictionary();

  const t = (key: string, params?: Record<string, string | number>) => {
    const keys = key.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = dictionary;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }

    // Handle string interpolation
    if (typeof value === 'string' && params) {
      return value.replace(/\{\{(\w+)\}\}/g, (_, paramKey) =>
        String(params[paramKey] ?? `{{${paramKey}}}`)
      );
    }

    return value;
  };

  return { t, lang, dictionary };
}
