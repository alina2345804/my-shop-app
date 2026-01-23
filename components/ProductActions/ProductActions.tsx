import { ProductActionsProps } from '@/components/ProductActions/ProductActions.props';
import { useState } from 'react';
import { Button } from '@/components/Button/Button';

export const ProductActions = ({
  product,
  onAddToCart,
}: ProductActionsProps) => {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product, count);
    }
    console.log(`Добавлено в корзину: ${product.name} x ${count}`);
  };

  return (
    <div>
      <input
        type="number"
        min={1}
        value={count}
        onChange={(e) => setCount(+e.target.value)}
      />
      <Button appearance="white">Добавить в корзину</Button>
    </div>
  );
};
