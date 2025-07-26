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

// 활성화된 칩
export const Active: Story = {
  args: {
    children: '활성화된 칩',
    active: true,
  },
};

// 삭제 가능한 칩
export const Deletable: Story = {
  args: {
    children: '삭제 가능한 칩',
    deletable: true,
  },
};

// 비활성화된 칩
export const Disabled: Story = {
  args: {
    children: '비활성화된 칩',
    disabled: true,
  },
};

// 클릭 가능한 칩
export const Clickable: Story = {
  args: {
    children: '클릭 가능한 칩',
    onClick: () => console.log('칩이 클릭되었습니다!'),
  },
};

// 다양한 상태의 칩들
export const ChipStates: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip>기본</Chip>
      <Chip active>활성화</Chip>
      <Chip disabled>비활성화</Chip>
      <Chip deletable onDelete={() => console.log('삭제!')}>삭제 가능</Chip>
      <Chip active deletable onDelete={() => console.log('활성화 + 삭제!')}>
        활성화 + 삭제 가능
      </Chip>
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

// 기술 스택 태그 예제
export const TechStack: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip active onClick={() => console.log('React')}>React</Chip>
      <Chip onClick={() => console.log('Vue')}>Vue</Chip>
      <Chip onClick={() => console.log('Angular')}>Angular</Chip>
      <Chip active onClick={() => console.log('TypeScript')}>TypeScript</Chip>
      <Chip onClick={() => console.log('JavaScript')}>JavaScript</Chip>
      <Chip active onClick={() => console.log('Node.js')}>Node.js</Chip>
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

// 관심사 태그 (삭제 가능)
export const InterestTags: Story = {
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
        story: '사용자가 선택한 관심사를 삭제할 수 있는 태그 예제입니다.',
      },
    },
  },
};

// 칩 그룹 - 기본
export const BasicChipGroup: Story = {
  render: () => (
    <ChipGroup variant="basic">
      <Chip>카테고리 1</Chip>
      <Chip>카테고리 2</Chip>
      <Chip>카테고리 3</Chip>
      <Chip>카테고리 4</Chip>
    </ChipGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: '기본 칩 그룹입니다.',
      },
    },
  },
};

// 칩 그룹 - 탭
export const TabChipGroup: Story = {
  render: () => (
    <ChipGroup variant="tab">
      <Chip active>전체</Chip>
      <Chip>카테고리 A</Chip>
      <Chip>카테고리 B</Chip>
      <Chip>카테고리 C</Chip>
    </ChipGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: '탭 형태의 칩 그룹입니다.',
      },
    },
  },
};

// 칩 그룹 - 아코디언
export const AccordionChipGroup: Story = {
  render: () => (
    <ChipGroup variant="accordion" isOpen={true} showMore={true}>
      <Chip>인기 검색어 1</Chip>
      <Chip>인기 검색어 2</Chip>
      <Chip>인기 검색어 3</Chip>
      <Chip>인기 검색어 4</Chip>
      <Chip>인기 검색어 5</Chip>
    </ChipGroup>
  ),
  parameters: {
    docs: {
      description: {
        story: '아코디언 형태의 칩 그룹입니다.',
      },
    },
  },
};

// 크기가 다른 칩들
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Chip style={{ fontSize: '12px', padding: '4px 8px' }}>작은 칩</Chip>
      <Chip>보통 칩</Chip>
      <Chip style={{ fontSize: '16px', padding: '8px 16px' }}>큰 칩</Chip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 칩을 사용하는 예제입니다.',
      },
    },
  },
};