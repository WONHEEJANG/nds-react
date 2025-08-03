import React from 'react';

const Link = ({ 
  type = 'none', // category, divide, horizontal, mix, none, price, vertical
  items = [],
  onClick,
  className = '',
  ...props
}) => {
  
  const handleClick = (item, index) => {
    if (onClick) {
      onClick(item, index);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['link'];
    
    if (type === 'none') {
      classes.push('none-bd');
    } else {
      classes.push(`-${type}`);
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Price 타입 링크
  if (type === 'price') {
    return (
      <ul className="account-list" {...props}>
        {items.map((item, index) => (
          <li key={index}>
            <div className="account-item">
              <div className="date">{item.date}</div>
              <div className="type">{item.type}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="amount">{item.amount}</div>
              </div>
              <div className="sub-txt right">{item.balance}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  // 기본 링크 타입들
  return (
    <div className={getClassName()} {...props}>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a 
              href="javascript:void(0)" 
              onClick={() => handleClick(item, index)}
              className={item.className}
            >
              {type === 'category' && (
                <div className="certi -fss">
                  <p className="title">{item.title}</p>
                  <p className="info">{item.info}</p>
                </div>
              )}
              {type === 'divide' && (
                <>
                  <span className="title">{item.title}</span>
                  <span className="sub-info">{item.subInfo}</span>
                </>
              )}
              {type === 'horizontal' && (
                <span className="ico-prod">{item.title}</span>
              )}
              {type === 'mix' && (
                <div className="certi -folder">
                  <p className="title">{item.title}</p>
                  <p className="info">{item.info}</p>
                </div>
              )}
              {type === 'none' && item.title}
              {type === 'vertical' && (
                <div className="auth-icon-num">
                  {item.title}
                </div>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const CategoryLink = (props) => <Link type="category" {...props} />;
export const DivideLink = (props) => <Link type="divide" {...props} />;
export const HorizontalLink = (props) => <Link type="horizontal" {...props} />;
export const MixLink = (props) => <Link type="mix" {...props} />;
export const NoneLink = (props) => <Link type="none" {...props} />;
export const PriceLink = (props) => <Link type="price" {...props} />;
export const VerticalLink = (props) => <Link type="vertical" {...props} />;

export default Link; 