import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ProductGalleryProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  images: string[];
  alt: string;
}
