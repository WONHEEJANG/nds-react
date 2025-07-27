import React from 'react';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    /** 툴팁 제목 */
    title?: string;
    /** 툴팁 내용 */
    content: string;
    /** 툴팁 위치 */
    position?: TooltipPosition;
    /** 트리거 요소 */
    children: React.ReactNode;
    /** 트리거 이벤트 */
    trigger?: 'hover' | 'click' | 'focus';
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 지연 시간 (ms) */
    delay?: number;
    /** CSS 클래스명 */
    className?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export interface TooltipButtonProps {
    /** 툴팁 제목 */
    title?: string;
    /** 툴팁 내용 */
    content: string;
    /** 버튼 라벨 (접근성) */
    label?: string;
    /** 툴팁 위치 */
    position?: TooltipPosition;
    /** 트리거 이벤트 */
    trigger?: 'hover' | 'click' | 'focus';
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 지연 시간 (ms) */
    delay?: number;
    /** CSS 클래스명 */
    className?: string;
}
export declare const TooltipButton: React.FC<TooltipButtonProps>;
export default Tooltip;
//# sourceMappingURL=Tooltip.d.ts.map