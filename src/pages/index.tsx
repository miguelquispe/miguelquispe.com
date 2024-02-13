import styles from '@styles/Home.module.scss';
import PageLayout from 'layout/Page';
import Container from '@components/Container';
import { getAllPosts } from 'utils/posts';
import { PostItem, PostMeta } from '@components/Post';
import Image from 'next/image';
import SocialLinks from '@components/Social';
import Available from '@components/Available';

export default function Home({ posts }: { posts: PostMeta[] }) {
  return (
    <PageLayout>
      <section className={styles.hero}>
        <div className={styles['hero-body']}>
          <p className="font-secondary greeting">¡Hola 👋, mucho gusto!</p>
          <h1>Soy Miguel Quispe</h1>
          <h2 className="font-secondary">
            Soy desarrollador Frontend - Mobile que disfruta de aprender,
            compartir conocimientos y viajar.
          </h2>

          <div className="wrap-hero-icons">
            <SocialLinks />
            <Available />
          </div>
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
          alt=""
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

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
