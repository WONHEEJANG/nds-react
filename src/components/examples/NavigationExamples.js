import React from 'react';
import Navigation, { BottomNavigation, TopBasicNavigation, TopMainNavigation } from '../Navigation';

const NavigationExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Navigation Components - raw HTML</h2>
      
      {/* Bottom Navigation */}
      <div className="component-section">
        <h3 className="component-subtitle">Bottom Navigation</h3>
        
        {/* all-one */}
        <div className="component-section">
          <h4>all-one</h4>
          <div className="linked-bottom-menu">
            <a href="javascript:void(0);" className="linked-finance" role="button" title="선택됨">홈</a>
            <a href="javascript:void(0);" className="linked-mall" role="button">상품몰</a>
            <a href="javascript:void(0);" className="linked-mydata" role="button">마이데이터</a>
            <a href="javascript:void(0);" className="linked-life" role="button">생활+</a>
          </div>
        </div>
      </div>

      {/* Top Navigation */}
      <div className="component-section">
        <h3 className="component-subtitle">Top Navigation</h3>
        
        {/* basic */}
        <div className="component-section">
          <h4>basic</h4>
          <div className="page">
            <div className="container">
              <div className="navigation">
                <header className="header top">
                  <div className="inner basic">
                    <div className="funcs">
                      <button type="button" className="func -back"><span className="hide">뒤로가기</span></button>
                    </div>
                    <h1 className="title">basic</h1>
                    <div className="funcs">
                      <button type="button" className="func -home"><span className="hide">홈</span></button>
                      <button type="button" className="func -menu"><span className="hide">전체메뉴</span></button>
                    </div>
                  </div>
                </header>
              </div>
              <main className="contents"></main>
            </div>
          </div>
        </div>

        {/* full-popup */}
        <div className="component-section">
          <h4>full-popup</h4>
          <div className="popup -active">
            <div className="navigation">
              <div className="header">
                <div className="inner">
                  <h1 className="title">서비스 타이틀</h1>
                  <div className="funcs">
                    <button type="button" className="func -close"><span className="hide">닫기</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* login */}
        <div className="component-section">
          <h4>login</h4>
          <div className="popup -active">
            <div className="navigation">
              <div className="header">
                <div className="inner -fullpop">
                  <div className="funcs">
                    <button type="button" className="func -back"><span className="hide">뒤로가기</span></button>
                  </div>
                  <h1 className="title -allone-logo">
                    <img src="./assets/imgs/nds/common/img_nh-allone_24.png" alt="NH올원뱅크 타이틀 로고" />
                  </h1>
                  <div className="funcs">
                    <button type="button" className="func -menu"><span className="hide">전체메뉴</span></button>
                  </div>
                </div>
              </div>    
            </div>
          </div>
        </div>

        {/* main */}
        <div className="component-section">
          <h4>main</h4>
          <div className="navigation">
            <header className="header top">
              <div className="main-header">
                <div className="funcs">
                  <p className="user-name"><a href="javascript:void(0)" className="a -arrow"><strong className="ellipsis">김농협</strong>님</a></p>
                </div>
                <div className="funcs">
                  <button type="button" className="func -bigsize">
                    <span className="hide">큰글</span>
                  </button>
                  <button type="button" className="func -alarm -active">
                    <span className="hide">새로운 알람이 있습니다.</span>
                  </button>
                  <button type="button" className="func -menu">
                    <span className="hide">전체메뉴</span>
                  </button>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* mydata */}
        <div className="component-section">
          <h4>mydata</h4>
          <div className="navigation">
            <header className="header top">
              <div className="inner">
                <div className="funcs">
                  <button type="button" className="func -back"><span className="hide">뒤로가기</span></button>
                </div>
                <h1 className="title">마이데이터</h1>
                <div className="funcs">
                  <button type="button" className="func -menu"><span className="hide">전체메뉴</span></button>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* partnership */}
        <div className="component-section">
          <h4>partnership</h4>
          <div className="navigation">
            <header className="header top">
              <div className="inner">
                <div className="funcs">
                  <button type="button" className="func -back"><span className="hide">뒤로가기</span></button>
                </div>
                <h1 className="title">파트너십</h1>
                <div className="funcs">
                  <button type="button" className="func -menu"><span className="hide">전체메뉴</span></button>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* process */}
        <div className="component-section">
          <h4>process</h4>
          <div className="navigation">
            <header className="header top">
              <div className="inner">
                <div className="funcs">
                  <button type="button" className="func -back"><span className="hide">뒤로가기</span></button>
                </div>
                <h1 className="title">프로세스</h1>
                <div className="funcs">
                  <button type="button" className="func -menu"><span className="hide">전체메뉴</span></button>
                </div>
              </div>
            </header>
          </div>
        </div>

        {/* tooltip */}
        <div className="component-section">
          <h4>tooltip</h4>
          <div className="navigation">
            <header className="header top">
              <div className="inner">
                <div className="funcs">
                  <button type="button" className="func -back"><span className="hide">뒤로가기</span></button>
                </div>
                <h1 className="title">툴팁</h1>
                <div className="funcs">
                  <button type="button" className="func -tooltip"><span className="hide">도움말</span></button>
                  <button type="button" className="func -menu"><span className="hide">전체메뉴</span></button>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TopBasicNavigation 
            title="기본 네비게이션"
            onBack={() => console.log('Back clicked')}
            onHome={() => console.log('Home clicked')}
            onMenu={() => console.log('Menu clicked')}
          />
          <TopMainNavigation 
            userName="김농협"
            showAlarm={true}
            onUserNameClick={() => console.log('User name clicked')}
            onAlarm={() => console.log('Alarm clicked')}
            onBigSize={() => console.log('Big size clicked')}
            onMenu={() => console.log('Menu clicked')}
          />
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default NavigationExamples;