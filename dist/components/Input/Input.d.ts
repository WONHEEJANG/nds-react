import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    variant?: 'text' | 'box' | 'number' | 'password' | 'search' | 'tel';
    state?: 'default' | 'error' | 'focus' | 'filled' | 'disabled';
    clearable?: boolean;
    className?: string;
    wrapperClassName?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map