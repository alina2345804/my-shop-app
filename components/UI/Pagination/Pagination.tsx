import { PaginationProps } from './Pagination.props';
import styles from './Pagination.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import { Button } from '@/components';
import RowBIcon from '../../../public/rowB.svg';

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}: PaginationProps): JSX.Element => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          '...',
          currentPage - 1,
          currentPage,
          currentPage + 1,
          '...',
          totalPages
        );
      }
    }
    return pages;
  };

  const handleClick = (page: number | string) => {
    if (page !== '...' && page !== currentPage) {
      onPageChange(page as number);
    }
  };

  return (
    <div className={styles.pagination}>
      {getPageNumbers().map((page, index) =>
        typeof page === 'number' ? (
          <Button
            key={index}
            appearance={page === currentPage ? 'black' : 'white'}
            className={cn(styles.pageButton, {
              [styles.active]: page === currentPage,
            })}
            onClick={() => handleClick(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={index} className={styles.dots}>
            {page}
          </span>
        )
      )}
      <Button
        appearance="white"
        className={styles.pageButton}
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <RowBIcon className={styles.arrowButton} />
      </Button>
    </div>
  );
};
