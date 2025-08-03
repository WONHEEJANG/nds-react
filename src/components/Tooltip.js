import React, { useState } from 'react';

const Tooltip = ({ 
  title = '보험계약 상세조회',
  subTitle = '부제목',
  content = [],
  triggerText = '도움말 보기',
  isOpen = false,
  onToggle,
  className = '',
  ...props
}) => {
  const [isActive, setIsActive] = useState(isOpen);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  // Panel 클래스명 생성
  const getPanelClassName = () => {
    let classes = ['panel'];
    
    if (isActive) {
      classes.push('-active');
    }
    
    return classes.join(' ');
  };

  // Tooltip 클래스명 생성 (active 상태 추가)
  const getTooltipClassName = () => {
    let classes = ['tooltip'];
    
    if (isActive) {
      classes.push('-active');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <span className={getTooltipClassName()} {...props}>
      <button type="button" className="trigger" onClick={handleToggle}>
        <span className="hide">{triggerText}</span>
      </button>
      <span className={getPanelClassName()}>
        <span className="title">{title}</span>
        {subTitle && <span className="sub-title">{subTitle}</span>}
        <span className="t-content">
          {Array.isArray(content) ? (
            content.map((item, index) => {
              if (typeof item === 'string') {
                return (
                  <span key={index} className="dot">{item}</span>
                );
              }
              return (
                <span key={index} className={item.type || 'sub-cont'}>
                  {item.text}
                </span>
              );
            })
          ) : (
            <span className="sub-cont">{content}</span>
          )}
        </span>
      </span>
    </span>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const TooltipField = ({ label, children, ...props }) => (
  <div className="field ml-24" {...props}>
    <span className="label">{label}</span>
    {children}
  </div>
);

export default Tooltip; 