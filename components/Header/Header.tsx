'use client'
import { useState, useEffect } from "react";
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
import { MenuMobail } from "@/components";
import Link from "next/link";

export const Header = ({ navLinks = [
    { label: 'Магазин', href: '/catalog' },
    { label: 'О нас', href: '/about' },], showSearch = true,showIcons = true, className, ...props }: HeaderProps): JSX.Element => {

// Создаем состояние для видимости поиска, по умолчанию он скрыт (false)
//     const [isMobile, setIsMobile] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isSearchVisible, setSearchVisible] = useState(false);

    const openMenu = () => setMenuOpen(true);
    const closeMenu = () => setMenuOpen(false);

    // useEffect(() => {
    //     const handleResize = () => setIsMobile(window.innerWidth < 768);
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    const toggleSearch = (e: React.MouseEvent) => {
        e.preventDefault(); // Предотвращаем переход по ссылке '#'
        setSearchVisible(prev => !prev); // Инвертируем состояние (true -> false, false -> true)
    };

    return (
        <header className={cn(styles.header, className)} {...props}>
            <div className={styles.container}>
                <Image src={Shoppe} alt="Логотип магазина" className={styles.logo} priority />

                    <>
                        <nav className={styles.nav}>
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href}>{link.label}</Link>
                            ))}
                        </nav>

                        {/*Линия по горизонтали*/}
                        <div className={styles.divider}></div>

                        <div className={styles.actions}>
                            <div className={styles.searchWrapper}>
                                <input
                                    type="text"
                                    placeholder="Поиск"
                                    className={cn(styles.search, { [styles.searchVisible]: isSearchVisible })}
                                />
                                <a href="#" onClick={toggleSearch}>
                                    <SearchIcon />
                                </a>
                            </div>
                            <Link href="/cart"><CartIcon /></Link>
                            <Link href="/wishlist"><LikeIcon /></Link>
                            <Link href="/profile"><UserIcon /></Link>
                        </div>
                    </>

                    <div className={styles.mobileActions}>
                        <Link href="/cart" className={styles.iconBtn}><CartIcon /></Link>
                        <button onClick={() => setMenuOpen(true)} className={styles.iconBtn}>
                            <MenuIcon />
                        </button>
                    </div>
            </div>
            <MenuMobail isOpen={menuOpen} onClose={closeMenu} />
        </header>
    );
};
