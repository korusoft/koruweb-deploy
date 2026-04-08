import type { Metadata } from 'next';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import PrivacyPageClient from './PrivacyPageClient';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return {
    title: dictionary.metadata.privacy.title,
    description: dictionary.metadata.privacy.description,
    openGraph: {
      title: dictionary.metadata.privacy.title,
      description: dictionary.metadata.privacy.description,
      url: `https://korucode.com/${lang}/privacy`,
      siteName: 'Koru - Consulting & Development',
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
  };
}

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
