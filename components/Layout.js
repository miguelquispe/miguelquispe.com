import Head from 'next/head'
import Footer from './Footer/Footer'
import Header from './Header/Header'

export default function Layout({title ="Page Title", description="Page Description", children}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&family=Poppins:wght@500;600&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}