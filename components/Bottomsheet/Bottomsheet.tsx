import React from 'react';
import './bottomsheet.css';

export interface BottomsheetButton {
  text: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  flex?: number;
  onClick?: () => void;
}

export interface BottomsheetProps {
  /** 고유 ID */
  id: string;
  /** 표시 여부 */
  isOpen?: boolean;
  /** 제목 */
  title?: string;
  /** 헤더 표시 여부 */
  showHeader?: boolean;
  /** 딤 레이어 타입 */
  dimType?: 'default' | 'white';
  /** 컨텐츠 스타일 */
  contentStyle?: 'default' | 'bottom-padding';
  /** 하단 버튼들 */
  buttons?: BottomsheetButton[];
  /** 버튼 레이아웃 */
  buttonLayout?: 'single' | 'half' | 'custom';
  /** 자식 컴포넌트 */
  children?: React.ReactNode;
  /** 닫기 이벤트 */
  onClose?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Bottomsheet: React.FC<BottomsheetProps> = ({
  id,
  isOpen = false,
  title,
  showHeader = true,
  dimType = 'default',
  contentStyle = 'default',
  buttons = [],
  buttonLayout = 'single',
  children,
  onClose,
  className = '',
}) => {
  const getLayerClasses = () => {
    const classes = ['layer'];
    if (dimType === 'white') {
      classes.push('dimWhiteLayer');
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getContentClasses = () => {
    const classes = ['content'];
    if (contentStyle === 'bottom-padding') {
      classes.push('bttm');
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

  const getButtonClasses = (button: BottomsheetButton) => {
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

  if (!isOpen) {
    return null;
  }

  return (
    <div id={id} className={getLayerClasses()}>
      <div className="container">
        {showHeader ? (
          <div className="header">
            <div className="inner">
              {title && <h1 className="title">{title}</h1>}
              <div className="funcs">
                <button 
                  type="button" 
                  className="func -close"
                  onClick={onClose}
                >
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
          <div className={getContentClasses()}>
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
    </div>
  );
};

export default Bottomsheet;