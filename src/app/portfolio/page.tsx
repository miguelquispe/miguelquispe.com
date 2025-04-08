import styles from '@styles/Portfolio.module.scss';
import PageLayout from 'layout/Page';
import Container from '@components/Container';
import { PROJECTS } from '@constants/projects';

export default function About() {
  return (
    <PageLayout
      seo={{
        title:
          'Portfolio - Miguel Quispe | Desarrollo Frontend y Mobile React Native',
        description:
          'Explora mi portfolio donde comparto proyectos realizados como desarrollador de software freelance. Lima, Perú.',
      }}
    >
      <section className="u-wrap">
        <Container small>
          <h1 className="h1 font-inter u-mb-10">Portfolio</h1>
          <div className={styles['project-grid']}>
            {PROJECTS.map((project, index) => (
              <div
                className={`u-flex ${styles.project}`}
                key={`${index}-${project.title
                  .toLowerCase()
                  .split(' ')
                  .join('-')}`}
              >
                <div className={styles.project__description}>
                  <div className={styles.content}>
                    <h3 className="font-secondary">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className={styles.project_tags}>
                      {project.tags.map((tag) => (
                        <span
                          key={`${project.title.split(' ').join('-')}-${tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={styles.wrap_image}>
                  <div className={styles.image_container}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.image}
                      alt={project.alt}
                      className={styles.image}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
