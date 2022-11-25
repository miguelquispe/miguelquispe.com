import Head from 'next/head';

import styles from '@styles/Home.module.scss';
import PageLayout from 'layout/Page';
import Container from '@components/Container';
import { getAllPosts } from 'utils/posts';
import { PostItem, PostMeta } from '@components/Post';
import Image from 'next/image';

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <PageLayout>
      <section className={styles.hero}>
        <div className={styles['hero-body']}>
          <p className="font-secondary greeting">¡Hola 👋, mucho gusto!</p>
          <h1>Soy Miguel Quispe</h1>
          <h2 className="font-secondary">
            Soy desarrollador Frontend que disfruta de aprender, compartir
            conocimientos y viajar.
          </h2>
        </div>
        <Image
          src="/images/hero-background.png"
          layout="fill"
          objectFit="cover"
          objectPosition="80% 20%"
          sizes="(max-width: 768px) 50vw"
          style={{
            opacity: 0.45,
          }}
        />
      </section>
      <section className="u-wrap">
        <Container small>
          <h2 className="font-secondary h3 u-mb-10">ÚLTIMAS PUBLICACIONES</h2>
          {!posts.length && <h4>No se encontraron artículos</h4>}
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
