import Container from '@components/Container';
import PageLayout from 'layout/Page';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { getFiles, getPostFromSlug } from 'utils/posts';

import type { Post } from '@components/Post';
import { PostHeader, PostImage } from '@components/Post';
import { MDXRemote } from 'next-mdx-remote';

const components = {
  PostImage,
};

export default function PostPage({
  post,
}: {
  post: Pick<Post, 'content' | 'meta'>;
}) {
  const seoConfig = {
    ...post.meta,
  };

  return (
    <PageLayout seo={seoConfig}>
      <section className="u-wrap">
        <Container small>
          <PostHeader {...post.meta} />
          <div className="post-content">
            <MDXRemote {...post.content} components={components} />
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles('posts');
  const paths = posts.map((post) => ({
    params: { slug: post.replace(/\.mdx/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = await getPostFromSlug(slug);

  return { props: { post: { content, meta } } };
};
