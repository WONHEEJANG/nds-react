import React, { useState, useEffect } from 'react';

const Toast = ({ 
  message = '설정이 변경되었습니다.',
  isVisible = false,
  duration = 3000,
  onClose,
  className = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState(isVisible);

  useEffect(() => {
    setIsActive(isVisible);
  }, [isVisible]);

  useEffect(() => {
    if (isActive && duration > 0) {
      const timer = setTimeout(() => {
        setIsActive(false);
        if (onClose) {
          onClose();
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isActive, duration, onClose]);

  const handleClose = () => {
    setIsActive(false);
    if (onClose) {
      onClose();
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['toast'];
    
    if (isActive) {
      classes.push('-active');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div 
      className={getClassName()} 
      role="alert" 
      aria-live="assertive"
      {...props}
    >
      <div className="message">
        <p>{message}</p>
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const ToastContainer = ({ children, ...props }) => (
  <div {...props}>
    {children}
  </div>
);

export default Toast; 