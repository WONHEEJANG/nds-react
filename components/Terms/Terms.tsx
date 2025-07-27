import React, { useState, useEffect } from 'react';

export type TermsType = 'required' | 'optional';

export interface TermsItem {
  id: string;
  title: string;
  type?: TermsType;
  content?: string;
  checked?: boolean;
  onViewDetails?: () => void;
}

export interface TermsProps {
  /** 약관 제목 */
  title: string;
  /** 약관 타입 */
  type?: TermsType;
  /** 약관 목록 */
  items: TermsItem[];
  /** 펼침/접힘 상태 */
  expanded?: boolean;
  /** 전체 동의 체크 상태 */
  allChecked?: boolean;
  /** 펼침/접힘 가능 여부 */
  expandable?: boolean;
  /** 전체 동의 변경 이벤트 */
  onAllCheckChange?: (checked: boolean) => void;
  /** 개별 약관 체크 변경 이벤트 */
  onItemCheckChange?: (itemId: string, checked: boolean) => void;
  /** 펼침/접힘 변경 이벤트 */
  onExpandChange?: (expanded: boolean) => void;
  /** 약관 상세보기 이벤트 */
  onViewDetails?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Terms: React.FC<TermsProps> = ({
  title,
  type = 'required',
  items = [],
  expanded: controlledExpanded,
  allChecked: controlledAllChecked,
  expandable = true,
  onAllCheckChange,
  onItemCheckChange,
  onExpandChange,
  onViewDetails,
  className = '',
}) => {
  const [internalExpanded, setInternalExpanded] = useState(controlledExpanded || false);
  const [internalAllChecked, setInternalAllChecked] = useState(controlledAllChecked || false);
  
  const isControlledExpanded = controlledExpanded !== undefined;
  const isControlledAllChecked = controlledAllChecked !== undefined;
  
  const currentExpanded = isControlledExpanded ? controlledExpanded : internalExpanded;
  const currentAllChecked = isControlledAllChecked ? controlledAllChecked : internalAllChecked;

  const totalId = `terms-total-${Math.random().toString(36).substr(2, 9)}`;

  // 모든 항목이 체크되었는지 확인
  const calculateAllChecked = () => {
    return items.length > 0 && items.every(item => item.checked);
  };

  // 일부 항목이 체크되었는지 확인 (indeterminate 상태)
  const calculateIndeterminate = () => {
    const checkedCount = items.filter(item => item.checked).length;
    return checkedCount > 0 && checkedCount < items.length;
  };

  useEffect(() => {
    if (!isControlledAllChecked) {
      setInternalAllChecked(calculateAllChecked());
    }
  }, [items, isControlledAllChecked]);

  const getContainerClasses = () => {
    const classes = ['agree'];
    if (currentExpanded) {
      classes.push('-detail');
    }
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getTypePrefix = (itemType?: TermsType) => {
    const termType = itemType || type;
    return termType === 'required' ? '[필수]' : '[선택]';
  };

  const handleAllCheckChange = (checked: boolean) => {
    if (!isControlledAllChecked) {
      setInternalAllChecked(checked);
    }

    // 모든 개별 항목들의 체크 상태를 변경
    items.forEach(item => {
      if (onItemCheckChange) {
        onItemCheckChange(item.id, checked);
      }
    });

    if (onAllCheckChange) {
      onAllCheckChange(checked);
    }
  };

  const handleItemCheckChange = (itemId: string, checked: boolean) => {
    if (onItemCheckChange) {
      onItemCheckChange(itemId, checked);
    }

    // 전체 체크 상태 업데이트 (제어되지 않는 경우)
    if (!isControlledAllChecked) {
      const updatedItems = items.map(item => 
        item.id === itemId ? { ...item, checked } : item
      );
      const newAllChecked = updatedItems.length > 0 && updatedItems.every(item => item.checked);
      setInternalAllChecked(newAllChecked);
    }
  };

  const handleExpandToggle = () => {
    const newExpanded = !currentExpanded;
    
    if (!isControlledExpanded) {
      setInternalExpanded(newExpanded);
    }
    
    if (onExpandChange) {
      onExpandChange(newExpanded);
    }
  };

  const handleViewDetails = () => {
    if (onViewDetails) {
      onViewDetails();
    }
  };

  const handleItemViewDetails = (item: TermsItem) => {
    if (item.onViewDetails) {
      item.onViewDetails();
    }
  };

  return (
    <div className={getContainerClasses()}>
      <div className="title">
        <div className="checkbox -sm">
          <input
            type="checkbox"
            id={totalId}
            checked={currentAllChecked}
            ref={(input) => {
              if (input) {
                input.indeterminate = calculateIndeterminate();
              }
            }}
            onChange={(e) => handleAllCheckChange(e.target.checked)}
          />
          <label htmlFor={totalId}>
            {getTypePrefix()} {title}
          </label>
        </div>
        {expandable && (
          <button
            type="button"
            className="more"
            onClick={handleExpandToggle}
            aria-expanded={currentExpanded}
          >
            <span className="hide">{title}</span>
          </button>
        )}
        {!expandable && onViewDetails && (
          <button
            type="button"
            className="more"
            onClick={handleViewDetails}
          >
            <span className="hide">{title}</span>
          </button>
        )}
      </div>

      {currentExpanded && (
        <div className="panel">
          <div className="checkboxes -full">
            {items.map((item) => {
              const itemId = `terms-item-${item.id}`;
              
              return (
                <div key={item.id} className="checkbox -sub">
                  <input
                    type="checkbox"
                    id={itemId}
                    checked={item.checked || false}
                    onChange={(e) => handleItemCheckChange(item.id, e.target.checked)}
                  />
                  <label htmlFor={itemId}>
                    {item.type && getTypePrefix(item.type)} {item.title}
                  </label>
                  {item.onViewDetails && (
                    <button
                      type="button"
                      className="more"
                      onClick={() => handleItemViewDetails(item)}
                    >
                      <span className="hide">약관</span>
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Terms;