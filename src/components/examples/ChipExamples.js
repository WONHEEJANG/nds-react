import React from 'react';
import { 
  Accordion2MenuChip, 
  Accordion3MenuChip, 
  Accordion4MenuChip, 
  Accordion5MenuChip, 
  AccordionOpenChip, 
  BasicChip, 
  SingleActiveChip, 
  SingleDefaultChip 
} from '../Chip';

const ChipExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Chip Components</h2>
      
      {/* Accordion Chips - State=none */}
      <div className="component-section">
        <h3 className="component-subtitle">Accordion Chips - State=none</h3>
        
        {/* Menu=2-menu */}
        <div className="component-section">
          <h4>Menu=2-menu</h4>
          <Accordion2MenuChip
            items={['목돈모으기', '투자상품']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>

        {/* Menu=3-menu */}
        <div className="component-section">
          <h4>Menu=3-menu</h4>
          <Accordion3MenuChip
            items={['목돈모으기', '투자상품', '대출상품']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>

        {/* Menu=4-menu */}
        <div className="component-section">
          <h4>Menu=4-menu</h4>
          <Accordion4MenuChip
            items={['목돈모으기', '투자상품', '대출상품', '보험상품']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>

        {/* Menu=5-menu */}
        <div className="component-section">
          <h4>Menu=5-menu</h4>
          <Accordion5MenuChip
            items={['목돈모으기', '투자상품', '대출상품', '보험상품', '카드상품']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>
      </div>

      {/* Accordion Chips - State=open */}
      <div className="component-section">
        <h3 className="component-subtitle">Accordion Chips - State=open</h3>
        
        {/* Menu=none */}
        <div className="component-section">
          <h4>Menu=none</h4>
          <AccordionOpenChip
            items={['목돈모으기', '투자상품', '대출상품', '보험상품', '카드상품', '펀드상품', '예금상품']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>
      </div>

      {/* Basic Chip */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Chip</h3>
        <BasicChip
          items={[{ text: '버튼', deletable: true }]}
          onDelete={(item) => console.log('Deleted:', item)}
        />
      </div>

      {/* Single Chip */}
      <div className="component-section">
        <h3 className="component-subtitle">Single Chip</h3>
        
        {/* State=active */}
        <div className="component-section">
          <h4>State=active</h4>
          <SingleActiveChip
            items={['목돈모으기']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>

        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <SingleDefaultChip
            items={['목돈모으기']}
            onSelect={(selected) => console.log('Selected:', selected)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChipExamples; 