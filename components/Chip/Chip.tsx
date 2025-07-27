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
  /** 칩 타입 (기본값: filter) */
  variant?: 'filter' | 'hash';
}

export const Chip: React.FC<ChipProps> = ({
  children,
  deletable = false,
  active = false,
  disabled = false,
  onClick,
  onDelete,
  className = '',
  variant = 'filter',
}) => {
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
    if (variant === 'hash') {
      const classes = ['hash-btn'];
      if (active) classes.push('-active');
      if (disabled) classes.push('-disabled');
      if (className) classes.push(className);
      return classes.join(' ');
    }
    
    // filter variant (기본)
    const classes = ['chip'];
    if (active) classes.push('-active');
    if (disabled) classes.push('-disabled');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  const chipStyle: React.CSSProperties = {
    display: 'inline-block',
    verticalAlign: 'middle',
    position: 'relative',
    width: 'auto',
    height: variant === 'hash' ? '3rem' : '3rem',
    lineHeight: '3rem',
    padding: variant === 'hash' ? '0 1.2rem' : '0 3rem 0 1.2rem',
    backgroundColor: active 
      ? (variant === 'hash' ? '#007bff' : '#333') 
      : (variant === 'hash' ? 'transparent' : '#f8f9fa'),
    border: variant === 'hash' ? '1px solid #dee2e6' : 'none',
    borderRadius: variant === 'hash' ? '1.5rem' : '0.6rem',
    color: active 
      ? '#fff' 
      : (variant === 'hash' ? '#333' : '#666'),
    fontSize: variant === 'hash' ? '1.4rem' : '1.3rem',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    cursor: onClick || deletable ? 'pointer' : 'default',
    transition: 'all 0.2s ease',
    margin: '0 0.4rem 0.8rem 0',
    minHeight: variant === 'hash' ? '3rem' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    ...(disabled && { opacity: 0.5, cursor: 'not-allowed' }),
  };

  if (deletable) {
    return (
      <div 
        className={getChipClasses()}
        style={chipStyle}
        onClick={handleClick}
      >
        <span>{children}</span>
        <button 
          type="button" 
          onClick={handleDelete}
          disabled={disabled}
          aria-label="삭제"
          style={{
            position: 'absolute',
            top: '50%',
            right: '1rem',
            width: '1.6rem',
            height: '1.6rem',
            background: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDRMNCA0TDQgMTJMMTIgMTJMMTIgNFoiIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTYgNkwxMCAxME02IDEwTDEwIDYiIHN0cm9rZT0iIzk5OSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPC9zdmc+) no-repeat center/cover',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transform: 'translateY(-50%)',
          }}
        >
          <span style={{ display: 'none' }}>삭제</span>
        </button>
      </div>
    );
  }

  return (
    <div 
      className={getChipClasses()}
      style={chipStyle}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
    >
      {children}
    </div>
  );
};

export interface ChipGroupProps {
  /** 칩 그룹의 타입 */
  variant?: 'filter' | 'hash' | 'tab';
  /** 아코디언 타입인 경우 열림/닫힘 상태 */
  isOpen?: boolean;
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
  variant = 'filter',
  isOpen = false,
  showMore = false,
  children,
  onMoreClick,
  className = '',
}) => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.8rem',
    alignItems: 'center',
    padding: '1rem 0',
    ...( variant === 'hash' && {
      position: 'relative',
      overflow: 'hidden',
    }),
  };

  if (variant === 'filter') {
    return (
      <div 
        className={`filter-result ${className}`}
        style={containerStyle}
      >
        {children}
      </div>
    );
  }

  if (variant === 'hash') {
    return (
      <div 
        className={`search-link-wrap ${className}`}
        style={{
          ...containerStyle,
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          .search-link-wrap::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        {children}
        {showMore && (
          <button 
            type="button" 
            onClick={onMoreClick}
            style={{
              position: 'absolute',
              right: '0',
              top: '50%',
              transform: 'translateY(-50%)',
              background: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '1.5rem',
              padding: '0 1rem',
              height: '3rem',
              fontSize: '1.4rem',
              cursor: 'pointer',
            }}
          >
            더보기
          </button>
        )}
      </div>
    );
  }

  // tab variant (popular search)
  return (
    <div 
      className={`popular-search ${className}`}
      style={{
        position: 'relative',
        ...containerStyle,
      }}
    >
      <div 
        className={`popular-anchors accordion ${isOpen ? '-active' : ''}`}
        style={{
          position: 'relative',
          width: '100%',
        }}
      >
        <div 
          className="outer"
          style={{
            paddingRight: showMore ? '4.6rem' : '0',
            paddingTop: '0.6rem',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
        >
          <div 
            className="inner over-x"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.8rem',
            }}
          >
            {children}
          </div>
        </div>
        {showMore && (
          <button 
            type="button" 
            className="more" 
            onClick={onMoreClick}
            style={{
              position: 'absolute',
              right: '0',
              top: '0.6rem',
              background: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '1.5rem',
              width: '3.6rem',
              height: '3rem',
              fontSize: '1.4rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ display: 'none' }}>펼치기</span>
            ⋯
          </button>
        )}
      </div>
    </div>
  );
};

export default Chip;