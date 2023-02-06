import { GTMscript } from '@components/GTM';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GTMscript />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
