import React from 'react';
import Divider, { ContentDivider, List1Divider, List2Divider, PageDivider } from '../Divider';

const DividerExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Divider Components</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <ContentDivider />
        <List1Divider />
        <List2Divider />
        <PageDivider />
      </div>
    </div>
  );
};

export default DividerExamples; 