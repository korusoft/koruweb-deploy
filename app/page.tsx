'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { i18n, type Locale, LOCALE_STORAGE_KEY } from '@/lib/i18n/config';

function getPreferredLocale(): Locale {
  if (typeof window === 'undefined') return i18n.defaultLocale;

  // First, check if there's a saved preference in localStorage
  const savedLocale = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (savedLocale && i18n.locales.includes(savedLocale as Locale)) {
    return savedLocale as Locale;
  }

  // If no saved preference, detect from browser language
  const browserLang = navigator.language || (navigator as { userLanguage?: string }).userLanguage || '';
  const langCode = browserLang.split('-')[0].toLowerCase();

  // Check if browser language is supported
  if (i18n.locales.includes(langCode as Locale)) {
    return langCode as Locale;
  }

  return i18n.defaultLocale;
}

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const locale = getPreferredLocale();
    router.replace(`/${locale}`);
  }, [router]);

  // Show a minimal loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="animate-pulse">
        <div className="w-16 h-16 bg-[#243e85] rounded-full" />
      </div>
    </div>
  );
}
