import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** 에러 메시지 (하단에 빨간색으로 표시) */
  error?: string;
  /** 일반 정보 메시지 (하단에 회색으로 표시) */
  info?: string;
  /** 성공 메시지 (하단에 초록색으로 표시) */
  success?: string;
  variant?: 'text' | 'box' | 'number' | 'password' | 'search' | 'tel';
  state?: 'default' | 'error' | 'focus' | 'filled' | 'disabled';
  clearable?: boolean;
  className?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  info,
  success,
  variant = 'text',
  state = 'default',
  clearable = true,
  className = '',
  wrapperClassName = '',
  id,
  ...props
}, ref) => {
  // state 자동 결정
  let actualState = state;
  if (error && state === 'default') actualState = 'error';
  if (success && state === 'default') actualState = 'success';
  
  const fieldClasses = ['field', 'input'];
  if (actualState === 'error') fieldClasses.push('-error');
  if (actualState === 'success') fieldClasses.push('-success');
  if (actualState === 'disabled' || props.disabled) fieldClasses.push('-disabled');
  
  const textClasses = ['text', '-basic'];
  if (!clearable) textClasses.push('[data-clear="false"]');
  
  const inputClasses = [className].filter(Boolean).join(' ');
  
  const fieldClassName = [fieldClasses.join(' '), wrapperClassName].filter(Boolean).join(' ');
  
  // 인라인 스타일 정의
  const fieldStyle: React.CSSProperties = {
    marginBottom: '1.6rem',
  };
  
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '1.4rem',
    fontWeight: '500',
    color: '#333',
    marginBottom: '0.8rem',
  };
  
  const textContainerStyle: React.CSSProperties = {
    position: 'relative',
  };
  
  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '4.8rem',
    padding: '0 1.6rem',
    border: `1px solid ${actualState === 'error' ? '#e74c3c' : actualState === 'success' ? '#27ae60' : '#dee2e6'}`,
    borderRadius: '0.8rem',
    fontSize: '1.6rem',
    backgroundColor: props.disabled ? '#f8f9fa' : '#fff',
    color: props.disabled ? '#999' : '#333',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    ...props.disabled && { cursor: 'not-allowed' },
  };
  
  const messageStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    marginTop: '0.8rem',
    display: 'block',
    lineHeight: '1.4',
  };
  
  const errorMessageStyle: React.CSSProperties = {
    ...messageStyle,
    color: '#e74c3c',
  };
  
  const successMessageStyle: React.CSSProperties = {
    ...messageStyle,
    color: '#27ae60',
  };
  
  const infoMessageStyle: React.CSSProperties = {
    ...messageStyle,
    color: '#666',
  };

  return (
    <div className={fieldClassName} style={fieldStyle}>
      {label && (
        <label htmlFor={id} className="label" style={labelStyle}>
          {label}
        </label>
      )}
      <div className={textClasses.join(' ')} style={textContainerStyle}>
        <input
          ref={ref}
          id={id}
          className={inputClasses}
          style={inputStyle}
          {...props}
        />
        {error && (
          <p className="info" style={errorMessageStyle}>
            {error}
          </p>
        )}
        {success && !error && (
          <p className="info" style={successMessageStyle}>
            {success}
          </p>
        )}
        {info && !error && !success && (
          <p className="info" style={infoMessageStyle}>
            {info}
          </p>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;