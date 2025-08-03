import React from 'react';

const Empty = ({ 
  type = 'result', // result, page
  message = '조회 결과가 없습니다.',
  className = '',
  ...props
}) => {
  
  // 클래스명 생성
  const getClassName = () => {
    let classes = ['empty', 'result'];
    
    if (type === 'page') {
      classes.push('-page');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getClassName()} {...props}>
      <p className="message">{message}</p>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const EmptyResult = (props) => <Empty type="result" {...props} />;
export const EmptyPage = (props) => <Empty type="page" {...props} />;

export default Empty; 