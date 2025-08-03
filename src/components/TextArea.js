import React, { useState } from 'react';

const TextArea = ({ 
  state = 'inactive', // inactive, filled, focus, error
  label = '레이블',
  placeholder = '내용을 입력하세요',
  value = '',
  maxLength = 50,
  info = '',
  errorMessage = '',
  onChange,
  onFocus,
  onBlur,
  className = '',
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['field', 'textfield'];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Textarea 클래스명 생성
  const getTextareaClassName = () => {
    let classes = ['textarea'];
    
    if (state === 'filled' || inputValue) {
      classes.push('-filled');
    }
    
    if (state === 'focus' || isFocused) {
      classes.push('-focused');
    }
    
    if (state === 'error') {
      classes.push('-error');
    }
    
    return classes.join(' ');
  };

  // Info 클래스명 생성
  const getInfoClassName = () => {
    let classes = ['info'];
    
    if (state === 'error') {
      classes.push('-error');
    }
    
    return classes.join(' ');
  };

  const currentLength = inputValue.length;
  const displayInfo = state === 'error' ? errorMessage : info;

  return (
    <div className={getClassName()} {...props}>
      <label htmlFor="textarea" className="label">{label}</label>
      <div className={getTextareaClassName()}>
        <textarea 
          id="textarea"
          placeholder={placeholder}
          value={inputValue}
          maxLength={maxLength}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="text-count">
          <span className="count point">{currentLength}</span>
          <span className="total">{maxLength}</span>
        </div>
      </div>
      {displayInfo && (
        <p className={getInfoClassName()}>{displayInfo}</p>
      )}
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const InactiveTextArea = (props) => <TextArea state="inactive" {...props} />;
export const FilledTextArea = (props) => <TextArea state="filled" {...props} />;
export const FocusTextArea = (props) => <TextArea state="focus" {...props} />;
export const ErrorTextArea = (props) => <TextArea state="error" {...props} />;

export default TextArea; 