import React, { forwardRef } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  variant?: 'text' | 'box' | 'number' | 'password' | 'search' | 'tel';
  state?: 'default' | 'error' | 'focus' | 'filled' | 'disabled';
  clearable?: boolean;
  className?: string;
  wrapperClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  variant = 'text',
  state = 'default',
  clearable = true,
  className = '',
  wrapperClassName = '',
  id,
  ...props
}, ref) => {
  const fieldClasses = ['field'];
  if (state === 'error') fieldClasses.push('-error');
  
  const textClasses = ['text'];
  if (!clearable) textClasses.push('[data-clear="false"]');
  
  const inputClasses = [className].filter(Boolean).join(' ');
  
  const fieldClassName = [fieldClasses.join(' '), wrapperClassName].filter(Boolean).join(' ');

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
      </div>
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;