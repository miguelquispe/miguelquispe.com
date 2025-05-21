import Container from '@components/Container';
import { PostItem } from '@components/Post';
import { getAllPosts } from 'utils/posts';

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
