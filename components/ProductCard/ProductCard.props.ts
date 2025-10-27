import {DetailedHTMLProps, HTMLAttributes } from "react";
import { StaticImageData } from 'next/image';

export interface ProductCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    name: string;
    price: number;
    discount?: number;
    description?: string;
    images: string[];
    onQuickViewClick?: () => void;
}