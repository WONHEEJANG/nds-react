import React from 'react';

const Navigation = ({ 
  // 기본 props
  type = 'top', // top, bottom
  variant = 'basic', // basic, full-popup, login, main, mydata, partnership, process, tooltip, all-one
  title = '',
  onBack,
  onHome,
  onMenu,
  onClose,
  children,
  className = '',
  
  // Bottom 타입 props
  bottomMenuItems = [],
  onBottomMenuClick,
  
  // Top 타입 props
  userName,
  onUserNameClick,
  showAlarm = false,
  alarmCount = 0,
  onAlarmClick,
  showBigSize = false,
  onBigSizeClick,
  showTooltip = false,
  tooltipTitle,
  tooltipContent,
  
  ...props
}) => {
  // 클래스명 생성
  const getClassName = () => {
    let className = 'navigation';
    
    if (type === 'bottom') {
      className += ' -bottom';
      if (variant === 'all-one') {
        className += ' -all-one';
      }
    } else if (type === 'top') {
      className += ' -top';
      if (variant === 'basic') {
        className += ' -basic';
      } else if (variant === 'full-popup') {
        className += ' -full-popup';
      } else if (variant === 'login') {
        className += ' -login';
      } else if (variant === 'main') {
        className += ' -main';
      } else if (variant === 'mydata') {
        className += ' -mydata';
      } else if (variant === 'partnership') {
        className += ' -partnership';
      } else if (variant === 'process') {
        className += ' -process';
      } else if (variant === 'tooltip') {
        className += ' -tooltip';
      }
    }
    
    return className;
  };

  // Bottom 타입 렌더링
  const renderBottom = () => {
    return (
      <div className="linked-bottom-menu">
        {bottomMenuItems.map((item, index) => (
          <a 
            key={index}
            href="javascript:void(0);" 
            className={`linked-${item.type}`}
            role="button"
            title={item.selected ? '선택됨' : ''}
            onClick={() => onBottomMenuClick?.(item, index)}
          >
            {item.text}
          </a>
        ))}
      </div>
    );
  };

  // Top Basic 타입 렌더링
  const renderTopBasic = () => {
    return (
      <div className="page">
        <div className="container">
          <div className="navigation">
            <header className="header top">
              <div className="inner basic">
                <div className="funcs">
                  <button type="button" className="func -back" onClick={onBack}>
                    <span className="hide">뒤로가기</span>
                  </button>
                </div>
                <h1 className="title">{title}</h1>
                <div className="funcs">
                  <button type="button" className="func -home" onClick={onHome}>
                    <span className="hide">홈</span>
                  </button>
                  <button type="button" className="func -menu" onClick={onMenu}>
                    <span className="hide">전체메뉴</span>
                  </button>
                </div>
              </div>
            </header>
          </div>
          <main className="contents">
            {children}
          </main>
        </div>
      </div>
    );
  };

  // Top Full Popup 타입 렌더링
  const renderTopFullPopup = () => {
    return (
      <div className="popup -active">
        <div className="navigation">
          <div className="header">
            <div className="inner">
              <h1 className="title">{title}</h1>
              <div className="funcs">
                <button type="button" className="func -close" onClick={onClose}>
                  <span className="hide">닫기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Top Login 타입 렌더링
  const renderTopLogin = () => {
    return (
      <div className="popup -active">
        <div className="navigation">
          <div className="header">
            <div className="inner -fullpop">
              <div className="funcs">
                <button type="button" className="func -back" onClick={onBack}>
                  <span className="hide">뒤로가기</span>
                </button>
              </div>
              <h1 className="title -allone-logo">
                <img src="./assets/imgs/nds/common/img_nh-allone_24.png" alt="NH올원뱅크 타이틀 로고" />
              </h1>
              <div className="funcs">
                <button type="button" className="func -menu" onClick={onMenu}>
                  <span className="hide">전체메뉴</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Top Main 타입 렌더링
  const renderTopMain = () => {
    return (
      <div className="navigation">
        <header className="header top">
          <div className="main-header">
            <div className="funcs">
              <p className="user-name">
                <a href="javascript:void(0)" className="a -arrow" onClick={onUserNameClick}>
                  <strong className="ellipsis">{userName}</strong>님
                </a>
              </p>
            </div>
            <div className="funcs">
              <button type="button" className="func -bigsize" onClick={onBigSizeClick}>
                <span className="hide">큰글</span>
              </button>
              <button 
                type="button" 
                className={`func -alarm ${showAlarm ? '-active' : ''}`}
                onClick={onAlarmClick}
              >
                <span className="hide">
                  {showAlarm ? '새로운 알람이 있습니다.' : '알람'}
                </span>
              </button>
              <button type="button" className="func -menu" onClick={onMenu}>
                <span className="hide">전체메뉴</span>
              </button>
            </div>
          </div>
        </header>
      </div>
    );
  };

  // Top MyData 타입 렌더링
  const renderTopMyData = () => {
    return (
      <div className="popup -active">
        <div className="navigation">
          <div className="header">
            <div className="inner -fullpop">
              <div className="funcs">
                <button type="button" className="func -back" onClick={onBack}>
                  <span className="hide">뒤로가기</span>
                </button>
              </div>
              <h1 className="title -allone-logo">
                <img src="./assets/imgs/nds/common/img_nh-mydata_24.png" alt="NH마이데이터터 타이틀 로고" />
              </h1>
              <div className="funcs">
                <button type="button" className="func -home" onClick={onHome}>
                  <span className="hide">홈</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Top Partnership 타입 렌더링
  const renderTopPartnership = () => {
    return (
      <div className="popup -active">
        <div className="navigation">
          <div className="header">
            <div className="inner -fullpop">
              <div className="funcs">
                <button type="button" className="func -back" onClick={onBack}>
                  <span className="hide">뒤로가기</span>
                </button>
              </div>
              <h1 className="title">{title}</h1>
              <div className="funcs">
                <button type="button" className="func" onClick={onClose}>
                  <span>닫기</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Top Process 타입 렌더링
  const renderTopProcess = () => {
    return (
      <div className="page">
        <div className="navigation">
          <header className="header top">
            <div className="inner process">
              <div className="funcs">
                <button type="button" className="func -back" onClick={onBack}>
                  <span className="hide">뒤로가기</span>
                </button>
              </div>
              <h1 className="title">{title}</h1>
              <div className="funcs">
                <button type="button" className="func" onClick={onClose}>
                  취소
                </button>
              </div>
            </div>
          </header>
        </div>
        <main className="contents">
          {children}
        </main>
      </div>
    );
  };

  // Top Tooltip 타입 렌더링
  const renderTopTooltip = () => {
    return (
      <div className="popup -active">
        <div className="navigation">
          <div className="header">
            <div className="inner -fullpop">
              <div className="funcs">
                <button type="button" className="func -back" onClick={onBack}>
                  <span className="hide">뒤로가기</span>
                </button>
              </div>
              <h1 className="title">
                {title}
                {showTooltip && (
                  <span className="tooltip">
                    <button type="button" className="trigger">
                      <span className="hide">툴팁</span>
                    </button>
                    <span className="panel">
                      <span className="title">{tooltipTitle}</span>
                      <span className="t-content">
                        {tooltipContent}
                      </span>
                    </span>
                  </span>
                )}
              </h1>
              <div className="funcs">
                <button type="button" className="func -close" onClick={onClose}>
                  <span className="hide">취소</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 메인 컨텐츠 렌더링
  const renderContent = () => {
    if (type === 'bottom') {
      return renderBottom();
    } else if (type === 'top') {
      switch (variant) {
        case 'basic':
          return renderTopBasic();
        case 'full-popup':
          return renderTopFullPopup();
        case 'login':
          return renderTopLogin();
        case 'main':
          return renderTopMain();
        case 'mydata':
          return renderTopMyData();
        case 'partnership':
          return renderTopPartnership();
        case 'process':
          return renderTopProcess();
        case 'tooltip':
          return renderTopTooltip();
        default:
          return renderTopBasic();
      }
    }
    return null;
  };

  return (
    <div className={getClassName()}>
      {renderContent()}
    </div>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const BottomNavigation = (props) => <Navigation type="bottom" {...props} />;
export const BottomAllOneNavigation = (props) => <Navigation type="bottom" variant="all-one" {...props} />;

export const TopNavigation = (props) => <Navigation type="top" {...props} />;
export const TopBasicNavigation = (props) => <Navigation type="top" variant="basic" {...props} />;
export const TopFullPopupNavigation = (props) => <Navigation type="top" variant="full-popup" {...props} />;
export const TopLoginNavigation = (props) => <Navigation type="top" variant="login" {...props} />;
export const TopMainNavigation = (props) => <Navigation type="top" variant="main" {...props} />;
export const TopMyDataNavigation = (props) => <Navigation type="top" variant="mydata" {...props} />;
export const TopPartnershipNavigation = (props) => <Navigation type="top" variant="partnership" {...props} />;
export const TopProcessNavigation = (props) => <Navigation type="top" variant="process" {...props} />;
export const TopTooltipNavigation = (props) => <Navigation type="top" variant="tooltip" {...props} />;

export default Navigation; 