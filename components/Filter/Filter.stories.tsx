import type { Meta, StoryObj } from '@storybook/react';
import { FilterBar, FilterResult, SearchFilter } from './Filter';
import type { FilterBarProps, FilterResultProps, SearchFilterProps } from './Filter';

// FilterBar Stories
const filterBarMeta: Meta<typeof FilterBar> = {
  title: 'Components/Filter/FilterBar',
  component: FilterBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['left', 'right'],
      description: '필터 바 타입',
    },
    recommendEnabled: {
      control: 'boolean',
      description: '추천 상품 스위치 상태',
    },
    showTooltip: {
      control: 'boolean',
      description: '툴팁 표시 여부',
    },
  },
};

export default filterBarMeta;
type FilterBarStory = StoryObj<typeof filterBarMeta>;

export const FilterLeft: FilterBarStory = {
  args: {
    variant: 'left',
    searchInfo: '전체ㆍ3개월',
    recommendLabel: '추천 상품',
    recommendEnabled: true,
    showTooltip: true,
    onFilterClick: () => console.log('Filter clicked'),
    onRecommendToggle: (enabled) => console.log('Recommend toggled:', enabled),
    onTooltipClick: () => console.log('Tooltip clicked'),
  },
};

export const FilterRight: FilterBarStory = {
  args: {
    variant: 'right',
    dateRange: '2024.10.22 ~ 2024.12.22',
    sortOption: '최신순',
    onFilterClick: () => console.log('Filter clicked'),
  },
};

export const FilterLeftWithoutInfo: FilterBarStory = {
  args: {
    variant: 'left',
    recommendLabel: '추천 상품',
    recommendEnabled: false,
    showTooltip: false,
    onFilterClick: () => console.log('Filter clicked'),
    onRecommendToggle: (enabled) => console.log('Recommend toggled:', enabled),
  },
};

// FilterResult Stories
const filterResultMeta: Meta<typeof FilterResult> = {
  title: 'Components/Filter/FilterResult',
  component: FilterResult,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

type FilterResultStory = StoryObj<typeof filterResultMeta>;

export const FilterResultDefault: FilterResultStory = {
  args: {
    filters: [
      { id: '1', label: '카테고리', onRemove: () => console.log('Remove filter 1') },
      { id: '2', label: '금액범위', onRemove: () => console.log('Remove filter 2') },
      { id: '3', label: '기간', onRemove: () => console.log('Remove filter 3') },
    ],
  },
};

export const FilterResultSingle: FilterResultStory = {
  args: {
    filters: [
      { id: '1', label: '선택된 필터', onRemove: () => console.log('Remove filter') },
    ],
  },
};

export const FilterResultEmpty: FilterResultStory = {
  args: {
    filters: [],
  },
};

// SearchFilter Stories
const searchFilterMeta: Meta<typeof SearchFilter> = {
  title: 'Components/Filter/SearchFilter',
  component: SearchFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'radio',
      options: ['default', 'focus', 'filled', 'disabled'],
      description: '컴포넌트 상태',
    },
  },
};

type SearchFilterStory = StoryObj<typeof searchFilterMeta>;

export const SearchFilterDefault: SearchFilterStory = {
  args: {
    id: 'search-default',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'default',
    info: '안내 문구 입력',
    onSearchClick: () => console.log('Search clicked'),
    onFilterClick: () => console.log('Filter settings clicked'),
    onChange: (value) => console.log('Search value:', value),
  },
};

export const SearchFilterFocus: SearchFilterStory = {
  args: {
    id: 'search-focus',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'focus',
    info: '안내 문구 입력',
    onSearchClick: () => console.log('Search clicked'),
    onFilterClick: () => console.log('Filter settings clicked'),
    onChange: (value) => console.log('Search value:', value),
  },
};

export const SearchFilterFilled: SearchFilterStory = {
  args: {
    id: 'search-filled',
    label: '검색',
    value: '입력된 검색어',
    state: 'filled',
    info: '안내 문구 입력',
    onSearchClick: () => console.log('Search clicked'),
    onFilterClick: () => console.log('Filter settings clicked'),
    onChange: (value) => console.log('Search value:', value),
  },
};

export const SearchFilterDisabled: SearchFilterStory = {
  args: {
    id: 'search-disabled',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'disabled',
    info: '안내 문구 입력',
    onSearchClick: () => console.log('Search clicked'),
    onFilterClick: () => console.log('Filter settings clicked'),
    onChange: (value) => console.log('Search value:', value),
  },
};

export const SearchFilterNoInfo: SearchFilterStory = {
  args: {
    id: 'search-no-info',
    label: '검색',
    placeholder: '검색어 입력',
    state: 'default',
    onSearchClick: () => console.log('Search clicked'),
    onFilterClick: () => console.log('Filter settings clicked'),
    onChange: (value) => console.log('Search value:', value),
  },
};