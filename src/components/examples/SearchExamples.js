import React from 'react';
import Search, { SearchInput, SearchFilter, FilledSearch, ErrorSearch } from '../Search';

const SearchExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Search Components</h2>
      
      {/* Search - State=error */}
      <div className="component-section">
        <h3 className="component-subtitle">Search - State=error</h3>
        <ErrorSearch
          label="검색"
          value="검색어 입력"
          placeholder="검색어 입력"
          info="안내 문구 입력"
          onSearch={(value) => console.log('Search:', value)}
        />
      </div>

      {/* Search - State=filled */}
      <div className="component-section">
        <h3 className="component-subtitle">Search - State=filled</h3>
        <FilledSearch
          label="검색"
          value="검색어 입력"
          placeholder="검색어 입력"
          info="안내 문구 입력"
          onSearch={(value) => console.log('Search:', value)}
        />
      </div>

      {/* Search - State=focus */}
      <div className="component-section">
        <h3 className="component-subtitle">Search - State=focus</h3>
        <SearchInput
          label="검색"
          value="검색어 입력"
          placeholder="검색어 입력"
          info="안내 문구 입력"
          focused={true}
          onSearch={(value) => console.log('Search:', value)}
        />
      </div>

      {/* Search - State=inactive */}
      <div className="component-section">
        <h3 className="component-subtitle">Search - State=inactive</h3>
        <SearchInput
          label="검색"
          value=""
          placeholder="검색어 입력"
          info="안내 문구 입력"
          onSearch={(value) => console.log('Search:', value)}
        />
      </div>

      {/* Search Filter - State=filled */}
      <div className="component-section">
        <h3 className="component-subtitle">Search Filter - State=filled</h3>
        <SearchFilter
          label="검색"
          value="검색어 입력"
          placeholder="검색어 입력"
          info="안내 문구 입력"
          onSearch={(value) => console.log('Search:', value)}
          onFilter={() => console.log('Filter clicked')}
        />
      </div>

      {/* Search Filter - State=focus */}
      <div className="component-section">
        <h3 className="component-subtitle">Search Filter - State=focus</h3>
        <SearchFilter
          label="검색"
          value="검색어 입력"
          placeholder="검색어 입력"
          info="안내 문구 입력"
          focused={true}
          onSearch={(value) => console.log('Search:', value)}
          onFilter={() => console.log('Filter clicked')}
        />
      </div>

      {/* Search Filter - State=inactive */}
      <div className="component-section">
        <h3 className="component-subtitle">Search Filter - State=inactive</h3>
        <SearchFilter
          label="검색"
          value=""
          placeholder="검색어 입력"
          info="안내 문구 입력"
          onSearch={(value) => console.log('Search:', value)}
          onFilter={() => console.log('Filter clicked')}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <SearchInput 
            label="검색"
            placeholder="검색어를 입력하세요"
            onSearch={(value) => console.log('Search:', value)}
            onChange={(value) => console.log('Input changed:', value)}
          />
          <SearchFilter 
            label="필터 검색"
            placeholder="검색어를 입력하세요"
            onSearch={(value) => console.log('Search:', value)}
            onFilter={() => console.log('Filter clicked')}
          />
          <FilledSearch 
            label="채워진 검색"
            value="검색어 입력"
            onSearch={(value) => console.log('Search:', value)}
          />
          <ErrorSearch 
            label="오류 검색"
            value="잘못된 검색어"
            info="검색어를 다시 입력해주세요"
            onSearch={(value) => console.log('Search:', value)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchExamples;