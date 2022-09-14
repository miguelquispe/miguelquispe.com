import Head from 'next/head';

import styles from '@styles/Home.module.scss';
import PageLayout from 'layout/Page';
import Container from '@components/Container';
import { getAllPosts } from 'utils/posts';
import { PostItem, PostMeta } from '@components/Post';

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <PageLayout>
      <section className={styles.hero}>
        <p className="font-secondary greeting">¡Hola 👋, mucho gusto!</p>
        <h1>Soy Miguel Quispe</h1>
        <h2 className="font-secondary">
          Soy desarrollador Frontend que disfruta de aprender, compartir
          conocimientos y viajar.
        </h2>
      </section>
      <section className="u-wrap">
        <Container small>
          <h2 className="font-secondary h3">Artículos</h2>
          {posts.map((post) => (
            <PostItem {...post} key={post.publishedAt} />
          ))}
        </Container>
      </section>
    </PageLayout>
  );
}

export function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map((post) => post.meta);

  return {
    props: {
      posts,
    },
  };
}
