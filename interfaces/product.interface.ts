export interface Product {
  name: string;
  price: number;
  discount?: number;
  description?: string;
  images?: string[];
  isSoldOut?: boolean;
  oldPrice?: number;
}
