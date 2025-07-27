import React, { useState } from 'react';
import './tab.css';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabProps {
  items: TabItem[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  items,
  defaultActiveTab,
  onTabChange,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || items[0]?.id);

  const handleTabClick = (tabId: string) => {
    const tab = items.find(item => item.id === tabId);
    if (tab && !tab.disabled) {
      setActiveTab(tabId);
      onTabChange?.(tabId);
    }
  };

  const activeTabContent = items.find(item => item.id === activeTab)?.content;

  return (
    <>
      <div className={`tabs ${className}`.trim()}>
        <div className="outer">
          <div className="inner">
            <div role="tablist" className="list">
              {items.map((item) => (
                <div 
                  key={item.id} 
                  className={`item ${activeTab === item.id ? '-active' : ''}`.trim()}
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={activeTab === item.id}
                    aria-controls={`tabs-panel-${item.id}`}
                    id={`tab-${item.id}`}
                    disabled={item.disabled}
                    onClick={() => handleTabClick(item.id)}
                  >
                    {item.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="content -wide">
        <div className="tabs-panels">
          {items.map((item) => (
            <div
              key={item.id}
              role="tabpanel"
              aria-labelledby={`tab-${item.id}`}
              id={`tabs-panel-${item.id}`}
              className={`tabs-panel ${activeTab === item.id ? '-active' : ''}`.trim()}
              tabIndex={0}
              style={{ display: activeTab === item.id ? 'block' : 'none' }}
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tab;