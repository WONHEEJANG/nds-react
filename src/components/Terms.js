import React, { useState } from 'react';

const Terms = ({ 
  state = 'close', // close, open
  type = 'required', // required, optional
  title = '[필수] 전체동의',
  terms = [],
  checked = false,
  onToggle,
  onMore,
  onTermToggle,
  onTermMore,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(state === 'open');
  const [isChecked, setIsChecked] = useState(checked);
  const [termStates, setTermStates] = useState(
    terms.reduce((acc, term, index) => {
      acc[index] = term.checked || false;
      return acc;
    }, {})
  );

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    
    // 모든 하위 약관도 함께 토글
    if (type === 'optional') {
      const newTermStates = {};
      terms.forEach((_, index) => {
        newTermStates[index] = newChecked;
      });
      setTermStates(newTermStates);
    }
    
    if (onToggle) {
      onToggle(newChecked);
    }
  };

  const handleMore = () => {
    if (onMore) {
      onMore();
    }
  };

  const handleTermToggle = (index) => {
    const newTermStates = { ...termStates };
    newTermStates[index] = !newTermStates[index];
    setTermStates(newTermStates);
    
    // 모든 하위 약관이 체크되었는지 확인
    const allChecked = Object.values(newTermStates).every(state => state);
    setIsChecked(allChecked);
    
    if (onTermToggle) {
      onTermToggle(index, newTermStates[index]);
    }
  };

  const handleTermMore = (index) => {
    if (onTermMore) {
      onTermMore(index, terms[index]);
    }
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['agree'];
    
    if (isOpen) {
      classes.push('-detail');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  return (
    <div className={getClassName()} {...props}>
      <div className="title">
        <div className="checkbox -sm">
          <input 
            type="checkbox" 
            id={`terms-${Math.random().toString(36).substr(2, 9)}`}
            checked={isChecked}
            onChange={handleToggle}
          />
          <label htmlFor={`terms-${Math.random().toString(36).substr(2, 9)}`}>
            {title}
          </label>
        </div>
        <button type="button" className="more" onClick={handleMore}>
          <span className="hide">약관명</span>
        </button>
      </div>
      
      {isOpen && type === 'optional' && (
        <div className="panel">
          <div className="checkboxes -full">
            {terms.map((term, index) => (
              <div key={term.id || index} className="checkbox -sub">
                <input 
                  type="checkbox" 
                  id={`term-${index}`}
                  checked={termStates[index] || false}
                  onChange={() => handleTermToggle(index)}
                />
                <label htmlFor={`term-${index}`}>
                  {term.title || '약관명을 입력해 주세요'}
                </label>
                <button 
                  type="button" 
                  className="more"
                  onClick={() => handleTermMore(index)}
                >
                  <span className="hide">약관</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const RequiredTerms = (props) => <Terms type="required" {...props} />;
export const OptionalTerms = (props) => <Terms type="optional" {...props} />;

// 상태별 래퍼
export const CloseTerms = (props) => <Terms state="close" {...props} />;
export const OpenTerms = (props) => <Terms state="open" {...props} />;

export default Terms; 