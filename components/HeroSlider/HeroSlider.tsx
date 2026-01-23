'use client';
import { HeroSliderProps } from './HeroSlider.props';
import styles from './HeroSlider.module.css';
import { useState, useEffect, JSX } from 'react';
import { Button } from '@/components';

export interface Slide {
  image: string;
  title: string;
  price: string;
  link: string;
}

const slides: Slide[] = [
  {
    image: '/galleryOne.jpg',
    title: 'Lira Earrings',
    price: '$ 20,00',
    link: '/product/1',
  },
  {
    image: '/galleryTwo.jpg',
    title: 'Lira Earrings',
    price: '$ 20,00',
    link: '/product/2',
  },
];

export const HeroSlider = ({
  className,
  ...props
}: HeroSliderProps): JSX.Element => {
  const [current, setCurrent] = useState(0);

  // Переключение слайдов
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  // const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className={styles.slider}>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className={styles.overlay}>
            <h2>{slide.title}</h2>
            <p className={styles.price}>{slide.price}</p>
            <Button appearance={'white'} className={styles.button}>
              <a href={slide.link}>Смотреть</a>
            </Button>
          </div>
        </div>
      ))}

      {/* Точки */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
};
