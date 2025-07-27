import React, { forwardRef } from 'react';
import './input.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** 에러 메시지 (하단에 빨간색으로 표시) */
  error?: string;
  /** 일반 정보 메시지 (하단에 회색으로 표시) */
  info?: string;
  /** 성공 메시지 (하단에 초록색으로 표시) */
  success?: string;
  variant?: 'text' | 'box' | 'number' | 'password' | 'search' | 'tel';
  state?: 'default' | 'error' | 'focus' | 'filled' | 'disabled' | 'success';
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
  
  const fieldClasses = ['field'];
  if (actualState === 'error') fieldClasses.push('-error');
  if (actualState === 'success') fieldClasses.push('-success');
  if (actualState === 'disabled' || props.disabled) fieldClasses.push('-disabled');
  
  const textClasses = ['text', '-basic'];
  if (!clearable) textClasses.push('[data-clear="false"]');
  
  const inputStateClasses = [];
  if (actualState === 'error') inputStateClasses.push('-error');
  if (actualState === 'success') inputStateClasses.push('-success');
  
  const inputClasses = ['input', ...inputStateClasses, className].filter(Boolean).join(' ');
  
  const fieldClassName = [fieldClasses.join(' '), wrapperClassName].filter(Boolean).join(' ');
  
  // CSS 클래스로 스타일 처리

  return (
    <div className={fieldClassName}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <div className={textClasses.join(' ')}>
        <input
          ref={ref}
          id={id}
          className={inputClasses}
          {...props}
        />
        {error && (
          <p className="info -error">
            {error}
          </p>
        )}
        {success && !error && (
          <p className="info -success">
            {success}
          </p>
        )}
        {info && !error && !success && (
          <p className="info">
            {info}
          </p>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;