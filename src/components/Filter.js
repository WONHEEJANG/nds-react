import React, { useState } from 'react';

const Filter = ({ 
  type = 'left', // left, right
  items = ['전체', '3개월'],
  label = '추천 상품',
  showTooltip = true,
  showSwitch = true,
  switchChecked = false,
  onSwitchChange,
  onFilterClick,
  onTooltipClick,
  dateRange = '2024.10.22 ~ 2024.12.22',
  sortOption = '최신순',
  className = '',
  ...props
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(switchChecked);

  const handleSwitchChange = (e) => {
    const newValue = e.target.checked;
    setIsSwitchOn(newValue);
    if (onSwitchChange) {
      onSwitchChange(newValue);
    }
  };

  const handleFilterClick = () => {
    if (onFilterClick) {
      onFilterClick();
    }
  };

  const handleTooltipClick = () => {
    if (onTooltipClick) {
      onTooltipClick();
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['filter-bar'];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Left 타입 필터
  if (type === 'left') {
    return (
      <div className={getClassName()} {...props}>
        <div className="mix-bar row1">
          <div className="search">
            {items.map((item, index) => (
              <span key={index}>
                {item}
                {index < items.length - 1 && 'ㆍ'}
              </span>
            ))}
            <button 
              type="button" 
              className="icon-button -filter"
              onClick={handleFilterClick}
            >
              <span className="hide">필터</span>
            </button>
          </div>
          {showSwitch && (
            <div className="etc">
              <div className="label">
                <label htmlFor="filter-switch">{label}</label>
                {showTooltip && (
                  <span className="tooltip">
                    <button 
                      type="button" 
                      className="tooltip-button" 
                      aria-haspopup="true"
                      onClick={handleTooltipClick}
                    >
                      <span className="hide">도움말 보기</span>
                    </button>
                  </span>
                )}
              </div>
              <span className="switch -xs">
                <input 
                  type="checkbox" 
                  id="filter-switch" 
                  checked={isSwitchOn}
                  onChange={handleSwitchChange}
                />
                <label htmlFor="filter-switch">
                  <span className="hide">토글스위치</span>
                </label>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Right 타입 필터
  return (
    <div className={getClassName()} {...props}>
      <div className="mix-bar row2">
        <div className="date-sort">
          <div className="date">{dateRange}</div>
          <div className="option">{sortOption}</div>
        </div>
        <div className="search">
          <button 
            type="button" 
            className="icon-button -filter"
            onClick={handleFilterClick}
          >
            <span className="hide">필터</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const FilterLeft = (props) => <Filter type="left" {...props} />;
export const FilterRight = (props) => <Filter type="right" {...props} />;

export default Filter; 