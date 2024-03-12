import Container from '@components/Container/Container';
import Link from 'next/link';
import Logo from '../Logo';
import styles from './Header.module.scss';
import { useRouter } from 'next/router';

const links = [
  { name: 'Inicio', href: '/' },
  {
    name: 'Conóceme',
    href: '/acerca-de-mi',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const router = useRouter();

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
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                <a
                  className={router.pathname === link.href ? styles.active : ''}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
