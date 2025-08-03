import React from 'react';

const Process = ({ 
  type = 'step', // progress, step
  variant = 'horizontal', // horizontal, vertical
  styleType = 'step', // step, icon, text
  size = 'sm', // lg, sm
  steps = [],
  currentStep = 1,
  totalSteps = 3,
  className = '',
  ...props
}) => {
  
  // Progress 타입
  if (type === 'progress') {
    return (
      <div className="progress-box" {...props}>
        <div className="progress">
          <div className="bar" style={{ '--current': currentStep, '--max': totalSteps }}>
            <div className="gauge">
              <span className="hide">{totalSteps}단계 중 {currentStep}번째</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['process'];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // OL 클래스명 생성
  const getOlClassName = () => {
    let classes = ['ol'];
    
    if (styleType === 'step') {
      classes.push('-step');
    } else if (styleType === 'icon') {
      classes.push('-icon');
    } else if (styleType === 'text') {
      classes.push('-text');
    }
    
    if (variant === 'horizontal') {
      classes.push('horizontal');
    } else if (variant === 'vertical') {
      classes.push('vertical');
    }
    
    return classes.join(' ');
  };

  // LI 클래스명 생성
  const getLiClassName = (index) => {
    let classes = [];
    
    if (styleType === 'icon') {
      classes.push(`step${index + 1}`);
    }
    
    if (index < currentStep - 1) {
      classes.push('done');
    } else if (index === currentStep - 1) {
      classes.push('active');
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getClassName()} {...props}>
      <ol className={getOlClassName()}>
        {steps.map((step, index) => (
          <li key={index} className={getLiClassName(index)}>
            <div className="title">{step.title}</div>
            {step.subInfo && <span className="sub-info">{step.subInfo}</span>}
            {step.content && <span>{step.content}</span>}
          </li>
        ))}
      </ol>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const ProgressBar = (props) => <Process type="progress" {...props} />;

// Step 타입별 래퍼
export const StepProcess = (props) => <Process type="step" styleType="step" {...props} />;
export const IconProcess = (props) => <Process type="step" styleType="icon" {...props} />;
export const TextProcess = (props) => <Process type="step" styleType="text" {...props} />;

// 방향별 래퍼
export const HorizontalProcess = (props) => <Process variant="horizontal" {...props} />;
export const VerticalProcess = (props) => <Process variant="vertical" {...props} />;

// 크기별 래퍼
export const LargeTextProcess = (props) => <Process type="step" styleType="text" size="lg" {...props} />;
export const SmallTextProcess = (props) => <Process type="step" styleType="text" size="sm" {...props} />;

// 단계별 래퍼
export const ThreeStepProcess = (props) => <Process totalSteps={3} {...props} />;
export const FourStepProcess = (props) => <Process totalSteps={4} {...props} />;
export const FiveStepProcess = (props) => <Process totalSteps={5} {...props} />;

export default Process; 