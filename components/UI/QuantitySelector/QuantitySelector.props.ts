export interface QuantitySelectorProps {
  initial?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}
