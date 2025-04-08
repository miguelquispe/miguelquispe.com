import styles from '@styles/About.module.scss';
import Container from '@components/Container';
import Image from 'next/image';
import SocialLinks from '@components/Social';

export default function About() {
  return (
    <section className="p-1">
      <Container small>
        <h1 className="font-inter font-bold text-4xl mb-10">Acerca de mí</h1>
        <div className="md:flex gap-8">
          <div className={`mb-10 shrink-0 -ml-12`}>
            <div className="mb-10">
              <Image
                src="/images/avatar2024.png"
                width={320}
                height={339}
                alt="Miguel Quispe"
              />
            </div>

            <div className="flex justify-center [&_a]:text-purple-400">
              <SocialLinks showContact />
            </div>
          </div>
          <div className="text-[18px] [&>p]:mb-6 [&>p]:leading-7.5">
            <p>
              ¡Hola! Soy Miguel Quispe, desarrollador de software con
              experiencia en frontend y desarrollo de aplicaciones móviles
              utilizando React Native.
            </p>

            <p>
              Mi trayectoria comenzó en el diseño web (ahora UI), donde descubrí
              mi pasión por crear experiencias digitales atractivas y
              funcionales. Mi deseo constante de aprender y crecer me impulso a
              explorar el mundo del desarrollo de software y a dominar el arte
              de la programación.
            </p>

            <p>
              He colaborado en una amplia variedad de proyectos de
              transformación digital, abarcando diversas industrias y
              colaborando tanto con emprendedores y startups como con empresas
              consolidadas.
            </p>

            <p>
              Disfruto compartiendo conocimientos y aprendizajes a través de
              artículos y tutoriales en mi blog. Mi objetivo es ofrecer
              contenido informativo y práctico que pueda ser útil para ti.
            </p>

            <p>
              ¡No dudes en ponerte en contacto conmigo si tienes alguna
              pregunta, comentario o simplemente quieres charlar!
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

// export async function getStaticProps() {
//   const posts = await getAllPosts();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
