import React, { useState, useEffect } from 'react';
import './toast.css';

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

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  visible = false,
  duration = 3000,
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (visible) {
      setIsVisible(true);
      setIsAnimating(true);
      
      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        
        return () => clearTimeout(timer);
      }
    }
  }, [visible, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300); // 애니메이션 시간
  };

  const getToastClasses = () => {
    const classes = ['toast'];
    
    if (isAnimating) classes.push('-active');
    if (type !== 'info') classes.push(`-${type}`);
    if (className) classes.push(className);

    return classes.join(' ');
  };

  if (!isVisible) return null;

  return (
    <div 
      className={getToastClasses()}
      role="alert"
      aria-live="assertive"
    >
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

export interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

export const ToastContext = React.createContext<ToastContextType | null>(null);

export interface ToastProviderProps {
  children: React.ReactNode;
  /** 최대 토스트 개수 */
  maxToasts?: number;
}

interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 3,
}) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: ToastType = 'info', duration: number = 3000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastItem = { id, message, type, duration };

    setToasts(prev => {
      const newToasts = [...prev, newToast];
      // 최대 개수 제한
      if (newToasts.length > maxToasts) {
        return newToasts.slice(-maxToasts);
      }
      return newToasts;
    });
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            visible={true}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export default Toast;