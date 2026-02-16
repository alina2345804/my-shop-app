import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    currentPage: number; // Текущая страница
    totalPages: number;  // Общее количество страниц
    onPageChange: (page: number) => void; // Функция при клике
}