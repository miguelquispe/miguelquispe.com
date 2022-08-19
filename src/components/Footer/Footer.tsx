import Container from '@components/Container/Container'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container small>
        <nav>
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="/">LinkedIn</a>
          </div>
          <div>
            <a href="/">GitHub</a>
          </div>
          <div>
            <a href="/">Twitter</a>
          </div>
        </nav>
      </Container>
    </footer>
  )
}
