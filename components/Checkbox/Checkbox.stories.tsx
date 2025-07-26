import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 체크박스 컴포넌트입니다. 다양한 크기와 상태를 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      description: '체크박스 크기',
    },
    state: {
      control: 'select',
      options: ['false', 'true', 'indeterminate', 'disabled'],
      description: '체크박스 상태',
    },
    checked: {
      control: 'boolean',
      description: '체크 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    required: {
      control: 'boolean',
      description: '필수 선택 여부',
    },
    onChange: {
      action: 'changed',
      description: '상태 변경 시 호출되는 함수',
    },
  },
  args: {
    label: 'Checkbox Label',
    size: 'md',
    state: 'false',
    checked: false,
    disabled: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '기본 체크박스',
  },
};

// 선택된 상태
export const Checked: Story = {
  args: {
    label: '선택된 체크박스',
    checked: true,
  },
};

// 중간 상태
export const Indeterminate: Story = {
  args: {
    label: '중간 상태 체크박스',
    state: 'indeterminate',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화 체크박스',
    state: 'disabled',
    disabled: true,
  },
};

// 비활성화 + 선택 상태
export const DisabledChecked: Story = {
  args: {
    label: '비활성화 + 선택 상태',
    checked: true,
    disabled: true,
  },
};

// 필수 선택
export const Required: Story = {
  args: {
    label: '필수 선택 체크박스',
    required: true,
  },
};

// 크기별
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="Large (lg)" size="lg" />
      <Checkbox label="Medium (md)" size="md" />
      <Checkbox label="Small (sm)" size="sm" />
      <Checkbox label="Extra Small (xs)" size="xs" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '체크박스의 다양한 크기를 보여줍니다.',
      },
    },
  },
};

// 상태별
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox label="기본 상태" state="false" />
      <Checkbox label="선택된 상태" state="true" />
      <Checkbox label="중간 상태" state="indeterminate" />
      <Checkbox label="비활성화 상태" state="disabled" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '체크박스의 다양한 상태를 보여줍니다.',
      },
    },
  },
};

// 그룹 예제
export const CheckboxGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>관심 분야를 선택하세요:</div>
      <Checkbox label="프론트엔드 개발" />
      <Checkbox label="백엔드 개발" />
      <Checkbox label="모바일 개발" />
      <Checkbox label="데이터 사이언스" />
      <Checkbox label="디자인" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '여러 개의 체크박스를 그룹으로 사용하는 예제입니다.',
      },
    },
  },
};

// 라벨 없는 체크박스
export const WithoutLabel: Story = {
  args: {
    'aria-label': '라벨 없는 체크박스',
  },
  parameters: {
    docs: {
      description: {
        story: '시각적 라벨 없이 aria-label만 사용하는 체크박스입니다.',
      },
    },
  },
};