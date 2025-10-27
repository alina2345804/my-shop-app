import {DetailedHTMLProps, HTMLAttributes } from "react";
import { ProductCardProps} from '../../components/ProductCard/ProductCard.props'
export interface ProductsListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    products: ProductCardProps[]
}