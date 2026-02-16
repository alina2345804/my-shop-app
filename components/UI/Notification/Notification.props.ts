import { HTMLMotionProps } from 'framer-motion';

export interface NotificationProps extends HTMLMotionProps<'div'> {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}
