import { Product } from '../interfaces/product.interface';
import { ApiProduct } from '@/interfaces/api-product.interface';

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      'https://purpleschool.ru/api-demo/products?limit=1000&offset=0'
    );

    if (!res.ok) {
      throw new Error(`Ошибка при запросе: ${res.status}`);
    }

    const data = await res.json();

    // console.log('data');
    // console.log(data);

    const products: ApiProduct[] = Array.isArray(data.products)
      ? data.products
      : [];

    // console.log('products');
    // console.log(products);

    const normalized: Product[] = products.map((p) => {
      const hasDiscount = typeof p.discount === 'number' && p.discount > 0;
      return {
        name: p.name ?? 'Без названия',
        price: Number(p.price) || 0,

        oldPrice: hasDiscount
          ? Math.round(Number(p.price) * (1 + p.discount / 100))
          : undefined,

        discount: hasDiscount ? p.discount : undefined,

        isSoldOut: false, // если нет в API — дефолт

        description: p.description ?? '',
        images: Array.isArray(p.images) ? p.images : [],
      };
    });
    return normalized;
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    return [];
  }
}
