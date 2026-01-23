'use client';
import { Pagination, Range, ProductCard, Input } from '@/components';
import { getProducts } from '@/api/products';
import { useState, useEffect } from 'react';
import { Select, Switch } from '@headlessui/react';
import styles from './TopCatalog.module.css';
import { Product } from '../../interfaces/product.interface';
import cn from 'classnames';

export default function CatalogPage() {
  const [enabled, setEnabled] = useState(false);
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 6; // ✅ по 6 карточек на страницу

  useEffect(() => {
    async function loadProducts() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }

    loadProducts();
  }, []);

  if (loading) return <div>Загрузка...</div>;

  // вычисляем количество страниц
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // определяем, какие карточки показывать
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className={styles.productCatalog}>
      {/* контент каталога */}
      <div className={styles.contentCatalog}>
        <Input
          type="text"
          placeholder="Поиск..."
          icon="search"
          iconPosition="right"
          onIconClick={() => console.log('Поиск запущен')}
          className={styles.contentInput}
        />
        <Select
          name="status"
          aria-label="Project status"
          className={styles.select}
        >
          <option value="active" className={styles.active}>
            Все категории
          </option>
          <option value="Earrings"></option>
          <option value="delayed">Delayed</option>
          <option value="canceled">Canceled</option>
        </Select>

        <Range
          min={0}
          max={180}
          step={10}
          initialMin={40}
          initialMax={180}
          onChange={({ min, max }) => console.log('Диапазон:', min, '-', max)}
        />

        <div className={styles.custom}>
          <span className={styles.label}>Со скидкой</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={cn(styles.switch, { [styles.active]: enabled })}
          >
            <span className={styles.thumb} />
          </Switch>
        </div>
      </div>

      <div className={styles.catalog}>
        {currentProducts.map((product) => (
          <ProductCard key={product.name} product={product} variant="catalog" />
        ))}
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          onPageChange={(p) => setPage(p)}
        />
      </div>
    </div>
  );
}
