import React from 'react';

const Switch = ({ 
  type = 'basic', // basic, big-font
  size = 'sm', // lg, sm, xs
  checked = false,
  disabled = false,
  onChange,
  className = '',
  ...props
}) => {
  
  const handleChange = (e) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  const handleClick = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['switch'];
    
    if (type === 'basic') {
      classes.push(`-${size}`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Big-font 타입
  if (type === 'big-font') {
    return (
      <button 
        type="button" 
        className={`func -bigsize ${checked ? '-active' : ''}`}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
        <span className="hide">큰글</span>
      </button>
    );
  }

  // Basic 타입
  return (
    <span className={getClassName()} {...props}>
      <input 
        type="checkbox" 
        id={`switch-${Math.random().toString(36).substr(2, 9)}`}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
      <label htmlFor={`switch-${Math.random().toString(36).substr(2, 9)}`}>
        <span className="hide">스위치</span>
      </label>
    </span>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BasicSwitch = (props) => <Switch type="basic" {...props} />;
export const BigFontSwitch = (props) => <Switch type="big-font" {...props} />;

// 크기별 래퍼
export const LargeSwitch = (props) => <Switch type="basic" size="lg" {...props} />;
export const SmallSwitch = (props) => <Switch type="basic" size="sm" {...props} />;
export const ExtraSmallSwitch = (props) => <Switch type="basic" size="xs" {...props} />;

// 상태별 래퍼
export const OnSwitch = (props) => <Switch checked={true} {...props} />;
export const OffSwitch = (props) => <Switch checked={false} {...props} />;

export default Switch; 