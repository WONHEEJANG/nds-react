import React from 'react';
export interface IconProps {
    name: string;
    size?: 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56;
    style?: 'fill' | 'line';
    category?: 'general' | 'system' | 'tabbar';
    color?: string;
    darkMode?: boolean;
    disabled?: boolean;
    className?: string;
    alt?: string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
//# sourceMappingURL=Icon.d.ts.map