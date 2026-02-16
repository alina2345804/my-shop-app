'use client';
import { FooterProps } from './Footer.props';
import { JSX, useState } from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { FormInput, Notification } from '@/components';
import FacebookIcon from '../../../public/facebook.svg';
import InIcon from '../../../public/in.svg';
import InstaIcon from '../../../public/insta.svg';
import TwitterIcon from '../../../public/twitter.svg';
import RowIcon from '../../../public/row.svg';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);

  const handleEmailSend = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(true);

    setTimeout(() => {
      setIsVisible(false);
    }, 3000);
  };

  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.linkCopy}>
            <Link href="/contacts" className={styles.info}>
              Контакты
            </Link>
            <Link href="/returns" className={styles.info}>
              Условия покупки
            </Link>
            <Link href="/delivery" className={styles.info}>
              Доставка и возврат
            </Link>
          </div>
          <div className={styles.rowInput}>
            <FormInput
              type="email"
              placeholder="Ваш email для акций и предложений"
              icon={
                <button
                  type="button"
                  onClick={handleEmailSend}
                  className={styles.sendButton}
                >
                  <RowIcon />
                </button>
              }
              className={styles.emailInput}
            />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.copy}>
            © 2024 <span>Shoppe</span>
          </div>
          <div className={styles.socials}>
            <a
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <InstaIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <InIcon />
            </a>
          </div>
        </div>
      </div>
      <Notification
        message="Ваш email подписан на новости и уведомления"
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
    </footer>
  );
};
