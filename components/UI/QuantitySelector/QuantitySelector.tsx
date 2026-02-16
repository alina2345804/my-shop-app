'use client';
import { QuantitySelectorProps } from '@/components/UI/QuantitySelector/QuantitySelector.props';
import styles from './QuantitySelector.module.css';
import React from 'react';
import { useState } from 'react';

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  initial = 1,
  min = 1,
  max = 100,
  onChange,
}) => {
  const [value, setValue] = useState(initial);

  const handleDecrement = () => {
    if (value > min) {
      setValue(value - 1);
      onChange?.(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      setValue(value + 1);
      onChange?.(value + 1);
    }
  };

  return (
    <div className={styles.quantity}>
      <button
        className={styles.decrementButton}
        onClick={handleDecrement}
        disabled={value <= min}
      >
        -
      </button>
      <span>{value}</span>
      <button
        className={styles.incrementButton}
        onClick={handleIncrement}
        disabled={value >= max}
      >
        +
      </button>
    </div>
  );
};
