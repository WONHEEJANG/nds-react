import React from 'react';

const Popover = ({ 
  type = 'bottom-center', // bottom-center, bottom-left, bottom-right, top-center, top-left, top-right
  children = '나에게 맞는 상품을 찾아보세요.',
  onClose,
  className = '',
  ...props
}) => {
  
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['popover'];
    
    // 위치별 클래스 추가
    if (type === 'bottom-center') {
      classes.push('-bc');
    } else if (type === 'bottom-left') {
      classes.push('-bl');
    } else if (type === 'bottom-right') {
      classes.push('-br');
    } else if (type === 'top-center') {
      classes.push('-tc');
    } else if (type === 'top-left') {
      classes.push('-tl');
    } else if (type === 'top-right') {
      classes.push('-tr');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <span className={getClassName()} {...props}>
      {children}
      <button type="button" className="popover-close" onClick={handleClose}>
        <span className="hide">삭제</span>
      </button>
    </span>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BottomCenterPopover = (props) => <Popover type="bottom-center" {...props} />;
export const BottomLeftPopover = (props) => <Popover type="bottom-left" {...props} />;
export const BottomRightPopover = (props) => <Popover type="bottom-right" {...props} />;
export const TopCenterPopover = (props) => <Popover type="top-center" {...props} />;
export const TopLeftPopover = (props) => <Popover type="top-left" {...props} />;
export const TopRightPopover = (props) => <Popover type="top-right" {...props} />;

export default Popover; 