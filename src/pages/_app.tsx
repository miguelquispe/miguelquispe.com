import { GTMscript } from '@components/GTM';
import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script>{`window.dataLayer = window.dataLayer || [];`}</Script>
      <GTMscript />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
