export interface Product {
  uid: string;
  sku: number;
  slug: string;
  name: string;
  price: number;
  discount?: number;
  description?: string;
  images?: string[];
  isSoldOut?: boolean;
  oldPrice?: number;
  rating: number;
  categoryId: number;
}
