import "./globals.css";
import { Header } from "@/components/Header/Header";
import './globals.css';
import { DM_Sans, Allerta_Stencil } from 'next/font/google';
import {Footer} from "@/components/Footer/Footer";


// 1️⃣ DM Sans — основной шрифт для текста
const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'], // Regular, Medium, Bold
    variable: '--font-dm-sans',
    display: 'swap',
})

// 2️⃣ Allerta Stencil — декоративный для логотипа или заголовков
const allertaStencil = Allerta_Stencil({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-allerta',
    display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ru" className={`${dmSans.variable} ${allertaStencil.variable}`}>
      <body className="layout">
      <Header />
      <main className="main-content">
          {children}</main>
      <Footer />
      </body>
      </html>
  );
}
