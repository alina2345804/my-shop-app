import cn from 'classnames';
import { ProductPriceProps } from '@/components/Product/ProductPrice/ProductPrice.props';
import styles from './ProductPrice.module.css';

const ProductPrice = ({
  price,
  oldPrice,
  className,
  ...props
}: ProductPriceProps) => {
  return (
    <div className={cn(styles.productPrice, className)} {...props}>
      {oldPrice ? (
        <>
          <span className={styles.priceOld}>${oldPrice.toFixed(2)}</span>
          <span className={styles.priceNew}>${price.toFixed(2)}</span>
        </>
      ) : (
        <span className={styles.priceRegular}>${price.toFixed(2)}</span>
      )}
    </div>
  );
};

export default ProductPrice;
