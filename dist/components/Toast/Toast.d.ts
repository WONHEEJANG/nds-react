import React from 'react';
export type ToastType = 'info' | 'success' | 'warning' | 'error';
export interface ToastProps {
    /** 토스트 메시지 */
    message: string;
    /** 토스트 타입 */
    type?: ToastType;
    /** 표시 여부 */
    visible?: boolean;
    /** 자동 닫힘 시간 (ms), 0이면 자동으로 닫히지 않음 */
    duration?: number;
    /** 토스트가 닫힐 때 호출되는 콜백 */
    onClose?: () => void;
    /** CSS 클래스명 */
    className?: string;
}
export declare const Toast: React.FC<ToastProps>;
export interface ToastContextType {
    showToast: (message: string, type?: ToastType, duration?: number) => void;
}
export declare const ToastContext: React.Context<ToastContextType | null>;
export interface ToastProviderProps {
    children: React.ReactNode;
    /** 최대 토스트 개수 */
    maxToasts?: number;
}
export declare const ToastProvider: React.FC<ToastProviderProps>;
export declare const useToast: () => ToastContextType;
export default Toast;
//# sourceMappingURL=Toast.d.ts.map