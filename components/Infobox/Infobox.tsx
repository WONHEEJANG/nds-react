import React from 'react';
import './infobox.css';

export type InfoboxSize = 'default' | 'sm' | 'xs';

export interface InfoboxProps {
  /** 제목 */
  title?: string;
  /** 내용 */
  content?: string | React.ReactNode;
  /** 크기 변형 */
  size?: InfoboxSize;
  /** 활성 상태 (리스트에서 선택된 상태) */
  active?: boolean;
  /** 삭제 버튼 표시 여부 */
  showDeleteButton?: boolean;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 삭제 버튼 클릭 이벤트 */
  onDelete?: () => void;
  /** 자식 컴포넌트 (커스텀 콘텐츠) */
  children?: React.ReactNode;
  /** CSS 클래스명 */
  className?: string;
}

export const Infobox: React.FC<InfoboxProps> = ({
  title,
  content,
  size = 'default',
  active = false,
  showDeleteButton = false,
  onClick,
  onDelete,
  children,
  className = '',
}) => {
  const getBoxClasses = () => {
    const classes = ['box'];
    
    if (size === 'sm') {
      classes.push('-sm');
    } else if (size === 'xs') {
      classes.push('-xs');
    }
    
    if (active) {
      classes.push('-active');
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

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation(); // 클릭 이벤트 전파 방지
    if (onDelete) {
      onDelete();
    }
  };

  const renderTitle = () => {
    if (!title) return null;
    
    // xs 사이즈에서는 title을 h4로, 나머지는 h3로 렌더링
    const TitleTag = size === 'xs' ? 'h4' : 'h3';
    
    return (
      <TitleTag className="title">
        {title}
      </TitleTag>
    );
  };

  const renderContent = () => {
    if (children) {
      return children;
    }
    
    if (!content) return null;
    
    if (typeof content === 'string') {
      return <p className="p">{content}</p>;
    }
    
    return content;
  };

  const renderDeleteButton = () => {
    if (!showDeleteButton) return null;
    
    return (
      <button
        type="button"
        className="delete-button"
        onClick={handleDelete}
        aria-label="삭제"
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
        }}
      >
        <span className="hide">삭제</span>
        {/* 여기에 삭제 아이콘을 추가할 수 있습니다 */}
        ✕
      </button>
    );
  };

  return (
    <div 
      className={getBoxClasses()}
      onClick={onClick ? handleClick : undefined}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        position: 'relative'
      }}
    >
      {renderTitle()}
      {renderContent()}
      {renderDeleteButton()}
    </div>
  );
};

export default Infobox;