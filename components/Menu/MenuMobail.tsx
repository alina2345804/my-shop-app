'use client'

import Image from "next/image";
import Link from "next/link"; // Импортируем Link
import {AnimatePresence, motion, Variants} from "framer-motion";

import styles from './MenuMobail.module.css';
import Shoppe from "@/components/Header/shoppe.png";

// Импортируем иконки как React-компоненты
import CloseIcon from '../../public/close.svg';
import UserIcon from '../../public/user.svg';
import LikeIcon from '../../public/like.svg';
import CartIcon from '../../public/cart.svg';

interface MenuMobailProps {
    isOpen: boolean;
    onClose: () => void;
}

interface NavLink {
    href: string;
    label: string;
    icon: React.ElementType; // Используем правильный тип для иконок-компонентов
}

const mainNavLinks = [
    { href: "/", label: "Главная" },
    { href: "/catalog", label: "Магазин" },
    { href: "/about", label: "О нас" },
];

const secondaryNavLinks: NavLink[] = [
    { href: "/account", label: "Мой аккаунт", icon: UserIcon },
    { href: "/favorites", label: "Избранное", icon: LikeIcon },
    { href: "/cart", label: "Корзина", icon: CartIcon },
];

// Анимации для framer-motion
const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

const menuVariants: Variants = {
    hidden: { x: '100%' },
    visible: {
        x: 0,
        transition: { type: 'spring', stiffness: 100, damping: 20 }
    },
};

const navListVariants = {
    visible: {
        transition: {
            staggerChildren: 0.07, // Анимация появления ссылок по очереди
            delayChildren: 0.2,
        },
    },
};

const navItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
};


export const MenuMobail = ({ isOpen, onClose }: MenuMobailProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Фон-затемнение */}
                    <motion.div
                        className={styles.backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={backdropVariants}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                    />

                    {/* Само меню */}
                    <motion.div
                        className={styles.menu}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={menuVariants}
                    >
                        <div className={styles.top}>
                            <Image src={Shoppe} alt="Логотип" className={styles.menuLogo} priority />
                            <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть меню">
                                <CloseIcon />
                            </button>
                        </div>

                        {/* Навигация */}
                        <motion.nav
                            className={styles.nav}
                            initial="hidden"
                            animate="visible"
                            variants={navListVariants}
                        >
                            {mainNavLinks.map(link => (
                                <motion.div key={link.href} variants={navItemVariants}>
                                    <Link href={link.href} onClick={onClose}>{link.label}</Link>
                                </motion.div>
                            ))}
                        </motion.nav>

                        {/* Ссылки с иконками */}
                        <motion.div
                            className={styles.actions}
                            initial="hidden"
                            animate="visible"
                            variants={navListVariants}
                        >
                            {secondaryNavLinks.map(link => (
                                <motion.div key={link.href} variants={navItemVariants}>
                                    <Link href={link.href} className={styles.actionLink} onClick={onClose}>
                                        <link.icon />
                                        <span>{link.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};