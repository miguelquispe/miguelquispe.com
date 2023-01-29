import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { GTM_ID } from '../constants';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head>
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
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
                <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>
              `,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
