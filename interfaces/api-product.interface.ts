export interface ApiProduct {
  uid: string;
  sku: number;
  discount: number;
  name?: string;
  price?: number;
  description?: string;
  images?: string[];
  rating: number;
  categoryId: number;
}
