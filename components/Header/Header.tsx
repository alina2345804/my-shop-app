'use client';
import { useState } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import CartIcon from '../../public/cart.svg';
import LikeIcon from '../../public/like.svg';
import UserIcon from '../../public/user.svg';
import SearchIcon from '../../public/search.svg';
import MenuIcon from '../../public/menu.svg';
import Image from 'next/image';
import Shoppe from './shoppe.png';
import { MenuMobail, Input } from '@/components';
import Link from 'next/link';

export const Header = ({
  navLinks = [
    { label: 'Магазин', href: '/catalog' },
    { label: 'О нас', href: '/about' },
  ],
  className,
  ...props
}: HeaderProps): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false); // 👈 одно понятное состояние

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <Link href="/" aria-label="На главную">
          <Image
            src={Shoppe}
            alt="Логотип магазина"
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.divider}></div>

        {/* --- Desktop Actions --- */}
        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            {!searchOpen && (
              <SearchIcon
                onClick={() => setSearchOpen(true)}
                style={{ cursor: 'pointer', width: 20, height: 20 }}
              />
            )}

            {searchOpen && (
              <Input
                type="text"
                placeholder="Поиск..."
                icon="search"
                iconPosition="left"
                onIconClick={() => setSearchOpen(false)}
                className={cn(
                  styles.searchInput,
                  'transition-all duration-300'
                )}
              />
            )}
          </div>

          <Link href="/cart">
            <CartIcon />
          </Link>
          <Link href="/favorite">
            <LikeIcon />
          </Link>
          <Link href="/profile">
            <UserIcon />
          </Link>
        </div>

        {/* --- Mobile Actions --- */}
        <div className={styles.mobileActions}>
          <Link href="/cart" className={styles.iconBtn}>
            <CartIcon />
          </Link>
          <button onClick={openMenu} className={styles.iconBtn}>
            <MenuIcon />
          </button>
        </div>
      </div>

      <MenuMobail isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
};
