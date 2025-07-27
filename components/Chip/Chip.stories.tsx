import type { Meta, StoryObj } from '@storybook/react';
import { Chip, ChipGroup } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 칩 컴포넌트입니다. 태그, 필터, 선택 옵션 등에 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: '칩에 표시될 텍스트',
    },
    variant: {
      control: 'select',
      options: ['filter', 'hash'],
      description: '칩의 스타일 변형',
    },
    deletable: {
      control: 'boolean',
      description: '삭제 가능한 칩인지 여부',
    },
    active: {
      control: 'boolean',
      description: '활성화 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    onClick: {
      action: 'clicked',
      description: '칩 클릭 시 호출되는 콜백',
    },
    onDelete: {
      action: 'deleted',
      description: '삭제 버튼 클릭 시 호출되는 콜백',
    },
  },
  args: {
    children: 'Chip',
    variant: 'filter',
    deletable: false,
    active: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: '기본 칩',
  },
};

// 필터 칩 (기본)
export const FilterChip: Story = {
  args: {
    children: '필터 칩',
    variant: 'filter',
  },
};

// 해시 칩
export const HashChip: Story = {
  args: {
    children: '해시 칩',
    variant: 'hash',
  },
};

// 활성화된 칩들
export const ActiveChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip variant="filter" active>활성화된 필터</Chip>
      <Chip variant="hash" active>활성화된 해시</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '활성화된 상태의 칩들입니다. 검은색 배경에 흰색 텍스트로 표시됩니다.',
      },
    },
  },
};

// 삭제 가능한 칩
export const DeletableChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip deletable onDelete={() => console.log('필터 칩 삭제!')}>
        삭제 가능한 필터
      </Chip>
      <Chip variant="hash" deletable onDelete={() => console.log('해시 칩 삭제!')}>
        삭제 가능한 해시
      </Chip>
      <Chip active deletable onDelete={() => console.log('활성화된 칩 삭제!')}>
        활성화 + 삭제 가능
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '삭제 버튼이 있는 칩들입니다. X 버튼을 클릭하여 삭제할 수 있습니다.',
      },
    },
  },
};

// 비활성화된 칩
export const DisabledChips: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip disabled>비활성화된 필터</Chip>
      <Chip variant="hash" disabled>비활성화된 해시</Chip>
      <Chip active disabled>활성화 + 비활성화</Chip>
      <Chip deletable disabled>삭제 + 비활성화</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '비활성화된 상태의 칩들입니다. 투명도가 낮아지고 클릭할 수 없습니다.',
      },
    },
  },
};

// 다양한 상태의 칩들
export const ChipStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip variant="filter">기본 필터</Chip>
      <Chip variant="filter" active>활성화된 필터</Chip>
      <Chip variant="hash">기본 해시</Chip>
      <Chip variant="hash" active>활성화된 해시</Chip>
      <Chip deletable onDelete={() => console.log('삭제!')}>삭제 가능</Chip>
      <Chip disabled>비활성화</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '칩의 다양한 상태를 한눈에 볼 수 있습니다.',
      },
    },
  },
};

// 메뉴 선택 예제 (원본 이미지와 유사)
export const MenuSelection: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip variant="hash" active onClick={() => console.log('메뉴 1')}>
        메뉴-1-menu
      </Chip>
      <Chip variant="hash" active onClick={() => console.log('메뉴 2')}>
        메뉴-2-menu
      </Chip>
      <Chip variant="hash" active onClick={() => console.log('메뉴 3')}>
        메뉴-3-menu
      </Chip>
      <Chip variant="hash" active onClick={() => console.log('메뉴 4')}>
        메뉴-4-menu
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '원본 HTML 예시와 동일한 메뉴 선택 인터페이스입니다.',
      },
    },
  },
};

// 기술 스택 태그 예제
export const TechStack: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip variant="hash" active onClick={() => console.log('React')}>React</Chip>
      <Chip variant="hash" onClick={() => console.log('Vue')}>Vue</Chip>
      <Chip variant="hash" onClick={() => console.log('Angular')}>Angular</Chip>
      <Chip variant="hash" active onClick={() => console.log('TypeScript')}>TypeScript</Chip>
      <Chip variant="hash" onClick={() => console.log('JavaScript')}>JavaScript</Chip>
      <Chip variant="hash" active onClick={() => console.log('Node.js')}>Node.js</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '기술 스택을 선택하는 인터페이스 예제입니다.',
      },
    },
  },
};

// 필터 태그 (삭제 가능)
export const FilterTags: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip deletable onDelete={() => console.log('프론트엔드 삭제')}>
        프론트엔드 개발
      </Chip>
      <Chip deletable onDelete={() => console.log('백엔드 삭제')}>
        백엔드 개발
      </Chip>
      <Chip deletable onDelete={() => console.log('모바일 삭제')}>
        모바일 개발
      </Chip>
      <Chip deletable onDelete={() => console.log('데이터사이언스 삭제')}>
        데이터 사이언스
      </Chip>
      <Chip deletable onDelete={() => console.log('디자인 삭제')}>
        UI/UX 디자인
      </Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '사용자가 선택한 필터를 삭제할 수 있는 태그 예제입니다.',
      },
    },
  },
};

// 필터 칩 그룹
export const FilterChipGroup: Story = {
  render: () => (
    <ChipGroup variant="filter">
      <Chip deletable onDelete={() => console.log('카테고리 1 삭제')}>카테고리 1</Chip>
      <Chip deletable onDelete={() => console.log('카테고리 2 삭제')}>카테고리 2</Chip>
      <Chip deletable onDelete={() => console.log('카테고리 3 삭제')}>카테고리 3</Chip>
      <Chip deletable onDelete={() => console.log('카테고리 4 삭제')}>카테고리 4</Chip>
    </ChipGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: '필터 칩들을 그룹으로 묶은 예제입니다.',
      },
    },
  },
};

// 해시 칩 그룹
export const HashChipGroup: Story = {
  render: () => (
    <ChipGroup variant="hash" showMore onMoreClick={() => console.log('더보기 클릭')}>
      <Chip variant="hash" active>전체</Chip>
      <Chip variant="hash">카테고리 A</Chip>
      <Chip variant="hash">카테고리 B</Chip>
      <Chip variant="hash">카테고리 C</Chip>
      <Chip variant="hash">카테고리 D</Chip>
    </ChipGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: '해시 형태의 칩 그룹입니다. 더보기 버튼이 포함되어 있습니다.',
      },
    },
  },
};

// 탭 형태 칩 그룹
export const TabChipGroup: Story = {
  render: () => (
    <ChipGroup variant="tab" isOpen={true} showMore onMoreClick={() => console.log('더보기 클릭')}>
      <Chip variant="hash" active>인기 검색어 1</Chip>
      <Chip variant="hash">인기 검색어 2</Chip>
      <Chip variant="hash">인기 검색어 3</Chip>
      <Chip variant="hash">인기 검색어 4</Chip>
      <Chip variant="hash">인기 검색어 5</Chip>
    </ChipGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: '탭 형태의 칩 그룹입니다. 인기 검색어 등에 사용됩니다.',
      },
    },
  },
};