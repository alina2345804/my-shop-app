import { DetailedHTMLProps, HTMLAttributes} from "react";

export interface NotificationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    /** Текст уведомления */
    message: string;
    /** Отображается ли уведомление */
    isVisible: boolean;
    /** Функция для закрытия уведомления */
    onClose: () => void;
}