import React, { forwardRef } from 'react';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  size?: 'sm' | 'lg';
  variant?: 'basic' | 'box' | 'survey';
  state?: 'default' | 'disabled' | 'selected' | 'error';
  className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(({
  label,
  size = 'lg',
  variant = 'basic',
  state = 'default',
  className = '',
  id,
  disabled,
  checked,
  ...props
}, ref) => {
  const radioClasses = ['radio'];
  radioClasses.push(`-${variant}`);
  radioClasses.push(`-${size}`);
  
  if (state === 'error') {
    radioClasses.push('-error');
  }
  
  const finalClassName = [radioClasses.join(' '), className].filter(Boolean).join(' ');
  
  const isDisabled = disabled || state === 'disabled';
  const isChecked = checked || state === 'selected';

  return (
    <div className={finalClassName}>
      <input
        ref={ref}
        type="radio"
        id={id}
        disabled={isDisabled}
        checked={isChecked}
        {...props}
      />
      {label && (
        <label htmlFor={id}>{label}</label>
      )}
    </div>
  );
});

Radio.displayName = 'Radio';

export default Radio;