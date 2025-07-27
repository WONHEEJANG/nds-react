import React from 'react';
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'sm' | 'lg';
    variant?: 'basic' | 'box' | 'survey';
    state?: 'default' | 'disabled' | 'selected' | 'error';
    className?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export default Radio;
//# sourceMappingURL=Radio.d.ts.map