import Container from '@components/Container';
import { PostItem } from '@components/Post';
import { Metadata } from 'next';
import { getAllPosts } from 'utils/posts';

export const metadata: Metadata = {
  title: 'Blog - Desarrollo de Software: Frontend, Mobile y Fullstack',
  description:
    'Artículos y proyectos sobre desarrollo frontend y mobile con tecnologías como React, React Native y JavaScript. También comparto experiencias en entornos fullstack.',
};

export default async function Page() {
  const posts = await getAllPosts();
  return (
    <section className="p-8">
      <Container small>
        <h3 className="font-lexend font-bold text-3xl mb-10">ARTÍCULOS</h3>
        {!posts.length && (
          <h4 className="font-lexend font-bold text-3xl">
            No se encontraron artículos
          </h4>
        )}
        {posts.map((post) => (
          <PostItem {...post} key={post.publishedAt} />
        ))}
      </Container>
    </section>
  );
}
