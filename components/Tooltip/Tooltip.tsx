import React, { useState, useRef, useEffect } from 'react';
import './tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /** 툴팁 제목 */
  title?: string;
  /** 툴팁 내용 */
  content: string;
  /** 툴팁 위치 */
  position?: TooltipPosition;
  /** 트리거 요소 */
  children: React.ReactNode;
  /** 트리거 이벤트 */
  trigger?: 'hover' | 'click' | 'focus';
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 지연 시간 (ms) */
  delay?: number;
  /** CSS 클래스명 */
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  content,
  position = 'top',
  children,
  trigger = 'hover',
  disabled = false,
  delay = 0,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // 클릭 외부 감지 (click trigger인 경우)
  useEffect(() => {
    if (trigger !== 'click') return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        triggerRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        hideTooltip();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, trigger]);

  const showTooltip = () => {
    if (disabled) return;

    if (delay > 0) {
      timeoutRef.current = setTimeout(() => {
        setIsVisible(true);
        setIsOpen(true);
      }, delay);
    } else {
      setIsVisible(true);
      setIsOpen(true);
    }
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsVisible(false);
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      showTooltip();
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      hideTooltip();
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      if (isOpen) {
        hideTooltip();
      } else {
        showTooltip();
      }
    }
  };

  const handleFocus = () => {
    if (trigger === 'focus') {
      showTooltip();
    }
  };

  const handleBlur = () => {
    if (trigger === 'focus') {
      hideTooltip();
    }
  };

  const getTooltipClasses = () => {
    const classes = ['tooltip'];
    
    if (className) classes.push(className);

    return classes.join(' ');
  };

  return (
    <span className={getTooltipClasses()}>
      <button
        ref={triggerRef}
        type="button"
        className="trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-haspopup="true"
        aria-expanded={isOpen}
        disabled={disabled}
      >
        {typeof children === 'string' ? (
          <span className="hide">{children}</span>
        ) : (
          children
        )}
      </button>
      
      {isVisible && (
        <span ref={tooltipRef} className="panel" role="tooltip">
          {title && <span className="title">{title}</span>}
          <span className="content">{content}</span>
        </span>
      )}
    </span>
  );
};

export interface TooltipButtonProps {
  /** 툴팁 제목 */
  title?: string;
  /** 툴팁 내용 */
  content: string;
  /** 버튼 라벨 (접근성) */
  label?: string;
  /** 툴팁 위치 */
  position?: TooltipPosition;
  /** 트리거 이벤트 */
  trigger?: 'hover' | 'click' | 'focus';
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 지연 시간 (ms) */
  delay?: number;
  /** CSS 클래스명 */
  className?: string;
}

export const TooltipButton: React.FC<TooltipButtonProps> = ({
  title,
  content,
  label = '도움말 보기',
  position = 'top',
  trigger = 'click',
  disabled = false,
  delay = 0,
  className = '',
}) => {
  return (
    <Tooltip
      title={title}
      content={content}
      position={position}
      trigger={trigger}
      disabled={disabled}
      delay={delay}
      className={className}
    >
      <span className="hide">{label}</span>
    </Tooltip>
  );
};

export default Tooltip;