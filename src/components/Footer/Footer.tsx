import Container from '@components/Container/Container';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr />
        <div className="u-flex u-flexJustifyBetween">
          <p className={styles.copyright}>Miguel Quispe 2023</p>
          <nav className="u-flex">
            <Link href="/">
              <a>Inicio</a>
            </Link>

            <a href="https://www.linkedin.com/in/quispemiguel/" target="_blank">
              LinkedIn
            </a>

            <a href="https://github.com/miguelquispe" target="_blank">
              GitHub
            </a>

            <a href="https://twitter.com/miguelquispecom" target="_blank">
              Twitter
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
