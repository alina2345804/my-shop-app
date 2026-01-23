import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: FieldError;
  icon?: 'search' | null;
  iconPosition?: 'left' | 'right';
  className?: string;
  variant?: 'default' | 'borderless';
  onIconClick?: () => void;
}
