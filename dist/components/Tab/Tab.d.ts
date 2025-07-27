import React from 'react';
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
export declare const Tab: React.FC<TabProps>;
export default Tab;
//# sourceMappingURL=Tab.d.ts.map