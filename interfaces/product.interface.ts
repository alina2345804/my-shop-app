 export interface Product {
    name: string;
    price: number;
    discount?: number;
    description?: string;
    images?: string[]; // 👈 массив ссылок на изображения
    // isSoldOut?: boolean;
    // oldPrice?: number;
}