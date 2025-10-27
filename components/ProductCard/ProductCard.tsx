'use client'
import { JSX, useState, useEffect } from "react";
import { ProductCardProps } from "./ProductCard.props";
import {Htag} from "@/components";
import styles from './ProductCard.module.css';
import cn from 'classnames';
import EyeIcon  from '../../public/eye.svg';
import LikeIcon  from '../../public/like.svg';
import CartIcon  from '../../public/cart.svg';
import Image from 'next/image';
import CloseIcon  from '../../public/close.svg';


export const ProductCard = ({ name, price, discount, description, images, className, onQuickViewClick }: ProductCardProps): JSX.Element =>  {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleQuickView = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const imageUrl = images?.[0] || '/placeholder.png';


    return (
        <>
        <div className={cn(styles.productCard, className)}>
            <div className={styles.productImage}>
                <Image
                    src={imageUrl} // берём первое или запасное
                    alt={name}
                    fill={true} // Или явно width/height
                />
                {/* Оверлей с иконками, появляется при наведении */}
                <div className={styles.productActions}>
                        <EyeIcon onClick={handleQuickView}/>
                        <LikeIcon onClick={onQuickViewClick}/>
                        <CartIcon onClick={onQuickViewClick}/>
                </div>

                 Теги в углу
                {/*<div className={styles.productTags}>*/}
                {/*    {discount && !isSoldOut && (*/}
                {/*        <span className={styles.tagDiscount}>*/}
                {/*            -{discount}%*/}
                {/*        </span>*/}
                {/*    )}*/}
                {/*    {isSoldOut && (*/}
                {/*        <span className={styles.soldOut}>*/}
                {/*            Продано*/}
                {/*        </span>*/}
                {/*    )}*/}
                {/*</div>*/}
            </div>

             {/*Информация о товаре*/}
            <div className={styles.productInfo}>
                <Htag tag={'h3'}>{name}</Htag>
                {/*<div className={styles.productPrice}>*/}
                {/*    {oldPrice ? (*/}
                {/*        <>*/}
                {/*            <span className={styles.priceOld}>${oldPrice.toFixed(2)}</span>*/}
                {/*            <span className={styles.priceNew}>${price.toFixed(2)}</span>*/}
                {/*        </>*/}
                {/*    ) : (*/}
                {/*        <span className={styles.priceRegular}>${price.toFixed(2)}</span>*/}
                {/*    )}*/}
                {/*</div>*/}
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
                            {/*<div className={styles.modalPrice}>*/}
                            {/*    {oldPrice && (*/}
                            {/*        <span className={styles.priceOld}>${oldPrice.toFixed(2)}</span>*/}
                            {/*    )}*/}
                            {/*    <span className={styles.priceNew}>${price.toFixed(2)}</span>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            )}

        </>
    )
};