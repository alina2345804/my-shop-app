'use client';
import { ProductGalleryProps } from '@/components/Product/ProductGallery/ProductGallery.props';
import styles from './ProductGallery.module.css';
import { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';

export const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
  const mainImage = images?.[0] ?? null;

  const [activeImage, setActiveImage] = useState<string | null>(mainImage);

  if (!images || images.length === 0 || !activeImage) {
    return null;
  }

  const previewImages = images.slice(1, 5);

  return (
    <div className={styles.productGallery}>
      <div className={styles.previews}>
        {previewImages.map((img, index) => (
          <button
            key={`${img}-${index}`}
            onClick={() => setActiveImage(img)}
            className={cn(styles.preview, {
              [styles.active]: img === activeImage,
            })}
          >
            <Image src={img} alt={alt} width={120} height={120} />
          </button>
        ))}
      </div>

      <div className={styles.mainImage}>
        <Image src={activeImage} alt={alt} width={540} height={524} />
      </div>
    </div>
  );
};
