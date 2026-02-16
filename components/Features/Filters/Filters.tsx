'use client';
import { FiltersProps } from '@/components/Features/Filters/Filters.props';
import { Range, SearchInput } from '@/components';
import styles from './Filters.module.css';
import { Switch } from '@headlessui/react';
import cn from 'classnames';
import { useState } from 'react';

const Filters = ({ filters, onFiltersChange }: FiltersProps) => {
  const [searchDraft, setSearchDraft] = useState(filters.search);

  const applySearch = () => {
    onFiltersChange({
      ...filters,
      search: searchDraft,
    });
  };

  return (
    <div className={styles.filters}>
      <SearchInput
        variant="catalog"
        value={searchDraft}
        onChange={(e) => setSearchDraft(e.target.value)}
        onSearch={applySearch}
        className={styles.contentInput}
      />

      <select
        className={styles.categorySelect}
        value={filters.categoryId ?? ''}
        onChange={(e) =>
          onFiltersChange({
            ...filters,
            categoryId: e.target.value ? Number(e.target.value) : null,
          })
        }
      >
        <option value="">Все категории</option>
        <option value="1">Заколки</option>
        <option value="2">Серьги</option>
        <option value="3">Цепи</option>
      </select>

      <Range
        initialMin={filters.priceFrom}
        initialMax={filters.priceTo}
        onValueChange={({ min, max }) =>
          onFiltersChange({
            ...filters,
            priceFrom: min,
            priceTo: max,
          })
        }
      />

      <div className={styles.discountFilter}>
        <span className={styles.discountLabel}>Со скидкой</span>
        <Switch
          checked={filters.switchDiscount}
          onChange={(value) =>
            onFiltersChange({ ...filters, switchDiscount: value })
          }
          className={cn(styles.switch, {
            [styles.active]: filters.switchDiscount,
          })}
        >
          <span className={styles.thumb} />
        </Switch>
      </div>
    </div>
  );
};

export default Filters;
