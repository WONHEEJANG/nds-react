import React from 'react';
import './empty.css';

export interface EmptyProps {
  /** Empty 컴포넌트 타입 */
  variant?: 'result' | 'page';
  /** 표시할 메시지 */
  message?: string;
  /** 아이콘 표시 여부 */
  showIcon?: boolean;
  /** 아이콘 크기 */
  iconSize?: 40 | 56;
  /** 아이콘 타입 */
  iconType?: 'no-data' | 'certificate-empty';
  /** 다크 모드 아이콘 */
  darkMode?: boolean;
  /** 추가 액션 버튼 */
  action?: React.ReactNode;
  /** CSS 클래스명 */
  className?: string;
}

export const Empty: React.FC<EmptyProps> = ({
  variant = 'result',
  message = '조회 결과가 없습니다.',
  showIcon = false,
  iconSize = 56,
  iconType = 'no-data',
  darkMode = false,
  action,
  className = '',
}) => {
  const getContainerClasses = () => {
    const classes = ['empty', 'result'];
    if (variant === 'page') {
      classes.push('-page');
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getIconPath = () => {
    if (!showIcon) return null;
    
    const darkSuffix = darkMode ? '_dk' : '';
    const sizeSuffix = iconSize === 40 ? '_40' : '';
    
    if (iconType === 'no-data') {
      return `./assets/imgs/nds/common/ico_no-data_gray400_fill_${iconSize}${darkSuffix}.png`;
    } else if (iconType === 'certificate-empty') {
      return `./assets/imgs/nds/common/ico_certificate-empty_fill_${iconSize}${darkSuffix}.png`;
    }
    
    return null;
  };

  const iconPath = getIconPath();

  return (
    <div className={getContainerClasses()}>
      {showIcon && iconPath && (
        <div className="icon">
          <img 
            src={iconPath} 
            alt="빈 상태 아이콘" 
            width={iconSize} 
            height={iconSize}
          />
        </div>
      )}
      <p className="message">{message}</p>
      {action && (
        <div className="action">
          {action}
        </div>
      )}
    </div>
  );
};

export default Empty;