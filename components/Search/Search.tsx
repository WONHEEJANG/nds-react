import React, { useState, useRef, useEffect } from 'react';

export type SearchVariant = 'basic' | 'filter';
export type SearchState = 'default' | 'focused' | 'filled' | 'error';

export interface SearchProps {
  /** 검색 변형 */
  variant?: SearchVariant;
  /** 라벨 */
  label?: string;
  /** 입력 필드 ID */
  id?: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 입력값 */
  value?: string;
  /** 상태 */
  state?: SearchState;
  /** 안내 문구 */
  info?: string;
  /** 라벨 표시 여부 */
  showLabel?: boolean;
  /** 비활성화 */
  disabled?: boolean;
  /** 입력값 변경 이벤트 */
  onChange?: (value: string) => void;
  /** 검색 버튼 클릭 이벤트 */
  onSearch?: (value: string) => void;
  /** 필터 버튼 클릭 이벤트 (filter 변형용) */
  onFilterClick?: () => void;
  /** 포커스 이벤트 */
  onFocus?: () => void;
  /** 블러 이벤트 */
  onBlur?: () => void;
  /** Enter 키 이벤트 */
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Search: React.FC<SearchProps> = ({
  variant = 'basic',
  label = '검색',
  id,
  placeholder = '검색어 입력',
  value: controlledValue,
  state: controlledState,
  info,
  showLabel = true,
  disabled = false,
  onChange,
  onSearch,
  onFilterClick,
  onFocus,
  onBlur,
  onKeyPress,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(controlledValue || '');
  const [internalState, setInternalState] = useState<SearchState>(controlledState || 'default');
  const inputRef = useRef<HTMLInputElement>(null);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;
  const currentState = controlledState || internalState;

  const fieldId = id || `search-${Math.random().toString(36).substr(2, 9)}`;

  useEffect(() => {
    if (!isControlled) {
      // 값이 있으면 filled 상태로 변경
      if (internalValue && currentState === 'default') {
        setInternalState('filled');
      } else if (!internalValue && currentState === 'filled') {
        setInternalState('default');
      }
    }
  }, [internalValue, currentState, isControlled]);

  const getFieldClasses = () => {
    const classes = ['field'];
    
    if (variant === 'filter') {
      classes.push('search-filter');
    } else {
      classes.push('search');
    }
    
    if (currentState === 'focused') {
      classes.push('-focused');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const getMixClasses = () => {
    const classes = ['mix'];
    
    if (currentValue || currentState === 'filled') {
      classes.push('-filled');
    }
    
    if (currentState === 'error') {
      classes.push('-error');
    }
    
    if (currentState === 'focused') {
      classes.push('-focused');
    }
    
    return classes.join(' ');
  };

  const getInfoClasses = () => {
    const classes = ['info'];
    
    if (currentState === 'error') {
      classes.push('-error');
    }
    
    return classes.join(' ');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleFocus = () => {
    if (!controlledState) {
      setInternalState('focused');
    }
    
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (!controlledState) {
      // 값이 있으면 filled, 없으면 default
      setInternalState(currentValue ? 'filled' : 'default');
    }
    
    if (onBlur) {
      onBlur();
    }
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(currentValue);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
    
    if (onKeyPress) {
      onKeyPress(event);
    }
  };

  const handleFilterClick = () => {
    if (onFilterClick) {
      onFilterClick();
    }
  };

  const renderSearchInput = () => (
    <div className={getMixClasses()}>
      <div className="text">
        <input
          ref={inputRef}
          type="text"
          className="left-side"
          id={fieldId}
          placeholder={placeholder}
          value={currentValue}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="space -lined search">
        <button
          type="button"
          className="icon-button -search right-side"
          disabled={disabled}
          onClick={handleSearch}
        >
          <span className="hide">조회</span>
        </button>
      </div>
    </div>
  );

  const renderFilterVariant = () => (
    <div className="search-wrap">
      {renderSearchInput()}
      <button
        type="button"
        className="search-filter-ico"
        aria-haspopup="true"
        disabled={disabled}
        onClick={handleFilterClick}
      >
        <span className="hide">조건설정 하기</span>
      </button>
    </div>
  );

  return (
    <div className={getFieldClasses()}>
      {showLabel && (
        <label htmlFor={fieldId} className="label">
          {label}
        </label>
      )}
      
      {variant === 'filter' ? renderFilterVariant() : renderSearchInput()}
      
      {info && (
        <p className={getInfoClasses()}>
          {info}
        </p>
      )}
    </div>
  );
};

export default Search;