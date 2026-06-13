import localFont from 'next/font/local';
import 'modern-normalize';
import './globals.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const montserrat = localFont({
  src: [
    {
      path: '../public/fonts/Montserrat-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-main',
});

const armata = localFont({
  src: [
    {
      path: '../public/fonts/Armata-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${armata.variable}`}>
      <body>{children}</body>
    </html>
  );
}
