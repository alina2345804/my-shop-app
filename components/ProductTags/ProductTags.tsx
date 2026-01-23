import { ProductTagsProps } from '@/components/ProductTags/ProductTags.props';
import styles from './ProductTags.module.css';
import FavoriteIcon from './favoriteIcon.svg';

const ProductTags = ({ isFavorite, isSoldOut, discount }: ProductTagsProps) => {
  if (!isFavorite && !isSoldOut && !discount) return null;

  return (
    <div className={styles.tag}>
      {isFavorite && <FavoriteIcon className={styles.favorite} />}
      {discount && !isSoldOut && (
        <span className={styles.discount}>{discount}%</span>
      )}
      {isSoldOut && <span className={styles.soldOut}>Продано</span>}
    </div>
  );
};

export default ProductTags;
