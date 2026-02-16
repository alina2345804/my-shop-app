import { InputHTMLAttributes } from 'react';

export interface SearchInputProps
  extends Pick<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  variant?: 'header' | 'catalog';
  placeholder?: string;
  onSearch: () => void;
  className?: string;
}
