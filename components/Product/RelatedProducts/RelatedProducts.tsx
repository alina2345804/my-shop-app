import { ProductGallery, ReviewForm } from '@/components';
import ProductInfo from '@/components/Product/ProductInfo/ProductInfo';
import { RelatedProductsProps } from '@/components/Product/RelatedProducts/RelatedProducts.props';
import styles from './RelatedProducts.module.css';

const RelatedProducts = ({ product }: RelatedProductsProps) => {
  return (
    <div className={styles.productContainer}>
      <div className={styles.galleryProducts}>
        <ProductGallery images={product.images ?? []} alt={product.name} />
      </div>

      <div className={styles.info}>
        <ProductInfo product={product} />
      </div>

      <div className={styles.reviewFormProducts}>
        <ReviewForm product={product} />
      </div>
    </div>
  );
};

export default RelatedProducts;
