import {InputProps} from './Input.props';
import styles from './Input.module.css';
import {ForwardedRef, forwardRef, JSX} from 'react';
import cn from 'classnames';
import SearchIcon from '../../public/search.svg'

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, error, label, icon, variant = "default", ...props }, ref: ForwardedRef<HTMLInputElement>) => {
        return (
            <div>
                {label && <label className={styles.label}>{label}</label>}
                <input className={cn(className, styles.input, {[styles.error]: error,
                    [styles.borderless]: variant === "borderless",
                })} ref={ref} {...props} />
                {icon === 'search' && <SearchIcon className={styles.icon} />}
                {error && <span className={styles.errorMessage}>{error.message}</span>}
            </div>
        );
    }
);

Input.displayName = "Input";