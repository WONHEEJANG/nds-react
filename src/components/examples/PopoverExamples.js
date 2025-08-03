import React from 'react';
import Popover, { BottomCenterPopover, TopCenterPopover } from '../Popover';

const PopoverExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Popover Components - raw HTML</h2>
      
      {/* Bottom Popovers */}
      <div className="component-section">
        <h3 className="component-subtitle">Bottom Popovers</h3>
        
        {/* Type=bottom-center */}
        <div className="component-section">
          <h4>Type=bottom-center</h4>
          <span className="popover -bc" style={{ opacity: 1 }}>
            나에게 맞는 상품을 찾아보세요.
            <button type="button" className="popover-close"><span className="hide">삭제</span></button>
          </span>
        </div>

        {/* Type=bottom-left */}
        <div className="component-section">
          <h4>Type=bottom-left</h4>
          <span className="popover -bl" style={{ opacity: 1 }}>
            나에게 맞는 상품을 찾아보세요.
            <button type="button" className="popover-close"><span className="hide">삭제</span></button>
          </span>
        </div>

        {/* Type=bottom-right */}
        <div className="component-section">
          <h4>Type=bottom-right</h4>
          <span className="popover -br" style={{ opacity: 1 }}>
            나에게 맞는 상품을 찾아보세요.
            <button type="button" className="popover-close"><span className="hide">삭제</span></button>
          </span>
        </div>
      </div>

      {/* Top Popovers */}
      <div className="component-section">
        <h3 className="component-subtitle">Top Popovers</h3>
        
        {/* Type=top-center */}
        <div className="component-section">
          <h4>Type=top-center</h4>
          <span className="popover -tc" style={{ opacity: 1 }}>
            나에게 맞는 상품을 찾아보세요.
            <button type="button" className="popover-close"><span className="hide">삭제</span></button>
          </span>
        </div>

        {/* Type=top-left */}
        <div className="component-section">
          <h4>Type=top-left</h4>
          <span className="popover -tl" style={{ opacity: 1 }}>
            나에게 맞는 상품을 찾아보세요.
            <button type="button" className="popover-close"><span className="hide">삭제</span></button>
          </span>
        </div>

        {/* Type=top-right */}
        <div className="component-section">
          <h4>Type=top-right</h4>
          <span className="popover -tr" style={{ opacity: 1 }}>
            나에게 맞는 상품을 찾아보세요.
            <button type="button" className="popover-close"><span className="hide">삭제</span></button>
          </span>
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <BottomCenterPopover onClose={() => console.log('Popover closed')}>
            나에게 맞는 상품을 찾아보세요.
          </BottomCenterPopover>
          <TopCenterPopover onClose={() => console.log('Popover closed')}>
            상단 팝오버 메시지입니다.
          </TopCenterPopover>
        </div>
      </div>
    </div>
  );
};

export default PopoverExamples;