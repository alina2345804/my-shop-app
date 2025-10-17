import "./globals.css";
import { Header } from "@/components/Header/Header";
import './globals.css';
import { DM_Sans, Allerta_Stencil } from 'next/font/google';


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
      <body>
      <div>
        <Header/>
      </div>
      <div>
          {children}
      </div>
      </body>
    </html>
  );
}
