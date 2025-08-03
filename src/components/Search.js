import React, { useState } from 'react';

const Search = ({ 
  type = 'search', // search, search-filter
  state = 'inactive', // inactive, filled, focus, error
  label = '검색',
  placeholder = '검색어 입력',
  value = '',
  info = '안내 문구 입력',
  showFilter = false,
  onSearch,
  onFilter,
  onChange,
  onFocus,
  onBlur,
  className = '',
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  const handleFilter = () => {
    if (onFilter) {
      onFilter();
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['field', type];
    
    if (state === 'focus' || isFocused) {
      classes.push('-focused');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Mix 클래스명 생성
  const getMixClassName = () => {
    let classes = ['mix'];
    
    if (state === 'filled' || inputValue) {
      classes.push('-filled');
    }
    
    if (state === 'error') {
      classes.push('-error');
    }
    
    if (state === 'focus' || isFocused) {
      classes.push('-focused');
    }
    
    return classes.join(' ');
  };

  // Info 클래스명 생성
  const getInfoClassName = () => {
    let classes = ['info'];
    
    if (state === 'error') {
      classes.push('-error');
    }
    
    return classes.join(' ');
  };

  // Search-filter 타입
  if (type === 'search-filter') {
    return (
      <div className={getClassName()} {...props}>
        <label htmlFor="search-input" className="label">{label}</label>
        <div className="search-wrap">
          <div className={getMixClassName()}>
            <div className="text">
              <input 
                type="text" 
                className="left-side" 
                id="search-input"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="space -lined search">
              <button type="button" className="icon-button -search right-side" onClick={handleSearch}>
                <span className="hide">조회</span>
              </button>
            </div>
          </div>
          <button 
            type="button" 
            className="search-filter-ico" 
            aria-haspopup="true"
            onClick={handleFilter}
          >
            <span className="hide">조건설정 하기</span>
          </button>
        </div>
        <p className={getInfoClassName()}>{info}</p>
      </div>
    );
  }

  // 기본 Search 타입
  return (
    <div className={getClassName()} {...props}>
      <label htmlFor="search-input" className="label">{label}</label>
      <div className={getMixClassName()}>
        <div className="text">
          <input 
            type="text" 
            className="left-side" 
            id="search-input"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className="space -lined search">
          <button type="button" className="icon-button -search right-side" onClick={handleSearch}>
            <span className="hide">조회</span>
          </button>
        </div>
      </div>
      <p className={getInfoClassName()}>{info}</p>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const SearchInput = (props) => <Search type="search" {...props} />;
export const SearchFilter = (props) => <Search type="search-filter" {...props} />;

// 상태별 래퍼
export const InactiveSearch = (props) => <Search state="inactive" {...props} />;
export const FilledSearch = (props) => <Search state="filled" {...props} />;
export const FocusSearch = (props) => <Search state="focus" {...props} />;
export const ErrorSearch = (props) => <Search state="error" {...props} />;

export default Search; 