import Head from 'next/head'

import Header from '@components/Header/Header'
import Footer from '@components/Footer'
import { PropsWithChildren } from 'react'

export default function PageLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
