import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '@/interfaces/product.interface';

export interface FavoriteContextProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  favorites: Product[]; //сам продукт
  toggleFavorite: (product: Product) => void; //переключатель избранного(принимает аргументом product типа Product и
  // ничего не возвращает
  isFavorite: (id: string | number) => boolean; //есть избранное или нет
}
