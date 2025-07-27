import React, { forwardRef } from 'react';
import './switch.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: 'lg' | 'md' | 'sm';
  state?: 'true' | 'false' | 'disabled';
  className?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(({
  label,
  size = 'lg',
  state = 'false',
  className = '',
  id,
  disabled,
  checked,
  ...props
}, ref) => {
  const switchClasses = ['switch'];
  switchClasses.push(`-${size}`);
  
  const finalClassName = [switchClasses.join(' '), className].filter(Boolean).join(' ');
  
  const isDisabled = disabled || state === 'disabled';
  const isChecked = checked || state === 'true';

  return (
    <span className={finalClassName}>
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
    </span>
  );
});

Switch.displayName = 'Switch';

export default Switch;