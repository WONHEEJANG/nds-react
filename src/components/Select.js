import React, { useState } from 'react';

const Select = ({ 
  type = 'basic', // 2row, account, admin, bank, basic, currency, icon, list, price
  state = 'inactive', // inactive, filled, focus, disabled, error, readonly
  label = '레이블',
  placeholder = '선택',
  selectedValue = '',
  subDescription = '',
  info = '안내 문구 입력',
  accountInfo,
  bankInfo,
  adminInfo,
  currencyInfo,
  priceInfo,
  listItems = [],
  onSelect,
  onOpen,
  className = '',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (state === 'disabled' || state === 'readonly') return;
    
    setIsOpen(!isOpen);
    if (onOpen) {
      onOpen(!isOpen);
    }
  };

  const handleSelect = (value) => {
    if (onSelect) {
      onSelect(value);
    }
    setIsOpen(false);
  };

  // 클래스명 생성
  const getClassName = () => {
    let classes = ['field'];
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  // Select 클래스명 생성
  const getSelectClassName = () => {
    let classes = ['select'];
    
    if (type === '2row') {
      classes.push('row-two');
    } else if (type === 'account') {
      classes.push('-account');
    } else if (type === 'admin') {
      classes.push('-price'); // admin은 -price 사용
    } else if (type === 'bank') {
      classes.push('-account'); // bank는 -account 사용
    } else if (type === 'basic') {
      classes.push('-basic');
    } else if (type === 'currency') {
      classes.push('-currency');
    } else if (type === 'icon') {
      classes.push('-levels'); // icon은 -levels 사용
    } else if (type === 'list') {
      classes.push('-list');
    } else if (type === 'price') {
      classes.push('-price');
    }
    
    if (state === 'filled' || selectedValue) {
      classes.push('-filled');
    }
    
    if (state === 'focus' || isOpen) {
      classes.push('-focused');
    }
    
    if (state === 'disabled') {
      classes.push('-disabled');
    }
    
    if (state === 'error') {
      classes.push('-error');
    }
    
    if (state === 'readonly') {
      classes.push('-readonly');
    }
    
    return classes.join(' ');
  };

  // Button 클래스명 생성
  const getButtonClassName = () => {
    let classes = [];
    
    if (type === '2row') {
      classes.push('fc-empty', 'selct-wrap');
    } else if (type === 'account' || type === 'bank') {
      // account/bank는 기본 클래스 없음
    } else if (type === 'admin') {
      // admin은 복잡한 구조
    } else if (type === 'basic') {
      if (!selectedValue && state !== 'filled') {
        classes.push('fc-empty');
      }
    } else if (type === 'currency') {
      if (!selectedValue && state !== 'filled') {
        classes.push('select-phl');
      }
    } else if (type === 'icon') {
      classes.push('title');
      if (!selectedValue && state !== 'filled') {
        classes.push('fc-empty');
      }
    } else if (type === 'list') {
      if (selectedValue) {
        classes.push('-fixed');
      } else {
        classes.push('fc-empty');
      }
    } else if (type === 'price') {
      if (selectedValue) {
        classes.push('-fixed');
      } else {
        classes.push('fc-empty');
      }
    }
    
    return classes.join(' ');
  };

  // Info 클래스명 생성
  const getInfoClassName = () => {
    let classes = ['info'];
    
    if (state === 'error') {
      classes.push('-error', 'red');
    }
    
    return classes.join(' ');
  };

  // Account 타입 렌더링
  const renderAccountContent = () => {
    if (accountInfo) {
      return (
        <div className="selection">
          <div data-bankcode={accountInfo.bankCode} className="info">
            <span className="name">
              <span>{accountInfo.accountName}</span>
            </span>
            <span className="account-number">
              <span>{accountInfo.bankName}</span>
              <span>{accountInfo.accountNumber}</span>
            </span>
          </div>
        </div>
      );
    }
    return placeholder;
  };

  // Bank 타입 렌더링
  const renderBankContent = () => {
    if (bankInfo) {
      return (
        <div className="selection">
          <div data-bankcode={bankInfo.bankCode} className="info">
            <span className="name">{bankInfo.bankName}</span>
          </div>
        </div>
      );
    }
    return placeholder;
  };

  // Admin 타입 렌더링
  const renderAdminContent = () => {
    if (adminInfo) {
      return (
        <div className="account card -comb">
          <div className="dot-menu">
            <button type="button" className="button">
              <span className="hide">더보기</span>
            </button>
          </div>
          <div className="selection">
            <button type="button" aria-haspopup="true" data-bankcode={adminInfo.bankCode} className="info">
              <span className="name">
                <span>{adminInfo.name}</span>
              </span>
              <span className="account-number">
                <span className="select-btn">{adminInfo.accountNumber}</span>
              </span>
            </button>
            <div className="amount mix-charge">
              <div>
                <button type="button" className="button -tertiary -xs">잔액채우기</button>
              </div>
              <div>
                <div className="key">금액</div>
                <div className="value">
                  <span>
                    <button type="button" className="refresh"><span className="hide">새로고침</span></button>
                    {adminInfo.amount}
                  </span>원
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return placeholder;
  };

  // Currency 타입 렌더링
  const renderCurrencyContent = () => {
    if (currencyInfo) {
      return (
        <span data-countrycode={currencyInfo.countryCode} className="-sm"></span>
      );
    }
    return placeholder;
  };

  // Price 타입 렌더링
  const renderPriceContent = () => {
    if (priceInfo) {
      return (
        <div className="button-type -fixed">
          <div className="selection">
            <button type="button" aria-haspopup="true" data-bankcode={priceInfo.bankCode} className="info">
              <span className="name">
                <span>{priceInfo.accountName}</span>
              </span>
              <span className="account-number">
                <span>{priceInfo.bankName}</span>
                <span>{priceInfo.accountNumber}</span>
              </span>
            </button>
            <div className="amount">
              <div className="key">출금가능금액</div>
              <div className="value">
                <span>
                  <button type="button" className="refresh"><span className="hide">새로고침</span></button>
                  {priceInfo.amount}
                </span>원
              </div>
            </div>
          </div>
        </div>
      );
    }
    return placeholder;
  };

  // 2row 타입 렌더링
  const render2RowContent = () => {
    if (selectedValue) {
      return (
        <>
          <div className="sub-disc">{subDescription}</div>
          <div className="selct-opt">{selectedValue}</div>
        </>
      );
    }
    return (
      <>
        <div className="sub-disc">{subDescription}</div>
        <div className="selct-opt">{placeholder}</div>
      </>
    );
  };

  // Icon 타입 렌더링
  const renderIconContent = () => {
    return (
      <>
        {selectedValue || placeholder}
        <span className="grade1-icon"></span>
      </>
    );
  };

  // List 타입 렌더링
  const renderListContent = () => {
    if (listItems && listItems.length > 0) {
      return (
        <div className="selection">
          <div data-bankcode={listItems[0].bankCode} className="info">
            <span className="name">
              <span>{listItems[0].accountName}</span>
            </span>
            <span className="account-number">
              <span>{listItems[0].bankName}</span>
              <span>{listItems[0].accountNumber}</span>
            </span>
          </div>
          <dl className="dl">
            {listItems.map((item, index) => (
              <div key={index}>
                <dt>{item.title}</dt>
                <dd>{item.content}</dd>
              </div>
            ))}
          </dl>
        </div>
      );
    }
    return placeholder;
  };

  // 기본 타입 렌더링
  const renderBasicContent = () => {
    return selectedValue || placeholder;
  };

  // 컨텐츠 렌더링
  const renderContent = () => {
    switch (type) {
      case '2row':
        return render2RowContent();
      case 'account':
        return renderAccountContent();
      case 'admin':
        return renderAdminContent();
      case 'bank':
        return renderBankContent();
      case 'currency':
        return renderCurrencyContent();
      case 'icon':
        return renderIconContent();
      case 'list':
        return renderListContent();
      case 'price':
        return renderPriceContent();
      default:
        return renderBasicContent();
    }
  };

  // 특별한 구조가 필요한 타입들
  const needsSpecialStructure = ['admin', 'price', 'list'];
  
  if (needsSpecialStructure.includes(type)) {
    return (
      <div className={getClassName()} {...props}>
        <p className="label">{label}</p>
        <div className={getSelectClassName()}>
          {renderContent()}
        </div>
        <div className="text">
          <p className={getInfoClassName()}>{info}</p>
        </div>
      </div>
    );
  }

  // Currency 타입은 mix 래퍼가 필요
  if (type === 'currency') {
    return (
      <div className={getClassName()} {...props}>
        <label htmlFor="currency-select" className="label">{label}</label>
        <div className="mix">
          <div className={getSelectClassName()}>
            <button 
              type="button" 
              aria-haspopup="true" 
              title="통화 선택"
              className={getButtonClassName()}
              onClick={handleClick}
              disabled={state === 'disabled'}
            >
              {renderContent()}
            </button>
            <p className={getInfoClassName()}>{info}</p>
          </div>
        </div>
      </div>
    );
  }

  // Icon 타입은 type-wrap이 필요
  if (type === 'icon') {
    return (
      <div className="field type-wrap" {...props}>
        <label htmlFor="icon-select" className="label">{label}</label>
        <div className={getSelectClassName()}>
          <button 
            type="button" 
            aria-haspopup="true" 
            className={getButtonClassName()}
            onClick={handleClick}
            disabled={state === 'disabled'}
          >
            {renderContent()}
          </button>
          <p className={getInfoClassName()}>{info}</p>
        </div>
      </div>
    );
  }

  // 기본 구조
  return (
    <div className={getClassName()} {...props}>
      <p className="label">{label}</p>
      <div className={getSelectClassName()}>
        <button 
          type="button" 
          aria-haspopup="true" 
          className={getButtonClassName()}
          onClick={handleClick}
          disabled={state === 'disabled'}
        >
          {renderContent()}
        </button>
        <p className={getInfoClassName()}>{info}</p>
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const TwoRowSelect = (props) => <Select type="2row" {...props} />;
export const AccountSelect = (props) => <Select type="account" {...props} />;
export const AdminSelect = (props) => <Select type="admin" {...props} />;
export const BankSelect = (props) => <Select type="bank" {...props} />;
export const BasicSelect = (props) => <Select type="basic" {...props} />;
export const CurrencySelect = (props) => <Select type="currency" {...props} />;
export const IconSelect = (props) => <Select type="icon" {...props} />;
export const ListSelect = (props) => <Select type="list" {...props} />;
export const PriceSelect = (props) => <Select type="price" {...props} />;

// 상태별 래퍼
export const InactiveSelect = (props) => <Select state="inactive" {...props} />;
export const FilledSelect = (props) => <Select state="filled" {...props} />;
export const FocusSelect = (props) => <Select state="focus" {...props} />;
export const DisabledSelect = (props) => <Select state="disabled" {...props} />;
export const ErrorSelect = (props) => <Select state="error" {...props} />;
export const ReadonlySelect = (props) => <Select state="readonly" {...props} />;

export default Select; 