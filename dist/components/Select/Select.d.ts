import React from 'react';
export interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
    bankCode?: string;
    accountNumber?: string;
    description?: string;
}
export interface SelectProps {
    /** Select 컴포넌트의 라벨 */
    label?: string;
    /** 선택 가능한 옵션들 */
    options: SelectOption[];
    /** 현재 선택된 값 */
    value?: string;
    /** 기본 플레이스홀더 텍스트 */
    placeholder?: string;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readonly?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 안내 메시지 */
    info?: string;
    /** 에러 메시지 */
    errorMessage?: string;
    /** Select 타입 */
    variant?: 'default' | 'account' | 'admin' | '2row';
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string, option: SelectOption) => void;
    /** CSS 클래스명 */
    className?: string;
}
export declare const Select: React.FC<SelectProps>;
export default Select;
//# sourceMappingURL=Select.d.ts.map