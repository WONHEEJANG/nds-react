import React from 'react';

export type NavigationType = 'top' | 'bottom' | 'tab';
export type TopNavVariant = 'basic' | 'main' | 'process' | 'full-popup' | 'login';
export type TabType = 'fixed' | 'flexible';

export interface NavigationItem {
  id: string;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}

export interface BottomNavItem extends NavigationItem {
  type: 'finance' | 'mall' | 'mydata' | 'life';
}

export interface NavigationProps {
  /** 네비게이션 타입 */
  type: NavigationType;
  /** 상단 네비게이션 변형 */
  topVariant?: TopNavVariant;
  /** 제목 */
  title?: string;
  /** 로고 이미지 경로 (login 타입용) */
  logoSrc?: string;
  /** 사용자 이름 (main 타입용) */
  userName?: string;
  /** 알림 활성 상태 (main 타입용) */
  hasNotification?: boolean;
  /** 탭 타입 */
  tabType?: TabType;
  /** 스와이프 활성화 (tab 타입용) */
  swipeable?: boolean;
  /** 네비게이션 아이템들 */
  items?: NavigationItem[] | BottomNavItem[];
  /** 뒤로가기 클릭 이벤트 */
  onBackClick?: () => void;
  /** 홈 클릭 이벤트 */
  onHomeClick?: () => void;
  /** 메뉴 클릭 이벤트 */
  onMenuClick?: () => void;
  /** 닫기 클릭 이벤트 */
  onCloseClick?: () => void;
  /** 취소 클릭 이벤트 */
  onCancelClick?: () => void;
  /** 사용자명 클릭 이벤트 */
  onUserNameClick?: () => void;
  /** 큰글 버튼 클릭 이벤트 */
  onBigSizeClick?: () => void;
  /** 알림 클릭 이벤트 */
  onNotificationClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  type,
  topVariant = 'basic',
  title,
  logoSrc = './assets/imgs/nds/common/img_nh-allone_24.png',
  userName,
  hasNotification = false,
  tabType = 'fixed',
  swipeable = false,
  items = [],
  onBackClick,
  onHomeClick,
  onMenuClick,
  onCloseClick,
  onCancelClick,
  onUserNameClick,
  onBigSizeClick,
  onNotificationClick,
  className = '',
}) => {
  const renderTopNavigation = () => {
    const getInnerClasses = () => {
      const classes = ['inner'];
      if (topVariant === 'basic') classes.push('basic');
      if (topVariant === 'process') classes.push('process');
      if (topVariant === 'login') classes.push('-fullpop');
      return classes.join(' ');
    };

    const getTitleClasses = () => {
      const classes = ['title'];
      if (topVariant === 'login') classes.push('-allone-logo');
      return classes.join(' ');
    };

    if (topVariant === 'main') {
      return (
        <div className="navigation">
          <header className="header top">
            <div className="main-header">
              <div className="funcs">
                {userName && (
                  <p className="user-name">
                    <a href="javascript:void(0)" className="a -arrow" onClick={onUserNameClick}>
                      <strong className="ellipsis">{userName}</strong>님
                    </a>
                  </p>
                )}
              </div>
              <div className="funcs">
                <button type="button" className="func -bigsize" onClick={onBigSizeClick}>
                  <span className="hide">큰글</span>
                </button>
                <button 
                  type="button" 
                  className={`func -alarm ${hasNotification ? '-active' : ''}`.trim()}
                  onClick={onNotificationClick}
                >
                  <span className="hide">새로운 알람이 있습니다.</span>
                </button>
                <button type="button" className="func -menu" onClick={onMenuClick}>
                  <span className="hide">전체메뉴</span>
                </button>
              </div>
            </div>
          </header>
        </div>
      );
    }

    return (
      <div className="navigation">
        <header className="header top">
          <div className={getInnerClasses()}>
            <div className="funcs">
              {(topVariant === 'basic' || topVariant === 'process' || topVariant === 'login') && (
                <button type="button" className="func -back" onClick={onBackClick}>
                  <span className="hide">뒤로가기</span>
                </button>
              )}
            </div>
            
            {title && (
              <h1 className={getTitleClasses()}>
                {topVariant === 'login' ? (
                  <img src={logoSrc} alt="NH올원뱅크 타이틀 로고" />
                ) : (
                  title
                )}
              </h1>
            )}
            
            <div className="funcs">
              {topVariant === 'basic' && (
                <>
                  <button type="button" className="func -home" onClick={onHomeClick}>
                    <span className="hide">홈</span>
                  </button>
                  <button type="button" className="func -menu" onClick={onMenuClick}>
                    <span className="hide">전체메뉴</span>
                  </button>
                </>
              )}
              {topVariant === 'process' && (
                <button type="button" className="func" onClick={onCancelClick}>
                  취소
                </button>
              )}
              {topVariant === 'full-popup' && (
                <button type="button" className="func -close" onClick={onCloseClick}>
                  <span className="hide">닫기</span>
                </button>
              )}
              {topVariant === 'login' && (
                <button type="button" className="func -menu" onClick={onMenuClick}>
                  <span className="hide">전체메뉴</span>
                </button>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  };

  const renderBottomNavigation = () => {
    const bottomItems = items as BottomNavItem[];
    
    return (
      <div className="linked-bottom-menu">
        {bottomItems.map((item) => (
          <a
            key={item.id}
            href={item.href || 'javascript:void(0);'}
            className={`linked-${item.type} ${item.className || ''}`.trim()}
            role="button"
            title={item.active ? '선택됨' : undefined}
            onClick={item.onClick}
          >
            {item.label}
          </a>
        ))}
      </div>
    );
  };

  const renderTabNavigation = () => {
    const getTabsClasses = () => {
      const classes = ['tabs'];
      if (swipeable) classes.push('-swipe');
      return classes.join(' ');
    };

    const getOuterClasses = () => {
      const classes = ['outer'];
      if (tabType === 'flexible') {
        classes.push('flex', '-relative', '-end');
      }
      return classes.join(' ');
    };

    const getListClasses = () => {
      const classes = ['list', 'tab', '-line'];
      classes.push(`-${tabType}`);
      return classes.join(' ');
    };

    return (
      <nav className={getTabsClasses()}>
        <div className={getOuterClasses()}>
          <div className="inner">
            <ul className={getListClasses()}>
              {items.map((item) => (
                <li key={item.id} className={`item ${item.active ? '-active' : ''}`.trim()}>
                  <a
                    href={item.href || 'javascript:void(0)'}
                    onClick={item.onClick}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    );
  };

  const getNavigationClasses = () => {
    const classes = [];
    if (className) classes.push(className);
    return classes.join(' ');
  };

  const renderNavigation = () => {
    switch (type) {
      case 'top':
        return renderTopNavigation();
      case 'bottom':
        return renderBottomNavigation();
      case 'tab':
        return renderTabNavigation();
      default:
        return null;
    }
  };

  return (
    <div className={getNavigationClasses()}>
      {renderNavigation()}
    </div>
  );
};

export default Navigation;