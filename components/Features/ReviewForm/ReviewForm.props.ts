import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/interfaces/product.interface';

export interface ReviewFormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: Product;
}
