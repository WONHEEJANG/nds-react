import React, { useState, useEffect, useRef } from 'react';
import './popover.css';

export type PopoverPosition = 'bc' | 'bl' | 'br' | 'tc' | 'tl' | 'tr';

export interface PopoverProps {
  /** 팝오버 내용 */
  content: string | React.ReactNode;
  /** 위치 */
  position?: PopoverPosition;
  /** 표시 여부 */
  visible?: boolean;
  /** 닫기 버튼 표시 여부 */
  showCloseButton?: boolean;
  /** 자동 숨김 시간 (밀리초) */
  autoHideDelay?: number;
  /** 타겟 요소 (팝오버를 표시할 기준) */
  target?: HTMLElement;
  /** 닫기 이벤트 */
  onClose?: () => void;
  /** CSS 클래스명 */
  className?: string;
  /** 인라인 스타일 */
  style?: React.CSSProperties;
}

export const Popover: React.FC<PopoverProps> = ({
  content,
  position = 'bc',
  visible = false,
  showCloseButton = true,
  autoHideDelay,
  target,
  onClose,
  className = '',
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(visible);
  const popoverRef = useRef<HTMLSpanElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

  useEffect(() => {
    if (isVisible && autoHideDelay) {
      timeoutRef.current = setTimeout(() => {
        handleClose();
      }, autoHideDelay);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isVisible, autoHideDelay]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isVisible &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        target &&
        !target.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, target]);

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const getPopoverClasses = () => {
    const classes = ['popover', `-${position}`];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getPopoverStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      opacity: isVisible ? 1 : 0,
      visibility: isVisible ? 'visible' : 'hidden',
      transition: 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out',
      ...style,
    };

    // 타겟 요소가 있으면 위치 계산
    if (target && isVisible) {
      const targetRect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

      switch (position) {
        case 'bc': // bottom-center
          baseStyle.position = 'absolute';
          baseStyle.top = targetRect.bottom + scrollTop + 8;
          baseStyle.left = targetRect.left + scrollLeft + (targetRect.width / 2);
          baseStyle.transform = 'translateX(-50%)';
          break;
        case 'bl': // bottom-left
          baseStyle.position = 'absolute';
          baseStyle.top = targetRect.bottom + scrollTop + 8;
          baseStyle.left = targetRect.left + scrollLeft;
          break;
        case 'br': // bottom-right
          baseStyle.position = 'absolute';
          baseStyle.top = targetRect.bottom + scrollTop + 8;
          baseStyle.right = window.innerWidth - targetRect.right - scrollLeft;
          break;
        case 'tc': // top-center
          baseStyle.position = 'absolute';
          baseStyle.bottom = window.innerHeight - targetRect.top - scrollTop + 8;
          baseStyle.left = targetRect.left + scrollLeft + (targetRect.width / 2);
          baseStyle.transform = 'translateX(-50%)';
          break;
        case 'tl': // top-left
          baseStyle.position = 'absolute';
          baseStyle.bottom = window.innerHeight - targetRect.top - scrollTop + 8;
          baseStyle.left = targetRect.left + scrollLeft;
          break;
        case 'tr': // top-right
          baseStyle.position = 'absolute';
          baseStyle.bottom = window.innerHeight - targetRect.top - scrollTop + 8;
          baseStyle.right = window.innerWidth - targetRect.right - scrollLeft;
          break;
      }
    }

    return baseStyle;
  };

  if (!isVisible && !visible) {
    return null;
  }

  return (
    <span
      ref={popoverRef}
      className={getPopoverClasses()}
      style={getPopoverStyle()}
    >
      {typeof content === 'string' ? content : content}
      {showCloseButton && (
        <button
          type="button"
          className="popover-close"
          onClick={handleClose}
        >
          <span className="hide">삭제</span>
        </button>
      )}
    </span>
  );
};

// Hook for managing popover state
export const usePopover = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [target, setTarget] = useState<HTMLElement | null>(null);

  const show = (targetElement?: HTMLElement) => {
    if (targetElement) {
      setTarget(targetElement);
    }
    setIsVisible(true);
  };

  const hide = () => {
    setIsVisible(false);
  };

  const toggle = (targetElement?: HTMLElement) => {
    if (isVisible) {
      hide();
    } else {
      show(targetElement);
    }
  };

  return {
    isVisible,
    target,
    show,
    hide,
    toggle,
    setTarget,
  };
};

export default Popover;