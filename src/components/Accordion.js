import React, { useState } from 'react';

const Accordion = ({ 
  type = 'box', 
  variant = 'text', 
  isOpen = false, 
  title, 
  subInfo, 
  badge, 
  children,
  onToggle 
}) => {
  const [isActive, setIsActive] = useState(isOpen);

  const handleToggle = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let className = 'accordion';
    
    if (type === 'box') {
      className += ' -box';
      if (variant === 'list') {
        className += ' -list';
      }
    } else if (type === 'graybox') {
      className += ' -graybox';
    } else if (type === 'line') {
      className += ' -line';
    } else if (type === 'notice') {
      className += ' notice';
    }
    
    if (isActive) {
      className += ' -active';
    }
    
    return className;
  };

  // 제목 렌더링
  const renderTitle = () => {
    if (variant === 'list') {
      return (
        <>
          {badge && (
            <div className="badges">
              <span className="badge line-gray">{badge}</span>
            </div>
          )}
          <div className="info">
            <span className="name">
              <span>{title}</span>
            </span>
            {subInfo && (
              <span className="sub-info">
                <span>{subInfo}</span>
              </span>
            )}
          </div>
        </>
      );
    }
    
    return title;
  };

  // 패널 렌더링
  const renderPanel = () => {
    const panelClassName = `panel ${isActive ? 'visible' : ''}`;
    const dataRole = isActive ? 'visible' : 'hidden';
    
    return (
      <div className={panelClassName} data-role={dataRole}>
        {children}
      </div>
    );
  };

  // Notice 타입일 때는 sticker로 감싸기
  if (type === 'notice') {
    return (
      <div className="sticker">
        <div className={getClassName()} data-role="fold">
          <button 
            type="button" 
            className="title" 
            data-role="marker" 
            title={isActive ? "접힘" : "펼쳐짐"}
            onClick={handleToggle}
          >
            {title}
          </button>
          {renderPanel()}
        </div>
      </div>
    );
  }

  // 기본 accordion
  return (
    <div className={getClassName()} data-role="fold">
      <button 
        type="button" 
        className="title" 
        data-role="marker" 
        title={isActive ? "접힘" : "펼쳐짐"}
        onClick={handleToggle}
      >
        {renderTitle()}
      </button>
      {renderPanel()}
    </div>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const AccordionBox = (props) => <Accordion type="box" {...props} />;
export const AccordionBoxList = (props) => <Accordion type="box" variant="list" {...props} />;
export const AccordionGraybox = (props) => <Accordion type="graybox" {...props} />;
export const AccordionLine = (props) => <Accordion type="line" {...props} />;
export const AccordionNotice = (props) => <Accordion type="notice" {...props} />;

export default Accordion; 