import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 뱃지 컴포넌트입니다. 다양한 변형을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['new', 'line-gray', 'solid', 'outline'],
      description: '뱃지의 스타일 변형',
    },
    children: {
      control: 'text',
      description: '뱃지에 표시될 텍스트',
    },
    ariaLabel: {
      control: 'text',
      description: '접근성을 위한 aria-label',
    },
  },
  args: {
    children: 'Badge',
    variant: 'solid',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: 'Default Badge',
  },
};

// 변형별 스토리
export const New: Story = {
  args: {
    variant: 'new',
    children: 'New',
  },
};

export const LineGray: Story = {
  args: {
    variant: 'line-gray',
    children: 'Line Gray',
  },
};

export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

// 모든 변형 조합
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Badge variant="new">New</Badge>
      <Badge variant="line-gray">Line Gray</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '뱃지의 모든 변형을 한눈에 볼 수 있습니다.',
      },
    },
  },
};

// 접근성 예시
export const WithAriaLabel: Story = {
  args: {
    children: 'Important',
    ariaLabel: '중요한 정보입니다',
    variant: 'new',
  },
  parameters: {
    docs: {
      description: {
        story: 'ariaLabel을 사용하여 접근성을 향상시킨 예시입니다.',
      },
    },
  },
};