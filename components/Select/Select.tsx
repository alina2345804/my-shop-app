// import {SelectProps} from './Select.props';
// import styles from './Select.module.css';
// import {ForwardedRef, forwardRef, JSX} from 'react';
// import cn from 'classnames';
// import {Input} from "@/components";
//
// export const Select = forwardRef<HTMLSelectElement, SelectProps>(
//     ({ label, error, options, ...props }, ref) => (
//         <div className={styles.wrapper}>
//             {label && <label className={styles.label}>{label}</label>}
//             <select ref={ref} className={styles.select} {...props}>
//                 {options.map((option) => (
//                     <option key={option.value} value={option.value}>
//                         {option.label}
//                     </option>
//                 ))}
//             </select>
//             {error && <span className={styles.error}>{error}</span>}
//         </div>
//     )
// );
// Select.displayName = "Select";