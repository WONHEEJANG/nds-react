import React from 'react';
export interface AccordionProps {
    title: string;
    subInfo?: string;
    badge?: string;
    children: React.ReactNode;
    variant?: 'box' | 'graybox' | 'line' | 'notice';
    type?: 'list' | 'text' | 'basic';
    defaultOpen?: boolean;
    className?: string;
}
export declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
//# sourceMappingURL=Accordion.d.ts.map