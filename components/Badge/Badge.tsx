import React from 'react';

export interface BadgeProps {
  children?: React.ReactNode;
  variant?: 'new' | 'line-gray' | 'solid' | 'outline';
  className?: string;
  ariaLabel?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'solid',
  className = '',
  ariaLabel,
}) => {
  const badgeClasses = ['badge'];
  badgeClasses.push(`-${variant}`);
  
  const finalClassName = [badgeClasses.join(' '), className].filter(Boolean).join(' ');

  return (
    <span className={finalClassName}>
      {children}
      {ariaLabel && <span className="hide">{ariaLabel}</span>}
    </span>
  );
};

export default Badge;