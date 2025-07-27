import React, { useState } from 'react';

export interface CardItem {
  title: string;
  value: string | React.ReactNode;
  className?: string;
}

export interface Badge {
  text: string;
  variant?: 'line-gray' | 'line-blue' | 'line-yellow' | 'line-red' | 'solid' | 'new' | 'outline';
}

export interface CardProps {
  /** 카드 변형 타입 */
  variant?: 'account' | 'general' | 'summary' | 'data' | 'etc';
  /** 카드 세부 타입 */
  type?: 'accordion' | 'list' | 'price' | 'detail' | 'input' | 'info' | 'rate' | 'sum' | 
         'basic' | '2column' | '4column' | 'highlight' | 'divide' | 'grip' | 'date' |
         'divide-multi' | 'divide-single' | 'double' | 'single';
  /** 카드 제목 */
  title?: string;
  /** 카드 부제목 */
  subtitle?: string;
  /** 계좌번호 */
  accountNumber?: string;
  /** 은행 코드 */
  bankCode?: string;
  /** 은행명 */
  bankName?: string;
  /** 아코디언 기능 사용 여부 */
  hasAccordion?: boolean;
  /** 아코디언 기본 확장 상태 */
  defaultExpanded?: boolean;
  /** 더보기 메뉴 표시 여부 */
  hasDotMenu?: boolean;
  /** 메인 데이터 항목들 */
  items?: CardItem[];
  /** 숨겨진 데이터 항목들 (아코디언용) */
  hiddenItems?: CardItem[];
  /** 뱃지들 */
  badges?: Badge[];
  /** 버튼 텍스트 */
  buttonText?: string;
  /** 버튼 클릭 이벤트 */
  onButtonClick?: () => void;
  /** 커스텀 컨텐츠 */
  children?: React.ReactNode;
  /** CSS 클래스명 */
  className?: string;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** 더보기 클릭 이벤트 */
  onMoreClick?: () => void;
  /** 아코디언 토글 이벤트 */
  onToggleAccordion?: (expanded: boolean) => void;
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
  hasDotMenu = false,
  items = [],
  hiddenItems = [],
  badges = [],
  buttonText,
  onButtonClick,
  children,
  className = '',
  onClick,
  onMoreClick,
  onToggleAccordion,
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const handleToggleAccordion = () => {
    const newExpanded = !isExpanded;
    setIsExpanded(newExpanded);
    onToggleAccordion?.(newExpanded);
  };

  const getCardClasses = () => {
    const classes = [];
    
    if (variant === 'account') {
      classes.push('account', 'card');
      if (type === 'accordion') {
        classes.push('-comb', '-accor');
      } else if (type === 'list' || type === 'price') {
        classes.push('-comb');
      }
    } else if (variant === 'summary') {
      classes.push('card', '-sum');
    } else if (variant === 'data') {
      classes.push('selection', 'card');
      if (type === '4column') classes.push('-data');
    } else {
      classes.push('card');
      if (variant === 'general') classes.push('account');
    }
    
    if (className) classes.push(className);
    return classes.join(' ');
  };

  const getBadgeClasses = (badgeVariant?: string) => {
    const classes = ['badge'];
    if (badgeVariant) classes.push(badgeVariant);
    return classes.join(' ');
  };

  const renderBadges = () => {
    if (badges.length === 0) return null;
    
    return (
      <div className="badges">
        {badges.map((badge, index) => (
          <span key={index} className={getBadgeClasses(badge.variant)}>
            {badge.text}
          </span>
        ))}
      </div>
    );
  };

  const renderDotMenu = () => {
    if (!hasDotMenu) return null;
    
    return (
      <div className="dot-menu">
        <button type="button" className="button" onClick={onMoreClick}>
          <span className="hide">더보기</span>
        </button>
      </div>
    );
  };

  const renderInfo = () => (
    <div className="info" data-bankcode={bankCode}>
      <span className="name">
        <span>{title}</span>
      </span>
      {(bankName || accountNumber) && (
        <span className="account-number">
          {bankName && <span>{bankName}</span>}
          {accountNumber && <span>{accountNumber}</span>}
        </span>
      )}
    </div>
  );

  const renderDataList = (itemList: CardItem[], isHidden = false) => (
    <dl className="dl" {...(isHidden && { 'data-role': isExpanded ? 'visible' : 'hidden' })}>
      {itemList.map((item, index) => (
        <div key={index}>
          <dt>{item.title}</dt>
          <dd>
            {typeof item.value === 'string' && item.value.includes('span') ? (
              <span>{item.value.replace(/<\/?span>/g, '')}</span>
            ) : (
              item.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );

  const renderAccordionSection = () => {
    if (!hasAccordion || hiddenItems.length === 0) return null;
    
    return (
      <div className="dls" data-role="fold">
        <button 
          type="button" 
          className="more" 
          data-role="marker"
          onClick={handleToggleAccordion}
        >
          <span className="hide">{isExpanded ? '접기' : '더보기'}</span>
        </button>
        {renderDataList(hiddenItems, true)}
      </div>
    );
  };

  const renderButtons = () => {
    if (!buttonText) return null;
    
    return (
      <div className="buttons">
        <button 
          type="button" 
          className="button -tertiary -sm"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    );
  };

  const renderCardContent = () => {
    return (
      <>
        {renderDotMenu()}
        {renderBadges()}
        {renderInfo()}
        {items.length > 0 && renderDataList(items)}
        {renderAccordionSection()}
        {renderButtons()}
        {children}
      </>
    );
  };

  // field wrapper가 필요한 경우와 그렇지 않은 경우를 구분
  const needsFieldWrapper = variant === 'account' && (type === 'accordion' || type === 'input') || 
                           variant === 'general' || 
                           variant === 'summary';

  if (needsFieldWrapper) {
    return (
      <div className="field">
        <div 
          className={getCardClasses()}
          onClick={onClick}
        >
          {renderCardContent()}
        </div>
      </div>
    );
  }

  return (
    <div 
      className={getCardClasses()}
      onClick={onClick}
    >
      {renderCardContent()}
    </div>
  );
};

export default Card;