import React from 'react';
export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'lg' | 'md' | 'sm';
    state?: 'true' | 'false' | 'disabled';
    className?: string;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export default Switch;
//# sourceMappingURL=Switch.d.ts.map