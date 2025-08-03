import React from 'react';
import List, { 
  AccountList, 
  CardList, 
  LineList, 
  PageList, 
  LargeCardList, 
  SmallCardList, 
  ExtraSmallCardList,
  SmallPageList,
  ExtraSmallPageList
} from '../List';

const ListExamples = ({ 
  accountItems = [{ bankCode: '011', bankName: '금융사명', accountNumber: '123412341234123' }], 
  cardItems = [{ title: '타이틀', value: '데이터' }], 
  lineItems = [{ title: '타이틀', value: '데이터' }] 
}) => {
  return (
    <div className="component-section">
      <h2 className="component-title">List Components</h2>
      
      {/* Account List */}
      <div className="component-section">
        <h3 className="component-subtitle">Account List</h3>
        <AccountList
          items={[{ bankCode: '011', bankName: '금융사명', accountNumber: '123412341234123' }]}
          onItemClick={(item, index) => console.log('Account clicked:', item, index)}
          onFavoriteToggle={(index, isFavorite) => console.log('Favorite toggled:', index, isFavorite)}
        />
      </div>

      {/* Card Large Lists */}
      <div className="component-section">
        <h3 className="component-subtitle">Card Large Lists</h3>
        
        {/* Type=1line */}
        <div className="component-section">
          <h4>Type=1line</h4>
          <LargeCardList
            items={[{ title: '타이틀', value: '데이터' }]}
          />
        </div>

        {/* Type=2line */}
        <div className="component-section">
          <h4>Type=2line</h4>
          <LargeCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=3line */}
        <div className="component-section">
          <h4>Type=3line</h4>
          <LargeCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=4line */}
        <div className="component-section">
          <h4>Type=4line</h4>
          <LargeCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=5line */}
        <div className="component-section">
          <h4>Type=5line</h4>
          <LargeCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>
      </div>

      {/* Card Small Lists */}
      <div className="component-section">
        <h3 className="component-subtitle">Card Small Lists</h3>
        
        {/* Type=1line */}
        <div className="component-section">
          <h4>Type=1line</h4>
          <SmallCardList
            items={[{ title: '타이틀', value: '데이터' }]}
          />
        </div>

        {/* Type=2line */}
        <div className="component-section">
          <h4>Type=2line</h4>
          <SmallCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=3line */}
        <div className="component-section">
          <h4>Type=3line</h4>
          <SmallCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>
      </div>

      {/* Card Extra Small Lists */}
      <div className="component-section">
        <h3 className="component-subtitle">Card Extra Small Lists</h3>
        
        {/* Type=1line */}
        <div className="component-section">
          <h4>Type=1line</h4>
          <ExtraSmallCardList
            items={[{ title: '타이틀', value: '데이터' }]}
          />
        </div>

        {/* Type=2line */}
        <div className="component-section">
          <h4>Type=2line</h4>
          <ExtraSmallCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=3line */}
        <div className="component-section">
          <h4>Type=3line</h4>
          <ExtraSmallCardList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>
      </div>

      {/* Line Lists */}
      <div className="component-section">
        <h3 className="component-subtitle">Line Lists</h3>
        
        {/* Type=2line */}
        <div className="component-section">
          <h4>Type=2line</h4>
          <LineList
            items={[
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] }
            ]}
          />
        </div>

        {/* Type=3line */}
        <div className="component-section">
          <h4>Type=3line</h4>
          <LineList
            items={[
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] }
            ]}
          />
        </div>

        {/* Type=4line */}
        <div className="component-section">
          <h4>Type=4line</h4>
          <LineList
            items={[
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] }
            ]}
          />
        </div>

        {/* Type=5line */}
        <div className="component-section">
          <h4>Type=5line</h4>
          <LineList
            items={[
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] },
              { startDate: '2024.01.01', endDate: '2025.01.01', data: [{ title: '타이틀', value: '데이터' }] }
            ]}
          />
        </div>
      </div>

      {/* Page Small Lists */}
      <div className="component-section">
        <h3 className="component-subtitle">Page Small Lists</h3>
        
        {/* Type=1line */}
        <div className="component-section">
          <h4>Type=1line</h4>
          <SmallPageList
            items={[{ title: '타이틀', value: '데이터' }]}
          />
        </div>

        {/* Type=2line */}
        <div className="component-section">
          <h4>Type=2line</h4>
          <SmallPageList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=3line */}
        <div className="component-section">
          <h4>Type=3line</h4>
          <SmallPageList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>
      </div>

      {/* Page Extra Small Lists */}
      <div className="component-section">
        <h3 className="component-subtitle">Page Extra Small Lists</h3>
        
        {/* Type=1line */}
        <div className="component-section">
          <h4>Type=1line</h4>
          <ExtraSmallPageList
            items={[{ title: '타이틀', value: '데이터' }]}
          />
        </div>

        {/* Type=2line */}
        <div className="component-section">
          <h4>Type=2line</h4>
          <ExtraSmallPageList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>

        {/* Type=3line */}
        <div className="component-section">
          <h4>Type=3line</h4>
          <ExtraSmallPageList
            items={[
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' },
              { title: '타이틀', value: '데이터' }
            ]}
          />
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <AccountList 
            items={accountItems}
            onItemClick={(item, index) => console.log('Account clicked:', item, index)}
            onFavoriteToggle={(index, isFavorite) => console.log('Favorite toggled:', index, isFavorite)}
          />
          <SmallCardList 
            items={cardItems}
            onItemClick={(item, index) => console.log('Card clicked:', item, index)}
          />
          <LineList 
            items={lineItems}
            onItemClick={(item, index) => console.log('Line clicked:', item, index)}
          />
        </div>
      </div>
    </div>
  );
};

export default ListExamples;