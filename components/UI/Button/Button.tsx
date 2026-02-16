import { JSX } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from '@/components/UI/Button/Button.props';
import cn from 'classnames';

export const Button = ({
  appearance,
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.black]: appearance === 'black',
        [styles.white]: appearance === 'white',
      })}
      {...props}
    ></button>
  );
};
