'use client';
import { HeroSliderProps } from './HeroSlider.props';
import styles from './HeroSlider.module.css';
import { useState, useEffect, JSX } from 'react';
import { Button } from '@/components';
import cn from 'classnames';
import Link from 'next/link';

export const HeroSlider = ({
  slides,
  autoplayDelay = 5000,
  className,
  ...props
}: HeroSliderProps): JSX.Element => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [slides.length, autoplayDelay]);

  return (
    <div className={cn(styles.slider, className)} {...props}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(styles.slide, {
            [styles.active]: index === current,
          })}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}>
            <h2>{slide.title}</h2>
            <p className={styles.price}>{slide.price}</p>

            <Button appearance="white" className={styles.button}>
              <Link href={slide.link}>Смотреть</Link>
            </Button>
          </div>
        </div>
      ))}

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={cn(styles.dot, {
              [styles.activeDot]: i === current,
            })}
            onClick={() => setCurrent(i)}
            aria-label={`Перейти к слайду ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
