import React, { useState } from 'react';

const Chip = ({ 
  // 기본 props
  type = 'basic', // basic, accordion, single
  state = 'default', // default, active, open
  menuCount = 1, // 1, 2, 3, 4, 5
  items = [],
  onSelect,
  onDelete,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(state === 'open');
  const [selectedItems, setSelectedItems] = useState([]);

  // 클래스명 생성
  const getClassName = () => {
    let className = 'chip';
    
    if (type === 'basic') {
      className += ' -basic';
    } else if (type === 'accordion') {
      className += ' -accordion';
      if (isOpen) {
        className += ' -open';
      }
    } else if (type === 'single') {
      className += ' -single';
      if (state === 'active') {
        className += ' -active';
      }
    }
    
    return className;
  };

  // 아이템 선택 처리
  const handleItemSelect = (item) => {
    if (type === 'single') {
      setSelectedItems([item]);
      if (onSelect) {
        onSelect(item);
      }
    } else {
      const newSelectedItems = selectedItems.includes(item) 
        ? selectedItems.filter(i => i !== item)
        : [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      if (onSelect) {
        onSelect(newSelectedItems);
      }
    }
  };

  // 아이템 삭제 처리
  const handleItemDelete = (item) => {
    const newSelectedItems = selectedItems.filter(i => i !== item);
    setSelectedItems(newSelectedItems);
    if (onDelete) {
      onDelete(item);
    }
  };

  // 아코디언 토글
  const handleAccordionToggle = () => {
    if (type === 'accordion') {
      setIsOpen(!isOpen);
    }
  };

  // Basic 타입 렌더링
  const renderBasic = () => {
    return (
      <div className="filter-result">
        <div className="inner over-x">
          {items.map((item, index) => (
            <div key={index} className="chip">
              {item.text || item}
              {item.deletable && (
                <button type="button" className="compare-delete" onClick={() => handleItemDelete(item)}>
                  <span className="hide">삭제</span>
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Accordion 타입 렌더링
  const renderAccordion = () => {
    const accordionClassName = `popular-anchors accordion${isOpen ? ' -active' : ''}`;
    
    return (
      <div className="popular-search chip">
        <div className={accordionClassName}>
          <div className="outer">
            <div className="inner over-x">
              <ul className="list tab">
                {items.map((item, index) => (
                  <li key={index} className="item">
                    <button 
                      type="button" 
                      className={`hash-btn ${selectedItems.includes(item) ? '-active' : ''}`}
                      onClick={() => handleItemSelect(item)}
                    >
                      {item.text || item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <button 
              type="button" 
              className="more" 
              onClick={handleAccordionToggle}
            >
              <span className="hide">{isOpen ? '접기' : '펼치기'}</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Single 타입 렌더링
  const renderSingle = () => {
    return (
      <div className="popular-search">
        <div className="popular-anchors">
          <div className="outer">
            <div className="inner over-x">
              <ul className="list tab">
                {items.map((item, index) => (
                  <li key={index} className="item">
                    <button 
                      type="button" 
                      className={`hash-btn ${selectedItems.includes(item) ? '-active' : ''}`}
                      onClick={() => handleItemSelect(item)}
                    >
                      {item.text || item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 메인 컨텐츠 렌더링
  const renderContent = () => {
    switch (type) {
      case 'basic':
        return renderBasic();
      case 'accordion':
        return renderAccordion();
      case 'single':
        return renderSingle();
      default:
        return renderBasic();
    }
  };

  return (
    <div className={getClassName()}>
      {renderContent()}
    </div>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const BasicChip = (props) => <Chip type="basic" {...props} />;

export const AccordionChip = (props) => <Chip type="accordion" {...props} />;
export const Accordion2MenuChip = (props) => <Chip type="accordion" menuCount={2} {...props} />;
export const Accordion3MenuChip = (props) => <Chip type="accordion" menuCount={3} {...props} />;
export const Accordion4MenuChip = (props) => <Chip type="accordion" menuCount={4} {...props} />;
export const Accordion5MenuChip = (props) => <Chip type="accordion" menuCount={5} {...props} />;
export const AccordionOpenChip = (props) => <Chip type="accordion" state="open" {...props} />;

export const SingleChip = (props) => <Chip type="single" {...props} />;
export const SingleActiveChip = (props) => <Chip type="single" state="active" {...props} />;
export const SingleDefaultChip = (props) => <Chip type="single" state="default" {...props} />;

export default Chip; 