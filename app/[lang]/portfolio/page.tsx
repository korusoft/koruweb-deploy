import type { Metadata } from 'next';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import PortfolioPageClient from './PortfolioPageClient';

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
    title: dictionary.metadata.portfolio.title,
    description: dictionary.metadata.portfolio.description,
    openGraph: {
      title: dictionary.metadata.portfolio.title,
      description: dictionary.metadata.portfolio.description,
      url: `https://korucode.com/${lang}/portfolio`,
      siteName: 'Koru - Consulting & Development',
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
  };
}

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
