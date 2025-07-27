import React from 'react';
export interface CardItem {
    title: string;
    value: string;
}
export interface CardProps {
    variant?: 'account' | 'general' | 'summary' | 'data' | 'etc';
    type?: 'accordion' | 'list' | 'price' | 'detail' | 'input' | 'info' | 'rate' | 'sum' | 'basic' | '2column' | '4column' | 'highlight';
    title?: string;
    subtitle?: string;
    accountNumber?: string;
    bankCode?: string;
    bankName?: string;
    hasAccordion?: boolean;
    defaultExpanded?: boolean;
    items?: CardItem[];
    hiddenItems?: CardItem[];
    children?: React.ReactNode;
    className?: string;
}
export declare const Card: React.FC<CardProps>;
export default Card;
//# sourceMappingURL=Card.d.ts.map