import React from 'react';
import Terms, { RequiredTerms, OptionalTerms, CloseTerms, OpenTerms } from '../Terms';

const TermsExamples = ({ termsItems }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Terms Components</h2>
      
      {/* Terms - State=close */}
      <div className="component-section">
        <h3 className="component-subtitle">Terms - State=close</h3>
        <CloseTerms 
          title="[필수] 전체동의"
          onToggle={(checked) => console.log('Required terms:', checked)}
          onMore={() => console.log('More clicked')}
        />
      </div>

      {/* Terms - State=open */}
      <div className="component-section">
        <h3 className="component-subtitle">Terms - State=open</h3>
        <OpenTerms 
          type="optional"
          title="[선택] 전체 동의"
          terms={[
            { id: 'term1', title: '약관명을 입력해 주세요' },
            { id: 'term2', title: '약관명을 입력해 주세요' },
            { id: 'term3', title: '약관명을 입력해 주세요' },
            { id: 'term4', title: '약관명을 입력해 주세요' },
            { id: 'term5', title: '약관명을 입력해 주세요' }
          ]}
          onToggle={(checked) => console.log('Optional terms:', checked)}
          onMore={() => console.log('More clicked')}
          onTermToggle={(index, checked) => console.log('Term toggle:', index, checked)}
          onTermMore={(index, term) => console.log('Term more:', index, term)}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <RequiredTerms 
            title="[필수] 전체동의"
            onToggle={(checked) => console.log('Required terms:', checked)}
            onMore={() => console.log('More clicked')}
          />
          <OptionalTerms 
            title="[선택] 전체 동의"
            terms={termsItems}
            state="open"
            onToggle={(checked) => console.log('Optional terms:', checked)}
            onMore={() => console.log('More clicked')}
            onTermToggle={(index, checked) => console.log('Term toggle:', index, checked)}
            onTermMore={(index, term) => console.log('Term more:', index, term)}
          />
        </div>
      </div>
    </div>
  );
};

export default TermsExamples;