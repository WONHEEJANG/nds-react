import React, { useState } from 'react';

const List = ({ 
  type = 'card', // account, card, line, page
  size = 'sm', // lg, sm, xs
  items = [],
  onItemClick,
  onFavoriteToggle,
  className = '',
  ...props
}) => {
  const [favorites, setFavorites] = useState({});

  const handleItemClick = (item, index) => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  const handleFavoriteToggle = (index) => {
    const newFavorites = { ...favorites };
    newFavorites[index] = !newFavorites[index];
    setFavorites(newFavorites);
    
    if (onFavoriteToggle) {
      onFavoriteToggle(index, newFavorites[index]);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = [];
    
    if (type === 'account') {
      classes = ['selection', 'remittance'];
    } else if (type === 'card') {
      classes = ['list-dl', `-${size}`];
    } else if (type === 'line') {
      classes = ['list-dl'];
    } else if (type === 'page') {
      classes = ['list-dl', '-page', `-${size}`];
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Account 타입 리스트
  if (type === 'account') {
    return (
      <div className={getClassName()} {...props}>
        <ul>
          {(items || []).map((item, index) => (
            <li key={index}>
              <button 
                type="button" 
                data-bankcode={item.bankCode}
                className="info"
                onClick={() => handleItemClick(item, index)}
              >
                <span className="name">
                  <span>{item.bankName}</span>
                </span>
                <span className="account-number">
                  <span className="number">{item.accountNumber}</span>
                </span>
              </button>
              <div className="list-settings">
                <div className="setting -favorite">
                  <input 
                    type="checkbox" 
                    id={`favorite${index}`} 
                    className="favorite-input"
                    checked={favorites[index] || false}
                    onChange={() => handleFavoriteToggle(index)}
                  />
                  <label htmlFor={`favorite${index}`} className="favorite-label">
                    <span className="hide">즐겨찾기</span>
                  </label>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // Line 타입 리스트
  if (type === 'line') {
    return (
      <div className="list-line" {...props}>
        {(items || []).map((item, index) => (
          <div key={index}>
            <div className="period">
              <span>{item.startDate || '2024.01.01'}</span> ~ <span>{item.endDate || '2025.01.01'}</span>
            </div>
            <dl>
              {(item.data || [{ title: '타이틀', value: '데이터' }]).map((dataItem, dataIndex) => (
                <div key={dataIndex}>
                  <dt>{dataItem.title}</dt>
                  <dd>{dataItem.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    );
  }

  // Card, Page 타입 리스트
  return (
    <div className={getClassName()} {...props}>
      <dl>
        {(items || []).map((item, index) => (
          <div key={index}>
            <dt>{item.title}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const AccountList = (props) => <List type="account" {...props} />;
export const CardList = (props) => <List type="card" {...props} />;
export const LineList = (props) => <List type="line" {...props} />;
export const PageList = (props) => <List type="page" {...props} />;

// 크기별 래퍼
export const LargeCardList = (props) => <List type="card" size="lg" {...props} />;
export const SmallCardList = (props) => <List type="card" size="sm" {...props} />;
export const ExtraSmallCardList = (props) => <List type="card" size="xs" {...props} />;
export const SmallPageList = (props) => <List type="page" size="sm" {...props} />;
export const ExtraSmallPageList = (props) => <List type="page" size="xs" {...props} />;

export default List; 