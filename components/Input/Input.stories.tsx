import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 입력 필드 컴포넌트입니다. 다양한 상태와 타입을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '입력 필드의 라벨',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url'],
      description: '입력 필드의 타입',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'success', 'disabled'],
      description: '입력 필드의 상태',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: '입력 필드의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    readOnly: {
      control: 'boolean',
      description: '읽기 전용 상태',
    },
    required: {
      control: 'boolean',
      description: '필수 입력 여부',
    },
    error: {
      control: 'text',
      description: '에러 메시지',
    },
    maxLength: {
      control: 'number',
      description: '최대 입력 길이',
    },
  },
  args: {
    label: 'Label',
    type: 'text',
    placeholder: '텍스트를 입력하세요',
    state: 'default',
    size: 'md',
    disabled: false,
    readOnly: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '기본 입력 필드',
    placeholder: '텍스트를 입력하세요',
  },
};

// 라벨 없는 입력 필드
export const WithoutLabel: Story = {
  args: {
    placeholder: '라벨이 없는 입력 필드',
  },
};

// 필수 입력 필드
export const Required: Story = {
  args: {
    label: '필수 입력 필드',
    placeholder: '필수 항목입니다',
    required: true,
  },
};

// 비밀번호 입력
export const Password: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
  },
};

// 에러 상태
export const Error: Story = {
  args: {
    label: '에러 상태',
    placeholder: '잘못된 입력',
    state: 'error',
    error: '올바른 형식이 아닙니다',
  },
};

// 성공 상태
export const Success: Story = {
  args: {
    label: '성공 상태',
    placeholder: '올바른 입력',
    state: 'success',
    value: 'valid@email.com',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화 상태',
    placeholder: '입력할 수 없습니다',
    state: 'disabled',
    disabled: true,
  },
};

// 읽기 전용
export const ReadOnly: Story = {
  args: {
    label: '읽기 전용',
    value: '수정할 수 없는 값',
    readOnly: true,
  },
};

// 크기별
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="Large" size="lg" placeholder="Large size input" />
      <Input label="Medium" size="md" placeholder="Medium size input" />
      <Input label="Small" size="sm" placeholder="Small size input" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '입력 필드의 다양한 크기를 보여줍니다.',
      },
    },
  },
};

// 다양한 타입
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '300px' }}>
      <Input label="텍스트" type="text" placeholder="텍스트 입력" />
      <Input label="이메일" type="email" placeholder="email@example.com" />
      <Input label="숫자" type="number" placeholder="숫자만 입력" />
      <Input label="전화번호" type="tel" placeholder="010-1234-5678" />
      <Input label="URL" type="url" placeholder="https://example.com" />
      <Input label="비밀번호" type="password" placeholder="비밀번호 입력" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 HTML5 입력 타입을 지원합니다.',
      },
    },
  },
};

// 문자 수 제한
export const WithMaxLength: Story = {
  args: {
    label: '문자 수 제한 (10자)',
    placeholder: '최대 10자까지',
    maxLength: 10,
  },
};