import React, { useState } from 'react';

export interface ChipProps {
  /** 칩에 표시될 텍스트 */
  children: React.ReactNode;
  /** 삭제 가능한 칩인지 여부 */
  deletable?: boolean;
  /** 활성화 상태 */
  active?: boolean;
  /** 비활성화 상태 */
  disabled?: boolean;
  /** 칩 클릭 시 호출되는 콜백 */
  onClick?: () => void;
  /** 삭제 버튼 클릭 시 호출되는 콜백 */
  onDelete?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  children,
  deletable = false,
  active = false,
  disabled = false,
  onClick,
  onDelete,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (disabled) return;
    onDelete?.();
  };

  const getChipClasses = () => {
    const classes = ['chip'];
    
    if (active) classes.push('-active');
    if (disabled) classes.push('-disabled');
    if (className) classes.push(className);

    return classes.join(' ');
  };

  if (deletable) {
    return (
      <div 
        className={getChipClasses()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span onClick={handleClick} role={onClick ? 'button' : undefined}>
          {children}
        </span>
        <button 
          type="button" 
          className="compare-delete"
          onClick={handleDelete}
          disabled={disabled}
          aria-label="삭제"
        >
          <span className="hide">삭제</span>
        </button>
      </div>
    );
  }

  return (
    <div 
      className={getChipClasses()}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export interface ChipGroupProps {
  /** 칩 그룹의 타입 */
  variant?: 'basic' | 'accordion' | 'tab';
  /** 아코디언 타입인 경우 열림/닫힘 상태 */
  isOpen?: boolean;
  /** 메뉴 개수 */
  menuCount?: number;
  /** 더보기 버튼 표시 여부 */
  showMore?: boolean;
  /** 칩들 */
  children: React.ReactNode;
  /** 더보기 버튼 클릭 시 호출되는 콜백 */
  onMoreClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const ChipGroup: React.FC<ChipGroupProps> = ({
  variant = 'basic',
  isOpen = false,
  menuCount,
  showMore = false,
  children,
  onMoreClick,
  className = '',
}) => {
  const getGroupClasses = () => {
    const classes = ['popular-search', 'chip'];
    
    if (className) classes.push(className);

    return classes.join(' ');
  };

  const getAccordionClasses = () => {
    const classes = ['popular-anchors', 'accordion'];
    
    if (isOpen) classes.push('-active');

    return classes.join(' ');
  };

  if (variant === 'accordion') {
    return (
      <div className={getGroupClasses()}>
        <div className={getAccordionClasses()}>
          <div className="outer">
            <div className="inner over-x">
              <ul className="list tab">
                {children}
              </ul>
            </div>
          </div>
          {showMore && (
            <button 
              type="button" 
              className="more" 
              onClick={onMoreClick}
            >
              <span className="hide">펼치기</span>
            </button>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'basic') {
    return (
      <div className="filter-result">
        <div className="inner over-x">
          {children}
        </div>
      </div>
    );
  }

  // tab variant
  return (
    <div className={getGroupClasses()}>
      <div className="popular-anchors accordion">
        <div className="outer">
          <div className="inner over-x">
            <ul className="list tab">
              {children}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chip;