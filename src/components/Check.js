import React from 'react';

const Check = ({ 
  type = 'basic', // basic, box
  size = 'md', // xs, sm, md, lg
  state = 'default', // default, selected, disabled, select-disabled
  checked = false,
  disabled = false,
  label,
  onChange,
  id,
  className = '',
  ...props
}) => {
  
  const handleChange = (e) => {
    if (onChange && !disabled) {
      onChange(e.target.checked, e);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['checkbox', `-${type}`];
    
    if (size) {
      classes.push(`-${size}`);
    }
    
    if (state === 'select-disabled') {
      classes.push('-seldis');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Box 타입 체크박스
  if (type === 'box') {
    return (
      <div className="field check">
        {label && <p className="label">{label}</p>}
        <div className={`box-radios -box -${size}`}>
          <div className="box-radio">
            <input
              type="checkbox"
              id={id}
              checked={checked}
              disabled={disabled}
              onChange={handleChange}
              {...props}
            />
            <label htmlFor={id}>{label}</label>
          </div>
        </div>
      </div>
    );
  }

  // 기본 체크박스
  return (
    <div className={getClassName()}>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const CheckBasic = (props) => <Check type="basic" {...props} />;
export const CheckBox = (props) => <Check type="box" {...props} />;

// 사이즈별 래퍼
export const CheckXS = (props) => <Check size="xs" {...props} />;
export const CheckSM = (props) => <Check size="sm" {...props} />;
export const CheckMD = (props) => <Check size="md" {...props} />;
export const CheckLG = (props) => <Check size="lg" {...props} />;

// 상태별 래퍼
export const CheckSelected = (props) => <Check state="selected" checked={true} {...props} />;
export const CheckDisabled = (props) => <Check state="disabled" disabled={true} {...props} />;
export const CheckSelectDisabled = (props) => <Check state="select-disabled" disabled={true} {...props} />;

export default Check; 