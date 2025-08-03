import React, { useState } from 'react';

const Tab = ({ 
  type = 'bar', // bar, chip, line
  variant = 'flexible', // flexible, fixed, accordion
  menuCount = 2, // 2, 3, 4, 5, 6
  menuPosition = 'center', // center, left
  tabs = [],
  activeTab = 0,
  onTabChange,
  className = '',
  ...props
}) => {
  const [activeIndex, setActiveIndex] = useState(activeTab);

  const handleTabClick = (index) => {
    setActiveIndex(index);
    if (onTabChange) {
      onTabChange(index, tabs[index]);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = [];
    
    if (type === 'bar') {
      classes = ['segments', 'tab', '-bar'];
      if (menuCount === 3) {
        classes.push('-triple');
      }
    } else if (type === 'chip') {
      classes = ['subs'];
    } else if (type === 'line') {
      classes = ['segments', 'tab', '-line'];
      if (variant === 'fixed') {
        classes.push('-fixed');
      }
      if (menuPosition === 'left') {
        classes.push('-left');
      }
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Content 클래스명 생성
  const getContentClassName = () => {
    let classes = [];
    
    if (type === 'bar') {
      classes = ['segments-panels'];
    } else if (type === 'chip') {
      classes = ['content', '-wide'];
    } else if (type === 'line') {
      classes = ['segments-panels'];
    }
    
    return classes.join(' ');
  };

  // Panels 클래스명 생성
  const getPanelsClassName = () => {
    let classes = [];
    
    if (type === 'bar') {
      classes = ['segments-panels'];
    } else if (type === 'chip') {
      classes = ['subs-panels'];
    } else if (type === 'line') {
      classes = ['segments-panels'];
    }
    
    return classes.join(' ');
  };

  // Panel 클래스명 생성
  const getPanelClassName = (index) => {
    let classes = [];
    
    if (type === 'bar') {
      classes = ['segments-panel'];
    } else if (type === 'chip') {
      classes = ['subs-panel'];
    } else if (type === 'line') {
      classes = ['segments-panel'];
    }
    
    if (index === activeIndex) {
      classes.push('-active');
    }
    
    return classes.join(' ');
  };

  // Item 클래스명 생성
  const getItemClassName = (index) => {
    let classes = ['item'];
    
    if (index === activeIndex) {
      classes.push('-active');
    }
    
    return classes.join(' ');
  };

  // 기본 탭 데이터 생성
  const defaultTabs = Array.from({ length: menuCount }, (_, i) => ({
    id: `tab-${i}`,
    title: `탭${i + 1}`,
    content: `컨텐츠${i + 1}`
  }));

  const tabItems = tabs.length > 0 ? tabs : defaultTabs;

  return (
    <>
      <div className={getClassName()} {...props}>
        <div className="outer">
          <div className="inner">
            <div role="tablist" className="list">
              {tabItems.map((tab, index) => (
                <div key={tab.id || index} className={getItemClassName(index)}>
                  <button 
                    type="button" 
                    role="tab" 
                    aria-selected={index === activeIndex}
                    aria-controls={`${type === 'bar' ? 'segments' : 'subs'}-panel${index}`}
                    id={`${type === 'bar' ? 'segment' : 'sub'}${index}`}
                    onClick={() => handleTabClick(index)}
                  >
                    {tab.title}
                    {index === activeIndex && <span className="hide">선택됨</span>}
                  </button>
                </div>
              ))}
              <span className="switcher" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>

      <div className={getContentClassName()}>
        <div className={getPanelsClassName()}>
          {tabItems.map((tab, index) => (
            <div 
              key={tab.id || index}
              role="tabpanel" 
              aria-labelledby={`${type === 'bar' ? 'segment' : 'sub'}${index}`}
              id={`${type === 'bar' ? 'segments' : 'subs'}-panel${index}`}
              className={getPanelClassName(index)}
              tabIndex={index === activeIndex ? 0 : -1}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BarTab = (props) => <Tab type="bar" {...props} />;
export const ChipTab = (props) => <Tab type="chip" {...props} />;
export const LineTab = (props) => <Tab type="line" {...props} />;

// 변형별 래퍼
export const FlexibleTab = (props) => <Tab variant="flexible" {...props} />;
export const FixedTab = (props) => <Tab variant="fixed" {...props} />;
export const AccordionTab = (props) => <Tab variant="accordion" {...props} />;

// 메뉴 수별 래퍼
export const TwoMenuTab = (props) => <Tab menuCount={2} {...props} />;
export const ThreeMenuTab = (props) => <Tab menuCount={3} {...props} />;
export const FourMenuTab = (props) => <Tab menuCount={4} {...props} />;
export const FiveMenuTab = (props) => <Tab menuCount={5} {...props} />;
export const SixMenuTab = (props) => <Tab menuCount={6} {...props} />;

// 위치별 래퍼
export const CenterTab = (props) => <Tab menuPosition="center" {...props} />;
export const LeftTab = (props) => <Tab menuPosition="left" {...props} />;

export default Tab; 