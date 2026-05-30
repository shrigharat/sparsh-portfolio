import type { Metadata } from 'next';
import { Epilogue, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const epilogue = Epilogue({
  subsets: ['latin'],
  variable: '--font-epilogue',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sparsh Patil | AITA #7 & ATF #33 Rising Tennis Star',
  authors: [{ name: 'Sparsh Patil' }],
  description:
    'Sparsh Santosh Patil, a 13-year-old rising tennis player from Navi Mumbai. Ranked AITA #7 (Under 14) and ATF #33, he brings unparalleled energy, skill, and focus to every match.',
  keywords: [
    'Sparsh Patil',
    'Tennis',
    'Young talent',
    'Panvel',
    'AITA',
    'ATF',
    'Under 14',
    'ranking',
    'Navi Mumbai',
    'junior tennis India',
  ],
  openGraph: {
    title: 'Sparsh Patil | AITA #7 & ATF #33 Rising Tennis Star',
    url: 'https://sparshpatil.com/',
    description:
      'Sparsh Santosh Patil, a 13-year-old rising tennis player from Navi Mumbai. Ranked AITA #7 (Under 14) and ATF #33, he brings unparalleled energy, skill, and focus to every match.',
    images: [{ url: 'https://sparshpatil.com/assets/sparsh-banner-meta.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparsh Patil | AITA #7 & ATF #33 Rising Tennis Star',
    description:
      'Sparsh Santosh Patil, a 13-year-old rising tennis player from Navi Mumbai. Ranked AITA #7 (Under 14) and ATF #33, he brings unparalleled energy, skill, and focus to every match.',
    images: ['https://sparshpatil.com/assets/sparsh-banner-meta.webp'],
  },
  robots: 'index',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-64DYLJ6TB0"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-64DYLJ6TB0');
        `}
      </Script>
    </html>
  );
}
