import type { Metadata } from 'next';
import { Alexandria, IBM_Plex_Sans_Arabic } from 'next/font/google';
import './globals.css';

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-alexandria',
  display: 'swap',
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
});

import BrandProviderWrapper from '@/components/BrandProviderWrapper';

export const metadata: Metadata = {
  title: 'دنانير | من حساب إنستا… إلى متجر إلكتروني كامل',
  description:
    'دنانير تساعد تجار إنستغرام في العراق على تحويل تجارتهم إلى متجر إلكتروني احترافي متكامل لعرض المنتجات واستقبال الطلبات وإدارة المبيعات باشتراك سنوي واضح.',
  keywords: [
    'دنانير',
    'متجر إلكتروني',
    'تجارة إلكترونية العراق',
    'إنستغرام',
    'بيع أونلاين',
    'متجر إنستا',
    'توصيل طلبات بغداد',
  ],
  authors: [{ name: 'Dananir - أحد منتجات فوانيس' }],
  metadataBase: new URL('https://dananeer.store'),
  openGraph: {
    title: 'دنانير | من حساب إنستا… إلى متجر إلكتروني كامل',
    description:
      'حول تجارتك على إنستغرام إلى متجر إلكتروني حقيقي متكامل باشتراك سنوي واضح وبدون عمولات.',
    url: 'https://dananeer.store',
    siteName: 'دنانير',
    locale: 'ar_IQ',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'دنانير | من حساب إنستا… إلى متجر إلكتروني كامل',
    description: 'من حساب إنستا… إلى متجر إلكتروني كامل للتاجر العراقي.',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/icons/icon-192.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${alexandria.variable} ${ibmPlexArabic.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        <BrandProviderWrapper>{children}</BrandProviderWrapper>
      </body>
    </html>
  );
}
