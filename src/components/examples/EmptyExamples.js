import React from 'react';
import Empty, { EmptyResult, EmptyPage } from '../Empty';

const EmptyExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Empty Components</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <EmptyResult />
        <EmptyPage message="페이지에 데이터가 없습니다." />
      </div>
    </div>
  );
};

export default EmptyExamples; 