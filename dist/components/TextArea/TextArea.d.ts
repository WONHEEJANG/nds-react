import React from 'react';
export interface TextAreaProps {
    /** 텍스트에어리어 라벨 */
    label?: string;
    /** 텍스트에어리어 값 */
    value?: string;
    /** 기본값 */
    defaultValue?: string;
    /** 플레이스홀더 텍스트 */
    placeholder?: string;
    /** 최대 문자 수 */
    maxLength?: number;
    /** 최소 행 수 */
    minRows?: number;
    /** 최대 행 수 */
    maxRows?: number;
    /** 비활성화 상태 */
    disabled?: boolean;
    /** 읽기 전용 상태 */
    readonly?: boolean;
    /** 에러 상태 */
    error?: boolean;
    /** 필수 입력 여부 */
    required?: boolean;
    /** 자동 크기 조절 */
    autoResize?: boolean;
    /** 문자 카운트 표시 여부 */
    showCounter?: boolean;
    /** 안내 메시지 */
    info?: string;
    /** 에러 메시지 */
    errorMessage?: string;
    /** 값 변경 시 호출되는 콜백 */
    onChange?: (value: string, event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /** 포커스 시 호출되는 콜백 */
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** 블러 시 호출되는 콜백 */
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    /** CSS 클래스명 */
    className?: string;
    /** HTML id */
    id?: string;
}
export declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
//# sourceMappingURL=TextArea.d.ts.map