import React, { useState } from 'react';

export interface AccordionProps {
  title: string;
  subInfo?: string;
  badge?: string;
  children: React.ReactNode;
  variant?: 'box' | 'graybox' | 'line' | 'notice';
  type?: 'list' | 'text' | 'basic';
  defaultOpen?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  title,
  subInfo,
  badge,
  children,
  variant = 'box',
  type = 'list',
  defaultOpen = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const baseClasses = 'accordion';
  const variantClass = `-${variant}`;
  const typeClass = `-${type}`;
  const activeClass = isOpen ? '-active' : '';
  
  const classes = [baseClasses, variantClass, typeClass, activeClass, className]
    .filter(Boolean)
    .join(' ');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes} data-role="fold">
      <button
        type="button"
        className="title"
        data-role="marker"
        title={isOpen ? "펼쳐짐" : "접힘"}
        onClick={handleToggle}
      >
        {badge && (
          <div className="badges">
            <span className="badge line-gray">{badge}</span>
          </div>
        )}
        <div className="info">
          <span className="name">
            <span>{title}</span>
          </span>
          {subInfo && (
            <span className="sub-info">
              <span>{subInfo}</span>
            </span>
          )}
        </div>
      </button>
      <div className="panel" data-role={isOpen ? "visible" : "hidden"}>
        {children}
      </div>
    </div>
  );
};

export default Accordion;