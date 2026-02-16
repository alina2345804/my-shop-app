export interface FilterState {
  categoryId: number | null;
  priceFrom: number;
  priceTo: number;
  switchDiscount: boolean;
  search: string;
}
