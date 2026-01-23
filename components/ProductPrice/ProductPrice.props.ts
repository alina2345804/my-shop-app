import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductPriceProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: number;
  oldPrice?: number;
  className?: string;
}
