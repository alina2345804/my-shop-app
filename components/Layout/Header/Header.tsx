'use client';
import { useState } from 'react';
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import cn from 'classnames';
import CartIcon from '../../../public/cart.svg';
import LikeIcon from '../../../public/like.svg';
import UserIcon from '../../../public/user.svg';
import MenuIcon from '../../../public/menu.svg';
import Image from 'next/image';
import Shoppe from './shoppe.png';
import { MenuMobile, SearchInput } from '@/components';
import Link from 'next/link';
import SectionNav from '@/components/Layout/SectionNav/SectionNav';

export const Header = ({ className, ...props }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <Link href="/public" aria-label="На главную">
          <Image
            src={Shoppe}
            alt="Логотип магазина"
            className={styles.logo}
            priority
          />
        </Link>

        <SectionNav />
        <div className={styles.divider}></div>

        {/* --- Desktop Actions --- */}
        <div className={styles.actions}>
          <div className={styles.searchWrapper}>
            <SearchInput
              variant="header"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onSearch={() => {
                console.log('Ищем:', searchValue);
              }}
            />
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

      <MenuMobile isOpen={menuOpen} onClose={closeMenu} />
    </header>
  );
};
