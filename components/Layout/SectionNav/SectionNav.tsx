'use client';
import { usePathname } from 'next/navigation';
import styles from './SectionNav.module.css';
import Link from 'next/link';

const links = [
  { href: '/catalog', label: 'Магазин' },
  { href: '/about', label: 'О нас' },
];

const SectionNav = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navSection}>
      {links.map(({ href, label }) => {
        const isActive = pathname === href || pathname.startsWith(href + '/');

        return (
          <Link
            key={href}
            href={href}
            className={`${styles.linkSection} ${isActive ? styles.active : ''}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default SectionNav;
