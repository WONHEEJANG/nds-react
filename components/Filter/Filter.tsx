import React from 'react';
import './filter.css';

export interface FilterChip {
  id: string;
  label: string;
  onRemove?: () => void;
}

export interface FilterBarProps {
  /** 필터 바 타입 */
  variant?: 'left' | 'right';
  /** 검색 정보 (좌측 텍스트) */
  searchInfo?: string;
  /** 날짜 범위 (우측 타입용) */
  dateRange?: string;
  /** 정렬 옵션 (우측 타입용) */
  sortOption?: string;
  /** 추천 상품 라벨 */
  recommendLabel?: string;
  /** 추천 상품 스위치 상태 */
  recommendEnabled?: boolean;
  /** 툴팁 표시 여부 */
  showTooltip?: boolean;
  /** 필터 버튼 클릭 이벤트 */
  onFilterClick?: () => void;
  /** 추천 상품 스위치 변경 이벤트 */
  onRecommendToggle?: (enabled: boolean) => void;
  /** 툴팁 버튼 클릭 이벤트 */
  onTooltipClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export interface FilterResultProps {
  /** 적용된 필터 목록 */
  filters: FilterChip[];
  /** CSS 클래스명 */
  className?: string;
}

export interface SearchFilterProps {
  /** 라벨 */
  label?: string;
  /** 입력 필드 ID */
  id: string;
  /** 플레이스홀더 */
  placeholder?: string;
  /** 입력값 */
  value?: string;
  /** 상태 */
  state?: 'default' | 'focus' | 'filled' | 'disabled';
  /** 안내 문구 */
  info?: string;
  /** 입력값 변경 이벤트 */
  onChange?: (value: string) => void;
  /** 검색 버튼 클릭 이벤트 */
  onSearchClick?: () => void;
  /** 필터 설정 버튼 클릭 이벤트 */
  onFilterClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  variant = 'left',
  searchInfo,
  dateRange,
  sortOption,
  recommendLabel = '추천 상품',
  recommendEnabled = false,
  showTooltip = false,
  onFilterClick,
  onRecommendToggle,
  onTooltipClick,
  className = '',
}) => {
  const switchId = `switch-${Math.random().toString(36).substr(2, 9)}`;

  const renderLeftVariant = () => (
    <div className="mix-bar row1">
      <div className="search">
        {searchInfo && <span>{searchInfo}</span>}
        <button type="button" className="icon-button -filter" onClick={onFilterClick}>
          <span className="hide">필터</span>
        </button>
      </div>
      <div className="etc">
        <div className="label">
          <label htmlFor={switchId}>{recommendLabel}</label>
          {showTooltip && (
            <span className="tooltip">
              <button 
                type="button" 
                className="tooltip-button" 
                aria-haspopup="true"
                onClick={onTooltipClick}
              >
                <span className="hide">도움말 보기</span>
              </button>
            </span>
          )}
        </div>
        <span className="switch -xs">
          <input 
            type="checkbox" 
            id={switchId} 
            checked={recommendEnabled}
            onChange={(e) => onRecommendToggle?.(e.target.checked)}
          />
          <label htmlFor={switchId}>
            <span className="hide">토글스위치</span>
          </label>
        </span>
      </div>
    </div>
  );

  const renderRightVariant = () => (
    <div className="mix-bar row2">
      <div className="date-sort">
        {dateRange && <div className="date">{dateRange}</div>}
        {sortOption && <div className="option">{sortOption}</div>}
      </div>
      <div className="search">
        <button type="button" className="icon-button -filter" onClick={onFilterClick}>
          <span className="hide">필터</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className={`filter-bar ${className}`.trim()}>
      {variant === 'left' ? renderLeftVariant() : renderRightVariant()}
    </div>
  );
};

export const FilterResult: React.FC<FilterResultProps> = ({
  filters = [],
  className = '',
}) => {
  if (filters.length === 0) return null;

  return (
    <div className={`filter-result ${className}`.trim()}>
      <div className="inner over-x">
        {filters.map((filter) => (
          <div key={filter.id} className="chip">
            {filter.label}
            <button 
              type="button" 
              className="compare-delete"
              onClick={filter.onRemove}
            >
              <span className="hide">삭제</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SearchFilter: React.FC<SearchFilterProps> = ({
  label = '검색',
  id,
  placeholder = '검색어 입력',
  value = '',
  state = 'default',
  info,
  onChange,
  onSearchClick,
  onFilterClick,
  className = '',
}) => {
  const getFieldClasses = () => {
    const classes = ['field', 'search-filter'];
    if (state === 'focus') classes.push('fc-focus');
    if (state === 'filled') classes.push('fc-filled');
    if (className) classes.push(className);
    return classes.join(' ');
  };

  return (
    <div className={getFieldClasses()}>
      <label htmlFor={id} className="label">{label}</label>
      <div className="search-wrap">
        <div className="mix">
          <div className="text">
            <input 
              type="text" 
              className="left-side" 
              id={id}
              placeholder={placeholder}
              value={value}
              disabled={state === 'disabled'}
              onChange={(e) => onChange?.(e.target.value)}
            />
          </div>
          <div className="space -lined search">
            <button 
              type="button" 
              className="icon-button -search right-side"
              onClick={onSearchClick}
              disabled={state === 'disabled'}
            >
              <span className="hide">조회</span>
            </button>
          </div>
        </div>
        <button 
          type="button" 
          className="search-filter-ico" 
          aria-haspopup="true"
          onClick={onFilterClick}
          disabled={state === 'disabled'}
        >
          <span className="hide">조건설정 하기</span>
        </button>
      </div>
      {info && <p className="info">{info}</p>}
    </div>
  );
};

export default { FilterBar, FilterResult, SearchFilter };