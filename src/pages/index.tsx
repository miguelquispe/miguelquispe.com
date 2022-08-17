import Head from 'next/head'
import Layout from '@components/Layout'

import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <Layout title="Miguel Quispe" description="Frontent React">
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
    </Layout>
  )
}
