import React, { useState } from 'react';

const Input = ({ 
  // 기본 props
  type = 'basic', // 12serial, 16serial, address, basic, code, combination, currency, dollar, inner, password, point, price, rrn1, rrn2, rrn3, rrn4, rrn5, rrn6, rrn7, serial, tel, text, textarea
  state = 'inactive', // inactive, filled, focus, error, disabled, readonly, success
  value = '',
  placeholder = '',
  onChange,
  onFocus,
  onBlur,
  className = '',
  
  // Label과 Info props
  label = '레이블',
  info = '안내 문구 입력',
  id,
  
  // 특수 타입 props
  maxLength,
  pattern,
  inputMode,
  autoComplete,
  
  // Serial 타입 props
  serialLength = 12,
  
  // RRN 타입 props
  rrnPart = 1, // 1~7
  
  // Currency/Dollar/Price 타입 props
  currency = 'KRW',
  showCurrency = true,
  
  // Password 타입 props
  showPassword = false,
  onTogglePassword,
  
  // Textarea 타입 props
  rows = 3,
  resize = 'vertical',
  
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const [showPasswordValue, setShowPasswordValue] = useState(showPassword);
  
  // RRN 타입을 위한 상태 (항상 선언)
  const [frontValue, setFrontValue] = useState(inputValue.toString().substring(0, 6));
  const [backValue, setBackValue] = useState(inputValue.toString().substring(6, 13));
  
  // Serial 타입을 위한 상태 (항상 선언)
  const parseSerialValue = (value) => {
    const parts = value.toString().split('-');
    return {
      part1: parts[0] || '',
      part2: parts[1] || '',
      part3: parts[2] || '',
      part4: parts[3] || ''
    };
  };

  const serialParts = parseSerialValue(inputValue);
  const [part1, setPart1] = useState(serialParts.part1);
  const [part2, setPart2] = useState(serialParts.part2);
  const [part3, setPart3] = useState(serialParts.part3);
  const [part4, setPart4] = useState(serialParts.part4);

  // Unit2 타입을 위한 상태 (항상 선언)
  const [dong, setDong] = useState(inputValue.toString().split('-')[0] || '');
  const [ho, setHo] = useState(inputValue.toString().split('-')[1] || '');

  // 클래스명 생성
  const getClassName = () => {
    let className = 'input';
    
    // 타입별 클래스
    if (type === '12serial') {
      className += ' -12serial';
    } else if (type === '16serial') {
      className += ' -16serial';
    } else if (type === 'address') {
      className += ' -address';
    } else if (type === 'basic') {
      className += ' -basic';
    } else if (type === 'code') {
      className += ' -code';
    } else if (type === 'combination') {
      className += ' -combination';
    } else if (type === 'currency') {
      className += ' -currency';
    } else if (type === 'dollar') {
      className += ' -dollar';
    } else if (type === 'inner') {
      className += ' -inner';
    } else if (type === 'password') {
      className += ' -password';
    } else if (type === 'point') {
      className += ' -point';
    } else if (type === 'price') {
      className += ' -price';
    } else if (type === 'unit1') { // Added for Unit1
      className += ' -unit1';
    } else if (type === 'unit3') { // Added for Unit3
      className += ' -unit3';
    } else if (type.startsWith('rrn')) {
      className += ` -${type}`;
    } else if (type === 'serial') {
      className += ' -serial';
    } else if (type === 'tel') {
      className += ' -tel';
    } else if (type === 'text') {
      className += ' -text';
    } else if (type === 'textarea') {
      className += ' -textarea';
    }
    
    // 상태별 클래스
    if (state === 'filled' || inputValue) {
      className += ' -filled';
    } else if (state === 'focus' || isFocused) {
      className += ' -focus';
    } else if (state === 'error') {
      className += ' -error';
    } else if (state === 'disabled') {
      className += ' -disabled';
    } else if (state === 'readonly') {
      className += ' -readonly';
    } else if (state === 'success') {
      className += ' -success';
    }
    
    return className;
  };

  // 입력값 변경 처리
  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    if (onChange) {
      onChange(newValue, e);
    }
  };

  // 포커스 처리
  const handleFocus = (e) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e);
    }
  };

  // 블러 처리
  const handleBlur = (e) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(e);
    }
  };

  // 패스워드 토글
  const handleTogglePassword = () => {
    setShowPasswordValue(!showPasswordValue);
    if (onTogglePassword) {
      onTogglePassword(!showPasswordValue);
    }
  };

  // 입력 타입 결정
  const getInputType = () => {
    if (type === 'password') {
      return showPasswordValue ? 'text' : 'password';
    } else if (type === 'tel') {
      return 'tel';
    } else if (type === 'textarea') {
      return 'textarea';
    }
    return 'text';
  };

  // 플레이스홀더 생성
  const getPlaceholder = () => {
    if (placeholder) return placeholder;
    
    switch (type) {
      case '12serial':
      case '16serial':
        return '시리얼 번호 입력';
      case 'address':
        return '주소 입력';
      case 'code':
        return '코드 입력';
      case 'combination':
        return '조합 입력';
      case 'currency':
        return '금액 입력';
      case 'dollar':
        return '달러 입력';
      case 'inner':
        return '내용 입력';
      case 'password':
        return '비밀번호 입력';
      case 'point':
        return '포인트 입력';
      case 'price':
        return '가격 입력';
      case 'rrn1':
      case 'rrn2':
      case 'rrn3':
      case 'rrn4':
      case 'rrn5':
      case 'rrn6':
      case 'rrn7':
        return '주민번호 입력';
      case 'serial':
        return '시리얼 입력';
      case 'tel':
        return '전화번호 입력';
      case 'text':
        return '텍스트 입력';
      case 'textarea':
        return '내용을 입력하세요';
      default:
        return '입력';
    }
  };

  // 최대 길이 결정
  const getMaxLength = () => {
    if (maxLength) return maxLength;
    
    switch (type) {
      case '12serial':
        return 12;
      case '16serial':
        return 16;
      case 'rrn1':
      case 'rrn2':
      case 'rrn3':
      case 'rrn4':
      case 'rrn5':
      case 'rrn6':
      case 'rrn7':
        return 6;
      case 'tel':
        return 13;
      default:
        return undefined;
    }
  };

  // 패턴 결정
  const getPattern = () => {
    if (pattern) return pattern;
    
    switch (type) {
      case '12serial':
      case '16serial':
        return '[0-9]*';
      case 'tel':
        return '[0-9-]*';
      case 'rrn1':
      case 'rrn2':
      case 'rrn3':
      case 'rrn4':
      case 'rrn5':
      case 'rrn6':
      case 'rrn7':
        return '[0-9]*';
      default:
        return undefined;
    }
  };

  // 입력 모드 결정
  const getInputMode = () => {
    if (inputMode) return inputMode;
    
    switch (type) {
      case '12serial':
      case '16serial':
      case 'rrn1':
      case 'rrn2':
      case 'rrn3':
      case 'rrn4':
      case 'rrn5':
      case 'rrn6':
      case 'rrn7':
      case 'tel':
        return 'numeric';
      default:
        return 'text';
    }
  };

  // RRN 타입을 위한 핸들러들
  const handleFrontChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 6);
    setFrontValue(value);
    if (onChange) {
      onChange(`${value}-${backValue}`);
    }
  };

  const handleBackChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').slice(0, 7);
    setBackValue(value);
    if (onChange) {
      onChange(`${frontValue}-${value}`);
    }
  };

  // Textarea 렌더링
  if (type === 'textarea') {
    return (
      <div className={getClassName()}>
        <textarea
          value={inputValue}
          placeholder={getPlaceholder()}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
          style={{ resize }}
          disabled={state === 'disabled'}
          readOnly={state === 'readonly'}
          {...props}
        />
      </div>
    );
  }

  // Line Input 타입들을 위한 별도 렌더링
  const isLineInput = className.includes('line');
  
  if (isLineInput) {
    // Line Input - Basic
    if (type === 'basic') {
      return (
        <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
          <label htmlFor={id || 'input'} className="label mb-8 -readonly -disabled">{label}</label>
          <div className="text line -basic">
            <input
              id={id || 'input'}
              type={getInputType()}
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <p className="info">{info}</p>
          </div>
        </div>
      );
    }

    // Line Input - Combination
    if (type === 'combination') {
      return (
        <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
          <label htmlFor={id || 'combination'} className="label">{label}</label>
          <div className="mix phone">
            <div className="select line flex-5">
              <button type="button" className="left-side" aria-haspopup="true" title="휴대폰 앞자리 선택">
                {inputValue ? '010' : '선택'}
              </button>
            </div>
            <div className="text line flex-7 -readonly -textless" data-clear="false">
              <input
                id={id || 'combination'}
                type="tel"
                className="mid-side num-call pl-8"
                value={inputValue}
                placeholder="-없이 입력"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={getMaxLength()}
                pattern={getPattern()}
                inputMode={getInputMode()}
                autoComplete={autoComplete}
                disabled={state === 'disabled'}
                readOnly={state === 'readonly'}
                {...props}
              />
            </div>
            <div className="space line flex-3 right-side">
              <button type="button" className="button -tertiary -sm -fit" title="인증번호 요청">버튼</button>
            </div>
          </div>
          <p className="info">{info}</p>
        </div>
      );
    }

    // Line Input - Password
    if (type === 'password') {
      return (
        <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
          <label htmlFor={id || 'password'} className="label">{label}</label>
          <div className="mix">
            <div className="text -password line flex-7" data-clear="false">
              <input
                id={id || 'password'}
                type={showPasswordValue ? 'text' : 'password'}
                className="mid-side num-call pl-8"
                value={inputValue}
                placeholder={getPlaceholder()}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                maxLength={getMaxLength()}
                pattern={getPattern()}
                inputMode={getInputMode()}
                autoComplete={autoComplete}
                disabled={state === 'disabled'}
                readOnly={state === 'readonly'}
                {...props}
              />
            </div>
            <div className="space line flex-3 right-side">
              <button type="button" className="button -tertiary -sm -fit" title="버튼 title">버튼</button>
            </div>
          </div>
          <p className="info">{info}</p>
        </div>
      );
    }

    // Line Input - Price
    if (type === 'price') {
      return (
        <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
          <label htmlFor={id || 'price'} className="label">{label}</label>
          <div className="text line -won">
            <input
              id={id || 'price'}
              type="tel"
              className="right"
              value={inputValue ? `${inputValue}원` : ''}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <p className="info">{info}</p>
          </div>
        </div>
      );
    }

    // Line Input - RRN
    if (type.startsWith('rrn')) {
      return (
        <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
          <label htmlFor={id || 'rrn'} className="label mb-8 multi-label">{label}</label>
          <div className="mix rrn">
            <div className="text line flex-4" data-clear="false">
              <input
                type="tel"
                className="left-side num-call"
                id={id || 'rrn'}
                placeholder="앞 6자리"
                title="주민등록번호 앞자리"
                aria-haspopup="true"
                value={frontValue}
                maxLength={6}
                onChange={handleFrontChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={state === 'disabled'}
                readOnly={state === 'readonly'}
                {...props}
              />
            </div>
            <div className="dash line">-</div>
            <div className="text line flex-7" data-clear="false">
              <input
                type="password"
                data-id={id || 'rrn'}
                className="mid-side num-call pl-4"
                placeholder="뒤 7자리"
                title="주민등록번호 뒷자리"
                aria-haspopup="true"
                value={backValue}
                maxLength={7}
                onChange={handleBackChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                disabled={state === 'disabled'}
                readOnly={state === 'readonly'}
                {...props}
              />
              <button className="clear" type="button" style={{zIndex: -1}}>
                <div className="hide">초기화</div>
              </button>
            </div>
            <div className="space line flex-3 right-side">
              <button type="button" className="button -xs -fit">인증</button>
            </div>
            <p className="info">{info}</p>
          </div>
        </div>
      );
    }

    // Line Input - Unit
    if (type === 'unit1') {
      return (
        <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
          <label htmlFor={id || 'unit'} className="label">{label}</label>
          <div className="text line -percent">
            <input
              id={id || 'unit'}
              type="tel"
              className="right"
              value={inputValue ? `${inputValue}%` : ''}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <p className="info">{info}</p>
          </div>
        </div>
      );
    }
  }

  // Price 타입 렌더링
  if (type === 'price') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'input'} className="label">{label}</label>
        <div className="mix price-won">
          <div className="text -won">
            <input
              id={id || 'input'}
              type="tel"
              className="right"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <div className="won">원</div>
          </div>
          <p className="info">{info}</p>
        </div>
      </div>
    );
  }

  // Unit1 (Percent) 타입 렌더링
  if (type === 'unit1') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'input'} className="label">{label}</label>
        <div className="mix unit1">
          <div className="text -percent">
            <input
              id={id || 'input'}
              type="tel"
              className="right num-call"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <div className="percent">%</div>
          </div>
          <p className="info">{info}</p>
        </div>
      </div>
    );
  }

  // RRN 타입 렌더링 (주민등록번호)
  if (type.startsWith('rrn')) {
    
    const handleFrontChange = (e) => {
      const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 6);
      setFrontValue(value);
      setInputValue(value + backValue);
      if (onChange) onChange({ target: { value: value + backValue } });
    };
    
    const handleBackChange = (e) => {
      const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 7);
      setBackValue(value);
      setInputValue(frontValue + value);
      if (onChange) onChange({ target: { value: frontValue + value } });
    };

    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'rrn'} className="label multi-label">{label}</label>
        <div className="mix rrn">
          <div className="text flex-1" data-clear="false">
            <input
              type="tel"
              id={id || 'rrn'}
              title="주민등록번호 앞자리"
              placeholder="앞 6자리"
              className="space-r"
              value={frontValue}
              maxLength={6}
              onChange={handleFrontChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="dash">-</div>
          <div className="text flex-1" data-clear="false">
            <input
              type="password"
              className="right-side num-call pl-0"
              data-id={id || 'rrn'}
              placeholder="뒤 7자리"
              title="주민등록번호 뒷자리"
              aria-haspopup="true"
              value={backValue}
              maxLength={7}
              onChange={handleBackChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <p className="info">{info}</p>
        </div>
      </div>
    );
  }

  // Serial 타입을 위한 핸들러들
  const handlePart1Change = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 4);
    setPart1(value);
    if (type === 'serial') {
      const serialValue = `${value}-${part2}-${part3}`;
      setInputValue(serialValue);
      if (onChange) onChange({ target: { value: serialValue } });
    } else if (type === '16serial') {
      const serialValue = `${value}-${part2}-${part3}-${part4}`;
      setInputValue(serialValue);
      if (onChange) onChange({ target: { value: serialValue } });
    }
  };
  
  const handlePart2Change = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 4);
    setPart2(value);
    if (type === 'serial') {
      const serialValue = `${part1}-${value}-${part3}`;
      setInputValue(serialValue);
      if (onChange) onChange({ target: { value: serialValue } });
    } else if (type === '16serial') {
      const serialValue = `${part1}-${value}-${part3}-${part4}`;
      setInputValue(serialValue);
      if (onChange) onChange({ target: { value: serialValue } });
    }
  };
  
  const handlePart3Change = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 4);
    setPart3(value);
    if (type === 'serial') {
      const serialValue = `${part1}-${part2}-${value}`;
      setInputValue(serialValue);
      if (onChange) onChange({ target: { value: serialValue } });
    } else if (type === '16serial') {
      const serialValue = `${part1}-${part2}-${value}-${part4}`;
      setInputValue(serialValue);
      if (onChange) onChange({ target: { value: serialValue } });
    }
  };

  const handlePart4Change = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, '').substring(0, 4);
    setPart4(value);
    const serialValue = `${part1}-${part2}-${part3}-${value}`;
    setInputValue(serialValue);
    if (onChange) onChange({ target: { value: serialValue } });
  };

  // Serial 타입 렌더링 (일련번호)
  if (type === 'serial') {
    return (
      <div className={`field serial ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'serial'} className="label multi-label">{label}</label>
        <div className="mix id-number">
          <div className="text flex-4" data-clear="false">
            <input
              type="text"
              className="left-side num-call"
              id={id || 'serial'}
              value={part1}
              placeholder="4자리"
              maxLength={4}
              title="첫번재 일련번호 4자리"
              aria-haspopup="true"
              onChange={handlePart1Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="dash">-</div>
          <div className="text flex-3" data-clear="false">
            <input
              type="text"
              className="mid-side num-call"
              id={id || 'serial'}
              value={part2}
              placeholder="4자리"
              title="두번재 일련번호 4자리"
              maxLength={4}
              aria-haspopup="true"
              onChange={handlePart2Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="dash">-</div>
          <div className="text flex-4" data-clear="false">
            <input
              type="text"
              className="right-side num-call"
              data-id={id || 'serial'}
              value={part3}
              placeholder="4자리"
              title="세번재 일련번호 4자리"
              maxLength={4}
              aria-haspopup="true"
              onChange={handlePart3Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
        </div>
        <p className={`info ${state === 'error' ? '-error' : ''}`}>{info}</p>
      </div>
    );
  }

  // 16자리 Serial 타입 렌더링 (일련번호)
  if (type === '16serial') {
    return (
      <div className={`field serial ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || '16serial'} className="label multi-label">{label}</label>
        <div className="mix id-number">
          <div className="text flex-4" data-clear="false">
            <input
              type="text"
              className="left-side num-call"
              id={id || '16serial'}
              value={part1}
              placeholder="4자리"
              maxLength={4}
              title="첫번재 일련번호 4자리"
              aria-haspopup="true"
              onChange={handlePart1Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="dash">-</div>
          <div className="text flex-3" data-clear="false">
            <input
              type="text"
              className="mid-side num-call"
              id={id || '16serial'}
              value={part2}
              placeholder="4자리"
              title="두번재 일련번호 4자리"
              maxLength={4}
              aria-haspopup="true"
              onChange={handlePart2Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="dash">-</div>
          <div className="text flex-3" data-clear="false">
            <input
              type="text"
              className="mid-side num-call"
              id={id || '16serial'}
              value={part3}
              placeholder="4자리"
              title="세번재 일련번호 4자리"
              maxLength={4}
              aria-haspopup="true"
              onChange={handlePart3Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="dash">-</div>
          <div className="text flex-4" data-clear="false">
            <input
              type="text"
              className="right-side num-call"
              data-id={id || '16serial'}
              value={part4}
              placeholder="4자리"
              title="네번재 일련번호 4자리"
              maxLength={4}
              aria-haspopup="true"
              onChange={handlePart4Change}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
        </div>
        <p className={`info ${state === 'error' ? '-error' : ''}`}>{info}</p>
      </div>
    );
  }

  // Unit2 (Address) 타입 렌더링 (동/호)
  if (type === 'unit2') {
    
    const handleDongChange = (e) => {
      const value = e.target.value;
      setDong(value);
      setInputValue(value + (ho ? '-' + ho : ''));
      if (onChange) onChange({ target: { value: value + (ho ? '-' + ho : '') } });
    };
    
    const handleHoChange = (e) => {
      const value = e.target.value;
      setHo(value);
      setInputValue(dong + (value ? '-' + value : ''));
      if (onChange) onChange({ target: { value: dong + (value ? '-' + value : '') } });
    };

    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'unit2'} className="label">{label}</label>
        <div className="mix -unit2">
          <div className="text address-1" data-clear="false">
            <input
              type="text"
              data-id={id || 'unit2'}
              value={dong}
              title="동"
              placeholder="입력"
              onChange={handleDongChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="text address-2" data-clear="false">
            <input
              type="text"
              data-id={id || 'unit2'}
              value={ho}
              title="호"
              placeholder="입력"
              onChange={handleHoChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  // Unit3 (양수/음수) 타입 렌더링
  if (type === 'unit3') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'unit3'} className="label">{label}</label>
        <div className="mix unit3">
          <div className="plus-minus">
            <div className="plus">
              <input type="radio" name="plus-minus" id="plus" className="hide" />
              <label htmlFor="plus"><span className="hide">양수</span></label>
            </div>
          </div>
          <div className="text -unit" data-clear="false">
            <input
              id={id || 'unit3'}
              type="tel"
              className="left-right pr-0"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="space -lined">%</div>
        </div>
        <p className={`info ${state === 'error' ? '-error' : ''}`}>{info}</p>
      </div>
    );
  }

  // Code (인증번호) 타입 렌더링
  if (type === 'code') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'code'} className="label -readonly -textless">{label}</label>
        <div className="mix code">
          <div className="text flex-8 -readonly -textless" data-clear="false">
            <input
              id={id || 'code'}
              type="tel"
              className="left-side num-call"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="space -lined mid-side time-limit">
            <span aria-live="assertive">3:30</span>
          </div>
          <div className="space -lined right-side">
            <button type="button" className="button -xs -fit">시간 연장</button>
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  // Combination (휴대폰번호) 타입 렌더링
  if (type === 'combination') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'combination'} className="label -readonly -textless">{label}</label>
        <div className="mix phone">
          <div className="select flex-5">
            <button type="button" className="left-side" aria-haspopup="true" title="휴대폰 앞자리 선택">010</button>
          </div>
          <div className="text flex-7 -readonly -textless" data-clear="false">
            <input
              id={id || 'combination'}
              type="tel"
              className="mid-side num-call pl-8"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
          <div className="space flex-3 -lined right-side">
            <button type="button" className="button -tertiary -sm -fit" title="인증번호 요청">버튼</button>
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  // Currency (외화) 타입 렌더링
  if (type === 'currency') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'currency'} className="label -readonly">{label}</label>
        <div className="mix currency">
          <div className="select flex-5">
            <button type="button" className="left-side" aria-haspopup="true" title="통화 선택">USD</button>
          </div>
          <div className="text flex-9 -readonly -textless" data-clear="false">
            <input
              id={id || 'currency'}
              type="tel"
              className="right-side num-call pl-12 right"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  // Dollar (달러) 타입 렌더링
  if (type === 'dollar') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'dollar'} className="label">{label}</label>
        <div className="mix dollar combi">
          <div className="left-space flex-2">
            <div className="left-side" aria-haspopup="true" title="통화 선택">USD</div>
          </div>
          <div className="text flex-8 -plh-right comb-del" data-clear="false">
            <input
              id={id || 'dollar'}
              type="tel"
              className="right-side num-call right"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <button className="clear" type="button" style={{zIndex: -1}}>
              <div className="hide">입력 내용 삭제</div>
            </button>
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  // Inner (내부) 타입 렌더링
  if (type === 'inner') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'inner'} className="label">{label}</label>
        <div className="mix code">
          <div className="text flex-8 -readonly" data-clear="false">
            <input
              id={id || 'inner'}
              type="tel"
              className="left-side"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <button className="clear" type="button">
              <div className="hide">입력 내용 삭제</div>
            </button>
          </div>
          <div className="space -lined right-side">
            <button type="button" className="button -xs -fit">버튼</button> 
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  // Point (포인트) 타입 렌더링
  if (type === 'point') {
    return (
      <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''}`}>
        <label htmlFor={id || 'point'} className="label">{label}</label>
        <div className="mix dollar combi">
          <div className="left-space flex-2">
            <div className="left-side" aria-haspopup="true" title="통화 선택">USD</div>
          </div>
          <div className="text flex-8 -plh-right comb-del" data-clear="false">
            <input
              id={id || 'point'}
              type="tel"
              className="right-side num-call right"
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
            <button className="clear" type="button" style={{zIndex: -1}}>
              <div className="hide">입력 내용 삭제</div>
            </button>
          </div>
        </div>
        <p className="info">{info}</p>
      </div>
    );
  }

  return (
    <div className={`field input ${state === 'error' ? '-error' : ''} ${state === 'focus' || isFocused ? '-focused' : ''} ${state === 'success' ? '-success' : ''}`}>
      <label htmlFor={id || 'input'} className="label">{label}</label>
      <div className={`text ${getClassName()} ${className}`}>
        {state === 'success' ? (
          <div className="verify">
            <input
              id={id || 'input'}
              type={getInputType()}
              value={inputValue}
              placeholder={getPlaceholder()}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              maxLength={getMaxLength()}
              pattern={getPattern()}
              inputMode={getInputMode()}
              autoComplete={autoComplete}
              disabled={state === 'disabled'}
              readOnly={state === 'readonly'}
              {...props}
            />
          </div>
        ) : (
          <input
            id={id || 'input'}
            type={getInputType()}
            value={inputValue}
            placeholder={getPlaceholder()}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            maxLength={getMaxLength()}
            pattern={getPattern()}
            inputMode={getInputMode()}
            autoComplete={autoComplete}
            disabled={state === 'disabled'}
            readOnly={state === 'readonly'}
            {...props}
          />
        )}
        <p className="info">{info}</p>
      </div>
    </div>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const Serial12Input = (props) => <Input type="12serial" {...props} />;
export const Serial16Input = (props) => <Input type="16serial" {...props} />;
export const AddressInput = (props) => <Input type="address" {...props} />;
export const BasicInput = (props) => <Input type="basic" {...props} />;
export const CodeInput = (props) => <Input type="code" {...props} />;
export const CombinationInput = (props) => <Input type="combination" {...props} />;
export const CurrencyInput = (props) => <Input type="currency" {...props} />;
export const DollarInput = (props) => <Input type="dollar" {...props} />;
export const InnerInput = (props) => <Input type="inner" {...props} />;
export const PasswordInput = (props) => <Input type="password" {...props} />;
export const PointInput = (props) => <Input type="point" {...props} />;
export const PriceInput = (props) => <Input type="price" {...props} />;
export const RRN1Input = (props) => <Input type="rrn1" {...props} />;
export const RRN2Input = (props) => <Input type="rrn2" {...props} />;
export const RRN3Input = (props) => <Input type="rrn3" {...props} />;
export const RRN4Input = (props) => <Input type="rrn4" {...props} />;
export const RRN5Input = (props) => <Input type="rrn5" {...props} />;
export const RRN6Input = (props) => <Input type="rrn6" {...props} />;
export const RRN7Input = (props) => <Input type="rrn7" {...props} />;
export const SerialInput = (props) => <Input type="serial" {...props} />;
export const TelInput = (props) => <Input type="tel" {...props} />;
export const TextInput = (props) => <Input type="text" {...props} />;
export const TextareaInput = (props) => <Input type="textarea" {...props} />;
export const Unit1Input = (props) => <Input type="unit1" {...props} />; // Added for Unit1
export const Unit2Input = (props) => <Input type="unit2" {...props} />; // Added for Unit2
export const Unit3Input = (props) => <Input type="unit3" {...props} />; // Added for Unit3

// 상태별 래퍼
export const InputFilled = (props) => <Input state="filled" {...props} />;
export const InputFocus = (props) => <Input state="focus" {...props} />;
export const InputError = (props) => <Input state="error" {...props} />;
export const InputDisabled = (props) => <Input state="disabled" {...props} />;
export const InputReadonly = (props) => <Input state="readonly" {...props} />;
export const InputSuccess = (props) => <Input state="success" {...props} />;

export default Input; 