'use client';
import { NotificationProps } from './Notification.props';
import styles from './Notification.module.css';
import { JSX, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import cn from 'classnames';
import CheckIcon from './check.svg';

export const Notification = ({
  message,
  isVisible,
  onClose,
  className,
  ...props
}: NotificationProps): JSX.Element => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => onClose(), 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          {...props}
          className={cn(styles.notification, className)}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.95 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <div className={styles.checkNot}>
            <CheckIcon className={styles.check} />
            <div className={styles.content}>{message}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
