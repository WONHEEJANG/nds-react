import React from 'react';
import LoadData, { BasicLoadData, HighlightLoadData } from '../LoadData';

const LoadDataExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">LoadData Components</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BasicLoadData 
          label="기본 데이터"
          title="연도별 한도금액"
          content="20,000,000원"
          info="기본 안내 문구입니다."
        />
        <HighlightLoadData 
          label="하이라이트 데이터"
          mainLabel="Label"
          infoLabel="부가설명"
          content="Data"
          info="하이라이트 안내 문구입니다."
        />
      </div>
    </div>
  );
};

export default LoadDataExamples;