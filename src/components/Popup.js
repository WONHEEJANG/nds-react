import React, { useState } from 'react';

const Popup = ({ 
  type = 'basic', // basic, error-accordion, login, push
  isOpen = false,
  title = '타이틀',
  content = '내용을 입력해주세요.',
  errorCodes = [],
  phoneNumbers = [],
  remainingTime,
  onConfirm,
  onCancel,
  onLogout,
  onExtend,
  onAgree,
  onClose,
  className = '',
  ...props
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    if (onClose) onClose();
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    if (onClose) onClose();
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    if (onClose) onClose();
  };

  const handleExtend = () => {
    if (onExtend) onExtend();
    if (onClose) onClose();
  };

  const handleAgree = () => {
    if (onAgree) onAgree();
    if (onClose) onClose();
  };

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`alert ${isOpen ? '-active' : ''}`} 
      style={{
        transform: 'translate(-50%, -50%)',
        maxWidth: '90vw',
        maxHeight: '90vh'
      }}
      {...props}
    >
      <div className="container">
        <div className="contents">
          <div className="content">
            {type !== 'error-accordion' && (
              <h2 className="h5">{title}</h2>
            )}
            <p className="noti-phrase">{content}</p>
            
            {type === 'error-accordion' && (
              <>
                <div className="accordion" data-role="fold">
                  <button 
                    type="button" 
                    className="title" 
                    data-role="marker"
                    onClick={toggleAccordion}
                  >
                    오류코드 확인
                  </button>
                  <div className={`panel ${isAccordionOpen ? '' : ''}`} data-role="hidden">
                    <div className="-error">
                      {errorCodes.map((code, index) => (
                        <p key={index} className="noti-phrase">{code}</p>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="tel-info">
                  고객행복센터 : 
                  {phoneNumbers.map((phone, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && ', '}
                      <a href={`tel:${phone}`}>{phone}</a>
                    </React.Fragment>
                  ))}
                </p>
              </>
            )}
            
            {type === 'login' && (
              <p className="noti-phrase login-time">
                남은시간 <span>{remainingTime}</span>초
              </p>
            )}
          </div>

          <div className="fixer">
            <div className={`buttons ${type === 'login' ? '-half' : type === 'push' ? '-custom' : ''}`}>
              {type === 'basic' && (
                <button type="button" className="button -secondary" onClick={handleConfirm}>
                  확인
                </button>
              )}
              
              {type === 'error-accordion' && (
                <button type="button" className="button -secondary" onClick={handleConfirm}>
                  확인
                </button>
              )}
              
              {type === 'login' && (
                <>
                  <button type="button" className="button -tertiary -md" onClick={handleLogout}>
                    로그아웃
                  </button>
                  <button type="button" className="button -secondary -md" onClick={handleExtend}>
                    로그인 연장
                  </button>
                </>
              )}
              
              {type === 'push' && (
                <>
                  <button type="button" className="button -tertiary -md flex-3" onClick={handleCancel}>
                    닫기
                  </button>
                  <button type="button" className="button -secondary -md flex-7" onClick={handleAgree}>
                    동의하고 알림받기
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const BasicPopup = (props) => <Popup type="basic" {...props} />;
export const ErrorAccordionPopup = (props) => <Popup type="error-accordion" {...props} />;
export const LoginPopup = (props) => <Popup type="login" {...props} />;
export const PushPopup = (props) => <Popup type="push" {...props} />;

export default Popup; 