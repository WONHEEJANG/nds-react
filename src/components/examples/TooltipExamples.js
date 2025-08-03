import React from 'react';
import Tooltip, { TooltipField } from '../Tooltip';

const TooltipExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Tooltip Components</h2>
      
      {/* Tooltip - tooltip */}
      <div className="component-section">
        <h3 className="component-subtitle">Tooltip - tooltip</h3>
        <TooltipField label="테스트모드에서 (?) 클릭">
          <Tooltip 
            title="보험계약 상세조회"
            subTitle="부제목"
            content={[
              { type: 'sub-cont', text: '일반 텍스트' },
              '우대금리는 대출 만기까지 적용됩니다.',
              '우대금리는 대출 만기까지 적용됩니다.'
            ]}
            onToggle={(isOpen) => console.log('Tooltip:', isOpen)}
          />
        </TooltipField>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <TooltipField label="테스트모드에서 (?) 클릭">
            <Tooltip 
              title="보험계약 상세조회"
              subTitle="부제목"
              content={[
                { type: 'sub-cont', text: '일반 텍스트' },
                '우대금리는 대출 만기까지 적용됩니다.',
                '우대금리는 대출 만기까지 적용됩니다.'
              ]}
              onToggle={(isOpen) => console.log('Tooltip:', isOpen)}
            />
          </TooltipField>
        </div>
      </div>
    </div>
  );
};

export default TooltipExamples;