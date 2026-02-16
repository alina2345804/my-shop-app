import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/interfaces/product.interface';

export interface RelatedProductsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Product;
}
