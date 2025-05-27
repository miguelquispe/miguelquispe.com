import Container from '@components/Container';
import Image from 'next/image';
import SocialLinks from '@components/Social';
import { Metadata } from 'next';
import { WORK_LOGOS } from '@constants/experience';

export const metadata: Metadata = {
  title: 'Acerca de mí – Desarrollador de software',
  description:
    'Desarrollador de software con experiencia en frontend, backend y aplicaciones móviles con React Native.',
};

export default function About() {
  return (
    <section className="p-8">
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
              experiencia en frontend, backend y desarrollo de aplicaciones
              móviles utilizando React Native.
            </p>

            <p>
              Mi trayectoria comenzó en el diseño web (ahora UI), donde descubrí
              mi pasión por crear experiencias digitales atractivas y
              funcionales. Mi deseo constante de aprender y crecer me impulso a
              explorar el mundo del desarrollo de software y a dominar el arte
              de la programación.
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
        <h2 className="font-inter font-bold text-4xl mt-20 mb-10">
          Experiencia
        </h2>
        <div>
          <p>
            He colaborado en una amplia variedad de proyectos de transformación
            digital, abarcando diversas industrias y colaborando tanto con
            emprendedores y startups como con empresas consolidadas.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4  overflow-hidden mt-15 mb-20 border-[0.5px] border-gray-100 ">
          {WORK_LOGOS.map((logo) => (
            <div
              className="flex items-center justify-center p-6 border-[0.5px] border-gray-100"
              key={logo.name}
            >
              <Image
                src={logo.images}
                alt={logo.name}
                width={100}
                height={100}
                className="w-full object-contain filter grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
