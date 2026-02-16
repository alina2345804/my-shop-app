import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { HeroSlide } from '@/interfaces/slide.interface';

export interface HeroSliderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  slides: HeroSlide[];
  autoplayDelay?: number;
}
