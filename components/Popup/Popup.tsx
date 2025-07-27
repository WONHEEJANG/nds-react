import React, { useEffect } from 'react';

export type PopupType = 'alert' | 'fullscreen' | 'layer';
export type ButtonLayout = 'single' | 'half' | 'custom';

export interface PopupButton {
  text: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  flex?: number;
  onClick?: () => void;
}

export interface PopupProps {
  /** 고유 ID */
  id: string;
  /** 팝업 타입 */
  type?: PopupType;
  /** 표시 여부 */
  isOpen?: boolean;
  /** 제목 */
  title?: string;
  /** 내용 */
  content?: string | React.ReactNode;
  /** 헤더 표시 여부 (layer 타입용) */
  showHeader?: boolean;
  /** 버튼 목록 */
  buttons?: PopupButton[];
  /** 버튼 레이아웃 */
  buttonLayout?: ButtonLayout;
  /** ESC 키로 닫기 */
  closeOnEsc?: boolean;
  /** 배경 클릭으로 닫기 */
  closeOnBackdrop?: boolean;
  /** 자식 컴포넌트 */
  children?: React.ReactNode;
  /** 닫기 이벤트 */
  onClose?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Popup: React.FC<PopupProps> = ({
  id,
  type = 'alert',
  isOpen = false,
  title,
  content,
  showHeader = true,
  buttons = [],
  buttonLayout = 'single',
  closeOnEsc = true,
  closeOnBackdrop = false,
  children,
  onClose,
  className = '',
}) => {
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (closeOnEsc && event.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // 스크롤 방지
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeOnEsc, onClose]);

  const getPopupClasses = () => {
    const classes = [];
    
    if (type === 'alert') {
      classes.push('alert');
    } else if (type === 'fullscreen') {
      classes.push('popup', '-active');
    } else if (type === 'layer') {
      classes.push('layer');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const getButtonsClasses = () => {
    const classes = ['buttons'];
    
    if (buttonLayout === 'half') {
      classes.push('-half');
    } else if (buttonLayout === 'custom') {
      classes.push('-custom');
    }
    
    return classes.join(' ');
  };

  const getButtonClasses = (button: PopupButton) => {
    const classes = ['button'];
    
    if (button.variant) {
      classes.push(`-${button.variant}`);
    }
    
    if (button.size) {
      classes.push(`-${button.size}`);
    }
    
    if (button.flex) {
      classes.push(`flex-${button.flex}`);
    }
    
    return classes.join(' ');
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      onClose?.();
    }
  };

  const handleClose = () => {
    onClose?.();
  };

  const renderAlertPopup = () => (
    <div className="container">
      <div className="contents">
        <div className="content">
          {title && <h2 className="h5">{title}</h2>}
          {typeof content === 'string' ? (
            <p className="noti-phrase">{content}</p>
          ) : (
            content
          )}
          {children}
        </div>
        {buttons.length > 0 && (
          <div className="fixer">
            <div className={getButtonsClasses()}>
              {buttons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  className={getButtonClasses(button)}
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderFullscreenPopup = () => (
    <div className="navigation">
      <div className="header">
        <div className="inner">
          {title && <h1 className="title">{title}</h1>}
          <div className="funcs">
            <button type="button" className="func -close" onClick={handleClose}>
              <span className="hide">닫기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderLayerPopup = () => (
    <div className="container">
      {showHeader ? (
        <div className="header">
          <div className="inner">
            {title && <h1 className="title">{title}</h1>}
            <div className="funcs">
              <button type="button" className="func -close" onClick={handleClose}>
                <span className="hide">닫기</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="no-header" aria-hidden="true">
          <div className="inner"></div>
        </div>
      )}
      
      <div className="contents">
        <div className="content">
          {typeof content === 'string' ? (
            <p className="p">{content}</p>
          ) : (
            content
          )}
          {children}
        </div>
        
        {buttons.length > 0 && (
          <div className="fixer">
            <div className={getButtonsClasses()}>
              {buttons.map((button, index) => (
                <button
                  key={index}
                  type="button"
                  className={getButtonClasses(button)}
                  onClick={button.onClick}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderPopupContent = () => {
    switch (type) {
      case 'alert':
        return renderAlertPopup();
      case 'fullscreen':
        return renderFullscreenPopup();
      case 'layer':
        return renderLayerPopup();
      default:
        return renderAlertPopup();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      id={id}
      className={getPopupClasses()}
      onClick={handleBackdropClick}
    >
      {renderPopupContent()}
    </div>
  );
};

export default Popup;