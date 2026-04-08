import type { Metadata } from 'next';
import { HeroUIProviderWrapper } from '@/components/providers/HeroUIProviderWrapper';
import './globals.css';

export const metadata: Metadata = {
  title: 'Koru - Consulting & Development',
  description: 'Transform your business with modern technology solutions',
  metadataBase: new URL('https://korucode.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'es_CO',
    siteName: 'Koru - Consulting & Development',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo_isotipo_blue.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HeroUIProviderWrapper>{children}</HeroUIProviderWrapper>
      </body>
    </html>
  );
}
