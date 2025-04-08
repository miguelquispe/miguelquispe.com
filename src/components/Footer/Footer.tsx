import Container from '@components/Container/Container';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <hr />
        <div className="flex justify-between flex-col gap-6 md:flex-row">
          <p className={styles.copyright}>
            Miguel Quispe {`© ${new Date().getFullYear()}`}
          </p>
          <nav className="flex">
            <Link href="/">Inicio</Link>

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

            <a
              href="mailto:hello@miguelquispe.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contacto
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
