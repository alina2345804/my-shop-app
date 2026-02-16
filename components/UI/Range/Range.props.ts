import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RangeProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  min?: number;
  max?: number;
  step?: number;
  initialMin?: number;
  initialMax?: number;
  onValueChange?: (values: { min: number; max: number }) => void;
}
