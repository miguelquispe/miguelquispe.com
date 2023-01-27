import { PostMeta } from '@components/Post';
import Head from 'next/head';
import { useRouter } from 'next/router';

const SEO = ({ customMeta }: { customMeta?: Partial<PostMeta> }) => {
  const router = useRouter();
  const meta = {
    title: 'Miguel Quispe',
    description:
      'Comparto artículos y tutoriales de lo que aprendo: Frontend, React, CSS y más...',
    image: '/images/social-banner.png',
    type: 'website',
    ...customMeta,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="author" content="Miguel Quispe" />
      <meta name="robots" content="follow, index" />
      <link rel="canonical" href={`https://miguelquispe.com${router.asPath}`} />
      {/*  Essential META Tags */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:type" content={meta.type} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:url"
        content={`https://miguelquispe.com${router.asPath}`}
      />
      <meta
        property="og:image"
        content={`https://miguelquispe.com${meta.image}`}
      />
      <meta property="og:site_name" content="Miguel Quispe" />
      {/*  Twitter */}
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta
        property="twitter:image"
        content={`https://miguelquispe.com${meta.image}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@miguelquispecom" />

      {meta.publishedAt && (
        <meta property="article:published_time" content={meta.publishedAt} />
      )}
    </Head>
  );
};

export default SEO;
