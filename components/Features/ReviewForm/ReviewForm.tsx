'use client';
import { useState } from 'react';
import { Button, Checkbox, FormInput, Htag, P } from '@/components';
import styles from './ReviewForm.module.css';
import Rating from '@/components/UI/Rating/Rating';
import { Controller, useForm } from 'react-hook-form';
import { ReviewFormProps } from '@/components/Features/ReviewForm/ReviewForm.props';
import cn from 'classnames';

interface ReviewFormValues {
  name: string;
  email: string;
  review: string;
  rating: number;
  remember: boolean;
}

// костыль по пропсам поставила временно, надо убрать

export const ReviewForm = ({
  product,
  className,
  ...props
}: ReviewFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>();

  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: ReviewFormValues) => {
    try {
      const payload = {
        ...data,
        productId: product.slug,
      };
      console.log(payload);

      setIsSuccess(true);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={cn(styles.formWrapper, className)} {...props}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formName}>
          <Htag tag="h3" className={styles.titleForm}>
            Добавить отзыв
          </Htag>
          <P size="s" className={styles.subtitleForm}>
            Ваш email не будет опубликован. Обязательные поля помечены *
          </P>
        </div>

        <label className={styles.labelReview}>
          Отзыв*
          <textarea
            className={cn(styles.textareaReview, {
              [styles.error]: errors.review,
            })}
            {...register('review', { required: 'Введите текст отзыва' })}
          />
          {errors.review && (
            <span className={styles.errorsText}>{errors.review.message}</span>
          )}
        </label>

        <FormInput
          type="text"
          placeholder="Ваше имя*"
          {...register('name', { required: 'Введите ваше имя' })}
          className={styles.inputFormName}
        />

        <div className={styles.formCheck}>
          <FormInput
            type="email"
            placeholder="Ваш email*"
            {...register('email', {
              required: 'Введите ваш email',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Некорректный email',
              },
            })}
            error={errors.email}
            className={styles.emailFormInput}
          />

          <Checkbox
            label="Сохранить данные для следующих отзывов"
            {...register('remember')}
            className={styles.checkForm}
          />
        </div>

        <div className={styles.ratingForm}>
          <span>Рейтинг*</span>
          <Controller
            name="rating"
            control={control}
            rules={{ required: 'Поставьте рейтинг' }}
            render={({ field }) => (
              <Rating
                rating={field.value ?? 0}
                setRating={field.onChange}
                isEditable
                error={errors.rating}
              />
            )}
          />
        </div>

        <Button appearance="black" type="submit" className={styles.buttonForm}>
          Отправить
        </Button>

        {isSuccess && (
          <div className={styles.success}>
            Спасибо! Отзыв о товаре «{product.name}» отправлен.
          </div>
        )}
      </form>
    </div>
  );
};

ReviewForm.displayName = 'ReviewForm';
