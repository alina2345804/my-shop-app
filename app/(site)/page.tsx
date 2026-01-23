'use client';

import { useState, useEffect } from 'react';
import { getProducts } from '@/api/products';
import { HeroSlider, Htag, ProductCard } from '@/components';
import { Product } from '@/interfaces/product.interface';
import styles from './page.module.css';

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchData() {
      // теперь getProducts уже возвращает нормализованные данные
      const data = await getProducts();
      setProducts(data);
    }

    fetchData();
  }, []);

  return (
    <div className={styles.mainPage}>
      <HeroSlider />

      <div className={styles.titles}>
        <Htag tag="h1">Последние поступления</Htag>
        <p className={styles.text}>Все</p>
      </div>

      <div className={styles.catalogCard}>
        {products.slice(0, 6).map((product, index) => (
          <ProductCard
            key={product.name + index}
            product={product}
            variant="home"
          />
        ))}
      </div>
    </div>
  );
}
