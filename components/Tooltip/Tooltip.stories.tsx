import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipButton } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 툴팁 컴포넌트입니다. 추가 정보나 도움말을 제공하는 데 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '툴팁 제목',
    },
    content: {
      control: 'text',
      description: '툴팁 내용',
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '툴팁 위치',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus'],
      description: '트리거 이벤트',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    delay: {
      control: 'number',
      description: '지연 시간 (ms)',
    },
  },
  args: {
    content: '툴팁 내용입니다',
    position: 'top',
    trigger: 'hover',
    disabled: false,
    delay: 0,
    children: <Button variant="secondary" size="sm">툴팁 트리거</Button>,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    content: '기본 툴팁입니다',
    children: <Button variant="secondary" size="sm">호버하세요</Button>,
  },
};

// 제목이 있는 툴팁
export const WithTitle: Story = {
  args: {
    title: '도움말',
    content: '이것은 제목이 있는 툴팁입니다',
    children: <Button variant="secondary" size="sm">제목 있는 툴팁</Button>,
  },
};

// 클릭 트리거
export const ClickTrigger: Story = {
  args: {
    content: '클릭하면 나타나는 툴팁입니다',
    trigger: 'click',
    children: <Button variant="secondary" size="sm">클릭하세요</Button>,
  },
};

// 포커스 트리거
export const FocusTrigger: Story = {
  args: {
    content: '포커스 시 나타나는 툴팁입니다',
    trigger: 'focus',
    children: <Button variant="secondary" size="sm">포커스하세요</Button>,
  },
};

// 비활성화된 툴팁
export const Disabled: Story = {
  args: {
    content: '이 툴팁은 비활성화되었습니다',
    disabled: true,
    children: <Button variant="secondary" size="sm">비활성화됨</Button>,
  },
};

// 지연 시간
export const WithDelay: Story = {
  args: {
    content: '1초 후에 나타나는 툴팁입니다',
    delay: 1000,
    children: <Button variant="secondary" size="sm">1초 지연</Button>,
  },
};

// 위치별 툴팁
export const Positions: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '40px',
      padding: '60px',
      alignItems: 'center',
      justifyItems: 'center'
    }}>
      <div></div>
      <Tooltip content="위쪽 툴팁" position="top">
        <Button variant="secondary" size="sm">위쪽</Button>
      </Tooltip>
      <div></div>
      
      <Tooltip content="왼쪽 툴팁" position="left">
        <Button variant="secondary" size="sm">왼쪽</Button>
      </Tooltip>
      <div style={{ padding: '20px', border: '1px dashed #ccc', borderRadius: '4px' }}>
        가운데
      </div>
      <Tooltip content="오른쪽 툴팁" position="right">
        <Button variant="secondary" size="sm">오른쪽</Button>
      </Tooltip>
      
      <div></div>
      <Tooltip content="아래쪽 툴팁" position="bottom">
        <Button variant="secondary" size="sm">아래쪽</Button>
      </Tooltip>
      <div></div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '툴팁의 다양한 위치를 보여줍니다.',
      },
    },
  },
};

// 다양한 트리거 타입
export const TriggerTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Tooltip content="호버 시 나타나는 툴팁" trigger="hover">
        <Button variant="secondary" size="sm">호버 툴팁</Button>
      </Tooltip>
      
      <Tooltip content="클릭 시 나타나는 툴팁" trigger="click">
        <Button variant="secondary" size="sm">클릭 툴팁</Button>
      </Tooltip>
      
      <Tooltip content="포커스 시 나타나는 툴팁" trigger="focus">
        <Button variant="secondary" size="sm">포커스 툴팁</Button>
      </Tooltip>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 트리거 이벤트를 가진 툴팁들입니다.',
      },
    },
  },
};

// 텍스트 내용과 함께
export const WithTextContent: Story = {
  render: () => (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <p>
        이것은 일반적인 텍스트입니다. 
        <Tooltip content="이것은 인라인 툴팁입니다" trigger="hover">
          <span style={{ textDecoration: 'underline', cursor: 'help', color: 'blue' }}>
            도움말이 필요한 용어
          </span>
        </Tooltip>
        에 대한 설명을 볼 수 있습니다.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '텍스트 내용 중에 포함된 툴팁 예제입니다.',
      },
    },
  },
};

// 긴 내용의 툴팁
export const LongContent: Story = {
  args: {
    title: '상세 설명',
    content: '이것은 매우 긴 내용을 가진 툴팁입니다. 여러 줄에 걸쳐 내용이 표시될 수 있으며, 사용자에게 자세한 정보를 제공할 때 유용합니다. 툴팁은 적절한 크기로 조절되어 표시됩니다.',
    children: <Button variant="secondary" size="sm">긴 내용 툴팁</Button>,
  },
};

// TooltipButton 컴포넌트
export const TooltipButtonComponent: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <TooltipButton
        content="도움말 버튼으로 만들어진 툴팁입니다"
        label="도움말"
        trigger="click"
      />
      
      <TooltipButton
        title="상세 정보"
        content="제목과 내용이 모두 있는 도움말 버튼입니다"
        label="상세 도움말"
        trigger="hover"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '전용 도움말 버튼 컴포넌트입니다.',
      },
    },
  },
};

// 폼 필드와 함께 사용
export const WithFormFields: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label>비밀번호</label>
        <Tooltip 
          content="비밀번호는 8자 이상이어야 하며, 특수문자를 포함해야 합니다"
          trigger="click"
        >
          <Button variant="tertiary" size="xs">?</Button>
        </Tooltip>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <label>이메일</label>
        <TooltipButton
          content="올바른 이메일 형식으로 입력해주세요 (예: user@example.com)"
          label="이메일 도움말"
          trigger="hover"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '폼 필드와 함께 사용되는 툴팁 예제입니다.',
      },
    },
  },
};