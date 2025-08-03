import React from 'react';

const Bullet = ({ 
  type = 'body', // body, caption, notice
  depth = 1, // 1, 2
  items = [],
  className = '',
  ...props
}) => {
  
  // 1depth 아이템 렌더링
  const renderItem = (item, index) => {
    if (typeof item === 'string') {
      return <li key={index}>{item}</li>;
    }
    
    // 2depth가 있는 경우
    if (item.children && depth === 2) {
      return (
        <li key={index}>
          {item.text}
          <div>
            <ul className="ul -dash">
              {item.children.map((child, childIndex) => (
                <li key={childIndex}>{child}</li>
              ))}
            </ul>
          </div>
        </li>
      );
    }
    
    return <li key={index}>{item.text || item}</li>;
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['ul'];
    
    if (type === 'body') {
      classes.push('-bullet');
    } else if (type === 'caption') {
      classes.push('-bullet', '-caption');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Notice 타입인 경우
  if (type === 'notice') {
    return (
      <div className="sticker">
        <div className="notice -active" data-role="fold">
          <div className="panel" data-role="visible">
            <ul className="getClassName()">
              {items.map(renderItem)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // 기본 Bullet 타입
  return (
    <ul className={getClassName()} {...props}>
      {items.map(renderItem)}
    </ul>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BulletBody = (props) => <Bullet type="body" {...props} />;
export const BulletCaption = (props) => <Bullet type="caption" {...props} />;
export const BulletNotice = (props) => <Bullet type="notice" {...props} />;

// 2depth 지원 래퍼
export const Bullet2Depth = (props) => <Bullet depth={2} {...props} />;

export default Bullet; 