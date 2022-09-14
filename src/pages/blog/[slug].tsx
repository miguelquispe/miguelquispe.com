import Container from '@components/Container';
import PageLayout from 'layout/Page';
import { serialize } from 'next-mdx-remote/serialize';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { getPostFromSlug, getSlugs } from 'utils/posts';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

import { PostHeader, PostMeta } from '@components/Post';

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: PostMeta;
}

export default function PostPage({ post }: { post: MDXPost }) {
  return (
    <PageLayout>
      <section className="u-wrap">
        <Container small>
          <PostHeader {...post.meta} />
          <div className="post-content">
            <MDXRemote {...post.source} />
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getPostFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'wrap',
          },
        ],
      ],
      format: 'mdx',
    },
  });

  return { props: { post: { source: mdxSource, meta } } };
};
