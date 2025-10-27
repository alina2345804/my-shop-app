'use client'
import {Pagination, Range, ProductCard, Input} from "@/components";
import {getProducts} from "@/api/products";
import { useState, useEffect } from "react";
import { Select, Switch } from '@headlessui/react';
import styles from '../page.module.css';
import { Product } from '../../../interfaces/product.interface';
import cn from 'classnames';
import {images} from "next/dist/build/webpack/config/blocks/images";

export default function CatalogPage() {
    const [enabled, setEnabled] = useState(false)
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const totalPages = 3;
    // const onQuickViewClick = (productName: string) => {
    //     alert(`Открываем быстрый просмотр для: ${productName}`);
    //     // Здесь вы будете открывать модальное окно (зум)
    // };

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
            setLoading(false);
        }

        loadProducts();
    }, []);


    if (loading) return <div>Загрузка...</div>;

    return (
        <div className={styles.productCatalog}>
            {/* контент каталога */}
            <div className={styles.catalof}>
                {/*<Input*/}
                {/*    type="text"*/}
                {/*    placeholder="Поиск..."*/}
                {/*    variant="default"*/}
                {/*    icon={'search'}*/}
                {/*    onIconClick={() => console.log("🔍 Поиск запущен")}*/}
                {/*    wrapperClassName={styles.search} // 👈 ВОТ ТАК ПРАВИЛЬНО*/}
                {/*    // className={...} // этот пропс теперь для самого <input>, если нужно*/}
                {/*/>*/}
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    onPageChange={(p) => setPage(p)}
                />

                <Select name="status" aria-label="Project status" className={styles.select}>
                    <option value="active" className={styles.active}>Категория</option>
                    <option value="paused">Paused</option>
                    <option value="delayed">Delayed</option>
                    <option value="canceled">Canceled</option>
                </Select>

                <div className={styles.custom}>
                 <span className={styles.label}>
                    Со скидкой
                </span>
                    <Switch
                        checked={enabled}
                        onChange={setEnabled}
                        className={cn(styles.switch, {[styles.active]: enabled})}
                    >
                        <span className={styles.thumb}/>
                    </Switch>
                </div>

                <Range min={0}
                       max={180}
                       step={10}
                       initialMin={40}
                       initialMax={180}
                       onChange={({min, max}) => console.log('Диапазон:', min, '-', max)}/>
            </div>

            <div className="catalog">

                {/*{products.map((product: Product) => {*/}
                {/*    return(product.images)*/}
                {/*})}*/}


                {products.map((product: Product,  index: number) => {
                    return (
                        <ProductCard
                            key={product.name + index}
                            images={product.images || []}
                            name={product.name}
                            price={product.price}
                            discount={product.discount}>

                        </ProductCard>
                    );
                })}
            </div>
        </div>
    )
}