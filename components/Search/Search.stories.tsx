import type { Meta, StoryObj } from '@storybook/react';
import { Search, SearchProps } from './Search';
import { useState } from 'react';

const meta: Meta<typeof Search> = {
  title: 'Components/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['basic', 'filter'],
      description: '검색 변형',
    },
    state: {
      control: 'select',
      options: ['default', 'focused', 'filled', 'error'],
      description: '상태',
    },
    showLabel: {
      control: 'boolean',
      description: '라벨 표시 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Search Stories
export const Basic: Story = {
  args: {
    variant: 'basic',
    label: '검색',
    placeholder: '검색어 입력',
    info: '안내 문구 입력',
    onSearch: (value) => console.log('Search:', value),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const BasicFilled: Story = {
  args: {
    variant: 'basic',
    label: '검색',
    placeholder: '검색어 입력',
    value: '검색어',
    state: 'filled',
    info: '안내 문구 입력',
    onSearch: (value) => console.log('Search:', value),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const BasicFocused: Story = {
  args: {
    variant: 'basic',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'focused',
    info: '안내 문구 입력',
    onSearch: (value) => console.log('Search:', value),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const BasicError: Story = {
  args: {
    variant: 'basic',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'error',
    info: '검색어를 입력해 주세요.',
    onSearch: (value) => console.log('Search:', value),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const BasicDisabled: Story = {
  args: {
    variant: 'basic',
    label: '검색',
    placeholder: '검색어 입력',
    disabled: true,
    info: '검색이 비활성화되었습니다.',
  },
};

export const BasicWithoutLabel: Story = {
  args: {
    variant: 'basic',
    placeholder: '검색어 입력',
    showLabel: false,
    onSearch: (value) => console.log('Search:', value),
    onChange: (value) => console.log('Value changed:', value),
  },
};

// Filter Search Stories
export const Filter: Story = {
  args: {
    variant: 'filter',
    label: '검색',
    placeholder: '검색어 입력',
    info: '안내 문구 입력',
    onSearch: (value) => console.log('Search:', value),
    onFilterClick: () => console.log('Filter clicked'),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const FilterFilled: Story = {
  args: {
    variant: 'filter',
    label: '검색',
    placeholder: '검색어 입력',
    value: '필터 검색어',
    state: 'filled',
    info: '안내 문구 입력',
    onSearch: (value) => console.log('Search:', value),
    onFilterClick: () => console.log('Filter clicked'),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const FilterError: Story = {
  args: {
    variant: 'filter',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'error',
    info: '검색 조건을 다시 확인해 주세요.',
    onSearch: (value) => console.log('Search:', value),
    onFilterClick: () => console.log('Filter clicked'),
    onChange: (value) => console.log('Value changed:', value),
  },
};

export const FilterDisabled: Story = {
  args: {
    variant: 'filter',
    label: '검색',
    placeholder: '검색어 입력',
    disabled: true,
    info: '필터 검색이 비활성화되었습니다.',
  },
};

// Interactive Examples
export const InteractiveBasic: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [searchResults, setSearchResults] = useState<string[]>([]);

    const handleSearch = (searchValue: string) => {
      if (searchValue.trim()) {
        setSearchResults([
          `"${searchValue}"에 대한 검색 결과 1`,
          `"${searchValue}"에 대한 검색 결과 2`,
          `"${searchValue}"에 대한 검색 결과 3`,
        ]);
      } else {
        setSearchResults([]);
      }
    };

    return (
      <div style={{ width: '400px' }}>
        <Search
          variant="basic"
          label="상품 검색"
          placeholder="상품명을 입력하세요"
          value={value}
          onChange={setValue}
          onSearch={handleSearch}
          info="상품명 또는 상품코드로 검색할 수 있습니다."
        />
        
        {searchResults.length > 0 && (
          <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
            <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>검색 결과</h4>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {searchResults.map((result, index) => (
                <li key={index} style={{ fontSize: '14px', marginBottom: '4px' }}>
                  {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
};

export const InteractiveFilter: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [filters, setFilters] = useState<string[]>([]);
    const [showFilterPanel, setShowFilterPanel] = useState(false);

    const handleFilterClick = () => {
      setShowFilterPanel(!showFilterPanel);
    };

    const handleFilterChange = (filter: string, checked: boolean) => {
      if (checked) {
        setFilters([...filters, filter]);
      } else {
        setFilters(filters.filter(f => f !== filter));
      }
    };

    const handleSearch = (searchValue: string) => {
      console.log('Search:', searchValue, 'Filters:', filters);
      alert(`검색어: "${searchValue}"\n필터: ${filters.join(', ') || '없음'}`);
    };

    return (
      <div style={{ width: '400px' }}>
        <Search
          variant="filter"
          label="고급 검색"
          placeholder="검색어 입력"
          value={value}
          onChange={setValue}
          onSearch={handleSearch}
          onFilterClick={handleFilterClick}
          info="검색어와 필터를 조합하여 검색할 수 있습니다."
        />
        
        {showFilterPanel && (
          <div style={{ 
            marginTop: '8px', 
            padding: '16px', 
            backgroundColor: '#f8f9fa', 
            borderRadius: '4px',
            border: '1px solid #dee2e6'
          }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: '14px' }}>검색 필터</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['예금', '적금', '대출', '카드', '보험'].map((filter) => (
                <label key={filter} style={{ display: 'flex', alignItems: 'center', fontSize: '14px' }}>
                  <input
                    type="checkbox"
                    checked={filters.includes(filter)}
                    onChange={(e) => handleFilterChange(filter, e.target.checked)}
                    style={{ marginRight: '8px' }}
                  />
                  {filter}
                </label>
              ))}
            </div>
            
            <div style={{ marginTop: '12px', display: 'flex', gap: '8px' }}>
              <button
                onClick={() => setFilters([])}
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                초기화
              </button>
              <button
                onClick={() => setShowFilterPanel(false)}
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                적용
              </button>
            </div>
          </div>
        )}
        
        {filters.length > 0 && (
          <div style={{ marginTop: '8px' }}>
            <p style={{ margin: '0', fontSize: '12px', color: '#6c757d' }}>
              선택된 필터: {filters.join(', ')}
            </p>
          </div>
        )}
      </div>
    );
  },
};

export const StateManagement: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [state, setState] = useState<'default' | 'focused' | 'filled' | 'error'>('default');
    const [info, setInfo] = useState('검색어를 입력하세요.');

    const handleSearch = (searchValue: string) => {
      if (!searchValue.trim()) {
        setState('error');
        setInfo('검색어를 입력해 주세요.');
      } else if (searchValue.length < 2) {
        setState('error');
        setInfo('검색어는 2글자 이상 입력해 주세요.');
      } else {
        setState('filled');
        setInfo(`"${searchValue}"로 검색합니다.`);
        console.log('Search:', searchValue);
      }
    };

    const handleChange = (newValue: string) => {
      setValue(newValue);
      if (state === 'error' && newValue.length >= 2) {
        setState('filled');
        setInfo('검색어가 입력되었습니다.');
      } else if (state === 'error' && newValue.length === 0) {
        setState('default');
        setInfo('검색어를 입력하세요.');
      }
    };

    return (
      <div style={{ width: '400px' }}>
        <Search
          variant="basic"
          label="상태 관리 예시"
          placeholder="검색어 입력 (2글자 이상)"
          value={value}
          state={state}
          info={info}
          onChange={handleChange}
          onSearch={handleSearch}
        />
        
        <div style={{ marginTop: '16px', fontSize: '12px' }}>
          <p><strong>현재 상태:</strong> {state}</p>
          <p><strong>입력값 길이:</strong> {value.length}글자</p>
        </div>
      </div>
    );
  },
};

// Simple Header Search (without label)
export const HeaderSearch: Story = {
  args: {
    variant: 'basic',
    placeholder: '전체 메뉴 검색',
    showLabel: false,
    onSearch: (value) => console.log('Header search:', value),
    onChange: (value) => console.log('Value changed:', value),
  },
};