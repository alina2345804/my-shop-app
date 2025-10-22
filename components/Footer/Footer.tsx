'use client'
import {FooterProps} from "./Footer.props";
import {JSX, useState} from "react";
import styles from './Footer.module.css';
import cn from "classnames";
import Link from "next/link";
import { Input, Notification } from "@/components";

import FacebookIcon from '../../public/facebook.svg';
import InIcon from '../../public/in.svg';
import InstaIcon from '../../public/insta.svg';
import TwitterIcon from '../../public/twitter.svg';
import RowIcon from '../../public/row.svg';

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {

    const [isVisible, setIsVisible] = useState(false);

    const handleEmailSend = (e: React.MouseEvent) => {
        e.preventDefault();
        // здесь ты можешь добавить отправку email, API-запрос и т.п.
        setIsVisible(true);

        // автоматически скрываем через 3 секунды
        setTimeout(() => {
            setIsVisible(false);
        }, 3000);
    };

    return (
       <footer className={cn(styles.footer, className)} {...props}>
           <div className={styles.container}>
                   <div className={styles.links}>
                       <div className={styles.linkCopy}>
                           <Link href="/contacts" className={styles.info}>Контакты</Link>
                           <div className={styles.copy}>
                               © 2024 <span>Shoppe</span>
                           </div>
                       </div>
                           <Link href="/returns" className={styles.info}>Условия покупки</Link>
                           <Link href="/delivery" className={styles.info} >Доставка и возврат</Link>
                   </div>

               <div className={styles.right}>
                   <div className={styles.rowInput}>
                       <Input
                           type="email"
                           placeholder="Ваш email для акций и предложений"
                           variant="borderless"
                           className={styles.emailInput}/>
                      <a href="#" onClick={handleEmailSend}><RowIcon className={styles.row}/></a>
                   </div>
                   <div className={styles.socials}>
                       <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                           <InstaIcon />
                       </a>
                       <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                           <FacebookIcon />
                       </a>
                       <a href="https://facebook.com" target="_blank" aria-label="Facebook">
                           <TwitterIcon />
                       </a>
                       <a href="https://facebook.com" target="_blank" aria-label="Facebook">
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