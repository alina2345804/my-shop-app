import { Product } from '@/interfaces/product.interface';
import { ApiProduct } from '@/interfaces/api-product.interface';

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(
      'https://purpleschool.ru/api-demo/products?limit=1000&offset=0'
    );

    if (!res.ok) {
      console.log(`Ошибка при запросе: ${res.status}`);
      return [];
    }

    const data = await res.json();

    // console.log('data');
    // console.log(data);

    const products: ApiProduct[] = Array.isArray(data.products)
      ? data.products
      : [];

    // console.log('products');
    // console.log(products);

    return products.map((p, index) => {
      const name = p.name ?? 'Без названия';
      const price = Number(p.price) || 0;
      const hasDiscount = (p.discount ?? 0) > 0;
      return {
        uid: `product-${index}`,
        sku: p.sku,
        slug: generateSlug(name),
        name,
        price,
        oldPrice: hasDiscount
          ? Math.round(Number(p.price) * (1 + p.discount / 100))
          : undefined,

        discount: hasDiscount ? p.discount : undefined,

        isSoldOut: false,

        description: p.description ?? '',
        images: Array.isArray(p.images) ? p.images : [],
        rating: p.rating ?? 0,
        categoryId: Number(p.categoryId) || 0,
      };
    });
  } catch (error) {
    console.error('Ошибка при загрузке товаров:', error);
    return [];
  }
}
