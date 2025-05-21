'use client';
import Container from '@components/Container/Container';
import Link from 'next/link';
import Logo from '../Logo';
import styles from './Header.module.css';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  return (
    <header className={styles.main}>
      <Container>
        <nav className="flex justify-between">
          <div className={styles.brand}>
            <Link href={'/'}>
              <Logo fill="#6845FA" />
            </Link>
          </div>
          <div className={`flex ${styles.menu}`}>
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href}
                className={pathname === link.href ? styles.active : ''}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </Container>
    </header>
  );
}
