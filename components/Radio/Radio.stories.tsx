import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 라디오 버튼 컴포넌트입니다. 여러 옵션 중 하나만 선택할 때 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '라디오 버튼 라벨',
    },
    name: {
      control: 'text',
      description: '라디오 그룹 이름',
    },
    value: {
      control: 'text',
      description: '라디오 버튼 값',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      description: '라디오 버튼 크기',
    },
    state: {
      control: 'select',
      options: ['false', 'true', 'disabled'],
      description: '라디오 버튼 상태',
    },
    checked: {
      control: 'boolean',
      description: '선택 상태',
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
    label: 'Radio Label',
    name: 'radio-group',
    value: 'option1',
    size: 'lg',
    state: 'default',
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
    label: '기본 라디오 버튼',
    name: 'default',
    value: 'default',
  },
};

// 선택된 상태
export const Checked: Story = {
  args: {
    label: '선택된 라디오 버튼',
    name: 'checked',
    value: 'checked',
    checked: true,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화 라디오 버튼',
    name: 'disabled',
    value: 'disabled',
    state: 'disabled',
    disabled: true,
  },
};

// 비활성화 + 선택 상태
export const DisabledChecked: Story = {
  args: {
    label: '비활성화 + 선택 상태',
    name: 'disabled-checked',
    value: 'disabled-checked',
    checked: true,
    disabled: true,
  },
};

// 필수 선택
export const Required: Story = {
  args: {
    label: '필수 선택 라디오 버튼',
    name: 'required',
    value: 'required',
    required: true,
  },
};

// 크기별
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="Large (lg)" name="sizes" value="lg" size="lg" />
      <Radio label="Small (sm)" name="sizes" value="sm" size="sm" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '라디오 버튼의 다양한 크기를 보여줍니다.',
      },
    },
  },
};

// 상태별
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="기본 상태" name="states" value="default" state="default" />
      <Radio label="선택된 상태" name="states" value="selected" state="selected" />
      <Radio label="비활성화 상태" name="states" value="disabled" state="disabled" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '라디오 버튼의 다양한 상태를 보여줍니다.',
      },
    },
  },
};

// 라디오 그룹 예제
export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>선호하는 프로그래밍 언어:</div>
      <Radio label="JavaScript" name="language" value="javascript" />
      <Radio label="TypeScript" name="language" value="typescript" />
      <Radio label="Python" name="language" value="python" />
      <Radio label="Java" name="language" value="java" />
      <Radio label="C++" name="language" value="cpp" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '여러 개의 라디오 버튼을 그룹으로 사용하는 예제입니다.',
      },
    },
  },
};

// 수평 배치 그룹
export const HorizontalGroup: Story = {
  render: () => (
    <div>
      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>경험 수준:</div>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Radio label="초급" name="level" value="beginner" />
        <Radio label="중급" name="level" value="intermediate" />
        <Radio label="고급" name="level" value="advanced" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '라디오 버튼을 수평으로 배치한 그룹 예제입니다.',
      },
    },
  },
};

// 다양한 크기 조합
export const MixedSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>큰 크기 옵션:</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Radio label="옵션 A" name="large-options" value="a" size="lg" />
          <Radio label="옵션 B" name="large-options" value="b" size="lg" />
        </div>
      </div>
      
      <div>
        <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>작은 크기 옵션:</div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Radio label="예" name="small-options" value="yes" size="sm" />
          <Radio label="아니오" name="small-options" value="no" size="sm" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 크기의 라디오 버튼을 조합한 예제입니다.',
      },
    },
  },
};

// 라벨 없는 라디오 버튼
export const WithoutLabel: Story = {
  args: {
    name: 'no-label',
    value: 'no-label',
    'aria-label': '라벨 없는 라디오 버튼',
  },
  parameters: {
    docs: {
      description: {
        story: '시각적 라벨 없이 aria-label만 사용하는 라디오 버튼입니다.',
      },
    },
  },
};