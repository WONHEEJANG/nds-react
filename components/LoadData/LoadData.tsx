import React from 'react';
import './load-data.css';

export type LoadDataVariant = 'basic' | 'highlight';

export interface LoadDataProps {
  /** 라벨 */
  label?: string;
  /** 데이터 박스 ID */
  id?: string;
  /** 제목 */
  title: string;
  /** 내용/값 */
  content: string | React.ReactNode;
  /** 변형 타입 */
  variant?: LoadDataVariant;
  /** 메인 라벨 (highlight 변형용) */
  mainLabel?: string;
  /** 부가 설명 (highlight 변형용) */
  additionalInfo?: string;
  /** 안내 문구 */
  info?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const LoadData: React.FC<LoadDataProps> = ({
  label,
  id = `load-data-${Math.random().toString(36).substr(2, 9)}`,
  title,
  content,
  variant = 'basic',
  mainLabel,
  additionalInfo,
  info,
  onClick,
  className = '',
}) => {
  const getContainerClasses = () => {
    const classes = ['field', 'load-data'];
    
    if (variant === 'highlight') {
      classes.push('-highlight');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const renderTitle = () => {
    if (variant === 'highlight' && (mainLabel || additionalInfo)) {
      return (
        <div className="data-box-title">
          {mainLabel && <span className="data-box-main">{mainLabel}</span>}
          {additionalInfo && <span className="data-box-info">{additionalInfo}</span>}
        </div>
      );
    }

    return <div className="data-box-title">{title}</div>;
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className={getContainerClasses()}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      
      <div 
        className="data-box" 
        id={id}
        onClick={onClick ? handleClick : undefined}
        style={{ cursor: onClick ? 'pointer' : 'default' }}
      >
        {renderTitle()}
        <div className="data-box-content">
          {content}
        </div>
      </div>
      
      {info && <p className="info">{info}</p>}
    </div>
  );
};

export default LoadData;