'use client';
import { Pagination, ProductCard } from '@/components';
import { getProducts } from '@/api/products';
import { useState, useEffect, useMemo } from 'react';
import styles from './TopCatalog.module.css';
import { Product } from '@/interfaces/product.interface';
import Link from 'next/link';
import { FilterState } from '@/interfaces/filter-state.interface';
import Filters from '@/components/Features/Filters/Filters';

export default function CatalogPage() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState<FilterState>({
    categoryId: null,
    priceFrom: 0,
    priceTo: 180,
    switchDiscount: false,
    search: '',
  });

  const itemsPerPage = 6; //  по 6 карточек на страницу

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const filteredProducts = useMemo(() => {
    const minPrice = Math.min(filters.priceFrom, filters.priceTo);
    const maxPrice = Math.max(filters.priceFrom, filters.priceTo);

    return products.filter((product) => {
      const matchCategory =
        filters.categoryId === null ||
        product.categoryId === filters.categoryId;

      const matchPrice = product.price >= minPrice && product.price <= maxPrice;

      const matchDiscount =
        !filters.switchDiscount || Boolean(product.oldPrice);

      const matchSearch =
        !filters.search ||
        product.name?.toLowerCase().includes(filters.search.toLowerCase());

      return matchCategory && matchPrice && matchDiscount && matchSearch;
    });
  }, [products, filters]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  if (loading) return <div>Загрузка...</div>;

  return (
    <div className={styles.productCatalog}>
      <Filters filters={filters} onFiltersChange={setFilters} />

      <div className={styles.catalog}>
        {currentProducts.map((product) => (
          <Link key={product.uid} href={`/catalog/${product.slug}`}>
            <ProductCard product={product} variant="catalog" />
          </Link>
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
