import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, error, label, ...props },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}

        <input
          ref={ref}
          className={cn(className, styles.input, {
            [styles.error]: error,
          })}
          {...props}
        />

        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
