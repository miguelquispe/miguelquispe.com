import Container from '@components/Container/Container';
import Link from 'next/link';
import Logo from '../Logo';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.main}>
      <Container>
        <nav className="flex sb">
          <div className={styles.brand}>
            <Link href={'/'}>
              <a>
                <Logo fill="#6845FA" />
              </a>
            </Link>
          </div>
          <div className={`flex ${styles.menu}`}>
            <Link href="/">
              <a>Inicio</a>
            </Link>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  );
}
