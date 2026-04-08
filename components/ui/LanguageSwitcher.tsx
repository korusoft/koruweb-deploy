'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@heroui/react';
import { i18n, languageNames, type Locale, LOCALE_STORAGE_KEY } from '@/lib/i18n/config';
import { useTranslation } from '@/hooks/useTranslation';

export default function LanguageSwitcher() {
  const { lang } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLang: Locale) => {
    if (newLang === lang) return;

    // Save the preference to localStorage
    localStorage.setItem(LOCALE_STORAGE_KEY, newLang);

    // Replace the current language in the path with the new one
    const pathParts = pathname.split('/').filter(Boolean);
    if (pathParts.length > 0 && i18n.locales.includes(pathParts[0] as Locale)) {
      pathParts[0] = newLang;
    } else {
      pathParts.unshift(newLang);
    }

    router.push(`/${pathParts.join('/')}`);
  };

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        variant="light"
        size="sm"
        className="min-w-17.5 font-medium"
        disabled
      >
        <span className="flex items-center gap-1.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          {lang.toUpperCase()}
        </span>
      </Button>
    );
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          size="sm"
          className="min-w-17.5 font-medium"
        >
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            {lang.toUpperCase()}
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Select language"
        selectionMode="single"
        selectedKeys={new Set([lang])}
        onSelectionChange={(keys) => {
          const selected = Array.from(keys)[0] as Locale;
          if (selected) handleLanguageChange(selected);
        }}
      >
        {i18n.locales.map((locale) => (
          <DropdownItem key={locale}>
            {languageNames[locale]}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
