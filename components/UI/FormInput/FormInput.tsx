import styles from './FormInput.module.css';
import cn from 'classnames';
import { Input } from '@/components';
import { FormInputProps } from '@/components/UI/FormInput/FormInput.props';

export const FormInput = ({
  label,
  error,
  icon,
  className,
  ...props
}: FormInputProps) => {
  return (
    <div className={styles.formInput}>
      {label && <label className={styles.formInputLabel}>{label}</label>}

      <div
        className={cn(styles.formInputControl, {
          [styles.formInputControlwithIcon]: !!icon,
        })}
      >
        <Input
          {...props}
          error={error}
          className={cn(styles.formInputField, className)}
        />

        {icon && <div className={styles.formInputIcon}>{icon}</div>}
      </div>
    </div>
  );
};

FormInput.displayName = 'FormInput';
