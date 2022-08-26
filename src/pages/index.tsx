import Head from 'next/head'

import styles from '@styles/Home.module.scss'
import PageLayout from 'layout/Page'
import Container from '@components/Container'

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
    </PageLayout>
  )
}
