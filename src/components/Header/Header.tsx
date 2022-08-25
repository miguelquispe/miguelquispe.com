import Container from '@components/Container/Container'
import Logo from '../Logo'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.main}>
      <Container>
        <nav className="flex sb">
          <div className={styles.brand}>
            <a href="#">
              <Logo />
            </a>
          </div>
          <div className={`flex ${styles.menu}`}>
            <a href="/">Conóceme</a>
            <a href="/">Blog</a>
            <a href="/">Contacto</a>
          </div>
        </nav>
      </Container>
      {/* <div className="container is-lg">
      </div> */}
    </header>
  )
}
