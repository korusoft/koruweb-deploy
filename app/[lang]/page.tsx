import type { Metadata } from 'next';
import { i18n, type Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import Hero from '@/components/sections/Hero';
import ServicesSection from '@/components/sections/Services';
import AboutSection from '@/components/sections/About';
import TestimonialsSection from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTA';

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
    title: dictionary.metadata.home.title,
    description: dictionary.metadata.home.description,
    openGraph: {
      title: dictionary.metadata.home.title,
      description: dictionary.metadata.home.description,
      url: `https://korucode.com/${lang}`,
      siteName: 'Koru - Consulting & Development',
      locale: lang === 'es' ? 'es_CO' : 'en_US',
      type: 'website',
    },
  };
}

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
