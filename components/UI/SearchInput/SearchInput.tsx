import { SearchInputProps } from '@/components/UI/SearchInput/SearchInput.props';
import styles from './SearchInput.module.css';
import cn from 'classnames';
import { Input } from '@/components';
import SearchIcon from '@/public/search.svg';

export const SearchInput = ({
  variant = 'header',
  placeholder = 'Поиск...',
  value,
  onChange,
  onSearch,
  className,
}: SearchInputProps) => {
  return (
    <div className={cn(styles.wrapper, styles[variant], className)}>
      <Input
        className={styles.inputSearch}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => e.key === 'Enter' && onSearch?.()}
      />

      <SearchIcon className={styles.iconSearch} onClick={() => onSearch?.()} />
    </div>
  );
};

SearchInput.displayName = 'SearchInput';
