import { Product } from '../interfaces/product.interface';
import { API }  from '../app/api';

export async function getProducts(): Promise<Product[]> {
    try {
        const res = await fetch("https://purpleschool.ru/api-demo/products?limit=1000&offset=0");

        if (!res.ok) {
            throw new Error(`Ошибка при запросе: ${res.status}`);
        }

        const data = await res.json();

        console.log("data");
        console.log(data);

        // Если API возвращает массив внутри data.products
        const products = Array.isArray(data.products) ? data.products : [];

        console.log("products");
        console.log(products);

        // Приводим к ожидаемой структуре
        const normalized: Product[] = products.map((p: any): Product => ({
            name: p.name ?? "Без названия",
            price: Number(p.price) ?? 0,
            // oldPrice: p.oldPrice ? Number(p.oldPrice) : undefined,
            // discountPercent: p.discount ?? 0,
            description: p.description ?? "",
            images: Array.isArray(p.images) ? p.images : [],
            // isSoldOut: p.isSoldOut ?? false,
        }));

        console.log("normalized");
        console.log(normalized);

        return normalized;
    } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
        return [];
    }
}



















