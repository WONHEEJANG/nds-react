import React from 'react';
import Link, { 
  CategoryLink, 
  DivideLink, 
  HorizontalLink, 
  MixLink, 
  NoneLink, 
  PriceLink, 
  VerticalLink 
} from '../Link';

const LinkExamples = ({ linkItems, priceItems }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Link Components</h2>
      
      {/* Category Link */}
      <div className="component-section">
        <h3 className="component-subtitle">Category Link</h3>
        <CategoryLink
          items={[{ title: '카테고리', info: '타이틀' }]}
          onClick={(item, index) => console.log('Category link clicked:', item, index)}
        />
      </div>

      {/* Divide Link */}
      <div className="component-section">
        <h3 className="component-subtitle">Divide Link</h3>
        <DivideLink
          items={[
            { title: '타이틀', subInfo: '부가설명' },
            { title: '타이틀', subInfo: '부가설명' }
          ]}
          onClick={(item, index) => console.log('Divide link clicked:', item, index)}
        />
      </div>

      {/* Horizontal Link */}
      <div className="component-section">
        <h3 className="component-subtitle">Horizontal Link</h3>
        <HorizontalLink
          items={[{ title: '타이틀' }]}
          onClick={(item, index) => console.log('Horizontal link clicked:', item, index)}
        />
      </div>

      {/* Mix Link */}
      <div className="component-section">
        <h3 className="component-subtitle">Mix Link</h3>
        <MixLink
          items={[{ title: '타이틀', info: '부가설명' }]}
          onClick={(item, index) => console.log('Mix link clicked:', item, index)}
        />
      </div>

      {/* None Link */}
      <div className="component-section">
        <h3 className="component-subtitle">None Link</h3>
        <NoneLink
          items={[{ title: '타이틀' }]}
          onClick={(item, index) => console.log('None link clicked:', item, index)}
        />
      </div>

      {/* Price Link */}
      <div className="component-section">
        <h3 className="component-subtitle">Price Link</h3>
        <PriceLink
          items={[{
            date: '2022.05.30 11:22:24',
            type: '출금',
            name: '나금상',
            amount: '750,000,000원',
            balance: '잔액 250,000,000원'
          }]}
          onClick={(item, index) => console.log('Price link clicked:', item, index)}
        />
      </div>

      {/* Vertical Link */}
      <div className="component-section">
        <h3 className="component-subtitle">Vertical Link</h3>
        <VerticalLink
          items={[{ title: '타이틀' }]}
          onClick={(item, index) => console.log('Vertical link clicked:', item, index)}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <DivideLink 
            items={linkItems}
            onClick={(item, index) => console.log('Link clicked:', item, index)}
          />
          <PriceLink 
            items={priceItems}
            onClick={(item, index) => console.log('Price link clicked:', item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default LinkExamples; 