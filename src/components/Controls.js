import React from 'react';

const Controls = ({ 
  type = 'controller', // controller, stepper
  variant = 'next', // next, previous
  status = 'default', // default, disabled
  onPrev,
  onNext,
  onMinus,
  onPlus,
  value = 1,
  className = '',
  ...props
}) => {
  
  const handlePrev = () => {
    if (onPrev && status !== 'disabled') {
      onPrev();
    }
  };

  const handleNext = () => {
    if (onNext && status !== 'disabled') {
      onNext();
    }
  };

  const handleMinus = () => {
    if (onMinus && status !== 'disabled') {
      onMinus();
    }
  };

  const handlePlus = () => {
    if (onPlus && status !== 'disabled') {
      onPlus();
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['controls', type];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Stepper 타입
  if (type === 'stepper') {
    return (
      <div className={getClassName()} {...props}>
        <button 
          type="button" 
          className="minus" 
          disabled={status === 'disabled'}
          onClick={handleMinus}
        >
          <span className="hide">감소</span>
        </button>
        <span className="value">{value}</span>
        <button 
          type="button" 
          className="plus"
          disabled={status === 'disabled'}
          onClick={handlePlus}
        >
          <span className="hide">증가</span>
        </button>
      </div>
    );
  }

  // Controller 타입
  return (
    <div className={getClassName()} {...props}>
      <div className="controllwarp">
        <button 
          type="button" 
          className="button prev"
          disabled={status === 'disabled' || variant === 'next'}
          onClick={handlePrev}
        >
          <span className="hide">이전 문서보기</span>
        </button>
        <button 
          type="button" 
          className="button next"
          disabled={status === 'disabled' || variant === 'previous'}
          onClick={handleNext}
        >
          <span className="hide">다음 문서보기</span>
        </button>
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const Controller = (props) => <Controls type="controller" {...props} />;
export const Stepper = (props) => <Controls type="stepper" {...props} />;

// 상태별 래퍼
export const ControllerNext = (props) => <Controls type="controller" variant="next" {...props} />;
export const ControllerPrevious = (props) => <Controls type="controller" variant="previous" {...props} />;
export const ControllerDisabled = (props) => <Controls type="controller" status="disabled" {...props} />;

export default Controls; 