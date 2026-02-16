import { CheckboxProps } from './Checkbox.props';
import styles from './Checkbox.module.css';

export const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <div className={styles.checkboxLabel}>
      <input type="checkbox" {...props} />
      <span>{label}</span>
    </div>
  );
};
