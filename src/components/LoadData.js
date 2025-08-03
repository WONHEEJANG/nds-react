import React from 'react';

const LoadData = ({ 
  type = 'basic', // basic, highlight
  label = '레이블',
  title = '연도별 한도금액',
  content = '20,000,000원',
  mainLabel,
  infoLabel,
  info = '안내 문구 입력',
  htmlFor = 'data-rd',
  className = '',
  ...props
}) => {
  
  // 클래스명 생성
  const getClassName = () => {
    let classes = ['field', 'load-data'];
    
    if (type === 'highlight') {
      classes.push('-highlight');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getClassName()} {...props}>
      <label htmlFor={htmlFor} className="label">{label}</label>
      <div className="data-box" id={htmlFor}>
        <div className="data-box-title">
          {type === 'highlight' ? (
            <>
              <span className="data-box-main">{mainLabel || 'Label'}</span>
              <span className="data-box-info">{infoLabel || '부가설명'}</span>
            </>
          ) : (
            title
          )}
        </div>
        <div className="data-box-content">{content}</div>
      </div>
      <p className="info">{info}</p>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BasicLoadData = (props) => <LoadData type="basic" {...props} />;
export const HighlightLoadData = (props) => <LoadData type="highlight" {...props} />;

export default LoadData; 