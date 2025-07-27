import React from 'react';
import './input.css';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    /** 에러 메시지 (하단에 빨간색으로 표시) */
    error?: string;
    /** 일반 정보 메시지 (하단에 회색으로 표시) */
    info?: string;
    /** 성공 메시지 (하단에 초록색으로 표시) */
    success?: string;
    variant?: 'text' | 'box' | 'number' | 'password' | 'search' | 'tel';
    state?: 'default' | 'error' | 'focus' | 'filled' | 'disabled' | 'success';
    clearable?: boolean;
    className?: string;
    wrapperClassName?: string;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=Input.d.ts.map