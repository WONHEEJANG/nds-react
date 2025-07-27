import React from 'react';
import './label.css';

export type LabelType = 'form' | 'badge';
export type LabelVariant = 'default' | 'multi';
export type BadgeVariant = 'fill' | 'line' | 'grade' | 'new';
export type BadgeColor = 
  | 'gray' | 'green' | 'red' | 'skyblue' | 'yellow'
  | 'blue' | 'lightblue' | 'cobalt' | 'orange';
export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6;

export interface LabelProps {
  /** 라벨 타입 */
  type?: LabelType;
  /** 라벨 텍스트 */
  children: React.ReactNode;
  /** 폼 라벨 변형 */
  variant?: LabelVariant;
  /** 배지 변형 */
  badgeVariant?: BadgeVariant;
  /** 배지 색상 */
  color?: BadgeColor;
  /** 등급 (grade 타입용) */
  grade?: GradeLevel;
  /** 폼 요소 ID (폼 라벨용) */
  htmlFor?: string;
  /** 숨김 텍스트 (접근성용, new 배지 등에 사용) */
  hiddenText?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  type = 'form',
  children,
  variant = 'default',
  badgeVariant = 'fill',
  color = 'gray',
  grade = 1,
  htmlFor,
  hiddenText,
  onClick,
  className = '',
}) => {
  const getFormLabelClasses = () => {
    const classes = ['label'];
    if (variant === 'multi') {
      classes.push('multi-label');
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getBadgeClasses = () => {
    const classes = ['badge'];
    
    if (badgeVariant === 'fill') {
      classes.push(`fill-${color}`);
    } else if (badgeVariant === 'line') {
      classes.push(`line-${color}`);
    } else if (badgeVariant === 'grade') {
      classes.push(`-grade${grade}`);
    } else if (badgeVariant === 'new') {
      classes.push('-new');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  if (type === 'form') {
    // htmlFor가 있으면 label 요소로, 없으면 p 요소로 렌더링
    if (htmlFor) {
      return (
        <label
          htmlFor={htmlFor}
          className={getFormLabelClasses()}
          onClick={handleClick}
        >
          {children}
        </label>
      );
    } else {
      return (
        <p
          className={getFormLabelClasses()}
          onClick={handleClick}
        >
          {children}
        </p>
      );
    }
  }

  // Badge 타입
  return (
    <span
      className={getBadgeClasses()}
      onClick={handleClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {children}
      {hiddenText && <span className="hide">{hiddenText}</span>}
    </span>
  );
};

export default Label;