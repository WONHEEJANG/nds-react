import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 기본 버튼 컴포넌트입니다. 다양한 변형과 크기를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
      description: '버튼의 스타일 변형',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'rg', 'sm', 'xs'],
      description: '버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 상태',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: '버튼의 HTML 타입',
    },
    children: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭 시 호출되는 함수',
    },
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    type: 'button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: 'Default Button',
  },
};

// 변형별 스토리
export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
  },
};

// 크기별 스토리
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button variant="primary" size="lg">Large</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="rg">Regular</Button>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="xs">XSmall</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 다양한 크기를 보여줍니다.',
      },
    },
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};

// 모든 변형 조합
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary" size="lg">Primary Large</Button>
        <Button variant="secondary" size="lg">Secondary Large</Button>
        <Button variant="tertiary" size="lg">Tertiary Large</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary" size="md">Primary Medium</Button>
        <Button variant="secondary" size="md">Secondary Medium</Button>
        <Button variant="tertiary" size="md">Tertiary Medium</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary" size="sm">Primary Small</Button>
        <Button variant="secondary" size="sm">Secondary Small</Button>
        <Button variant="tertiary" size="sm">Tertiary Small</Button>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="tertiary" disabled>Tertiary Disabled</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼의 모든 변형과 상태를 한눈에 볼 수 있습니다.',
      },
    },
  },
};