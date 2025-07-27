import React, { forwardRef } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'xs' | 'sm' | 'lg';
  variant?: 'basic' | 'box' | 'survey';
  state?: 'default' | 'disabled' | 'selected' | 'select-disabled' | 'error';
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(({
  label,
  size = 'sm',
  variant = 'basic',
  state = 'default',
  className = '',
  id,
  disabled,
  checked,
  ...props
}, ref) => {
  const checkboxClasses = ['checkbox'];
  checkboxClasses.push(`-${variant}`);
  checkboxClasses.push(`-${size}`);
  
  if (state === 'select-disabled') {
    checkboxClasses.push('-seldis');
  }
  
  if (state === 'error') {
    checkboxClasses.push('-error');
  }
  
  const finalClassName = [checkboxClasses.join(' '), className].filter(Boolean).join(' ');
  
  const isDisabled = disabled || state === 'disabled' || state === 'select-disabled';
  const isChecked = checked || state === 'selected';

  return (
    <div className={finalClassName}>
      <input
        ref={ref}
        type="checkbox"
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

Checkbox.displayName = 'Checkbox';

export default Checkbox;