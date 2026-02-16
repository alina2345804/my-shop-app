'use client';
import { JSX, useState } from 'react';
import { ProductCardProps } from './ProductCard.props';
import { Htag } from '@/components';
import styles from './ProductCard.module.css';
import cn from 'classnames';
import EyeIcon from '../../../public/eye.svg';
import LikeIcon from '../../../public/like.svg';
import CartIcon from '../../../public/cart.svg';
import Image from 'next/image';
import CloseIcon from '../../../public/close.svg';
import ProductPrice from '@/components/Product/ProductPrice/ProductPrice';
import ProductTags from '@/components/Product/ProductTags/ProductTags';
import { useFavorites } from '@/components/Features/FavoriteContext/FavoriteContext';

export const ProductCard = ({
  product,
  className,
  onQuickViewClick,
  variant,
}: ProductCardProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { name, price, images, oldPrice } = product;

  const imageUrl = images?.[0] || '/placeholder.png';

  const handleQuickView = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.name);

  return (
    <>
      <div
        className={cn(
          styles.productCard,
          variant === 'home' && styles.homeCard,
          variant === 'catalog' && styles.catalogCard,
          className
        )}
      >
        <div className={styles.productImage}>
          <Image
            src={imageUrl} // берём первое или запасное
            alt={name}
            fill={true} // Или явно width/height тут вопрос
            // Это закомvентила, так как вопрос с адаптацией
          />
          {/* Оверлей с иконками, появляется при наведении */}
          <div className={styles.productActions}>
            <EyeIcon onClick={handleQuickView} />
            <LikeIcon
              onClick={(e: React.MouseEvent<SVGSVGElement>) => {
                e.stopPropagation();
                toggleFavorite(product);
              }}
              className={favorite ? styles.liked : undefined}
            />
            <CartIcon onClick={onQuickViewClick} />
          </div>
          Теги в углу
          <ProductTags
            isFavorite={favorite}
            discount={product.discount}
            isSoldOut={product.isSoldOut}
          />
        </div>

        {/*Информация о товаре*/}
        <div className={styles.productInfo}>
          <Htag tag={'h3'}>{name}</Htag>
          <ProductPrice price={price} oldPrice={oldPrice} />
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()} // чтобы не закрывалась при клике внутрь
          >
            <button className={styles.modalClose} onClick={handleCloseModal}>
              <CloseIcon />
            </button>

            <div className={styles.modalImageWrapper}>
              <Image
                src={imageUrl} // берём первое или запасное
                alt={name}
                width={400}
                height={400}
                className={styles.modalImage}
              />
            </div>

            <div className={styles.modalInfo}>
              <Htag tag="h3">{name}</Htag>
              <ProductPrice price={price} oldPrice={oldPrice} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
