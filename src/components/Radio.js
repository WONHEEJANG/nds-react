import React from 'react';

const Radio = ({ 
  type = 'basic', // basic, box, explain
  variant = 'center', // center, left, icon, none
  size = 'sm', // lg, sm
  state = 'default', // default, disabled, selected, select-disabled, error
  name,
  value,
  checked = false,
  disabled = false,
  label = '라디오',
  subLabel,
  title,
  subInfo,
  hasIcon = false,
  error = false,
  errorMessage,
  correctMessage,
  onChange,
  className = '',
  ...props
}) => {
  
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.value, e.target.checked);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['radio'];
    
    if (type === 'basic') {
      classes.push('-basic', `-${size}`);
      if (state === 'select-disabled') {
        classes.push('-seldis');
      }
    } else if (type === 'box') {
      classes = ['field'];
    } else if (type === 'explain') {
      classes = ['field'];
    } else if (type === 'survey') {
      classes = ['field'];
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Box-radios 클래스명 생성
  const getBoxRadiosClassName = () => {
    let classes = ['box-radios'];
    
    if (type === 'box') {
      classes.push('-box', `-${size}`);
    } else if (type === 'explain') {
      classes.push('-explain', `-${variant}`);
    }
    
    return classes.join(' ');
  };

  // Box-radio 클래스명 생성
  const getBoxRadioClassName = () => {
    let classes = ['box-radio'];
    
    if (variant === 'left') {
      classes.push('-left');
    }
    
    if (type === 'explain') {
      classes.push('-left');
    }
    
    return classes.join(' ');
  };

  // Input 클래스명 생성
  const getInputClassName = () => {
    let classes = [];
    
    if (state === 'disabled' || state === 'select-disabled') {
      classes.push('disabled');
    }
    
    if (error) {
      classes.push('-error');
    }
    
    return classes.join(' ');
  };

  // Basic 타입
  if (type === 'basic') {
    return (
      <div className={getClassName()} {...props}>
        <input 
          type="radio" 
          id={`radio-${name}-${value}`}
          name={name}
          value={value}
          checked={checked}
          disabled={disabled || state === 'disabled' || state === 'select-disabled'}
          onChange={handleChange}
          className={getInputClassName()}
        />
        <label htmlFor={`radio-${name}-${value}`}>{label}</label>
      </div>
    );
  }

  // Box, Explain 타입
  return (
    <>
      {type === 'explain' ? (
        <div className="field" {...props}>
          <div className={getBoxRadiosClassName()}>
            <div className={getBoxRadioClassName()}>
              <input 
                type="radio" 
                id={`radio-${name}-${value}`}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled || state === 'disabled'}
                onChange={handleChange}
                className={getInputClassName()}
              />
              <label htmlFor={`radio-${name}-${value}`}>
                {title || label}<span className="sub">{subInfo || subLabel}</span>
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className={getClassName()} {...props}>
          {type === 'box' && size === 'sm' && (
            <p className="label">라디오박스</p>
          )}
          <div className={getBoxRadiosClassName()}>
            <div className={getBoxRadioClassName()}>
              <input 
                type="radio" 
                id={`radio-${name}-${value}`}
                name={name}
                value={value}
                checked={checked}
                disabled={disabled || state === 'disabled'}
                onChange={handleChange}
                className={getInputClassName()}
              />
              <label htmlFor={`radio-${name}-${value}`}>
                {hasIcon && <span className="ico"></span>}
                {title && <span className="title">{title}</span>}
                {subInfo && <span className="sub-info">{subInfo}</span>}
                {!title && label}
                {subLabel && <span className="sub">{subLabel}</span>}
              </label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BasicRadio = (props) => <Radio type="basic" {...props} />;
export const BoxRadio = (props) => <Radio type="box" {...props} />;
export const ExplainRadio = (props) => <Radio type="explain" {...props} />;

// 크기별 래퍼
export const LargeRadio = (props) => <Radio size="lg" {...props} />;
export const SmallRadio = (props) => <Radio size="sm" {...props} />;

// 상태별 래퍼
export const DefaultRadio = (props) => <Radio state="default" {...props} />;
export const DisabledRadio = (props) => <Radio state="disabled" {...props} />;
export const SelectedRadio = (props) => <Radio state="selected" {...props} />;
export const ErrorRadio = (props) => <Radio state="error" {...props} />;

// 변형별 래퍼
export const CenterRadio = (props) => <Radio variant="center" {...props} />;
export const LeftRadio = (props) => <Radio variant="left" {...props} />;
export const IconRadio = (props) => <Radio variant="icon" {...props} />;

export default Radio; 