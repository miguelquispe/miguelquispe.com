import Footer from '@components/Footer';
import Header from '@components/Header';
import { PostMeta } from '@components/Post';
import SEO from '@components/SEO';
import { PropsWithChildren } from 'react';

export default function PageLayout({
  children,
  seo,
}: PropsWithChildren<{ seo?: PostMeta }>) {
  return (
    <>
      <SEO customMeta={seo} />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
