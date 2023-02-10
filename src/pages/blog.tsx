import Container from '@components/Container';
import { PostItem, PostMeta } from '@components/Post';
import PageLayout from 'layout/Page';
import { getAllPosts } from 'utils/posts';

export default function Blog({ posts }: { posts: PostMeta[] }) {
  return (
    <PageLayout
      seo={{
        title: 'Blog - Miguel Quispe',
      }}
    >
      <section className="u-wrap">
        <Container small>
          <h3 className="font-secondary u-mb-10">ARTÍCULOS</h3>
          {!posts.length && <h4>No se encontraron artículos</h4>}
          {posts.map((post) => (
            <PostItem {...post} key={post.publishedAt} />
          ))}
        </Container>
      </section>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
