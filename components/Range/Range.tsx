'use client'
import { RangeProps } from './Range.props';
import styles from './Range.module.css';
import { JSX, useState, useEffect, useRef } from 'react';
import cn from 'classnames';

export const Range = ({
                          min = 0,
                          max = 180,
                          step = 1,
                          initialMin = 40,
                          initialMax = 120,
                          onChange,
                          className,
                          ...props
                      }: RangeProps): JSX.Element => {

    const [minValue, setMinValue] = useState(initialMin);
    const [maxValue, setMaxValue] = useState(initialMax);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const activeThumb = useRef<'min' | 'max' | null>(null);

    const getPercentage = (val: number) => ((val - min) / (max - min)) * 100;

    // --- Движение усиков ---
    const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!activeThumb.current || !trackRef.current) return;

        const rect = trackRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        let newValue = ((clientX - rect.left) / rect.width) * (max - min) + min;
        newValue = Math.min(max, Math.max(min, newValue));
        newValue = Math.round(newValue / step) * step;

        if (activeThumb.current === 'min') {
            if (newValue >= maxValue) newValue = maxValue - step;
            setMinValue(newValue);
            onChange?.({ min: newValue, max: maxValue });
        } else {
            if (newValue <= minValue) newValue = minValue + step;
            setMaxValue(newValue);
            onChange?.({ min: minValue, max: newValue });
        }
    };

    const stopDragging = () => (activeThumb.current = null);

    useEffect(() => {
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('mouseup', stopDragging);
        window.addEventListener('touchmove', handleMove);
        window.addEventListener('touchend', stopDragging);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('mouseup', stopDragging);
            window.removeEventListener('touchmove', handleMove);
            window.removeEventListener('touchend', stopDragging);
        };
    });

    // 👇 вот этот useEffect — чтобы заливка не пропадала при изменении ширины контейнера
    useEffect(() => {
        const handleResize = () => {
            setMinValue((prev) => prev); // просто форсируем перерендер
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const startDrag = (thumb: 'min' | 'max') => (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        activeThumb.current = thumb;
    };

    const minPercent = getPercentage(minValue);
    const maxPercent = getPercentage(maxValue);

    return (
        <div className={styles.wrapper}>
            <div ref={trackRef} className={styles.track}>
                <div
                    className={styles.range}
                    style={{
                        left: `${minPercent}%`,
                        width: `${maxPercent - minPercent}%`,
                    }}
                ></div>

                {/* Левый усик */}
                <div
                    className={styles.thumb}
                    style={{ left: `${minPercent}%` }}
                    onMouseDown={startDrag('min')}
                    onTouchStart={startDrag('min')}
                >
                    <div className={styles.stick}></div>
                </div>

                {/* Правый усик */}
                <div
                    className={styles.thumb}
                    style={{ left: `${maxPercent}%` }}
                    onMouseDown={startDrag('max')}
                    onTouchStart={startDrag('max')}
                >
                    <div className={styles.stick}></div>
                </div>
            </div>

            <div className={styles.values}>
                <span>Цена: ${minValue}</span> — <span>${maxValue}</span>
            </div>
        </div>
    );
};
