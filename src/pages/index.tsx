import Head from 'next/head'

import styles from '@styles/Home.module.scss'
import PageLayout from 'layout/Page'
import Container from '@components/Container'
import Post from '@components/Post/Post'

export default function Home() {
  return (
    <PageLayout>
      <section className={styles.hero}>
        <p className="greeting">¡Hola 👋, mucho gusto!</p>
        <h1>Soy Miguel Quispe</h1>
        <h2>
          Soy desarrollador Frontend que disfruta de aprender, compartir
          conocimientos y viajar.
        </h2>
      </section>
      <section className="u-wrap">
        <Container small>
          <h2 className="font-secondary h3">Artículos</h2>
          <Post
            title="Cambiar estilos de Checkbox y Radio Button con CSS3"
            slug="/slug"
          />

          <Post title="Personalizar Scrollbar con CSS3" slug="/slug" />

          <Post title="Crear un menú responsive básico" slug="/slug" />
        </Container>
      </section>
    </PageLayout>
  )
}
