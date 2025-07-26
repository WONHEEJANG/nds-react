import React, { useState, useRef, useEffect } from 'react';

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

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  placeholder = '선택',
  disabled = false,
  readonly = false,
  error = false,
  info,
  errorMessage,
  variant = 'default',
  onChange,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const selectedOption = options.find(option => option.value === value);
  const hasValue = Boolean(selectedOption);

  // 클릭 외부 감지
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleButtonClick = () => {
    if (disabled || readonly) return;
    setIsOpen(!isOpen);
    setIsFocused(!isOpen);
  };

  const handleOptionClick = (option: SelectOption) => {
    if (option.disabled) return;
    onChange?.(option.value, option);
    setIsOpen(false);
    setIsFocused(false);
  };

  const getSelectClasses = () => {
    const baseClass = 'select';
    const classes = [baseClass];

    if (variant === 'account') classes.push('-account');
    if (variant === 'admin') classes.push('-price');
    if (variant === '2row') classes.push('row-two');
    
    if (hasValue) classes.push('-filled');
    if (isFocused || isOpen) classes.push('-focused');
    if (error) classes.push('-error');
    if (disabled) classes.push('-disabled');
    if (readonly) classes.push('-readonly');

    return classes.join(' ');
  };

  const renderSelectedContent = () => {
    if (!selectedOption) {
      return (
        <span className="fc-empty">
          {placeholder}
        </span>
      );
    }

    switch (variant) {
      case 'account':
        return (
          <div className="selection">
            <div data-bankcode={selectedOption.bankCode} className="info">
              <span className="name">
                <span>{selectedOption.label}</span>
              </span>
              <span className="account-number">
                <span>{selectedOption.bankCode}</span>
                <span>{selectedOption.accountNumber}</span>
              </span>
            </div>
          </div>
        );

      case '2row':
        return (
          <div className="selct-wrap">
            <div className="sub-disc">{selectedOption.description}</div>
            <div className="selct-opt">{selectedOption.label}</div>
          </div>
        );

      default:
        return <span>{selectedOption.label}</span>;
    }
  };

  const renderOptions = () => {
    if (!isOpen) return null;

    return (
      <div className="select-dropdown">
        <ul className="options-list">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={`option ${option.disabled ? 'disabled' : ''} ${value === option.value ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
                disabled={option.disabled}
              >
                {variant === 'account' ? (
                  <div className="selection">
                    <div data-bankcode={option.bankCode} className="info">
                      <span className="name">
                        <span>{option.label}</span>
                      </span>
                      <span className="account-number">
                        <span>{option.bankCode}</span>
                        <span>{option.accountNumber}</span>
                      </span>
                    </div>
                  </div>
                ) : variant === '2row' ? (
                  <div className="selct-wrap">
                    <div className="sub-disc">{option.description}</div>
                    <div className="selct-opt">{option.label}</div>
                  </div>
                ) : (
                  option.label
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={`field ${className}`} ref={selectRef}>
      {label && <label className="label">{label}</label>}
      
      <div className={getSelectClasses()}>
        <button
          ref={buttonRef}
          type="button"
          aria-haspopup="true"
          aria-expanded={isOpen}
          className={!selectedOption ? 'fc-empty' : ''}
          onClick={handleButtonClick}
          disabled={disabled}
        >
          {renderSelectedContent()}
        </button>
        
        {renderOptions()}
      </div>

      {(info || errorMessage) && (
        <div className="text">
          <p className={`info ${error ? '-error' : ''}`}>
            {error && errorMessage ? errorMessage : info}
          </p>
        </div>
      )}
    </div>
  );
};

export default Select;