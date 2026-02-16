import styles from './ProductInfo.module.css';
import { ProductInfoProps } from '@/components/Product/ProductInfo/ProductInfo.props';
import {
  Button,
  Htag,
  P,
  QuantitySelector,
  ProductActions,
} from '@/components';
import ProductPrice from '@/components/Product/ProductPrice/ProductPrice';
import Rating from '@/components/UI/Rating/Rating';
import React from 'react';

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles.productInfo}>
      <div className={styles.productHeader}>
        <Htag tag="h2">{product.name}</Htag>
        <ProductPrice price={product.price} oldPrice={product.oldPrice} />
      </div>
      <div className={styles.productMeta}>
        <Rating rating={product.rating} />
        <P size="m">2 отзыва</P>
      </div>
      {product.description && (
        <P size="m" className={styles.productDescription}>
          {product.description}
        </P>
      )}
      <div className={styles.productCount}>
        <QuantitySelector />
        <Button appearance="black" className={styles.productButton}>
          Добавить в корзину
        </Button>
      </div>
      <div className={styles.actProd}>
        <ProductActions product={product} />
      </div>
    </div>
  );
};

export default ProductInfo;
