
import Logo from "../Logo";
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.main}>
      <div className="container is-lg">
        <nav className="flex sb">
          <div className={styles.brand}>
            <a href="#">
              <Logo />
            </a>
          </div>
          <div className={`flex ${styles.menu}`}>
              <a href="/">Blog</a>
              <a href="/">Acerca de</a>
              <a href="/">Contacto</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
