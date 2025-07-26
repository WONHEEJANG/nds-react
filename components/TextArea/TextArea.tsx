import React, { useState, useRef, useEffect } from 'react';

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

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  defaultValue,
  placeholder = '내용을 입력하세요',
  maxLength,
  minRows = 3,
  maxRows,
  disabled = false,
  readonly = false,
  error = false,
  required = false,
  autoResize = false,
  showCounter = false,
  info,
  errorMessage,
  onChange,
  onFocus,
  onBlur,
  className = '',
  id,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue || '');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const hasValue = Boolean(currentValue);
  const currentLength = currentValue.length;

  // 자동 크기 조절
  useEffect(() => {
    if (autoResize && textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      
      const scrollHeight = textarea.scrollHeight;
      const lineHeight = parseInt(getComputedStyle(textarea).lineHeight, 10);
      const minHeight = lineHeight * minRows;
      const maxHeight = maxRows ? lineHeight * maxRows : Infinity;
      
      const newHeight = Math.max(minHeight, Math.min(scrollHeight, maxHeight));
      textarea.style.height = `${newHeight}px`;
    }
  }, [currentValue, autoResize, minRows, maxRows]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    
    // maxLength 체크
    if (maxLength && newValue.length > maxLength) {
      return;
    }

    if (value === undefined) {
      setInternalValue(newValue);
    }
    
    onChange?.(newValue, event);
  };

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const getTextAreaClasses = () => {
    const classes = ['textarea'];
    
    if (hasValue) classes.push('-filled');
    if (isFocused) classes.push('-focused');
    if (error) classes.push('-error');
    if (disabled) classes.push('-disabled');
    if (readonly) classes.push('-readonly');

    return classes.join(' ');
  };

  const getFieldClasses = () => {
    const classes = ['field', 'textfield'];
    
    if (className) classes.push(className);

    return classes.join(' ');
  };

  return (
    <div className={getFieldClasses()}>
      {label && (
        <label htmlFor={id} className="label">
          {label}
          {required && <span className="required" aria-label="필수">*</span>}
        </label>
      )}
      
      <div className={getTextAreaClasses()}>
        <textarea
          ref={textareaRef}
          id={id}
          value={currentValue}
          placeholder={placeholder}
          maxLength={maxLength}
          rows={minRows}
          disabled={disabled}
          readOnly={readonly}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          aria-invalid={error}
          aria-describedby={
            (info || errorMessage) ? `${id}-info` : undefined
          }
        />
        
        {showCounter && maxLength && (
          <div className="text-count">
            <span className={`count ${error ? 'error' : 'point'}`}>
              {currentLength}
            </span>
            <span className="total">{maxLength}</span>
          </div>
        )}
      </div>

      {(info || errorMessage) && (
        <p 
          id={`${id}-info`}
          className={`info ${error ? '-error' : ''}`}
        >
          {error && errorMessage ? errorMessage : info}
        </p>
      )}
    </div>
  );
};

export default TextArea;