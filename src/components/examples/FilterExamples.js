import React from 'react';
import Filter, { FilterLeft, FilterRight } from '../Filter';

const FilterExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Filter Components</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <FilterLeft 
          items={['전체', '3개월', '6개월', '1년']}
          onSwitchChange={(checked) => console.log('Switch:', checked)}
          onFilterClick={() => console.log('Filter clicked')}
          onTooltipClick={() => console.log('Tooltip clicked')}
        />
        <FilterRight 
          dateRange="2024.10.22 ~ 2024.12.22"
          sortOption="최신순"
          onFilterClick={() => console.log('Filter clicked')}
        />
      </div>
    </div>
  );
};

export default FilterExamples; 