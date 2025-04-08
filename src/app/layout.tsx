import { Inter, Lexend } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';

// Custom Fonts
const inter = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
});

const lexend = Lexend({
  display: 'swap',
  variable: '--font-lexend',
  subsets: ['latin'],
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Miguel Quispe | Desarrollo Frontend y Mobile: React - React Native',
  description:
    'Comparto artículos y tutoriales sobre desarrollo de software: Frontend, React, React Native, JavaScript y más...',
  openGraph: {
    images: '/images/cover-share-page.png',
    type: 'website',
  },
  authors: [{ name: 'Miguel Quispex' }],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${lexend.variable} font-inter font-normal`}
    >
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#43318a"
        />
        <meta name="msapplication-TileColor" content="#6845FA" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#6845FA" />
      </head>
      <body className="text-blue-gray">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
