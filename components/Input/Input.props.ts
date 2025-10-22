import { DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    label?: string;
    error?: FieldError;
    icon?: 'search';
    className?: string;                  // Имя иконки, если нужна
    variant?: "default" | "borderless"; // 👈 добавляем
};