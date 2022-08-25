import Head from 'next/head'

import styles from '@styles/Home.module.scss'
import PageLayout from 'layout/Page'

export default function Home() {
  return (
    <PageLayout>
      <section className={styles.hero}>
        <div className="container">
          <h1>
            <span>Soy</span>
            <span>Miguel Quispe</span>
            <span>Frontend con React</span>
          </h1>
          <p>Disfruto de aprender, mantenerme actualizado y viajar.</p>
        </div>
      </section>
    </PageLayout>
  )
}
