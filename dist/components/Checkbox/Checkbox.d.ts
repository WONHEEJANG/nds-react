import React from 'react';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'xs' | 'sm' | 'lg';
    variant?: 'basic' | 'box' | 'survey';
    state?: 'default' | 'disabled' | 'selected' | 'select-disabled' | 'error';
    className?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export default Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map