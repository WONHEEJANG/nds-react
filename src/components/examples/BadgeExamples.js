import React from 'react';
import { BadgeNew, BadgeLineGray } from '../Badge';

const BadgeExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Badge Components</h2>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <BadgeNew />
        <BadgeLineGray text="라벨" />
      </div>
    </div>
  );
};

export default BadgeExamples; 