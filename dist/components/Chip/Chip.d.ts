import React from 'react';
export interface ChipProps {
    /** 칩에 표시될 텍스트 */
    children: React.ReactNode;
    /** 삭제 가능한 칩인지 여부 */
    deletable?: boolean;
    /** 활성화 상태 */
    active?: boolean;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 칩 클릭 시 호출되는 콜백 */
    onClick?: () => void;
    /** 삭제 버튼 클릭 시 호출되는 콜백 */
    onDelete?: () => void;
    /** CSS 클래스명 */
    className?: string;
}
export declare const Chip: React.FC<ChipProps>;
export interface ChipGroupProps {
    /** 칩 그룹의 타입 */
    variant?: 'basic' | 'accordion' | 'tab';
    /** 아코디언 타입인 경우 열림/닫힘 상태 */
    isOpen?: boolean;
    /** 메뉴 개수 */
    menuCount?: number;
    /** 더보기 버튼 표시 여부 */
    showMore?: boolean;
    /** 칩들 */
    children: React.ReactNode;
    /** 더보기 버튼 클릭 시 호출되는 콜백 */
    onMoreClick?: () => void;
    /** CSS 클래스명 */
    className?: string;
}
export declare const ChipGroup: React.FC<ChipGroupProps>;
export default Chip;
//# sourceMappingURL=Chip.d.ts.map