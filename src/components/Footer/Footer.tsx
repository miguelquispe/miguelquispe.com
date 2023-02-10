import Container from '@components/Container/Container';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr />
        <div className="u-flex u-flexJustifyBetween">
          <p className={styles.copyright}>
            Miguel Quispe {`© ${new Date().getFullYear()}`}
          </p>
          <nav className="u-flex">
            <Link href="/">
              <a>Inicio</a>
            </Link>

            <a
              href="https://www.linkedin.com/in/quispemiguel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/miguelquispe"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com/miguelquispecom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
