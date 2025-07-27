import React from 'react';
import './link.css';

export type LinkVariant = 'basic' | 'category' | 'divide' | 'horizontal' | 'mix' | 'vertical' | 'none-border';
export type LinkStyle = 'default' | 'underline' | 'point';
export type CertificationType = 'fss' | 'folder';

export interface LinkItem {
  id: string;
  title: string;
  subtitle?: string;
  info?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export interface LinkProps {
  /** 링크 변형 */
  variant?: LinkVariant;
  /** 링크 스타일 */
  style?: LinkStyle;
  /** 링크 텍스트 (basic 타입용) */
  children?: React.ReactNode;
  /** href 속성 */
  href?: string;
  /** 링크 목록 (리스트 타입용) */
  items?: LinkItem[];
  /** 인증서 타입 (category, mix 타입용) */
  certificationType?: CertificationType;
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Link: React.FC<LinkProps> = ({
  variant = 'basic',
  style = 'default',
  children,
  href = 'javascript:void(0)',
  items = [],
  certificationType = 'fss',
  onClick,
  className = '',
}) => {
  const getBasicLinkClasses = () => {
    const classes = ['a'];
    if (style === 'underline') {
      classes.push('underline');
    } else if (style === 'point') {
      classes.push('underline', 'point');
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getContainerClasses = () => {
    const classes = ['link'];
    
    switch (variant) {
      case 'category':
        classes.push('-category');
        break;
      case 'divide':
        classes.push('-divide');
        break;
      case 'horizontal':
        classes.push('-horizontal');
        break;
      case 'mix':
        classes.push('-mix');
        break;
      case 'vertical':
        classes.push('-vertical');
        break;
      case 'none-border':
        classes.push('none-bd');
        break;
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const handleClick = (item?: LinkItem) => {
    if (item?.onClick) {
      item.onClick();
    } else if (onClick) {
      onClick();
    }
  };

  const renderBasicLink = () => {
    return (
      <a
        href={href}
        className={getBasicLinkClasses()}
        onClick={onClick}
      >
        {children}
      </a>
    );
  };

  const renderCategoryItem = (item: LinkItem) => (
    <li key={item.id}>
      <a
        href={item.href || href}
        className={`certi-btn ${item.className || ''}`.trim()}
        onClick={() => handleClick(item)}
      >
        <div className={`certi -${certificationType}`}>
          <p className="title">{item.title}</p>
          {item.info && <p className="info">{item.info}</p>}
        </div>
      </a>
    </li>
  );

  const renderDivideItem = (item: LinkItem) => (
    <li key={item.id}>
      <a
        href={item.href || href}
        className={item.className || ''}
        onClick={() => handleClick(item)}
      >
        <span className="title">{item.title}</span>
        {item.subtitle && <span className="sub-info">{item.subtitle}</span>}
      </a>
    </li>
  );

  const renderHorizontalItem = (item: LinkItem) => (
    <li key={item.id}>
      <a
        href={item.href || href}
        className={`ico-prod ${item.className || ''}`.trim()}
        onClick={() => handleClick(item)}
      >
        {item.title}
      </a>
    </li>
  );

  const renderMixItem = (item: LinkItem) => (
    <li key={item.id}>
      <a
        href={item.href || href}
        className={`certi-btn ${item.className || ''}`.trim()}
        onClick={() => handleClick(item)}
      >
        <div className={`certi -${certificationType}`}>
          <p className="title">{item.title}</p>
          {item.subtitle && <p className="info">{item.subtitle}</p>}
        </div>
      </a>
    </li>
  );

  const renderVerticalItem = (item: LinkItem) => (
    <li key={item.id}>
      <a
        href={item.href || href}
        className={`auth-btn ${item.className || ''}`.trim()}
        onClick={() => handleClick(item)}
      >
        <div className="auth-icon-num">
          {item.title}
        </div>
      </a>
    </li>
  );

  const renderNoneBorderItem = (item: LinkItem) => (
    <li key={item.id}>
      <a
        href={item.href || href}
        className={item.className || ''}
        onClick={() => handleClick(item)}
      >
        {item.title}
      </a>
    </li>
  );

  const renderListItem = (item: LinkItem) => {
    switch (variant) {
      case 'category':
        return renderCategoryItem(item);
      case 'divide':
        return renderDivideItem(item);
      case 'horizontal':
        return renderHorizontalItem(item);
      case 'mix':
        return renderMixItem(item);
      case 'vertical':
        return renderVerticalItem(item);
      case 'none-border':
        return renderNoneBorderItem(item);
      default:
        return renderNoneBorderItem(item);
    }
  };

  const renderListVariant = () => {
    return (
      <div className={getContainerClasses()}>
        <ul>
          {items.map(renderListItem)}
        </ul>
      </div>
    );
  };

  if (variant === 'basic') {
    return renderBasicLink();
  }

  return renderListVariant();
};

export default Link;