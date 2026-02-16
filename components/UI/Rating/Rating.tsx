'use client';
import { RatingProps } from '@/components/UI/Rating/Rating.props';
import React, { forwardRef, useState, useEffect, KeyboardEvent } from 'react';
import StarIcon from './star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

const Rating = forwardRef<HTMLDivElement, RatingProps>(
  ({ isEditable = false, error, rating, setRating, ...props }, ref) => {
    const [displayRating, setDisplayRating] = useState<number>(rating);

    useEffect(() => {
      setDisplayRating(rating);
    }, [rating]);

    const handleHover = (value: number) => {
      if (!isEditable) return;
      setDisplayRating(value);
    };

    const handleClick = (value: number) => {
      if (!isEditable || !setRating) return;
      setRating(value);
    };

    const handleKeyboard = (value: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code !== 'Space' || !setRating) return;
      e.preventDefault();
      setRating(value);
    };

    return (
      <div
        ref={ref}
        {...props}
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}
      >
        {Array.from({ length: 5 }, (_, i) => {
          const value = i + 1;

          return (
            <span
              key={value}
              className={cn(styles.star, {
                [styles.filled]: value <= displayRating,
                [styles.editable]: isEditable,
              })}
              onMouseEnter={() => handleHover(value)}
              onMouseLeave={() => handleHover(rating)}
              onClick={() => handleClick(value)}
            >
              <StarIcon
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: React.KeyboardEvent<SVGElement>) =>
                  isEditable && handleKeyboard(value, e)
                }
              />
            </span>
          );
        })}

        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);

Rating.displayName = 'Rating';

export default Rating;
