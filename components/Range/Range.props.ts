import {DetailedHTMLProps,InputHTMLAttributes} from "react";

export interface RangeProps extends  Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
> {
    min?: number;
    max?: number;
    step?: number;
    initialMin?: number;
    initialMax?: number;
    onChange?: (values: { min: number; max: number }) => void;
}