import React from 'react';

const InfoBox = ({ 
  title = '타이틀',
  content = '내용을 입력해 주세요.',
  className = '',
  ...props
}) => {
  
  // 클래스명 생성
  const getClassName = () => {
    let classes = ['box'];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getClassName()} {...props}>
      <h3 className="title">{title}</h3>
      <p className="p">{content}</p>
    </div>
  );
};

export default InfoBox; 