// 'use client'
// import React, { useState } from 'react'
// import cn from 'classnames'
// import styles from './MenuMobail.module.css'
//
// import CartIcon from '../../public/cart.svg';
// import LikeIcon from '../../public/like.svg';
// import UserIcon from '../../public/user.svg';
// import SearchIcon from '../../public/search.svg';
// import MenuIcon from '../../public/menu.svg';
// import CloseIcon from '../../public/close.svg';
//
// export const Menu = () => {
//     const [isSearchVisible, setIsSearchVisible] = useState(false)
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//
//     return (
//         <nav className={styles.menu}>
//             {/* --- ДЕСКТОПНАЯ ВЕРСИЯ --- */}
//             <div className={cn(styles.navContainer, { [styles.hidden]: isMobileMenuOpen })}>
//                 <div className={styles.navLinks}>
//                     <a href="/catalog">Магазин</a>
//                     <a href="/about">О нас</a>
//                 </div>
//
//                 <div className={styles.actions}>
//                     <div className={styles.searchWrapper}>
//                         <input
//                             type="text"
//                             placeholder="Поиск..."
//                             className={cn(styles.search, isSearchVisible && styles.searchVisible)}
//                         />
//                         <button
//                             className={styles.searchBtn}
//                             onClick={() => setIsSearchVisible(!isSearchVisible)}
//                         >
//                             <SearchIcon />
//                         </button>
//                     </div>
//
//                     <div className={styles.divider}></div>
//
//                     <button className={styles.iconBtn}><CartIcon /></button>
//                     <button className={styles.iconBtn}><LikeIcon /></button>
//                     <button className={styles.iconBtn}><UserIcon /></button>
//                 </div>
//             </div>
//
//             {/* --- МОБИЛЬНАЯ ВЕРСИЯ --- */}
//             <div className={styles.mobileHeader}>
//                 <button
//                     className={styles.menuToggle}
//                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 >
//                     {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
//                 </button>
//             </div>
//
//             <div className={cn(styles.mobileMenu, { [styles.open]: isMobileMenuOpen })}>
//                 <a href="/catalog"><CartIcon /> <span>Магазин</span></a>
//                 <a href="/favorites"><LikeIcon /> <span>Избранное</span></a>
//                 <a href="/cart"><CartIcon /> <span>Корзина</span></a>
//                 <a href="/account"><UserIcon /> <span>Профиль</span></a>
//                 <a href="/about"><span>О нас</span></a>
//             </div>
//         </nav>
//     )
// }
