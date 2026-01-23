import { InputProps } from './Input.props';
import styles from './Input.module.css';
import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import SearchIcon from '../../public/search.svg';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      error,
      label,
      icon,
      iconPosition = 'left',
      variant = 'default',
      onIconClick,
      ...props
    },
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.wrapper}>
        {label && <label className={styles.label}>{label}</label>}

        <div
          className={cn(styles.inputWrapper, {
            [styles.hasIconLeft]: icon && iconPosition === 'left',
            [styles.hasIconRight]: icon && iconPosition === 'right',
          })}
        >
          {icon && iconPosition === 'left' && (
            <SearchIcon
              className={cn(styles.icon, styles.left, {
                [styles.clickable]: !!onIconClick,
              })}
              onClick={onIconClick}
            />
          )}

          <input
            className={cn(className, styles.input, {
              [styles.error]: error,
              [styles.borderless]: variant === 'borderless',
            })}
            ref={ref}
            {...props}
          />

          {icon && iconPosition === 'right' && (
            <SearchIcon
              className={cn(styles.icon, styles.right, {
                [styles.clickable]: !!onIconClick,
              })}
              onClick={onIconClick}
            />
          )}
        </div>
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
