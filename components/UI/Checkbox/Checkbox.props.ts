import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface CheckboxProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}
