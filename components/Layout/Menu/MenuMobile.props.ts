import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface MenuMobileProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

export interface NavLink
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  href: string;
  label: string;
  icon?: React.ElementType;
}
