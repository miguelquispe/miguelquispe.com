import Available from '@components/Available';
import Container from '@components/Container';
import { PostItem } from '@components/Post';
import SocialLinks from '@components/Social';
import Image from 'next/image';
import { getAllPosts } from 'utils/posts';

export default function Page() {
  const posts = getAllPosts();
  return (
    <>
      <section className="flex flex-col gap-6 px-8 md:px-14 py-24 md:py-32 relative max-w-5xl m-auto mb-8 bg-[var(--color-purple-500)] md:rounded-lg">
        <div className="relative z-1 color-white">
          <p className="font-lexend text-2xl text-green">
            ¡Hola 👋, mucho gusto!
          </p>
          <h1 className="font-inter text-3xl font-bold text-white mb-6">
            Soy Miguel Quispe
          </h1>
          <h2 className="font-lexend text-2xl text-white">
            Soy desarrollador Frontend - Mobile que disfruta de aprender,
            compartir conocimientos y viajar.
          </h2>

          <div className="hero-icons">
            <SocialLinks />
            <Available />
          </div>
        </div>
        <Image
          src="/images/hero-background.png"
          objectFit="cover"
          objectPosition="80% 20%"
          style={{
            opacity: 0.45,
          }}
          alt=""
          fill
          className="md:rounded-lg"
        />
      </section>
      <div className="p-4">
        <Container small>
          <h2 className="font-lexend mb-10 text-2xl uppercase font-semibold">
            Últimas novedades
          </h2>
          {posts && posts?.length === 0 && <h4>No se encontraron artículos</h4>}
          {posts.map((post) => (
            <PostItem {...post} key={post.publishedAt} />
          ))}
        </Container>
      </div>
    </>
  );
}
