import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductTagsProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isFavorite?: boolean;
  discount?: number;
  isSoldOut?: boolean;
}
