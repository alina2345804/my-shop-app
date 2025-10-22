import { DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface SelectProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
    error?: FieldError
};