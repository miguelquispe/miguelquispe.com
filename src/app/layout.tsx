import { Inter, Lexend } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { GTMnoscript, GTMscript } from '@components/GTM';

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
  metadataBase: new URL('https://miguelquispe.com'),
  title:
    'Miguel Quispe | Desarrollador de Frontend y Mobile: React - React Native',
  description:
    'Artículos y tutoriales sobre desarrollo de software: Frontend, React, React Native, JavaScript y más...',
  openGraph: {
    images: '/images/cover-share-page.png',
    type: 'website',
    url: './',
    siteName: 'Miguel Quispe',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@miguelquispecom',
    images: '/images/cover-share-page.png',
  },
  alternates: {
    canonical: './',
  },
  authors: [{ name: 'Miguel Quispe' }],
  robots: {
    follow: true,
    index: true,
  },
  icons: {
    icon: '/icons/favicon-32x32.png',
    shortcut: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${lexend.variable} font-inter font-normal`}
    >
      <head>
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#43318a"
        />
        <meta name="msapplication-TileColor" content="#6845FA" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="theme-color" content="#6845FA" />
        <GTMscript />
      </head>
      <body className="text-blue-gray">
        <GTMnoscript />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
