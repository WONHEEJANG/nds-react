import React, { useState, useEffect, useRef } from 'react';

const BottomSheet = ({ 
  // 기본 props
  type = 'basic', // account, basic, finance, keypad, list, notice, popup, search, select, tab, option, picker, share
  variant = 'with-header', // none-header, with-header, nh, nh-no-data, other, other-no-data, bank, stock, basic, basic-input, point, point-input, price, price-button, price-input, basic, accordion, filter, notice, popup, search, select, tab, currency, multi, single, calendar-month-day, calendar-year-month, calendar-year-month-day, wheel-day, wheel-hour-minute, wheel-period, wheel-year-month-day, share
  isOpen = false,
  onClose,
  className = '',
  children,
  
  // Account 타입 props
  accountType, // nh, other
  accounts = [],
  onAccountSelect,
  
  // Basic 타입 props
  title,
  content,
  ctaButton,
  onCtaClick,
  
  // Finance 타입 props
  financeType, // bank, stock
  financeList = [],
  onFinanceSelect,
  
  // Keypad 타입 props
  keypadType, // basic, basic-input, point, point-input, price, price-button, price-input
  keypadValue = '',
  onKeypadInput,
  onKeypadConfirm,
  onKeypadCancel,
  
  // List 타입 props
  listType, // basic, accordion, filter, notice, popup, search, select, tab
  listItems = [],
  onListItemClick,
  
  // Notice 타입 props
  noticeTitle,
  noticeContent,
  noticeButtons = [],
  
  // Popup 타입 props
  popupTitle,
  popupContent,
  popupButtons = [],
  
  // Search 타입 props
  searchPlaceholder,
  searchValue = '',
  onSearch,
  searchResults = [],
  
  // Select 타입 props
  selectOptions = [],
  selectedValue,
  onSelect,
  
  // Tab 타입 props
  tabs = [],
  activeTab = 0,
  onTabChange,
  
  // Option 타입 props
  optionItems = [],
  onOptionChange,
  
  // Picker 타입 props
  pickerType, // calendar-month-day, calendar-year-month, calendar-year-month-day, wheel-day, wheel-hour-minute, wheel-period, wheel-year-month-day
  pickerValue,
  onPickerChange,
  
  // Share 타입 props
  shareItems = [],
  onShare,
  
  ...props
}) => {
  const [isActive, setIsActive] = useState(isOpen);
  const yearPickRef = useRef(null);
  const monthPickRef = useRef(null);
  const dayPickRef = useRef(null);

  // isOpen prop이 변경될 때마다 상태 업데이트
  useEffect(() => {
    setIsActive(isOpen);
  }, [isOpen]);

  // picker가 열릴 때 선택된 항목으로 스크롤
  useEffect(() => {
    if (isActive && type === 'picker' && variant === 'wheel-year-month-day') {
      setTimeout(() => {
        if (yearPickRef.current) {
          const yearItems = yearPickRef.current.querySelectorAll('li');
          if (yearItems[11]) { // 2020년 (index 10 + 1 for padding)
            yearItems[11].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        if (monthPickRef.current) {
          const monthItems = monthPickRef.current.querySelectorAll('li');
          if (monthItems[9]) { // 9월 (index 8 + 1 for padding)
            monthItems[9].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
        if (dayPickRef.current) {
          const dayItems = dayPickRef.current.querySelectorAll('li');
          if (dayItems[15]) { // 15일 (index 14 + 1 for padding)
            dayItems[15].scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, 100);
    }
  }, [isActive, type, variant]);

  const handleClose = () => {
    setIsActive(false);
    if (onClose) {
      onClose();
    }
  };



  // 클래스명 생성
  const getClassName = () => {
    let className = 'layer';
    
    if (type === 'account') {
      className += ' -account';
      if (variant === 'nh') {
        className += ' -nh';
      } else if (variant === 'nh-no-data') {
        className += ' -nh-no-data';
      } else if (variant === 'other') {
        className += ' -other';
      } else if (variant === 'other-no-data') {
        className += ' -other-no-data';
      }
    } else if (type === 'basic') {
      className += ' -basic';
      if (variant === 'none-header') {
        className += ' -none-header';
      } else if (variant === 'with-header') {
        className += ' -with-header';
      }
    } else if (type === 'finance') {
      className += ' -finance';
      if (variant === 'bank') {
        className += ' -bank';
      } else if (variant === 'stock') {
        className += ' -stock';
      }
    } else if (type === 'keypad') {
      className += ' dimWhiteLayer';
      if (variant === 'basic') {
        className += ' -basic';
      } else if (variant === 'basic-input') {
        className += ' -basic-input';
      } else if (variant === 'point') {
        className += ' -point';
      } else if (variant === 'point-input') {
        className += ' -point-input';
      } else if (variant === 'price') {
        className += ' -price';
      } else if (variant === 'price-button') {
        className += ' -price-button';
      } else if (variant === 'price-input') {
        className += ' -price-input';
      }
    } else if (type === 'list') {
      if (variant === 'basic') {
        className += ' -basic';
      } else if (variant === 'accordion') {
        className += ' -accordion';
      } else if (variant === 'filter') {
        className += ' -filter';
      } else if (variant === 'notice') {
        className += ' -notice';
      } else if (variant === 'popup') {
        className += ' -popup';
      } else if (variant === 'search') {
        className += ' -search';
      } else if (variant === 'select') {
        className += ' -select';
      } else if (variant === 'tab') {
        className += ' -tab';
      } else if (variant === 'multi') {
        className += ' -multi';
      } else if (variant === 'single') {
        className += ' -single';
      }
    } else if (type === 'currency') {
      className += ' -currency';
    } else if (type === 'option') {
      className += ' -option';
    } else if (type === 'picker') {
      if (variant === 'calendar-month-day') {
        className += ' -calendar-month-day';
      } else if (variant === 'calendar-year-month') {
        className += ' -calendar-year-month';
      } else if (variant === 'calendar-year-month-day') {
        className += ' -calendar-year-month-day';
      } else if (variant === 'wheel-day') {
        className += ' -wheel-day';
      } else if (variant === 'wheel-hour-minute') {
        className += ' -wheel-hour-minute';
      } else if (variant === 'wheel-period') {
        className += ' -wheel-period';
      } else if (variant === 'wheel-year-month-day') {
        className += ' -wheel-year-month-day';
      }
    } else if (type === 'share') {
      className += ' -share';
    } else if (type === 'notice') {
      className += ' -notice';
    } else if (type === 'popup') {
      className += ' -popup';
    } else if (type === 'search') {
      className += ' -search';
    } else if (type === 'select') {
      className += ' -select';
    } else if (type === 'tab') {
      className += ' -tab';
    }
    
    if (isActive) {
      className += ' -active';
    }
    
    return className;
  };

  // 헤더 렌더링
  const renderHeader = () => {
    if (type === 'basic' && variant === 'none-header') {
      return (
        <div className="no-header" aria-hidden="true">
          <div className="inner"></div>
        </div>
      );
    }
    
    if (type === 'keypad' && (variant === 'basic' || variant === 'point' || variant === 'price' || variant === 'price-button')) {
      return null; // 키패드 타입 중 일부는 헤더가 없음
    }

    const getDefaultTitle = () => {
      if (type === 'currency') return '통화를 선택해 주세요';
      if (type === 'picker') {
        switch (variant) {
          case 'calendar-month-day':
          case 'calendar-year-month-day':
            return '날짜 선택';
          case 'calendar-year-month':
            return '년월 선택';
          case 'wheel-day':
            return '일 선택';
          case 'wheel-hour-minute':
            return '시분 선택';
          case 'wheel-period':
            return '기간 선택';
          case 'wheel-year-month-day':
            return '년월일 선택';
          default:
            return '날짜 선택';
        }
      }
      return '타이틀';
    };

    return (
      <div className="header">
        <div className="inner">
          <h1 className="title">
            {title || getDefaultTitle()}
          </h1>
          <div className="funcs">
            <button type="button" className="func -close" onClick={handleClose}>
              <span className="hide">닫기</span>
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Account 타입 렌더링
  const renderAccount = () => {
    return (
      <div>
        <div className="segments tab -bar">
          <div className="outer">
            <div className="inner">
              <div role="tablist" className="list">
                <div className={`item ${variant === 'nh' || variant === 'nh-no-data' ? '-active' : ''}`}>
                  <button type="button" role="tab" aria-selected={variant === 'nh' || variant === 'nh-no-data'} aria-controls="segments-panel3" id="segment3">
                    NH농협
                  </button>
                </div>
                <div className={`item ${variant === 'other' || variant === 'other-no-data' ? '-active' : ''}`}>
                  <button type="button" role="tab" aria-selected={variant === 'other' || variant === 'other-no-data'} aria-controls="segments-panel4" id="segment4">
                    다른금융
                  </button>
                </div>
                <span className="switcher" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="segments-panels">
          <div role="tabpanel" aria-labelledby="segment1" id="segments-panel3" className={`segments-panel ${variant === 'nh' || variant === 'nh-no-data' ? '-active' : ''}`} tabIndex="0">
            <div className="choose-account-Wrap">
              <div className="field">
                <div className="text">
                  <div className="choose-account-input">
                    <input type="text" id="text" readOnly placeholder="계좌번호 직접 입력" />
                    <button type="button" className="button jsChooseBtn -sm -inline">직접 입력</button>
                  </div>
                  <p className="message">입력 정보 안내 메시지 출력</p>
                </div>
              </div>
              <div className="custom-key-display">
                <div className="custom-key-wrap">
                  <button type="button" value="1" title="숫자 1 입력">1</button>
                  <button type="button" value="2" title="숫자 2 입력">2</button>
                  <button type="button" value="3" title="숫자 3 입력">3</button>
                  <button type="button" value="4" title="숫자 4 입력">4</button>
                  <button type="button" value="5" title="숫자 5 입력">5</button>
                  <button type="button" value="6" title="숫자 6 입력">6</button>
                  <button type="button" value="7" title="숫자 7 입력">7</button>
                  <button type="button" value="8" title="숫자 8 입력">8</button>
                  <button type="button" value="9" title="숫자 9 입력">9</button>
                  <button type="button" disabled aria-hidden="true">NH</button>
                  <button type="button" value="0" title="숫자 0 입력">0</button>
                  <button type="button" className="btn-del" title="마지막 숫자 삭제">←</button>
                </div>
                <div className="buttons">
                  <button type="button" className="button -primary -lg">확인</button>
                </div>
              </div>
              
              {variant === 'nh' && (
                <div className="choose-account-list account -borderless">
                  <ul>
                    {accounts.map((account, index) => (
                      <li key={index}>
                        <button type="button" data-bankcode="011" className="info -fix" onClick={() => onAccountSelect?.(account)}>
                          <span>
                            <span>
                              <span className="name">
                                <span>{account.name}</span>
                              </span>
                              <span className="account-number">
                                <span>NH농협은행</span>
                                <span>{account.number}</span>
                              </span>
                            </span>
                            <div className="amout-number">
                              <span className="amout-title">출금가능금액</span>
                              <span>100,000,000</span>원
                            </div>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {variant === 'accordion' && (
                <div className="choose-account-list mb-0">
                  <div className="accordion -lg -borderless -active" data-role="fold">
                    <div className="exchange-selection-wrap">
                      <div className="selection">
                        <ul>
                          {accounts.map((account, index) => (
                            <li key={index}>
                              <div data-bankcode="011" className="info -fix">
                                <span>
                                  <span>
                                    <span className="name">
                                      <span>{account.name}</span>
                                    </span>
                                    <span className="account-number">
                                      <span>NH농협은행</span>
                                      <span>{account.number}</span>
                                    </span>
                                  </span>
                                  <div className="amout-number">
                                    <span className="amout-title">출금가능금액</span>
                                    <span>100,000,000</span>원
                                  </div>
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button type="button" className="title" data-role="marker" title="펼쳐짐"></button>
                    </div>
                    <div className="panel -borderless" data-role="hidden">
                      <div className="custom-list -borderless -account">
                        <ul>
                          <li>
                            <div className="exchange-mini">
                              <span data-countrycode="001" className="-sm">
                                <span className="unit">USD</span> 100,500.00
                              </span>
                            </div>
                          </li>
                          <li>
                            <div className="exchange-mini">
                              <span data-countrycode="003" className="-sm">
                                <span className="unit">EUR</span> 100,500.00
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {variant === 'nh-no-data' && (
                <div className="choose-account-list">
                  <p className="message">등록한 계좌가 없습니다<br />계좌를 등록하고 이용해 주세요</p>
                </div>
              )}
              
              {variant === 'nh-no-data' && (
                <button type="button" className="goto-button">NH농협 계좌등록</button>
              )}
            </div>
          </div>
          
          <div role="tabpanel" aria-labelledby="segment2" id="segments-panel4" className={`segments-panel ${variant === 'other' || variant === 'other-no-data' ? '-active' : ''}`} tabIndex="0">
            {variant === 'other' && (
              <div className="choose-account-list account -borderless">
                <div className="case-wrap">
                  <ul>
                    {accounts.map((account, index) => (
                      <li key={index}>
                        <button data-bankcode="092" className="info -fix" onClick={() => onAccountSelect?.(account)}>
                          <span>
                            <span>
                              <span className="name">
                                <span>{account.name}</span>
                              </span>
                              <span className="account-number">
                                <span>{account.bankName}</span>
                                <span>{account.number}</span>
                              </span>
                            </span>
                          </span>
                          <div className="amout-number">
                            <a href="javascript:void(0)" className="a -arrow">출금가능금액조회</a>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {variant === 'other-no-data' && (
              <div className="choose-account-list">
                <p className="message">등록한 계좌가 없습니다<br />계좌를 등록하고 이용해 주세요</p>
              </div>
            )}
            
            {variant === 'other-no-data' && (
              <button type="button" className="goto-button">다른금융 계좌등록</button>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Basic 타입 렌더링
  const renderBasic = () => {
    if (variant === 'none-header') {
      return (
        <>
          <div className="content bttm">
            <h2 className="h3">{title}</h2>
            <p className="p">{content}</p>
            <p className="p">
              <button type="button" className="a underline point" onClick={handleClose}>
                레이어 닫기
              </button>
            </p>
          </div>
          {ctaButton && (
            <div className="fixer">
              <div className="buttons">
                <button type="button" className="button -lg -primary" onClick={onCtaClick}>
                  {ctaButton}
                </button>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          <div className="content">
            <p className="p">{content}</p>
          </div>
          {ctaButton && (
            <div className="fixer">
              <div className="buttons">
                <button type="button" className="button -lg -primary" onClick={onCtaClick}>
                  {ctaButton}
                </button>
              </div>
            </div>
          )}
        </>
      );
    }
  };

  // Finance 타입 렌더링
  const renderFinance = () => {
    return (
      <div className="bank-select">
        <div className="segments -bar">
          <div className="outer">
            <div className="inner">
              <div role="tablist" className="list">
                <div className={`item ${variant === 'bank' ? '-active' : ''}`}>
                  <button type="button" role="tab" aria-selected={variant === 'bank'} aria-controls="segments-panel1" id="segment1">
                    은행
                  </button>
                </div>
                <div className={`item ${variant === 'stock' ? '-active' : ''}`}>
                  <button type="button" role="tab" aria-selected={variant === 'stock'} aria-controls="segments-panel2" id="segment2">
                    증권사
                  </button>
                </div>
                <span className="switcher" aria-hidden="true"></span>
              </div>
            </div>
          </div>
        </div>

        <div className="segments-panels">
          <div role="tabpanel" aria-labelledby="segment1" id="segments-panel1" className={`segments-panel ${variant === 'bank' ? '-active' : ''}`} tabIndex="0">
            <ul className="button-box">
              {financeList.map((item, index) => (
                <li key={index}>
                  <button type="button" data-bankcode="011" className="unit" onClick={() => onFinanceSelect?.(item)}>
                    <span className="txt">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div role="tabpanel" aria-labelledby="segment2" id="segments-panel2" className={`segments-panel ${variant === 'stock' ? '-active' : ''}`} tabIndex="0">
            <ul className="button-box">
              {financeList.map((item, index) => (
                <li key={index}>
                  <button type="button" data-bankcode="247" className="unit" onClick={() => onFinanceSelect?.(item)}>
                    <span className="txt">{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  // Keypad 타입 렌더링
  const renderKeypad = () => {
    const handleKeyClick = (value) => {
      if (onKeypadInput) {
        onKeypadInput(value);
      }
    };

    const handleDelete = () => {
      if (onKeypadInput) {
        onKeypadInput('delete');
      }
    };

    const handleConfirm = () => {
      if (onKeypadConfirm) {
        onKeypadConfirm();
      }
    };

    if (variant === 'basic') {
      return (
        <div className="choose-account-Wrap -inputed">
          <div className="custom-key-wrap">
            <span role="button" className="key-btn" data-value="1" title="숫자 1 입력" onClick={() => handleKeyClick('1')}>1</span>
            <span role="button" className="key-btn" data-value="2" title="숫자 2 입력" onClick={() => handleKeyClick('2')}>2</span>
            <span role="button" className="key-btn" data-value="3" title="숫자 3 입력" onClick={() => handleKeyClick('3')}>3</span>
            <span role="button" className="key-btn" data-value="4" title="숫자 4 입력" onClick={() => handleKeyClick('4')}>4</span>
            <span role="button" className="key-btn" data-value="5" title="숫자 5 입력" onClick={() => handleKeyClick('5')}>5</span>
            <span role="button" className="key-btn" data-value="6" title="숫자 6 입력" onClick={() => handleKeyClick('6')}>6</span>
            <span role="button" className="key-btn" data-value="7" title="숫자 7 입력" onClick={() => handleKeyClick('7')}>7</span>
            <span role="button" className="key-btn" data-value="8" title="숫자 8 입력" onClick={() => handleKeyClick('8')}>8</span>
            <span role="button" className="key-btn" data-value="9" title="숫자 9 입력" onClick={() => handleKeyClick('9')}>9</span>
            <span role="button" className="key-btn disabled" aria-hidden="true">NH</span>
            <span role="button" className="key-btn" data-value="0" title="숫자 0 입력" onClick={() => handleKeyClick('0')}>0</span>
            <span role="button" className="key-btn btn-del" title="마지막 숫자 삭제" onClick={handleDelete}></span>
          </div>
          <div className="buttons">
            <button type="button" className="button -lg -primary" onClick={handleConfirm}>확인(레이어닫기)</button>
          </div>
        </div>
      );
    } else if (variant === 'basic-input') {
      return (
        <div className="choose-number-wrap -inputed">
          <div className="field">
            <div className="text">
              <div className="choose-number-input">
                <input type="text" id="text" title="계좌번호 입력" readOnly placeholder="숫자입력" value={keypadValue} />
              </div>
            </div>
            <div className="info-wrap">
              <p className="message -error" id="pubNumKeypadBoxMsgText">10자리 이상으로 입력하여 주세요.</p>
            </div>
          </div>
          <div className="custom-key-wrap">
            <span role="button" className="key-btn" data-value="1" title="숫자 1 입력" onClick={() => handleKeyClick('1')}>1</span>
            <span role="button" className="key-btn" data-value="2" title="숫자 2 입력" onClick={() => handleKeyClick('2')}>2</span>
            <span role="button" className="key-btn" data-value="3" title="숫자 3 입력" onClick={() => handleKeyClick('3')}>3</span>
            <span role="button" className="key-btn" data-value="4" title="숫자 4 입력" onClick={() => handleKeyClick('4')}>4</span>
            <span role="button" className="key-btn" data-value="5" title="숫자 5 입력" onClick={() => handleKeyClick('5')}>5</span>
            <span role="button" className="key-btn" data-value="6" title="숫자 6 입력" onClick={() => handleKeyClick('6')}>6</span>
            <span role="button" className="key-btn" data-value="7" title="숫자 7 입력" onClick={() => handleKeyClick('7')}>7</span>
            <span role="button" className="key-btn" data-value="8" title="숫자 8 입력" onClick={() => handleKeyClick('8')}>8</span>
            <span role="button" className="key-btn" data-value="9" title="숫자 9 입력" onClick={() => handleKeyClick('9')}>9</span>
            <span role="button" className="key-btn disabled" aria-hidden="true">NH</span>
            <span role="button" className="key-btn" data-value="0" title="숫자 0 입력" onClick={() => handleKeyClick('0')}>0</span>
            <span role="button" className="key-btn btn-del" title="마지막 숫자 삭제" onClick={handleDelete}></span>
          </div>
          <div className="buttons">
            <button type="button" className="button -lg -primary" onClick={handleConfirm}>확인</button>
          </div>
        </div>
      );
    } else if (variant === 'point') {
      return (
        <div className="choose-account-Wrap -inputed">
          <div className="custom-key-wrap">
            <span role="button" className="key-btn" data-value="1" title="숫자 1 입력" onClick={() => handleKeyClick('1')}>1</span>
            <span role="button" className="key-btn" data-value="2" title="숫자 2 입력" onClick={() => handleKeyClick('2')}>2</span>
            <span role="button" className="key-btn" data-value="3" title="숫자 3 입력" onClick={() => handleKeyClick('3')}>3</span>
            <span role="button" className="key-btn" data-value="4" title="숫자 4 입력" onClick={() => handleKeyClick('4')}>4</span>
            <span role="button" className="key-btn" data-value="5" title="숫자 5 입력" onClick={() => handleKeyClick('5')}>5</span>
            <span role="button" className="key-btn" data-value="6" title="숫자 6 입력" onClick={() => handleKeyClick('6')}>6</span>
            <span role="button" className="key-btn" data-value="7" title="숫자 7 입력" onClick={() => handleKeyClick('7')}>7</span>
            <span role="button" className="key-btn" data-value="8" title="숫자 8 입력" onClick={() => handleKeyClick('8')}>8</span>
            <span role="button" className="key-btn" data-value="9" title="숫자 9 입력" onClick={() => handleKeyClick('9')}>9</span>
            <span role="button" className="key-btn" data-value="." title="소수점 입력" onClick={() => handleKeyClick('.')}>.</span>
            <span role="button" className="key-btn" data-value="0" title="숫자 0 입력" onClick={() => handleKeyClick('0')}>0</span>
            <span role="button" className="key-btn btn-del" title="마지막 숫자 삭제" onClick={handleDelete}></span>
          </div>
          <div className="buttons">
            <button type="button" className="button -lg -primary" onClick={handleConfirm}>확인(레이어닫기)</button>
          </div>
        </div>
      );
    } else if (variant === 'point-input') {
      return (
        <div className="choose-account-Wrap -inputed">
          <div className="field">
            <div className="text">
              <div className="choose-account-input"> 
                <input type="text" id="text" title="~을(를) 입력" readOnly placeholder="숫자입력" value={keypadValue} />
              </div>
            </div>
          </div>
          <div className="custom-key-wrap">
            <span role="button" className="key-btn" data-value="1" title="숫자 1 입력" onClick={() => handleKeyClick('1')}>1</span>
            <span role="button" className="key-btn" data-value="2" title="숫자 2 입력" onClick={() => handleKeyClick('2')}>2</span>
            <span role="button" className="key-btn" data-value="3" title="숫자 3 입력" onClick={() => handleKeyClick('3')}>3</span>
            <span role="button" className="key-btn" data-value="4" title="숫자 4 입력" onClick={() => handleKeyClick('4')}>4</span>
            <span role="button" className="key-btn" data-value="5" title="숫자 5 입력" onClick={() => handleKeyClick('5')}>5</span>
            <span role="button" className="key-btn" data-value="6" title="숫자 6 입력" onClick={() => handleKeyClick('6')}>6</span>
            <span role="button" className="key-btn" data-value="7" title="숫자 7 입력" onClick={() => handleKeyClick('7')}>7</span>
            <span role="button" className="key-btn" data-value="8" title="숫자 8 입력" onClick={() => handleKeyClick('8')}>8</span>
            <span role="button" className="key-btn" data-value="9" title="숫자 9 입력" onClick={() => handleKeyClick('9')}>9</span>
            <span role="button" className="key-btn" data-value="." title="소수점 입력" onClick={() => handleKeyClick('.')}>.</span>
            <span role="button" className="key-btn" data-value="0" title="숫자 0 입력" onClick={() => handleKeyClick('0')}>0</span>
            <span role="button" className="key-btn btn-del" title="마지막 숫자 삭제" onClick={handleDelete}></span>
          </div>
          <div className="buttons">
            <button type="button" className="button -lg -primary" onClick={handleConfirm}>확인</button>
          </div>
        </div>
      );
    } else if (variant === 'price') {
      return (
        <div className="choose-account-Wrap -inputed">
          <div className="custom-key-wrap">
            <span role="button" className="key-btn" data-value="1" title="숫자 1 입력" onClick={() => handleKeyClick('1')}>1</span>
            <span role="button" className="key-btn" data-value="2" title="숫자 2 입력" onClick={() => handleKeyClick('2')}>2</span>
            <span role="button" className="key-btn" data-value="3" title="숫자 3 입력" onClick={() => handleKeyClick('3')}>3</span>
            <span role="button" className="key-btn" data-value="4" title="숫자 4 입력" onClick={() => handleKeyClick('4')}>4</span>
            <span role="button" className="key-btn" data-value="5" title="숫자 5 입력" onClick={() => handleKeyClick('5')}>5</span>
            <span role="button" className="key-btn" data-value="6" title="숫자 6 입력" onClick={() => handleKeyClick('6')}>6</span>
            <span role="button" className="key-btn" data-value="7" title="숫자 7 입력" onClick={() => handleKeyClick('7')}>7</span>
            <span role="button" className="key-btn" data-value="8" title="숫자 8 입력" onClick={() => handleKeyClick('8')}>8</span>
            <span role="button" className="key-btn" data-value="9" title="숫자 9 입력" onClick={() => handleKeyClick('9')}>9</span>
            <span role="button" className="key-btn disabled" aria-hidden="true">NH</span>
            <span role="button" className="key-btn" data-value="0" title="숫자 0 입력" onClick={() => handleKeyClick('0')}>0</span>
            <span role="button" className="key-btn btn-del" title="마지막 숫자 삭제" onClick={handleDelete}></span>
          </div>
          <div className="buttons">
            <button type="button" className="button -lg -primary" onClick={handleConfirm}>확인(레이어닫기)</button>
          </div>
        </div>
      );
    }
  };

  // List 타입 렌더링
  const renderList = () => {
    return (
      <div className="list-content">
        {variant === 'basic' && (
          <div className="basic-list">
            {listItems.map((item, index) => (
              <div key={index} className="list-item" onClick={() => onListItemClick?.(item)}>
                {item.title}
              </div>
            ))}
          </div>
        )}
        {variant === 'accordion' && (
          <div className="accordion-list">
            {listItems.map((item, index) => (
              <div key={index} className="accordion-item">
                <button type="button" className="accordion-title">
                  {item.title}
                </button>
                <div className="accordion-content">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        )}
        {variant === 'filter' && (
          <div className="filter-list">
            {listItems.map((item, index) => (
              <div key={index} className="filter-item">
                <input type="checkbox" id={`filter-${index}`} />
                <label htmlFor={`filter-${index}`}>{item.title}</label>
              </div>
            ))}
          </div>
        )}
        {variant === 'notice' && (
          <div className="notice-list">
            {listItems.map((item, index) => (
              <div key={index} className="notice-item">
                <div className="notice-title">{item.title}</div>
                <div className="notice-content">{item.content}</div>
              </div>
            ))}
          </div>
        )}
        {variant === 'popup' && (
          <div className="popup-list">
            {listItems.map((item, index) => (
              <div key={index} className="popup-item" onClick={() => onListItemClick?.(item)}>
                {item.title}
              </div>
            ))}
          </div>
        )}
        {variant === 'search' && (
          <div className="search-list">
            <div className="search-input">
              <input 
                type="text" 
                placeholder={searchPlaceholder || "검색어 입력"}
                value={searchValue}
                onChange={(e) => onSearch?.(e.target.value)}
              />
            </div>
            <div className="search-results">
              {searchResults.map((item, index) => (
                <div key={index} className="search-item" onClick={() => onListItemClick?.(item)}>
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        )}
        {variant === 'select' && (
          <div className="select-list">
            {selectOptions.map((option, index) => (
              <div key={index} className="select-item" onClick={() => onSelect?.(option)}>
                {option.label}
              </div>
            ))}
          </div>
        )}
        {variant === 'tab' && (
          <div className="tab-list">
            {tabs.map((tab, index) => (
              <button 
                key={index} 
                type="button" 
                className={`tab-item ${index === activeTab ? '-active' : ''}`}
                onClick={() => onTabChange?.(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
        )}
        {variant === 'single' && (
          <div className="options">
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>
                  <button 
                    type="button" 
                    className={`option ${item.active ? '-active' : ''}`}
                    onClick={() => onListItemClick?.(item)}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {variant === 'multi' && (
          <div className="options">
            <ul>
              {listItems.map((item, index) => (
                <li key={index}>
                  <button 
                    type="button" 
                    className={`option ${item.checked ? '-checked' : ''}`}
                    onClick={() => onListItemClick?.(item)}
                  >
                    {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };

  // Notice 타입 렌더링
  const renderNotice = () => {
    return (
      <div className="notice-content">
        <h3>{noticeTitle}</h3>
        <div className="notice-body">
          {noticeContent}
        </div>
        <div className="notice-buttons">
          {noticeButtons.map((button, index) => (
            <button key={index} type="button" onClick={button.onClick}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Popup 타입 렌더링
  const renderPopup = () => {
    return (
      <div className="popup-content">
        <h3>{popupTitle}</h3>
        <div className="popup-body">
          {popupContent}
        </div>
        <div className="popup-buttons">
          {popupButtons.map((button, index) => (
            <button key={index} type="button" onClick={button.onClick}>
              {button.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // Search 타입 렌더링
  const renderSearch = () => {
    return (
      <div className="search-content">
        <div className="search-input">
          <input 
            type="text" 
            placeholder={searchPlaceholder || "검색어 입력"}
            value={searchValue}
            onChange={(e) => onSearch?.(e.target.value)}
          />
        </div>
        <div className="search-results">
          {searchResults.map((item, index) => (
            <div key={index} className="search-item" onClick={() => onListItemClick?.(item)}>
              {item.title}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Select 타입 렌더링
  const renderSelect = () => {
    return (
      <div className="select-content">
        {selectOptions.map((option, index) => (
          <div key={index} className="select-item" onClick={() => onSelect?.(option)}>
            {option.label}
          </div>
        ))}
      </div>
    );
  };

  // Tab 타입 렌더링
  const renderTab = () => {
    return (
      <div className="tab-content">
        <div className="tab-header">
          {tabs.map((tab, index) => (
            <button 
              key={index} 
              type="button" 
              className={`tab-button ${index === activeTab ? '-active' : ''}`}
              onClick={() => onTabChange?.(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>
        <div className="tab-body">
          {tabs[activeTab]?.content}
        </div>
      </div>
    );
  };

  // Option 타입 렌더링
  const renderOption = () => {
    return (
      <div className="option-content">
        {optionItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="field">
            <p className="label">{section.label}</p>
            <div className="box-radios -sm">
              {section.options.map((option, optionIndex) => (
                <div key={optionIndex} className="box-radio">
                  <input 
                    type="radio" 
                    name={section.name} 
                    id={`${section.name}${optionIndex}`}
                    checked={option.checked}
                    onChange={() => onOptionChange?.(section.name, option.value)}
                  />
                  <label htmlFor={`${section.name}${optionIndex}`}>{option.label}</label>
                </div>
              ))}
            </div>
            {section.datepicker && (
              <div className="mix datepicker">
                <div className="text" data-clear="false">
                  <input type="text" className="left-side" value={section.startDate} readOnly />
                </div>
                <div className="space -lined date -start">
                  <button type="button" className="icon-button -calendar">
                    <span className="hide">달력 보기</span>
                  </button>
                </div>
                <div className="dash">~</div>
                <div className="text" data-clear="false">
                  <input type="text" className="left-side" value={section.endDate} readOnly />
                </div>
                <div className="space -lined date -end">
                  <button type="button" className="icon-button -calendar">
                    <span className="hide">달력 보기</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Picker 타입 렌더링
  const renderPicker = () => {
    return (
      <div className="picker-content">
        {variant === 'calendar-month-day' && (
          <div className="calendar">
            <div className="control">
              <button type="button" className="button -xs -fit">오늘</button>
              <div className="title">
                <button type="button" className="prev">
                  <span className="hide">이전달</span>
                </button>
                <span className="value">2024.10</span>
                <button type="button" className="next" disabled>
                  <span className="hide">다음달</span>
                </button>
              </div>
            </div>
            <table>
              <caption><span className="hide">일별 선택 달력</span></caption>
              <thead>
                <tr>
                  <th scope="col">일</th>
                  <th scope="col">월</th>
                  <th scope="col">화</th>
                  <th scope="col">수</th>
                  <th scope="col">목</th>
                  <th scope="col">금</th>
                  <th scope="col">토</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><button type="button" disabled>30</button></td>
                  <td><button type="button" disabled>31</button></td>
                  <td><button type="button" disabled>1</button></td>
                  <td><button type="button" disabled>2</button></td>
                  <td><button type="button" disabled>3</button></td>
                  <td><button type="button" disabled>4</button></td>
                  <td><button type="button" disabled>5</button></td>
                </tr>
                <tr>
                  <td><button type="button" disabled>6</button></td>
                  <td><button type="button" disabled>7</button></td>
                  <td><button type="button" disabled>8</button></td>
                  <td><button type="button" disabled>9</button></td>
                  <td><button type="button" disabled>10</button></td>
                  <td><button type="button" disabled>11</button></td>
                  <td><button type="button" disabled>12</button></td>
                </tr>
                <tr>
                  <td><button type="button" disabled>13</button></td>
                  <td><button type="button" disabled>14</button></td>
                  <td><button type="button" className="-today">15 <span className="hide">오늘</span></button></td>
                  <td><button type="button">16</button></td>
                  <td><button type="button" className="-active">17</button></td>
                  <td><button type="button">18</button></td>
                  <td><button type="button">19</button></td>
                </tr>
                <tr>
                  <td><button type="button">20</button></td>
                  <td><button type="button">21</button></td>
                  <td><button type="button">22</button></td>
                  <td><button type="button">23</button></td>
                  <td><button type="button">24</button></td>
                  <td><button type="button">25</button></td>
                  <td><button type="button">26</button></td>
                </tr>
                <tr>
                  <td><button type="button">27</button></td>
                  <td><button type="button">28</button></td>
                  <td><button type="button">29</button></td>
                  <td><button type="button">30</button></td>
                  <td><button type="button">31</button></td>
                  <td><button type="button" disabled>1</button></td>
                  <td><button type="button" disabled>2</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {variant === 'calendar-year-month' && (
          <div className="calendar">
            <div className="control choose-m">
              <button type="button" className="button -xs -fit">당월</button>
              <div className="title">
                <button type="button" className="prev">
                  <span className="hide">이전달</span>
                </button>
                <span className="value">2025</span>
                <button type="button" className="next" disabled>
                  <span className="hide">다음달</span>
                </button>
              </div>
            </div>
            <div className="month">
              <caption><span className="hide">월별 선택 달력</span></caption>
              <ol>
                <li><button type="button" disabled>1</button></li>
                <li><button type="button" disabled>2</button></li>
                <li><button type="button" disabled>3</button></li>
                <li><button type="button" disabled>4</button></li>
                <li><button type="button" disabled>5</button></li>
                <li><button type="button" disabled>6</button></li>
                <li><button type="button" className="-today">7 <span className="hide">선택됨</span></button></li>
                <li><button type="button">8</button></li>
                <li><button type="button">9</button></li>
                <li><button type="button" className="-active">10 <span className="hide">오늘</span></button></li>
                <li><button type="button">11</button></li>
                <li><button type="button">12</button></li>
              </ol>
            </div>
          </div>
        )}
        {variant === 'calendar-year-month-day' && (
          <div className="calendar">
            <div className="control -seperate">
              <button type="button" className="button -xs -fit">오늘</button>
              <div className="title">
                <button type="button" className="prev">
                  <span className="hide">이전달</span>
                </button>
                <span className="value">2024</span>
                <button type="button" className="next" disabled>
                  <span className="hide">다음달</span>
                </button>
              </div>
              <div className="title -month">
                <button type="button" className="prev">
                  <span className="hide">이전달</span>
                </button>
                <span className="value">12</span>
                <button type="button" className="next" disabled>
                  <span className="hide">다음달</span>
                </button>
              </div>
            </div>
            <table>
              <caption><span className="hide">일별 선택 달력</span></caption>
              <thead>
                <tr>
                  <th scope="col">일</th>
                  <th scope="col">월</th>
                  <th scope="col">화</th>
                  <th scope="col">수</th>
                  <th scope="col">목</th>
                  <th scope="col">금</th>
                  <th scope="col">토</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><button type="button" disabled>30</button></td>
                  <td><button type="button" disabled>31</button></td>
                  <td><button type="button" disabled>1</button></td>
                  <td><button type="button" disabled>2</button></td>
                  <td><button type="button" disabled>3</button></td>
                  <td><button type="button" disabled>4</button></td>
                  <td><button type="button" disabled>5</button></td>
                </tr>
                <tr>
                  <td><button type="button" disabled>6</button></td>
                  <td><button type="button" disabled>7</button></td>
                  <td><button type="button" disabled>8</button></td>
                  <td><button type="button" disabled>9</button></td>
                  <td><button type="button" disabled>10</button></td>
                  <td><button type="button" disabled>11</button></td>
                  <td><button type="button" disabled>12</button></td>
                </tr>
                <tr>
                  <td><button type="button" disabled>13</button></td>
                  <td><button type="button" disabled>14</button></td>
                  <td><button type="button" className="-today">15 <span className="hide">오늘</span></button></td>
                  <td><button type="button">16</button></td>
                  <td><button type="button" className="-active">17</button></td>
                  <td><button type="button">18</button></td>
                  <td><button type="button">19</button></td>
                </tr>
                <tr>
                  <td><button type="button">20</button></td>
                  <td><button type="button">21</button></td>
                  <td><button type="button">22</button></td>
                  <td><button type="button">23</button></td>
                  <td><button type="button">24</button></td>
                  <td><button type="button">25</button></td>
                  <td><button type="button">26</button></td>
                </tr>
                <tr>
                  <td><button type="button">27</button></td>
                  <td><button type="button">28</button></td>
                  <td><button type="button">29</button></td>
                  <td><button type="button">30</button></td>
                  <td><button type="button">31</button></td>
                  <td><button type="button" disabled>1</button></td>
                  <td><button type="button" disabled>2</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {variant === 'wheel-day' && (
          <div className="datepicker-widget cycle-type">
            <ul className="cycle">
              <li aria-selected="false">매일</li>
              <li aria-selected="true" className="on">매주</li>
              <li aria-selected="false">매월</li>
            </ul>
            <div className="cycle-list">
              <ul className="everyday" style={{display: 'none'}}>
                <li className="on" aria-selected="false">매일</li>
              </ul>
              <ul className="week" style={{display: 'block'}}>
                <li aria-selected="false">월요일</li>
                <li aria-selected="false">화요일</li>
                <li className="on" aria-selected="true">수요일</li>
                <li aria-selected="false">목요일</li>
                <li aria-selected="false">금요일</li>
                <li aria-selected="false">토요일</li>
                <li aria-selected="false">일요일</li>
              </ul>
              <ul className="day" style={{display: 'none'}}>
                <li aria-selected="false">01일</li>
                <li aria-selected="false">02일</li>
                <li aria-selected="false">03일</li>
                <li aria-selected="false">04일</li>
                <li aria-selected="false">05일</li>
                <li className="on" aria-selected="true">06일</li>
                <li aria-selected="false">07일</li>
                <li aria-selected="false">08일</li>
                <li aria-selected="false">09일</li>
                <li aria-selected="false">10일</li>
                <li aria-selected="false">11일</li>
                <li aria-selected="false">12일</li>
                <li aria-selected="false">13일</li>
                <li aria-selected="false">14일</li>
                <li aria-selected="false">15일</li>
                <li aria-selected="false">16일</li>
                <li aria-selected="false">17일</li>
                <li aria-selected="false">18일</li>
                <li aria-selected="false">19일</li>
                <li aria-selected="false">20일</li>
                <li aria-selected="false">21일</li>
                <li aria-selected="false">22일</li>
                <li aria-selected="false">23일</li>
                <li aria-selected="false">24일</li>
                <li aria-selected="false">25일</li>
                <li aria-selected="false">26일</li>
                <li aria-selected="false">27일</li>
                <li aria-selected="false">28일</li>
                <li aria-selected="false">29일</li>
                <li aria-selected="false">30일</li>
              </ul>
            </div>
          </div>
        )}
        {variant === 'wheel-hour-minute' && (
          <div className="datepicker-widget">
            <ul className="time">
              {Array.from({length: 24}, (_, i) => (
                <li key={i} className={i === 11 ? 'on' : ''} aria-selected={i === 11}>
                  <span className="number">{String(i + 1).padStart(2, '0')}</span>시
                </li>
              ))}
            </ul>
            <ul className="minute">
              {Array.from({length: 60}, (_, i) => (
                <li key={i} className={i === 23 ? 'on' : ''} aria-selected={i === 23}>
                  <span className="number">{String(i).padStart(2, '0')}</span>분
                </li>
              ))}
            </ul>
          </div>
        )}
        {variant === 'wheel-period' && (
          <div className="datepicker-widget">
            <ul className="time">
              {Array.from({length: 24}, (_, i) => (
                <li key={i} className={i === 3 ? 'on' : ''} aria-selected={i === 3}>
                  <span className="number">{i + 1}</span>년
                </li>
              ))}
            </ul>
            <ul className="minute">
              {Array.from({length: 60}, (_, i) => (
                <li key={i} className={i === 1 ? 'on' : ''} aria-selected={i === 1}>
                  <span className="number">{i + 1}</span>개월
                </li>
              ))}
            </ul>
          </div>
        )}
        {variant === 'wheel-year-month-day' && (
          <div className="roll-widget">
            <ul className="year-pick" ref={yearPickRef}>
              <li>&nbsp;</li>
              {Array.from({length: 24}, (_, i) => {
                const year = 2010 + i;
                const isSelected = i === 10; // 2020년은 11번째 항목 (index 10)
                return (
                  <li key={i} className={isSelected ? 'on' : ''} aria-selected={isSelected}>
                    <span className="number">{year}</span>년
                  </li>
                );
              })}
              <li>&nbsp;</li>
            </ul>
            <ul className="month-pick" ref={monthPickRef}>
              <li>&nbsp;</li>
              {Array.from({length: 12}, (_, i) => {
                const month = i + 1;
                const isSelected = i === 8; // 9월은 9번째 항목 (index 8)
                return (
                  <li key={i} className={isSelected ? 'on' : ''} aria-selected={isSelected}>
                    <span className="number">{month}</span>월
                  </li>
                );
              })}
              <li>&nbsp;</li>
            </ul>
            <ul className="day-pick" ref={dayPickRef}>
              <li>&nbsp;</li>
              {Array.from({length: 31}, (_, i) => {
                const day = i + 1;
                const isSelected = i === 14; // 15일은 15번째 항목 (index 14)
                return (
                  <li key={i} className={isSelected ? 'on' : ''} aria-selected={isSelected}>
                    <span className="number">{day}</span>일
                  </li>
                );
              })}
              <li>&nbsp;</li>
            </ul>
          </div>
        )}
      </div>
    );
  };

  // Share 타입 렌더링
  const renderShare = () => {
    return (
      <div className="share-content">
        <ul className="shares">
          {shareItems.map((item, index) => (
            <li key={index}>
              <button type="button" className={`share ${item.type}`} onClick={() => onShare?.(item)}>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Currency 타입 렌더링
  const renderCurrency = () => {
    return (
      <div className="currency-content">
        <div className="options">
          <ul>
            {listItems.map((item, index) => (
              <li key={index}>
                <button 
                  type="button" 
                  className={`option ${item.active ? '-active' : ''}`}
                  onClick={() => onListItemClick?.(item)}
                >
                  <div className="exchange">
                    <span data-countrycode={item.code} className="-md">
                      <span>{item.name}</span>
                    </span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // 메인 컨텐츠 렌더링
  const renderContent = () => {
    switch (type) {
      case 'account':
        return renderAccount();
      case 'basic':
        return renderBasic();
      case 'finance':
        return renderFinance();
      case 'keypad':
        return renderKeypad();
      case 'list':
        return renderList();
      case 'currency':
        return renderCurrency();
      case 'notice':
        return renderNotice();
      case 'popup':
        return renderPopup();
      case 'search':
        return renderSearch();
      case 'select':
        return renderSelect();
      case 'tab':
        return renderTab();
      case 'option':
        return renderOption();
      case 'picker':
        return renderPicker();
      case 'share':
        return renderShare();
      default:
        return children;
    }
  };

  // 항상 렌더링하되, active 상태에 따라 클래스만 변경

  return (
    <div className={getClassName()}>
      <div className="container">
        {renderHeader()}
        <div className={`contents ${type === 'picker' ? 'picker-contents' : ''}`}>
          <div className={`content ${type === 'list' && variant === 'multi' ? 'slec-checked' : ''}`}>
            {renderContent()}
          </div>
          {type === 'list' && variant === 'multi' && (
            <div className="fixer">
              <div className="buttons">
                <button type="button" className="button -lg -primary" onClick={onClose}>
                  확인
                </button>
              </div>
            </div>
          )}
          {type === 'picker' && (
            <div className="fixer">
              <div className="buttons">
                <button type="button" className="button -lg -primary" onClick={onClose}>
                  확인
                </button>
              </div>
            </div>
          )}
          {type === 'option' && (
            <div className="fixer">
              <div className="buttons">
                <button type="button" className="button -lg -primary" onClick={onClose}>
                  다른계좌 등록하기
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const AccountBottomSheet = (props) => <BottomSheet type="account" {...props} />;
export const AccountNHBottomSheet = (props) => <BottomSheet type="account" variant="nh" {...props} />;
export const AccountNHNoDataBottomSheet = (props) => <BottomSheet type="account" variant="nh-no-data" {...props} />;
export const AccountOtherBottomSheet = (props) => <BottomSheet type="account" variant="other" {...props} />;
export const AccountOtherNoDataBottomSheet = (props) => <BottomSheet type="account" variant="other-no-data" {...props} />;
export const AccountAccordionBottomSheet = (props) => <BottomSheet type="account" variant="accordion" {...props} />;

export const BasicBottomSheet = (props) => <BottomSheet type="basic" {...props} />;
export const BasicNoneHeaderBottomSheet = (props) => <BottomSheet type="basic" variant="none-header" {...props} />;
export const BasicWithHeaderBottomSheet = (props) => <BottomSheet type="basic" variant="with-header" {...props} />;

export const FinanceBottomSheet = (props) => <BottomSheet type="finance" {...props} />;
export const FinanceBankBottomSheet = (props) => <BottomSheet type="finance" variant="bank" {...props} />;
export const FinanceStockBottomSheet = (props) => <BottomSheet type="finance" variant="stock" {...props} />;

export const KeypadBottomSheet = (props) => <BottomSheet type="keypad" {...props} />;
export const KeypadBasicBottomSheet = (props) => <BottomSheet type="keypad" variant="basic" {...props} />;
export const KeypadBasicInputBottomSheet = (props) => <BottomSheet type="keypad" variant="basic-input" {...props} />;
export const KeypadPointBottomSheet = (props) => <BottomSheet type="keypad" variant="point" {...props} />;
export const KeypadPointInputBottomSheet = (props) => <BottomSheet type="keypad" variant="point-input" {...props} />;
export const KeypadPriceBottomSheet = (props) => <BottomSheet type="keypad" variant="price" {...props} />;
export const KeypadPriceButtonBottomSheet = (props) => <BottomSheet type="keypad" variant="price-button" {...props} />;
export const KeypadPriceInputBottomSheet = (props) => <BottomSheet type="keypad" variant="price-input" {...props} />;

export const ListBottomSheet = (props) => <BottomSheet type="list" {...props} />;
export const ListBasicBottomSheet = (props) => <BottomSheet type="list" variant="basic" {...props} />;
export const ListAccordionBottomSheet = (props) => <BottomSheet type="list" variant="accordion" {...props} />;
export const ListFilterBottomSheet = (props) => <BottomSheet type="list" variant="filter" {...props} />;
export const ListNoticeBottomSheet = (props) => <BottomSheet type="list" variant="notice" {...props} />;
export const ListPopupBottomSheet = (props) => <BottomSheet type="list" variant="popup" {...props} />;
export const ListSearchBottomSheet = (props) => <BottomSheet type="list" variant="search" {...props} />;
export const ListSelectBottomSheet = (props) => <BottomSheet type="list" variant="select" {...props} />;
export const ListTabBottomSheet = (props) => <BottomSheet type="list" variant="tab" {...props} />;
export const ListCurrencyBottomSheet = (props) => <BottomSheet type="list" variant="currency" {...props} />;
export const ListMultiBottomSheet = (props) => <BottomSheet type="list" variant="multi" {...props} />;
export const ListSingleBottomSheet = (props) => <BottomSheet type="list" variant="single" {...props} />;

export const CurrencyBottomSheet = (props) => <BottomSheet type="currency" {...props} />;

export const NoticeBottomSheet = (props) => <BottomSheet type="notice" {...props} />;
export const PopupBottomSheet = (props) => <BottomSheet type="popup" {...props} />;
export const SearchBottomSheet = (props) => <BottomSheet type="search" {...props} />;
export const SelectBottomSheet = (props) => <BottomSheet type="select" {...props} />;
export const TabBottomSheet = (props) => <BottomSheet type="tab" {...props} />;
export const OptionBottomSheet = (props) => <BottomSheet type="option" {...props} />;
export const PickerBottomSheet = (props) => <BottomSheet type="picker" {...props} />;
export const PickerCalendarMonthDayBottomSheet = (props) => <BottomSheet type="picker" variant="calendar-month-day" {...props} />;
export const PickerCalendarYearMonthBottomSheet = (props) => <BottomSheet type="picker" variant="calendar-year-month" {...props} />;
export const PickerCalendarYearMonthDayBottomSheet = (props) => <BottomSheet type="picker" variant="calendar-year-month-day" {...props} />;
export const PickerWheelDayBottomSheet = (props) => <BottomSheet type="picker" variant="wheel-day" {...props} />;
export const PickerWheelHourMinuteBottomSheet = (props) => <BottomSheet type="picker" variant="wheel-hour-minute" {...props} />;
export const PickerWheelPeriodBottomSheet = (props) => <BottomSheet type="picker" variant="wheel-period" {...props} />;
export const PickerWheelYearMonthDayBottomSheet = (props) => <BottomSheet type="picker" variant="wheel-year-month-day" {...props} />;

export const ShareBottomSheet = (props) => <BottomSheet type="share" {...props} />;

export default BottomSheet; 