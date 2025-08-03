import React from 'react';
import InfoBox from '../InfoBox';

const InfoBoxExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">InfoBox Components</h2>
      <InfoBox 
        title="정보 박스"
        content="이것은 정보를 표시하는 박스입니다."
      />
    </div>
  );
};

export default InfoBoxExamples; 