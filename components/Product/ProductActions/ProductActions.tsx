'use client';
import LikeIcon from '@/public/like.svg';
import React from 'react';
import styles from './ProductActions.module.css';
import MessageIcon from '@/public/message.svg';
import FacebookIcon from '@/public/facebook.svg';
import InstaIcon from '@/public/insta.svg';
import TwitterIcon from '@/public/twitter.svg';
import { useFavorites } from '@/components';
import { ProductActionsProps } from '@/components/Product/ProductActions/ProductActions.props';

export const ProductActions = ({ product }: ProductActionsProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const favorite = isFavorite(product.name);

  return (
    <div className={styles.productActions}>
      <LikeIcon
        onClick={(e: React.MouseEvent<SVGSVGElement>) => {
          e.stopPropagation();
          toggleFavorite(product);
        }}
        className={favorite ? styles.liked : undefined}
      />
      <div className={styles.dividerInfo}></div>
      <div className={styles.socialsProductInformation}>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <MessageIcon />
        </a>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <FacebookIcon />
        </a>
        <a href="https://instagram.com" target="_blank" aria-label="Instagram">
          <InstaIcon />
        </a>
        <a href="https://facebook.com" target="_blank" aria-label="Facebook">
          <TwitterIcon />
        </a>
      </div>
    </div>
  );
};
