'use client'
import { JSX } from "react";
import { ProductsListProps } from "./ProductsList.props";
import { ProductCard} from "@/components";
import styles from './ProductsList.module.css';

// export const ProductsList = ({ products }: ProductsListProps): JSX.Element =>  {
//
//     return (
//         <div className={styles.productsGrid}>
//             {products.map((p, index) => (
//                 <ProductCard
//                     key={p.id}
//                     images={images}
//                     name={p.name}
//                     price={p.price}
//                     discount={p.discount}
//                     onQuickViewClick={p.onQuickViewClick}
//                 />
//             ))}
//         </div>
//     )
// };