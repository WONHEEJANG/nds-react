import React from 'react';

export type DividerType = 'content-8' | 'list-1' | 'list-2' | 'page-1';

export interface DividerProps {
  /** 구분선 타입 */
  type?: DividerType;
  /** 커스텀 CSS 클래스명 */
  className?: string;
  /** 구분선 색상 */
  color?: string;
  /** 구분선 두께 */
  thickness?: string;
  /** 여백 설정 */
  margin?: string;
}

export const Divider: React.FC<DividerProps> = ({
  type = 'content-8',
  className = '',
  color,
  thickness,
  margin,
}) => {
  const getDividerClasses = () => {
    const classes = ['hr'];
    
    // 타입별 클래스 추가
    switch (type) {
      case 'content-8':
        classes.push('content-8');
        break;
      case 'list-1':
        classes.push('list-1');
        break;
      case 'list-2':
        classes.push('list-2');
        break;
      case 'page-1':
        classes.push('page-1');
        break;
    }
    
    if (className) classes.push(className);

    return classes.join(' ');
  };

  const getInlineStyles = () => {
    const styles: React.CSSProperties = {};
    
    if (color) styles.borderColor = color;
    if (thickness) styles.borderWidth = thickness;
    if (margin) styles.margin = margin;

    return Object.keys(styles).length > 0 ? styles : undefined;
  };

  return (
    <hr 
      className={getDividerClasses()}
      style={getInlineStyles()}
    />
  );
};

export interface VerticalDividerProps {
  /** 세로 구분선 높이 */
  height?: string;
  /** 구분선 색상 */
  color?: string;
  /** 구분선 두께 */
  thickness?: string;
  /** 여백 설정 */
  margin?: string;
  /** CSS 클래스명 */
  className?: string;
}

export const VerticalDivider: React.FC<VerticalDividerProps> = ({
  height = '1em',
  color,
  thickness = '1px',
  margin = '0 8px',
  className = '',
}) => {
  const getInlineStyles = (): React.CSSProperties => {
    return {
      display: 'inline-block',
      width: thickness,
      height: height,
      backgroundColor: color || 'currentColor',
      margin: margin,
      verticalAlign: 'middle',
    };
  };

  return (
    <span 
      className={`vertical-divider ${className}`}
      style={getInlineStyles()}
      role="separator"
      aria-orientation="vertical"
    />
  );
};

export default Divider;