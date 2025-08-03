import React from 'react';

const Divider = ({ 
  type = 'content-8', // content-8, list-1, list-2, page-1
  className = '',
  ...props
}) => {
  
  // 클래스명 생성
  const getClassName = () => {
    let classes = ['hr', type];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <hr className={getClassName()} {...props} />
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const ContentDivider = (props) => <Divider type="content-8" {...props} />;
export const List1Divider = (props) => <Divider type="list-1" {...props} />;
export const List2Divider = (props) => <Divider type="list-2" {...props} />;
export const PageDivider = (props) => <Divider type="page-1" {...props} />;

export default Divider; 