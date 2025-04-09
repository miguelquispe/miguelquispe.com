import Container from '@components/Container';
import { PROJECTS } from '@constants/projects';
import '@styles/components/portfolio.css';

export default function About() {
  return (
    // <PageLayout
    //   seo={{
    //     title:
    //       'Portfolio - Miguel Quispe | Desarrollo Frontend y Mobile React Native',
    //     description:
    //       'Explora mi portfolio donde comparto proyectos realizados como desarrollador de software freelance. Lima, Perú.',
    //   }}
    // >
    <section className="p-8">
      <Container small>
        <h1 className="font-inter font-semibold mb-10">Portfolio</h1>
        <div className="mb-10">
          {PROJECTS.map((project, index) => (
            <div
              className="project"
              key={`${index}-${project.title
                .toLowerCase()
                .split(' ')
                .join('-')}`}
            >
              <div className="project__description">
                <div className="project__content">
                  <h3 className="project__title">{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project__tags">
                    {project.tags.map((tag) => (
                      <span
                        key={`${project.title.split(' ').join('-')}-${tag}`}
                        className="project__tag"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="project__image">
                <div className="project__image-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
    // </PageLayout>
  );
}
