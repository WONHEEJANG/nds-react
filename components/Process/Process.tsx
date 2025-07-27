import React from 'react';

export type ProcessVariant = 'step' | 'icon' | 'badge' | 'circle';
export type ProcessDirection = 'horizontal' | 'vertical';
export type ProcessSize = 'default' | 'sm';
export type StepState = 'default' | 'active' | 'done';

export interface ProcessStep {
  id: string;
  title: string;
  content?: string;
  subInfo?: string;
  state?: StepState;
  stepNumber?: number;
  badge?: string;
}

export interface ProcessProps {
  /** 프로세스 변형 */
  variant?: ProcessVariant;
  /** 방향 */
  direction?: ProcessDirection;
  /** 크기 */
  size?: ProcessSize;
  /** 단계 목록 */
  steps: ProcessStep[];
  /** 현재 단계 인덱스 */
  currentStep?: number;
  /** 단계 클릭 이벤트 */
  onStepClick?: (stepIndex: number, step: ProcessStep) => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Process: React.FC<ProcessProps> = ({
  variant = 'step',
  direction = 'horizontal',
  size = 'default',
  steps = [],
  currentStep = 0,
  onStepClick,
  className = '',
}) => {
  const getContainerClasses = () => {
    const classes = ['process'];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getListClasses = () => {
    const classes = ['ol'];
    
    classes.push(`-${variant}`);
    classes.push(direction);
    
    if (size !== 'default') {
      classes.push(`-${size}`);
    }
    
    return classes.join(' ');
  };

  const getStepClasses = (step: ProcessStep, index: number) => {
    const classes = [];
    
    // 상태 결정 로직
    let stepState = step.state;
    if (!stepState) {
      if (index < currentStep) {
        stepState = 'done';
      } else if (index === currentStep) {
        stepState = 'active';
      } else {
        stepState = 'default';
      }
    }
    
    // 상태 클래스 추가
    if (stepState === 'done') {
      classes.push('done');
    } else if (stepState === 'active') {
      classes.push('active');
    }
    
    // 아이콘 변형인 경우 step 번호 클래스 추가
    if (variant === 'icon') {
      const stepNum = step.stepNumber || index + 1;
      classes.push(`step${stepNum}`);
    }
    
    return classes.join(' ');
  };

  const handleStepClick = (index: number, step: ProcessStep) => {
    if (onStepClick) {
      onStepClick(index, step);
    }
  };

  const renderStepContent = (step: ProcessStep, index: number) => {
    const isClickable = !!onStepClick;
    
    const content = (
      <>
        {variant === 'badge' && step.badge && (
          <span className="gadget">{step.badge}</span>
        )}
        <div className="title">{step.title}</div>
        {step.content && (
          <>
            {variant === 'icon' && step.subInfo ? (
              <span className="sub-info">{step.subInfo}</span>
            ) : (
              <span>{step.content}</span>
            )}
          </>
        )}
        {variant === 'icon' && step.subInfo && step.content && (
          <span>{step.content}</span>
        )}
      </>
    );

    if (isClickable) {
      return (
        <button
          type="button"
          onClick={() => handleStepClick(index, step)}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            width: '100%',
            textAlign: 'left',
          }}
        >
          {content}
        </button>
      );
    }

    return content;
  };

  return (
    <div className={getContainerClasses()}>
      <ol className={getListClasses()}>
        {steps.map((step, index) => (
          <li
            key={step.id}
            className={getStepClasses(step, index)}
          >
            {renderStepContent(step, index)}
          </li>
        ))}
      </ol>
    </div>
  );
};

// Progress Bar Component
export interface ProgressProps {
  /** 현재 진행도 */
  current: number;
  /** 최대값 */
  max: number;
  /** 숨김 텍스트 */
  hideText?: boolean;
  /** CSS 클래스명 */
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  current,
  max,
  hideText = false,
  className = '',
}) => {
  const getProgressClasses = () => {
    const classes = ['progress-box'];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  return (
    <div className={getProgressClasses()}>
      <div className="progress">
        <div 
          className="bar" 
          style={{ 
            '--current': current, 
            '--max': max 
          } as React.CSSProperties}
        >
          <div className="gauge">
            {!hideText && (
              <span className="hide">
                {max}단계 중 {current}번째
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Stepper Control Component
export interface StepperProps {
  /** 현재 값 */
  value: number;
  /** 최소값 */
  min?: number;
  /** 최대값 */
  max?: number;
  /** 변경 이벤트 */
  onChange?: (value: number) => void;
  /** 비활성화 */
  disabled?: boolean;
  /** CSS 클래스명 */
  className?: string;
}

export const Stepper: React.FC<StepperProps> = ({
  value,
  min = 0,
  max = 100,
  onChange,
  disabled = false,
  className = '',
}) => {
  const getStepperClasses = () => {
    const classes = ['controls', 'stpper'];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const handleDecrease = () => {
    if (!disabled && value > min && onChange) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (!disabled && value < max && onChange) {
      onChange(value + 1);
    }
  };

  const isDecreaseDisabled = disabled || value <= min;
  const isIncreaseDisabled = disabled || value >= max;

  return (
    <div className={getStepperClasses()}>
      <button
        type="button"
        className="minus"
        disabled={isDecreaseDisabled}
        onClick={handleDecrease}
      >
        <span className="hide">감소</span>
      </button>
      <span className="value">{value}</span>
      <button
        type="button"
        className="plus"
        disabled={isIncreaseDisabled}
        onClick={handleIncrease}
      >
        <span className="hide">증가</span>
      </button>
    </div>
  );
};

export default Process;