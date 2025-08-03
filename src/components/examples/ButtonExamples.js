import React from 'react';
import Button from '../Button';

const ButtonExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Button Components</h2>
      
      {/* Basic Primary Buttons */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Primary Buttons</h3>
        
        {/* Size=lg, State=default */}
        <div className="component-section">
          <h4>Size=lg, State=default</h4>
          <Button type="basic" variant="primary" size="lg">버튼</Button>
        </div>

        {/* Size=lg, State=disabled */}
        <div className="component-section">
          <h4>Size=lg, State=disabled</h4>
          <Button type="basic" variant="primary" size="lg" disabled>버튼</Button>
        </div>

        {/* Size=lg, State=pressed */}
        <div className="component-section">
          <h4>Size=lg, State=pressed</h4>
          <Button type="basic" variant="primary" size="lg" state="pressed">버튼</Button>
        </div>

        {/* Size=md, State=default */}
        <div className="component-section">
          <h4>Size=md, State=default</h4>
          <Button type="basic" variant="primary" size="md">버튼</Button>
        </div>

        {/* Size=md, State=disabled */}
        <div className="component-section">
          <h4>Size=md, State=disabled</h4>
          <Button type="basic" variant="primary" size="md" disabled>버튼</Button>
        </div>

        {/* Size=md, State=pressed */}
        <div className="component-section">
          <h4>Size=md, State=pressed</h4>
          <Button type="basic" variant="primary" size="md" state="pressed">버튼</Button>
        </div>

        {/* Size=rg, State=default */}
        <div className="component-section">
          <h4>Size=rg, State=default</h4>
          <Button type="basic" variant="primary" size="rg">버튼</Button>
        </div>

        {/* Size=rg, State=disabled */}
        <div className="component-section">
          <h4>Size=rg, State=disabled</h4>
          <Button type="basic" variant="primary" size="rg" disabled>버튼</Button>
        </div>

        {/* Size=rg, State=pressed */}
        <div className="component-section">
          <h4>Size=rg, State=pressed</h4>
          <Button type="basic" variant="primary" size="rg" state="pressed">버튼</Button>
        </div>

        {/* Size=sm, State=default */}
        <div className="component-section">
          <h4>Size=sm, State=default</h4>
          <Button type="basic" variant="primary" size="sm">버튼</Button>
        </div>

        {/* Size=sm, State=disabled */}
        <div className="component-section">
          <h4>Size=sm, State=disabled</h4>
          <Button type="basic" variant="primary" size="sm" disabled>버튼</Button>
        </div>

        {/* Size=sm, State=pressed */}
        <div className="component-section">
          <h4>Size=sm, State=pressed</h4>
          <Button type="basic" variant="primary" size="sm" state="pressed">버튼</Button>
        </div>
      </div>

      {/* Basic Secondary Buttons */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Secondary Buttons</h3>
        
        {/* Size=md, State=default */}
        <div className="component-section">
          <h4>Size=md, State=default</h4>
          <Button type="basic" variant="secondary" size="md">버튼</Button>
        </div>

        {/* Size=md, State=disabled */}
        <div className="component-section">
          <h4>Size=md, State=disabled</h4>
          <Button type="basic" variant="secondary" size="md" disabled>버튼</Button>
        </div>

        {/* Size=md, State=pressed */}
        <div className="component-section">
          <h4>Size=md, State=pressed</h4>
          <Button type="basic" variant="secondary" size="md" state="pressed">버튼</Button>
        </div>

        {/* Size=rg, State=default */}
        <div className="component-section">
          <h4>Size=rg, State=default</h4>
          <Button type="basic" variant="secondary" size="rg">버튼</Button>
        </div>

        {/* Size=rg, State=disabled */}
        <div className="component-section">
          <h4>Size=rg, State=disabled</h4>
          <Button type="basic" variant="secondary" size="rg" disabled>버튼</Button>
        </div>

        {/* Size=rg, State=pressed */}
        <div className="component-section">
          <h4>Size=rg, State=pressed</h4>
          <Button type="basic" variant="secondary" size="rg" state="pressed">버튼</Button>
        </div>

        {/* Size=sm, State=default */}
        <div className="component-section">
          <h4>Size=sm, State=default</h4>
          <Button type="basic" variant="secondary" size="sm">버튼</Button>
        </div>

        {/* Size=sm, State=disabled */}
        <div className="component-section">
          <h4>Size=sm, State=disabled</h4>
          <Button type="basic" variant="secondary" size="sm" disabled>버튼</Button>
        </div>

        {/* Size=sm, State=pressed */}
        <div className="component-section">
          <h4>Size=sm, State=pressed</h4>
          <Button type="basic" variant="secondary" size="sm" state="pressed">버튼</Button>
        </div>

        {/* Size=xs, State=default */}
        <div className="component-section">
          <h4>Size=xs, State=default</h4>
          <Button type="basic" variant="secondary" size="xs" className="-fitted">버튼</Button>
        </div>

        {/* Size=xs, State=disabled */}
        <div className="component-section">
          <h4>Size=xs, State=disabled</h4>
          <Button type="basic" variant="secondary" size="xs" className="-fitted" disabled>버튼</Button>
        </div>

        {/* Size=xs, State=pressed */}
        <div className="component-section">
          <h4>Size=xs, State=pressed</h4>
          <Button type="basic" variant="secondary" size="xs" className="-fitted" state="pressed">버튼</Button>
        </div>
      </div>

      {/* Basic Tertiary Buttons */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Tertiary Buttons</h3>
        
        {/* Size=lg, State=default */}
        <div className="component-section">
          <h4>Size=lg, State=default</h4>
          <Button type="basic" variant="tertiary" size="lg">버튼</Button>
        </div>

        {/* Size=lg, State=disabled */}
        <div className="component-section">
          <h4>Size=lg, State=disabled</h4>
          <Button type="basic" variant="tertiary" size="lg" disabled>버튼</Button>
        </div>

        {/* Size=lg, State=pressed */}
        <div className="component-section">
          <h4>Size=lg, State=pressed</h4>
          <Button type="basic" variant="tertiary" size="lg" state="pressed">버튼</Button>
        </div>

        {/* Size=md, State=default */}
        <div className="component-section">
          <h4>Size=md, State=default</h4>
          <Button type="basic" variant="tertiary" size="md">버튼</Button>
        </div>

        {/* Size=md, State=disabled */}
        <div className="component-section">
          <h4>Size=md, State=disabled</h4>
          <Button type="basic" variant="tertiary" size="md" disabled>버튼</Button>
        </div>

        {/* Size=md, State=pressed */}
        <div className="component-section">
          <h4>Size=md, State=pressed</h4>
          <Button type="basic" variant="tertiary" size="md" state="pressed">버튼</Button>
        </div>

        {/* Size=rg, State=default */}
        <div className="component-section">
          <h4>Size=rg, State=default</h4>
          <Button type="basic" variant="tertiary" size="rg">버튼</Button>
        </div>

        {/* Size=rg, State=disabled */}
        <div className="component-section">
          <h4>Size=rg, State=disabled</h4>
          <Button type="basic" variant="tertiary" size="rg" disabled>버튼</Button>
        </div>

        {/* Size=rg, State=pressed */}
        <div className="component-section">
          <h4>Size=rg, State=pressed</h4>
          <Button type="basic" variant="tertiary" size="rg" state="pressed">버튼</Button>
        </div>

        {/* Size=sm, State=default */}
        <div className="component-section">
          <h4>Size=sm, State=default</h4>
          <Button type="basic" variant="tertiary" size="sm">버튼</Button>
        </div>

        {/* Size=sm, State=disabled */}
        <div className="component-section">
          <h4>Size=sm, State=disabled</h4>
          <Button type="basic" variant="tertiary" size="sm" disabled>버튼</Button>
        </div>

        {/* Size=sm, State=pressed */}
        <div className="component-section">
          <h4>Size=sm, State=pressed</h4>
          <Button type="basic" variant="tertiary" size="sm" state="pressed">버튼</Button>
        </div>

        {/* Size=xs, State=default */}
        <div className="component-section">
          <h4>Size=xs, State=default</h4>
          <Button type="basic" variant="tertiary" size="xs" className="-fitted">버튼</Button>
        </div>

        {/* Size=xs, State=disabled */}
        <div className="component-section">
          <h4>Size=xs, State=disabled</h4>
          <Button type="basic" variant="tertiary" size="xs" className="-fitted" disabled>버튼</Button>
        </div>

        {/* Size=xs, State=pressed */}
        <div className="component-section">
          <h4>Size=xs, State=pressed</h4>
          <Button type="basic" variant="tertiary" size="xs" className="-fitted" state="pressed">버튼</Button>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="component-section">
        <h3 className="component-subtitle">CTA Buttons</h3>
        
        {/* Type=basic, Ratio=cta-3:7 */}
        <div className="component-section">
          <h4>Type=basic, Ratio=cta-3:7</h4>
          <div className="buttons" style={{display: 'flex', flexWrap: 'nowrap'}}>
            <Button type="cta" ctaType="basic" variant="tertiary" ratio={3} size="lg">취소</Button>
            <Button type="cta" ctaType="basic" variant="primary" ratio={7} size="lg">확인</Button>
          </div>
        </div>

        {/* Type=basic, Ratio=cta-5:5 */}
        <div className="component-section">
          <h4>Type=basic, Ratio=cta-5:5</h4>
          <div className="buttons" style={{display: 'flex', flexWrap: 'nowrap'}}>
            <Button type="cta" ctaType="basic" variant="tertiary" ratio={5} size="lg">버튼</Button>
            <Button type="cta" ctaType="basic" variant="primary" ratio={5} size="lg">버튼</Button>
          </div>
        </div>

        {/* Type=basic, Ratio=cta-full */}
        <div className="component-section">
          <h4>Type=basic, Ratio=cta-full</h4>
          <div className="buttons">
            <Button type="cta" ctaType="basic" variant="primary" size="lg">다음</Button>
          </div>
        </div>

        {/* Type=popup, Ratio=cta-3:7 */}
        <div className="component-section">
          <h4>Type=popup, Ratio=cta-3:7</h4>
          <div className="buttons" style={{display: 'flex', flexWrap: 'nowrap'}}>
            <Button type="cta" ctaType="popup" variant="tertiary" ratio={3} size="md">취소</Button>
            <Button type="cta" ctaType="popup" variant="secondary" ratio={7} size="md">확인</Button>
          </div>
        </div>

        {/* Type=popup, Ratio=cta-5:5 */}
        <div className="component-section">
          <h4>Type=popup, Ratio=cta-5:5</h4>
          <div className="buttons" style={{display: 'flex', flexWrap: 'nowrap'}}>
            <Button type="cta" ctaType="popup" variant="tertiary" ratio={5} size="md">버튼명</Button>
            <Button type="cta" ctaType="popup" variant="secondary" ratio={5} size="md">버튼명</Button>
          </div>
        </div>

        {/* Type=popup, Ratio=cta-full */}
        <div className="component-section">
          <h4>Type=popup, Ratio=cta-full</h4>
          <div className="buttons">
            <Button type="cta" ctaType="popup" variant="secondary" size="md">버튼명</Button>
          </div>
        </div>
      </div>

      {/* Icon/Icon Button */}
      <div className="component-section">
        <h3 className="component-subtitle">Icon/Icon Button</h3>
        <div className="btn-icon">
          <Button type="icon" iconType="download" title="NH고향사랑기부예금 핵심상품설명서">
            <span className="hide">다운로드</span>
          </Button>
        </div>
      </div>

      {/* Text/Icon Button */}
      <div className="component-section">
        <h3 className="component-subtitle">Text/Icon Button</h3>
        <div className="buttons-arrow">
          <Button type="text" textType="icon" className="button-arrow-right button-arrow-left">버튼명</Button>
        </div>
      </div>

      {/* Text/Link Button */}
      <div className="component-section">
        <h3 className="component-subtitle">Text/Link Button</h3>
        <Button type="text" textType="link" href="javascript:void(0)" className="a underline">링크</Button>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <Button type="basic" variant="primary" size="md">Primary Button</Button>
          <Button type="basic" variant="secondary" size="md">Secondary Button</Button>
          <Button type="basic" variant="tertiary" size="md">Tertiary Button</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples; 