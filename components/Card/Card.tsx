import React, { useState } from 'react';

export interface CardItem {
  title: string;
  value: string;
}

export interface CardProps {
  variant?: 'account' | 'general' | 'summary' | 'data' | 'etc';
  type?: 'accordion' | 'list' | 'price' | 'detail' | 'input' | 'info' | 'rate' | 'sum' | 'basic' | '2column' | '4column' | 'highlight';
  title?: string;
  subtitle?: string;
  accountNumber?: string;
  bankCode?: string;
  bankName?: string;
  hasAccordion?: boolean;
  defaultExpanded?: boolean;
  items?: CardItem[];
  hiddenItems?: CardItem[];
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  variant = 'general',
  type = 'basic',
  title,
  subtitle,
  accountNumber,
  bankCode,
  bankName,
  hasAccordion = false,
  defaultExpanded = false,
  items = [],
  hiddenItems = [],
  children,
  className = '',
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const cardClasses = ['card'];
  cardClasses.push(variant);
  
  if (variant === 'account') {
    cardClasses.push('-comb');
    if (hasAccordion) cardClasses.push('-accor');
  }
  
  const cardClassName = [cardClasses.join(' '), className].filter(Boolean).join(' ');

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const renderAccountInfo = () => (
    <div data-bankcode={bankCode} className="info">
      <span className="name">
        <span>{title}</span>
      </span>
      <span className="account-number">
        <span>{bankName}</span>
        <span>{accountNumber}</span>
      </span>
    </div>
  );

  const renderDataList = (itemList: CardItem[]) => (
    <dl className="dl">
      {itemList.map((item, index) => (
        <div key={index}>
          <dt>{item.title}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );

  const renderAccordionSection = () => (
    <div className="dls" data-role="fold">
      <button
        type="button"
        className="more"
        data-role="marker"
        onClick={toggleExpanded}
      >
        <span className="hide">{isExpanded ? '접기' : '더보기'}</span>
      </button>
      <div className="dl" data-role={isExpanded ? "visible" : "hidden"}>
        {renderDataList(hiddenItems)}
      </div>
    </div>
  );

  return (
    <div className="field">
      <div className={cardClassName}>
        {variant === 'account' && renderAccountInfo()}
        
        {variant === 'general' && title && (
          <div className="info">
            <span className="name">
              <span>{title}</span>
            </span>
            {subtitle && (
              <span className="sub-info">
                <span>{subtitle}</span>
              </span>
            )}
          </div>
        )}

        {items.length > 0 && renderDataList(items)}

        {hasAccordion && hiddenItems.length > 0 && renderAccordionSection()}

        {children}
      </div>
    </div>
  );
};

export default Card;