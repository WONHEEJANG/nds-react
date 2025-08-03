import React from 'react';

const Badge = ({ 
  type = 'new', 
  text = '새로운 알람이 있습니다.',
  onClick,
  className = ''
}) => {
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="relative">
      <button 
        type="button" 
        className={`badge-wrap ${className}`}
        onClick={handleClick}
      >
        <span className={`badge -${type}`}>
          <span className="hide">{text}</span>
        </span>
      </button>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BadgeNew = (props) => <Badge type="new" {...props} />;
export const BadgeLineGray = (props) => <Badge type="line-gray" {...props} />;

export default Badge; 