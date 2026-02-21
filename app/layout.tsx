import type { Metadata } from 'next';
import { Epilogue, DM_Sans } from 'next/font/google';
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
  title: 'Sparsh Patil',
  authors: [{ name: 'Sparsh Patil' }],
  description:
    'Sparsh Santosh Patil, a 13-year-old rising tennis player from Panvel taluka within the Raigad district, is making a splash with his impressive skills and energetic playing style.',
  keywords: ['Sparsh Patil', 'Tennis', 'Young talent', 'Panvel'],
  openGraph: {
    title: 'Sparsh Patil | Rising tennis talent',
    url: 'https://sparshpatil.com/',
    description:
      'Sparsh Santosh Patil, a 13-year-old rising tennis player from Panvel taluka within the Raigad district, is making a splash with his impressive skills and energetic playing style.',
    images: [{ url: 'https://sparshpatil.com/assets/sparsh-banner-meta.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sparsh Patil | Rising tennis talent',
    description:
      'Sparsh Santosh Patil, a 13-year-old rising tennis player from Panvel taluka within the Raigad district, is making a splash with his impressive skills and energetic playing style.',
    images: ['https://sparshpatil.com/assets/sparsh-banner-meta.webp'],
  },
  robots: 'index',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${epilogue.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
