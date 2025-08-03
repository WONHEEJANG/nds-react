import React from 'react';
import Tab, { BarTab, ChipTab, LineTab, TwoMenuTab, ThreeMenuTab } from '../Tab';

const TabExamples = ({ tabItems }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Tab Components</h2>
      
      {/* Tab Bar - Menu=2-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Bar - Menu=2-menu</h3>
        <BarTab 
          menuCount={2}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' }
          ]}
          onTabChange={(index, tab) => console.log('Tab changed:', index, tab)}
        />
      </div>

      {/* Tab Bar - Menu=3-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Bar - Menu=3-menu</h3>
        <BarTab 
          menuCount={3}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' },
            { id: 'tab3', title: '탭타이틀', content: '컨텐츠3' }
          ]}
          onTabChange={(index, tab) => console.log('Tab changed:', index, tab)}
        />
      </div>

      {/* Tab Chip - Type=flexible, Menu=2-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Chip - Type=flexible, Menu=2-menu</h3>
        <ChipTab 
          menuCount={2}
          variant="flexible"
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' }
          ]}
          onTabChange={(index, tab) => console.log('Chip tab changed:', index, tab)}
        />
      </div>

      {/* Tab Chip - Type=flexible, Menu=3-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Chip - Type=flexible, Menu=3-menu</h3>
        <ChipTab 
          menuCount={3}
          variant="flexible"
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' },
            { id: 'tab3', title: '탭타이틀', content: '컨텐츠3' }
          ]}
          onTabChange={(index, tab) => console.log('Chip tab changed:', index, tab)}
        />
      </div>

      {/* Tab Line - Type=fixed, Menu=2-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Line - Type=fixed, Menu=2-menu</h3>
        <LineTab 
          variant="fixed"
          menuCount={2}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' }
          ]}
          onTabChange={(index, tab) => console.log('Line tab changed:', index, tab)}
        />
      </div>

      {/* Tab Line - Type=fixed, Menu=3-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Line - Type=fixed, Menu=3-menu</h3>
        <LineTab 
          variant="fixed"
          menuCount={3}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' },
            { id: 'tab3', title: '탭타이틀', content: '컨텐츠3' }
          ]}
          onTabChange={(index, tab) => console.log('Line tab changed:', index, tab)}
        />
      </div>

      {/* Tab Line - Type=flexible, Menu=2-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Line - Type=flexible, Menu=2-menu</h3>
        <LineTab 
          variant="flexible"
          menuCount={2}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' }
          ]}
          onTabChange={(index, tab) => console.log('Line tab changed:', index, tab)}
        />
      </div>

      {/* Tab Line - Type=flexible, Menu=3-menu */}
      <div className="component-section">
        <h3 className="component-subtitle">Tab Line - Type=flexible, Menu=3-menu</h3>
        <LineTab 
          variant="flexible"
          menuCount={3}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' },
            { id: 'tab3', title: '탭타이틀', content: '컨텐츠3' }
          ]}
          onTabChange={(index, tab) => console.log('Line tab changed:', index, tab)}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <BarTab 
          menuCount={3}
          tabs={[
            { id: 'tab1', title: '탭타이틀', content: '컨텐츠1' },
            { id: 'tab2', title: '탭타이틀', content: '컨텐츠2' },
            { id: 'tab3', title: '탭타이틀', content: '컨텐츠3' }
          ]}
          onTabChange={(index, tab) => console.log('Tab changed:', index, tab)}
        />
          <ChipTab 
            menuCount={3}
            onTabChange={(index, tab) => console.log('Chip tab changed:', index, tab)}
          />
          <LineTab 
            variant="flexible"
            menuCount={4}
            onTabChange={(index, tab) => console.log('Line tab changed:', index, tab)}
          />
        </div>
      </div>
    </div>
  );
};

export default TabExamples;