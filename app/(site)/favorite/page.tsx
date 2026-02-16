'use client';
import { useFavorites } from '@/components/Features/FavoriteContext/FavoriteContext';
import { Htag, ProductCard } from '@/components';
import styles from './Favorite.module.css';

export default function FavoritePage() {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return <p>У вас пока нет избранных товаров</p>;
  }

  return (
    <div>
      <Htag tag="h1" className={styles.favoriteTag}>
        Избранное
      </Htag>
      <div className={styles.favoritePage}>
        {favorites.map((product) => (
          <ProductCard key={product.name} product={product} variant="catalog" />
        ))}
      </div>
    </div>
  );
}
