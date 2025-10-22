import {DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    navLinks?: { label: string; href: string }[]; // Ссылки меню
    showSearch?: boolean; // Показывать ли поиск
    showIcons?: boolean; // Показывать ли иконки корзины и профиля
}