import Container from '@components/Container';
import { getFiles, getPostFromSlug } from 'utils/posts';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import '@styles/components/post.css';
import '@styles/components/prism.css';
import { PostHeader, PostShare } from '@components/Post';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { meta } = await getPostFromSlug(slug);
  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      siteName: 'Miguel Quispe',
      title: meta.title,
      description: meta.description,
      type: 'article',
      url: `https://miguelquispe.com/blog/${meta.slug}`,
      images: '/images/cover-share-page.png',
      publishedTime: meta.date,
    },
    twitter: {
      site: '@miguelquispe',
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  };
}

export const generateStaticParams = async () => {
  const posts = await getFiles('posts');
  return posts.map((post) => ({
    slug: post.replace(/\.mdx/, ''),
  }));
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const { content, meta } = await getPostFromSlug(slug);

  if (!content) {
    notFound();
  }

  return (
    <section className="p-8">
      <Container small>
        <PostHeader {...meta} />
        <Suspense
          fallback={
            <div>
              <h4 className="font-lexend font-bold text-3xl">
                Loading content...
              </h4>
            </div>
          }
        >
          <div className="post-content">{content}</div>
        </Suspense>
        <PostShare
          title={meta?.title}
          summary={meta?.description}
          url={`https://miguelquispe.com/blog/${meta.slug}`}
        />
      </Container>
    </section>
  );
}
