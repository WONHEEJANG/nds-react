import React from 'react';
export type DividerType = 'content-8' | 'list-1' | 'list-2' | 'page-1';
export interface DividerProps {
    /** 구분선 타입 */
    type?: DividerType;
    /** 커스텀 CSS 클래스명 */
    className?: string;
    /** 구분선 색상 */
    color?: string;
    /** 구분선 두께 */
    thickness?: string;
    /** 여백 설정 */
    margin?: string;
}
export declare const Divider: React.FC<DividerProps>;
export interface VerticalDividerProps {
    /** 세로 구분선 높이 */
    height?: string;
    /** 구분선 색상 */
    color?: string;
    /** 구분선 두께 */
    thickness?: string;
    /** 여백 설정 */
    margin?: string;
    /** CSS 클래스명 */
    className?: string;
}
export declare const VerticalDivider: React.FC<VerticalDividerProps>;
export default Divider;
//# sourceMappingURL=Divider.d.ts.map