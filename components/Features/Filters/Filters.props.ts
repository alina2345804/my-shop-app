import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FilterState } from '@/interfaces/filter-state.interface';

export interface FiltersProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}
