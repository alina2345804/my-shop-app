import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/interfaces/product.interface';

export interface ProductActionsProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  product: Product;
}
