import React from 'react';
import Popup, { BasicPopup, LoginPopup, PushPopup, ErrorAccordionPopup } from '../Popup';

const PopupExamples = ({ isBasicPopupOpen, setIsBasicPopupOpen, isLoginPopupOpen, setIsLoginPopupOpen, isPushPopupOpen, setIsPushPopupOpen, isErrorAccordionPopupOpen, setIsErrorAccordionPopupOpen }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Popup Components - raw HTML</h2>
      
      {/* Basic Popup */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Popup</h3>
        <button type="button" className="a underline point" onClick={() => setIsBasicPopupOpen(true)}>
          테스트모드에서 클릭
        </button>
        <div className="nds__thumbnail">
          <img src="./prototype/NDS/images/962_21182.png" alt="" />
        </div>
        <BasicPopup 
          isOpen={isBasicPopupOpen}
          onClose={() => setIsBasicPopupOpen(false)}
          title="타이틀"
          content="내용을 입력해주세요."
        />
      </div>

      {/* Error Accordion Popup */}
      <div className="component-section">
        <h3 className="component-subtitle">Error Accordion Popup</h3>
        <button type="button" className="a underline point" onClick={() => setIsErrorAccordionPopupOpen(true)}>
          테스트모드에서 클릭
        </button>
        <div className="nds__thumbnail">
          <img src="./prototype/NDS/images/962_21870.png" alt="" />
        </div>
        <ErrorAccordionPopup 
          isOpen={isErrorAccordionPopupOpen}
          onClose={() => setIsErrorAccordionPopupOpen(false)}
          content="고객님의 이용에 불편을 드려 대단히 죄송합니다. 해결에 어려움이 있으시면 아래로 문의하세요."
          errorCodes={['ABCD0000', 'ABCD0000', 'ABCD0000']}
          phoneNumbers={['1661-3000', '1522-3000']}
        />
      </div>

      {/* Login Popup */}
      <div className="component-section">
        <h3 className="component-subtitle">Login Popup</h3>
        <button type="button" className="a underline point" onClick={() => setIsLoginPopupOpen(true)}>
          테스트모드에서 클릭
        </button>
        <div className="nds__thumbnail">
          <img src="./prototype/NDS/images/962_21869.png" alt="" />
        </div>
        <LoginPopup 
          isOpen={isLoginPopupOpen}
          onClose={() => setIsLoginPopupOpen(false)}
          title="로그인 연장 안내"
          content="약 10분간 이용이 없으면 금융정보 보호를 위해 자동으로 로그아웃됩니다. 계속 이용하려면 로그인을 연장해 주세요."
          remainingTime={24}
        />
      </div>

      {/* Push Popup */}
      <div className="component-section">
        <h3 className="component-subtitle">Push Popup</h3>
        <button type="button" className="a underline point" onClick={() => setIsPushPopupOpen(true)}>
          테스트모드에서 클릭
        </button>
        <div className="nds__thumbnail">
          <img src="./prototype/NDS/images/962_21868.png" alt="" />
        </div>
        <PushPopup 
          isOpen={isPushPopupOpen}
          onClose={() => setIsPushPopupOpen(false)}
          title="혜택정보 PUSH 알림"
          content="이벤트, 새소식, 상품정보 등 다양한 혜택 정보를 Push알림으로 받아보세요."
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <button onClick={() => setIsBasicPopupOpen(true)}>기본 팝업 열기</button>
          <button onClick={() => setIsLoginPopupOpen(true)}>로그인 팝업 열기</button>
          <button onClick={() => setIsPushPopupOpen(true)}>푸시 팝업 열기</button>
        </div>
        <BasicPopup 
          isOpen={isBasicPopupOpen}
          title="기본 팝업"
          content="이것은 기본 팝업입니다."
          onConfirm={() => console.log('Confirmed')}
          onClose={() => setIsBasicPopupOpen(false)}
        />
        <LoginPopup 
          isOpen={isLoginPopupOpen}
          title="로그인 연장 안내"
          content="약 10분간 이용이 없으면 금융정보 보호를 위해 자동으로 로그아웃됩니다."
          remainingTime={24}
          onLogout={() => console.log('Logout')}
          onExtend={() => console.log('Extend')}
          onClose={() => setIsLoginPopupOpen(false)}
        />
        <PushPopup 
          isOpen={isPushPopupOpen}
          title="혜택정보 PUSH 알림"
          content="이벤트, 새소식, 상품정보 등 다양한 혜택 정보를 Push알림으로 받아보세요."
          onAgree={() => console.log('Agreed')}
          onCancel={() => console.log('Cancelled')}
          onClose={() => setIsPushPopupOpen(false)}
        />
      </div>
    </div>
  );
};

export default PopupExamples;