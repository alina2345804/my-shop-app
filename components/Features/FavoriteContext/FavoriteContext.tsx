'use client';
import { FavoriteContextProps } from './FavoriteContext.props';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Product } from '@/interfaces/product.interface';

const FavoriteContext = createContext<FavoriteContextProps | null>(null);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (product: Product) => {
    setFavorites((prev) => {
      const exists = prev.find((p) => p.name === product.name);
      return exists
        ? prev.filter((p) => p.name !== product.name)
        : [...prev, product];
    });
  };

  const isFavorite = (id: string | number) => {
    return favorites.some((p) => p.name === id);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoriteContext);
  if (!ctx)
    throw new Error('useFavorites must be used within FavoriteProvider');
  return ctx;
};
