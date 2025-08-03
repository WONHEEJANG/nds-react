import React, { useState } from 'react';

const Card = ({ 
  // 기본 props
  type = 'account', // account, data, etc, general, summary
  variant = 'basic', // basic, accordion, comb, list, price, 4column, highlight, input, date, detail, divide-multi, divide-single, grip, info, rate, sum, 2column, price-divide, price-double, price-single
  isOpen = false,
  onToggle,
  className = '',
  children,
  
  // Account 타입 props
  bankCode,
  accountName,
  bankName,
  accountNumber,
  mainData = [],
  expandData = [],
  
  // Data 타입 props
  badges = [],
  dataTitle,
  dataSubTitle,
  dataInfo = [],
  dataHash = [],
  dataSub,
  dataCategory,
  compareCheckbox,
  accordionData,
  
  // Etc/General Input 타입 props
  inputFields = [],
  deleteButton = false,
  onDelete,
  
  // General 타입 props
  date,
  detailTitle,
  detailSubTitle,
  divideData = [],
  sortable = false,
  onSort,
  infoData,
  inputType, // price, unit
  inputLabel,
  inputValue,
  inputUnit,
  inputPlaceholder,
  onInputChange,
  rateData,
  sumData,
  
  // Summary 타입 props
  summaryTitle,
  summarySubTitle,
  summaryData = [],
  summaryPriceData = [],
  summaryInfo,
  
  // 공통 props
  buttons = [],
  onButtonClick,
  onDotMenu,
  onRefresh,
  onCompareToggle,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);
  const [isCompareChecked, setIsCompareChecked] = useState(false);

  const handleToggle = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  const handleCompareToggle = () => {
    const newState = !isCompareChecked;
    setIsCompareChecked(newState);
    if (onCompareToggle) {
      onCompareToggle(newState);
    }
  };

  // 클래스명 생성
  const getCardClassName = () => {
    let classes = ['card'];
    
    if (type === 'account') {
      classes.push('account');
      if (variant === 'accordion') {
        classes.push('-comb', '-accor');
      } else if (variant === 'list') {
        classes.push('-comb');
      } else if (variant === 'price') {
        classes.push('-comb');
      }
    } else if (type === 'data') {
      classes.push('selection', 'card', '-data');
      if (variant === '4column') {
        classes.push('-4column');
      } else if (variant === 'highlight') {
        classes.push('-highlight');
      }
    } else if (type === 'etc') {
      classes.push('selection', 'card');
    } else if (type === 'general') {
      classes.push('account', 'card');
      if (variant === 'list') {
        classes.push('-list');
      } else if (variant === 'detail') {
        classes.push('detail');
      } else if (variant === 'info') {
        classes.push('info');
      } else if (variant === 'rate') {
        classes.push('selection', 'card');
      } else if (variant === 'sum') {
        classes.push('selection', 'card');
      }
    } else if (type === 'summary') {
      classes.push('card', '-sum');
    }
    
    if (className) {
      classes.push(className);
    }
    
    return classes.join(' ');
  };

  const getDlsClassName = () => {
    let classes = ['dls'];
    
    if (type === 'summary' && variant === 'accordion') {
      classes.push('-box');
    }
    
    if (isExpanded) {
      classes.push('-active');
    }
    
    return classes.join(' ');
  };

  // 데이터 렌더링
  const renderDataList = (data) => {
    return (
      <dl className="dl">
        {data.map((item, index) => (
          <div key={index}>
            <dt>{item.title}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    );
  };

  // 배지 렌더링
  const renderBadges = (badgeList) => {
    return (
      <div className="badges">
        {badgeList.map((badge, index) => (
          <span key={index} className={`badge ${badge.type || 'line-gray'}`}>
            {badge.text}
          </span>
        ))}
      </div>
    );
  };

  // Account 타입 카드
  if (type === 'account') {
    if (variant === 'accordion') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            <div data-bankcode={bankCode} className="info">
              <span className="name">
                <span>{accountName}</span>
              </span>
              <span className="account-number">
                <span>{bankName}</span>
                <span>{accountNumber}</span>
              </span>
            </div>

            {mainData.length > 0 && renderDataList(mainData)}

            {expandData.length > 0 && (
              <div className={getDlsClassName()} data-role="fold">
                <button 
                  type="button" 
                  className="more" 
                  data-role="marker"
                  onClick={handleToggle}
                >
                  <span className="hide">
                    {isExpanded ? '접기' : '더보기'}
                  </span>
                </button>
                <dl className="dl" data-role={isExpanded ? 'visible' : 'hidden'}>
                  {expandData.map((item, index) => (
                    <div key={index}>
                      <dt>{item.title}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'list') {
      return (
        <div className={getCardClassName()} {...props}>
          <div className="dot-menu">
            <button type="button" className="button" onClick={onDotMenu}>
              <span className="hide">더보기</span>
            </button>
          </div>
          <div data-bankcode={bankCode} className="info">
            <span className="name">
              <span>{accountName}</span>
            </span>
            <span className="account-number">
              <span>{accountNumber}</span>
            </span>
          </div>
          
          {mainData.length > 0 && renderDataList(mainData)}
          
          {buttons.length > 0 && (
            <div className="buttons">
              {buttons.map((button, index) => (
                <button 
                  key={index}
                  type="button" 
                  className={`button -tertiary -sm ${button.className || ''}`}
                  onClick={() => onButtonClick && onButtonClick(button, index)}
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (variant === 'price') {
      return (
        <div className={getCardClassName()} {...props}>
          <div className="dot-menu">
            <button type="button" className="button" onClick={onDotMenu}>
              <span className="hide">더보기</span>
            </button>
          </div>
          <button type="button" data-bankcode={bankCode} className="info">
            <span className="name">
              <span>{accountName}</span>
            </span>
            <span className="account-number">
              <span>{accountNumber}</span>
            </span>
          </button>
          
          <div className="amount">
            <div className="key">금액</div>
            <div className="value">
              <button type="button" className="-refresh" onClick={onRefresh}>
                <span className="hide">새로고침</span>
              </button>
              <span>
                <span>{mainData[0]?.value || '0'}</span>원
              </span>
            </div>
          </div>
          
          {buttons.length > 0 && (
            <div className="buttons">
              {buttons.map((button, index) => (
                <button 
                  key={index}
                  type="button" 
                  className={`button -tertiary -sm ${button.className || ''}`}
                  onClick={() => onButtonClick && onButtonClick(button, index)}
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }
  }

  // Data 타입 카드
  if (type === 'data') {
    if (variant === '4column') {
      return (
        <div className={getCardClassName()} {...props}>
          <ul>
            <li>
              <div className="int-rate -bordered" role="button">
                {badges.length > 0 && (
                  <div className="top-area badges">
                    {renderBadges(badges)}
                  </div>
                )}
                <div className="data-info-main">
                  {dataSubTitle}
                  <div className="info-title">
                    {dataTitle}
                  </div>
                </div>
                <div className="info-standard sep-four">
                  <div className="standard-value">
                    {dataInfo.map((item, index) => (
                      <div key={index} className="value-item">
                        <p className="month-text">{item.period}</p>
                        <span className={item.value.startsWith('+') ? 'red' : item.value.startsWith('-') ? 'blue' : ''}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                {dataSub && (
                  <div className="info-sub">
                    <p className="p">{dataSub}</p>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      );
    }

    if (variant === 'highlight') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            <ul>
              <li>
                <div className="int-rate -bordered" role="button">
                  {badges.length > 0 && (
                    <div className="top-area badges">
                      {renderBadges(badges)}
                    </div>
                  )}
                  <a href="javascript:void(0)" aria-haspopup="true">
                    <div className="data-info-main">
                      {dataTitle}
                      <div className="info-title">
                        {dataSubTitle}
                      </div>
                      {dataInfo.length > 0 && (
                        <div className="info-list">
                          <ul>
                            {dataInfo.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <div className="info-standard">
                      <p className="standard-h">기준가</p>
                      <p className="standard-price">
                        {dataSub?.price}
                        <span className="red">{dataSub?.change}</span>
                      </p>
                      <div className="standard-value">
                        {dataSub?.periods?.map((period, index) => (
                          <div key={index} className="value-item">
                            <p className="month-text">{period.period}</p>
                            <span className={period.value.startsWith('+') ? 'red' : 'blue'}>
                              {period.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </a>
                  {compareCheckbox && (
                    <div className="compare-checkbox">
                      비교하기
                      <div className="checkbox -sm">
                        <input 
                          type="checkbox" 
                          id="compare-checkbox" 
                          checked={isCompareChecked}
                          onChange={handleCompareToggle}
                        />
                        <label htmlFor="compare-checkbox"></label>
                      </div>
                    </div>
                  )}
                  {accordionData && (
                    <div className="accordion -graybox" data-role="fold">
                      <button type="button" className="title" data-role="marker" title="접힘">
                        {accordionData.title}
                      </button>
                      <div className="panel" data-role="hidden">
                        <div className="dummy">{accordionData.content}</div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
      );
    }
  }

  // Etc Input 타입 카드
  if (type === 'etc' && variant === 'input') {
    return (
      <div className={getCardClassName()} {...props}>
        <ul>
          <li>
            <div className="int-rate -bordered">
              {inputFields.map((field, index) => (
                <div key={index} className="field input">
                  {field.type === 'text' && (
                    <>
                      <label htmlFor={field.id} className="label">{field.label}</label>
                      <div className="text line -basic">
                        <input 
                          type="text" 
                          id={field.id} 
                          value={field.value || ''} 
                          placeholder={field.placeholder}
                          onChange={field.onChange}
                        />
                      </div>
                    </>
                  )}
                  {field.type === 'serial' && (
                    <>
                      <label htmlFor={field.id} className="label">{field.label}</label>
                      <div className="mix rrn">
                        <div className="text line flex-6" data-clear="false">
                          <input 
                            type="tel" 
                            className="left-side num-call" 
                            id={field.id}
                            placeholder="앞 6자리" 
                            title="주민등록번호 앞자리" 
                            aria-haspopup="true"
                            value={field.value?.substring(0, 6) || ''} 
                            readOnly={field.readonly}
                          />
                        </div>
                        <div className="dash line">-</div>
                        <div className="text line flex-6" data-clear="false">
                          <input 
                            type="password" 
                            className="mid-side num-call pl-4" 
                            placeholder="뒤 7자리"
                            title="주민등록번호 뒷자리" 
                            aria-haspopup="true" 
                            readOnly={field.readonly}
                            value={field.value?.substring(7) || ''}
                          />
                          <button className="clear" type="button" style={{zIndex: -1}}>
                            <div className="hide">초기화</div>
                          </button>
                        </div>
                        <div className="space line flex-4 right-side">
                          <button type="button" className="button -xs -fit" disabled>
                            {field.buttonText || '인증'}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                  {field.type === 'radio' && (
                    <>
                      <p className="label">{field.label}</p>
                      <div className="box-radios">
                        {field.options?.map((option, optionIndex) => (
                          <div key={optionIndex} className="box-radio">
                            <input 
                              type="radio" 
                              name={field.name}
                              id={`${field.name}-${optionIndex}`} 
                              checked={field.value === option.value}
                              onChange={field.onChange}
                            />
                            <label htmlFor={`${field.name}-${optionIndex}`}>{option.label}</label>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                  {field.type === 'phone' && (
                    <>
                      <label htmlFor={field.id} className="label">{field.label}</label>
                      <div className="mix phone line">
                        <div className="select flex-6">
                          <button type="button" className="left-side" aria-haspopup="true" title="휴대폰 앞자리 선택">
                            {field.prefix || '010'}
                          </button>
                        </div>
                        <div className="text flex-7 -readonly -textless" data-clear="false">
                          <input 
                            type="tel" 
                            className="mid-side num-call pl-8"
                            placeholder="-없이 입력" 
                            title="휴대폰번호 입력" 
                            aria-haspopup="true"
                            readOnly={field.readonly}
                            value={field.value || ''}
                          />
                        </div>
                        <div className="space flex-4 -lined right-side">
                          <button type="button" className="button -xs -fit" title="인증번호 요청" disabled>
                            {field.buttonText || '요청'}
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
              <div className="in-card buttons">
                {buttons.map((button, index) => (
                  <button 
                    key={index}
                    type="button" 
                    className={`button -tertiary -sm ${button.className || ''}`}
                    disabled={button.disabled}
                    onClick={() => onButtonClick && onButtonClick(button, index)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
              {deleteButton && (
                <button type="button" className="del-btn" onClick={handleDelete}>
                  <span className="hide">삭제</span>
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>
    );
  }

  // General 타입 카드들
  if (type === 'general') {
    if (variant === 'accordion') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            {badges.length > 0 && renderBadges(badges)}
            <div className="info">
              <span className="name">
                <span>{dataTitle}</span>
              </span>
            </div>
            {mainData.length > 0 && renderDataList(mainData)}
            <div className="accordion bg-grey -active" data-role="fold">
              <button type="button" className="title" data-role="marker" title="펼쳐짐">
                {accordionData?.title || '계약서류 확인'}
              </button>
              <div className="panel" data-role="hidden">
                <div className="download">
                  <ul>
                    {accordionData?.files?.map((file, index) => (
                      <li key={index}>
                        <div>{file.name}</div>
                        <div>
                          <button type="button" title={file.name} className="down-btn">
                            <span className="hide">다운로드</span>
                          </button>
                          <button type="button" title={file.name} aria-haspopup="true" className="go-link">
                            <span className="hide">바로보기</span>
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (variant === 'date') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            <div className="info list-data-tit">
              {date}
            </div>
            {mainData.length > 0 && renderDataList(mainData)}
          </div>
        </div>
      );
    }

    if (variant === 'detail') {
      return (
        <div className={getCardClassName()} {...props}>
          <div className="info -silver-won">
            <span className="name">
              <span>{detailTitle}</span>
            </span>
            <span className="account-number">
              <span>{detailSubTitle}</span>
            </span>
          </div>
          {buttons.length > 0 && (
            <div className="buttons">
              {buttons.map((button, index) => (
                <button 
                  key={index}
                  type="button" 
                  className={`button -tertiary -sm ${button.className || ''}`}
                  onClick={() => onButtonClick && onButtonClick(button, index)}
                >
                  {button.text}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (variant === 'divide-multi') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            {divideData.map((section, index) => (
              <div key={index}>
                <div className="info">
                  <span className="name">
                    <span>{section.title}</span>
                  </span>
                </div>
                {section.data && renderDataList(section.data)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (variant === 'divide-single') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            {badges.length > 0 && renderBadges(badges)}
            <div className="info">
              <span className="name">
                <span>{dataTitle}</span>
              </span>
              <span className="account-number">
                <span>{dataSubTitle}</span>
              </span>
            </div>
            {mainData.length > 0 && renderDataList(mainData)}
            <hr className="hr list-1" aria-hidden="true" tabIndex="-1" />
            {expandData.length > 0 && renderDataList(expandData)}
            {buttons.length > 0 && (
              <div className="buttons">
                {buttons.map((button, index) => (
                  <button 
                    key={index}
                    type="button" 
                    className={`button -tertiary -sm ${button.className || ''}`}
                    onClick={() => onButtonClick && onButtonClick(button, index)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'grip') {
      return (
        <div className="sortable-wrap">
          <ul id="sortable" className="sort-list ui-sortable">
            <li className="-registered first">
              <div className="info">
                <span className="name">
                  <span>{dataTitle}</span>
                </span>
                <span className="account-number">
                  <span className="number">{accountNumber}</span>
                </span>
              </div>
              <div className="sortable-buttons">
                <div className="space">
                  <button type="button" className="button -tertiary -xs" onClick={onDelete}>
                    삭제
                  </button>
                </div>
                <div className="sort-button ui-sortable-handle"></div>
                <div className="sort-button-box">
                  <button type="button" className="sort-button-up hide" disabled>
                    리스트를 위로 이동
                  </button>
                  <button type="button" className="sort-button-down hide">
                    리스트를 아래로 이동
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    }

    if (variant === 'info') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            <div className="data-split">
              <div className="left-side">
                <span className="info list-data-tit">{infoData?.title}</span>
                <span className="info-date">{infoData?.date}</span>
                <span className="list-data-sub">
                  {infoData?.subInfo?.map((info, index) => (
                    <span key={index}>{info}</span>
                  ))}
                </span>
              </div>
              <div className="right-side">
                <span className="list-data-sub">
                  <span>{infoData?.rightData?.value}</span>
                  <span>{infoData?.rightData?.description}</span>
                </span>
              </div>
            </div>
            {buttons.length > 0 && (
              <div className="buttons">
                {buttons.map((button, index) => (
                  <button 
                    key={index}
                    type="button" 
                    className={`button -tertiary -sm ${button.className || ''}`}
                    onClick={() => onButtonClick && onButtonClick(button, index)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'input') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            {badges.length > 0 && renderBadges(badges)}
            <div className="info">
              <span className="name">
                <span>{dataTitle}</span>
              </span>
              <span className="account-number">
                <span>{accountNumber}</span>
              </span>
            </div>
            {mainData.length > 0 && renderDataList(mainData)}
            <div className="input -bordertype">
              <div className="mix">
                <span className="left-text">{inputLabel}</span>
                <div className={`text -percent ${inputType === 'unit' ? '-plh-right' : ''}`} data-clear="false">
                  <input 
                    type="tel" 
                    className="right num-call" 
                    aria-haspopup="true"
                    placeholder={inputPlaceholder}
                    title={`${inputLabel} 입력`}
                    readOnly
                    value={inputValue || ''}
                    onChange={onInputChange}
                  />
                  <div className="percent">{inputUnit}</div>
                </div>
              </div>
            </div>
            {expandData.length > 0 && renderDataList(expandData)}
            <button type="button" className="del-btn -fixed" onClick={handleDelete}>
              <span className="hide">삭제</span>
            </button>
          </div>
        </div>
      );
    }

    if (variant === 'list') {
      return (
        <div className="field">
          <div className={getCardClassName()} {...props}>
            {badges.length > 0 && renderBadges(badges)}
            <div className="info">
              <span className="name">
                <span>{dataTitle}</span>
              </span>
              <span className="account-number">
                <span>{accountNumber}</span>
              </span>
            </div>
            {mainData.length > 0 && renderDataList(mainData)}
            <button type="button" className="del-btn -fixed" onClick={handleDelete}>
              <span className="hide">삭제</span>
            </button>
            {buttons.length > 0 && (
              <div className="buttons">
                {buttons.map((button, index) => (
                  <button 
                    key={index}
                    type="button" 
                    className={`button -tertiary -sm ${button.className || ''}`}
                    onClick={() => onButtonClick && onButtonClick(button, index)}
                  >
                    {button.text}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'rate') {
      return (
        <div className={getCardClassName()} {...props}>
          <ul>
            <li>
              <div className="int-rate -bordered" role="button">
                {badges.length > 0 && (
                  <div className="top-area badges">
                    {renderBadges(badges)}
                  </div>
                )}
                {dataCategory && (
                  <div className="top-area badges">
                    <span className="data-category">{dataCategory}</span>
                    {renderBadges(badges)}
                  </div>
                )}
                <div className="data-info-main">
                  <div className="info-title">
                    {dataTitle}
                  </div>
                  {dataSubTitle}
                </div>
                {dataHash.length > 0 && (
                  <div className="data-hash">
                    {dataHash.map((hash, index) => (
                      <span key={index}>#{hash}</span>
                    ))}
                  </div>
                )}
                {dataSub && (
                  <div className="data-sub">
                    <span className="title">{dataSub.title}</span>
                    <span className="value">{dataSub.value}</span>
                    <span className="info-more">{dataSub.info}</span>
                  </div>
                )}
                <hr className="hr list-1" aria-hidden="true" tabIndex="-1" />
                <div className="card-data">
                  {mainData.length > 0 && renderDataList(mainData)}
                </div>
              </div>
            </li>
          </ul>
        </div>
      );
    }

    if (variant === 'sum') {
      return (
        <div className={getCardClassName()} {...props}>
          <ul>
            <li>
              <div className="int-rate -bordered -sum" role="button">
                {badges.length > 0 && (
                  <div className="top-area">
                    <div className="top-tooltip">
                      <span className="badge line-blue">{badges[0]?.text}</span>
                      <p className="badge-tooltip">
                        {badges[0]?.tooltip}
                        <span className="tooltip">
                          <button type="button" className="trigger">
                            <span className="hide">툴팁</span>
                          </button>
                          <span className="panel">
                            <span className="title">{badges[0]?.tooltipTitle}</span>
                            <span className="t-content">
                              {badges[0]?.tooltipContent?.map((content, index) => (
                                <span key={index} className="dot">
                                  {content}
                                </span>
                              ))}
                            </span>
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                )}
                <div className="data-info-main">
                  <div className="info-title">
                    {dataTitle}
                  </div>
                  {dataSubTitle}
                </div>
                {mainData.length > 0 && renderDataList(mainData)}
                {sumData && (
                  <div className="data-box" id="data-rd">
                    <div className="data-box-title">{sumData.title}</div>
                    <div className="data-box-content">{sumData.content}</div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      );
    }
  }

  // Summary 타입 카드들
  if (type === 'summary') {
    if (variant === '2column') {
      return (
        <div className={getCardClassName()} {...props}>
          <dl className="dl -box -column2 -w50">
            {summaryData.map((item, index) => (
              <div key={index}>
                <dt>
                  {item.link ? (
                    <a href="javascript:void(0)" className="a -arrow">{item.title}</a>
                  ) : (
                    item.title
                  )}
                </dt>
                <dd className={item.point ? 'point' : ''}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      );
    }

    if (variant === 'accordion') {
      return (
        <div className={getCardClassName()} {...props}>
          <div className={getDlsClassName()} data-role="fold">
            <button type="button" className="more" data-role="marker" onClick={handleToggle}>
              <span>{isExpanded ? '접기' : '펼치기'}</span>
            </button>
            <div className="top-data-area">
              <p className="title">{summaryTitle}</p>
            </div>
            <dl className="dl">
              {summaryData.map((item, index) => (
                <div key={index} data-role={item.hidden ? 'hidden' : undefined}>
                  <dt>{item.title}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
            {summaryInfo && (
              <>
                <hr className="hr list-1" aria-hidden="true" tabIndex="-1" data-role="hidden" />
                <div data-role="hidden" className="top-data-area">
                  <p className="title">{summaryInfo.title}</p>
                </div>
                <dl className="dl">
                  {summaryInfo.data?.map((item, index) => (
                    <div key={index} data-role="hidden">
                      <dt>{item.title}</dt>
                      <dd>{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}
          </div>
        </div>
      );
    }

    if (variant === 'basic') {
      return (
        <div className={getCardClassName()} {...props}>
          <div className="-box">
            <div className="top-data-area">
              {badges.length > 0 && (
                <dt className="badges">
                  {renderBadges(badges)}
                </dt>
              )}
              <dt className="title">{summaryTitle}</dt>
              <dt className="sub-title">{summarySubTitle}</dt>
            </div>
            {summaryData.length > 0 && renderDataList(summaryData)}
          </div>
        </div>
      );
    }

    if (variant === 'price-divide') {
      return (
        <div className={getCardClassName()} {...props}>
          <div className="dl -divide">
            <p className="txt">타이틀</p>
            <dl className="dl">
              <div className="monthly">
                <dt>예상금리<span>부가설명</span></dt>
                <dd>
                  <span className="point"><span>매월</span>0원</span>
                  <span className="sub-info">부가설명</span>
                </dd>
              </div>
            </dl>
            <p className="info">가이드문구를 입력해 주세요.</p>

            <hr className="hr list-1" aria-hidden="true" tabIndex="-1" data-role="hidden" />

            <p className="txt">타이틀</p>
            <dl className="dl">
              <div className="monthly">
                <dt>예상금리<span>부가설명</span></dt>
                <dd>
                  <span className="point"><span>매월</span>0원</span>
                  <span className="sub-info">부가설명</span>
                </dd>
              </div>
            </dl>
            <p className="info">가이드문구를 입력해 주세요.</p>
          </div>
        </div>
      );
    }

    if (variant === 'price-double') {
      return (
        <div className={getCardClassName()} {...props}>
          <dl className="dl -box price-single -double">
            {summaryPriceData.map((item, index) => (
              <div key={index} className="monthly">
                <dt>
                  {item.label}
                  {item.subLabel && <span>{item.subLabel}</span>}
                </dt>
                <dd>
                  <span className="point">
                    <span>{item.period}</span>
                    {item.value}
                  </span>
                  {item.subInfo && <span className="sub-info">{item.subInfo}</span>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );
    }

    if (variant === 'price-single') {
      return (
        <div className={getCardClassName()} {...props}>
          <dl className="dl -box price-single">
            <div className="monthly">
              <dt>
                {summaryPriceData[0]?.label}
                {summaryPriceData[0]?.subLabel && <span>{summaryPriceData[0].subLabel}</span>}
              </dt>
              <dd>
                <span className="point">
                  <span>{summaryPriceData[0]?.period}</span>
                  {summaryPriceData[0]?.value}
                </span>
                {summaryPriceData[0]?.subInfo && <span className="sub-info">{summaryPriceData[0].subInfo}</span>}
              </dd>
            </div>
          </dl>
        </div>
      );
    }
  }

  // 기본 카드 (children만 렌더링)
  return (
    <div className="field">
      <div className={getCardClassName()} {...props}>
        {children}
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const AccountCard = (props) => <Card type="account" {...props} />;
export const AccountAccordionCard = (props) => <Card type="account" variant="accordion" {...props} />;
export const AccountListCard = (props) => <Card type="account" variant="list" {...props} />;
export const AccountPriceCard = (props) => <Card type="account" variant="price" {...props} />;

export const DataCard = (props) => <Card type="data" {...props} />;
export const Data4ColumnCard = (props) => <Card type="data" variant="4column" {...props} />;
export const DataHighlightCard = (props) => <Card type="data" variant="highlight" {...props} />;

export const EtcInputCard = (props) => <Card type="etc" variant="input" {...props} />;

export const GeneralCard = (props) => <Card type="general" {...props} />;
export const GeneralAccordionCard = (props) => <Card type="general" variant="accordion" {...props} />;
export const GeneralDateCard = (props) => <Card type="general" variant="date" {...props} />;
export const GeneralDetailCard = (props) => <Card type="general" variant="detail" {...props} />;
export const GeneralDivideMultiCard = (props) => <Card type="general" variant="divide-multi" {...props} />;
export const GeneralDivideSingleCard = (props) => <Card type="general" variant="divide-single" {...props} />;
export const GeneralGripCard = (props) => <Card type="general" variant="grip" {...props} />;
export const GeneralInfoCard = (props) => <Card type="general" variant="info" {...props} />;
export const GeneralInputCard = (props) => <Card type="general" variant="input" {...props} />;
export const GeneralListCard = (props) => <Card type="general" variant="list" {...props} />;
export const GeneralRateCard = (props) => <Card type="general" variant="rate" {...props} />;
export const GeneralSumCard = (props) => <Card type="general" variant="sum" {...props} />;

export const SummaryCard = (props) => <Card type="summary" {...props} />;
export const Summary2ColumnCard = (props) => <Card type="summary" variant="2column" {...props} />;
export const SummaryAccordionCard = (props) => <Card type="summary" variant="accordion" {...props} />;
export const SummaryBasicCard = (props) => <Card type="summary" variant="basic" {...props} />;
export const SummaryPriceDivideCard = (props) => <Card type="summary" variant="price-divide" {...props} />;
export const SummaryPriceDoubleCard = (props) => <Card type="summary" variant="price-double" {...props} />;
export const SummaryPriceSingleCard = (props) => <Card type="summary" variant="price-single" {...props} />;

export default Card; 