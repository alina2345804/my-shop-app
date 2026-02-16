import './globals.css';
import { Header } from '@/components/Layout/Header/Header';
import './globals.css';
import { DM_Sans, Allerta_Stencil } from 'next/font/google';
import { Footer } from '@/components/Layout/Footer/Footer';
import { FavoriteProvider } from '@/components/Features/FavoriteContext/FavoriteContext';

//  DM Sans — основной шрифт для текста
const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Regular, Medium, Bold
  variable: '--font-dm-sans',
  display: 'swap',
});

//  Allerta Stencil — декоративный для логотипа или заголовков
const allertaStencil = Allerta_Stencil({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allerta',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${dmSans.variable} ${allertaStencil.variable}`}>
      <body className="layout">
        <FavoriteProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </FavoriteProvider>
      </body>
    </html>
  );
}
