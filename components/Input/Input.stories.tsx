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
      options: ['text', 'password', 'email', 'number', 'tel', 'search'],
      description: '입력 필드의 타입',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    state: {
      control: 'select',
      options: ['default', 'error', 'focus', 'filled', 'disabled'],
      description: '입력 필드의 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    error: {
      control: 'text',
      description: '에러 메시지',
    },
    info: {
      control: 'text',
      description: '정보 메시지',
    },
    success: {
      control: 'text',
      description: '성공 메시지',
    },
  },
  args: {
    placeholder: '텍스트를 입력하세요',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 입력 필드
export const Default: Story = {
  args: {
    placeholder: '기본 입력 필드',
  },
};

// 라벨이 있는 입력 필드
export const WithLabel: Story = {
  args: {
    label: '레이블',
    placeholder: '텍스트를 입력하세요',
    id: 'input-with-label',
  },
};

// 에러 상태 (원본 HTML과 동일)
export const Error: Story = {
  args: {
    label: '레이블',
    id: 'tex',
    value: '입력된 텍스트 입니다',
    placeholder: '이름을 입력하세요',
    error: '오류 메세지 출력',
  },
  parameters: {
    docs: {
      description: {
        story: '원본 HTML과 동일한 에러 상태입니다. 입력 필드 하단에 빨간색 에러 메시지가 표시됩니다.',
      },
    },
  },
};

// 정보 메시지
export const WithInfo: Story = {
  args: {
    label: '사용자명',
    placeholder: '사용자명을 입력하세요',
    info: '영문, 숫자, 특수문자(_,-)만 사용 가능합니다',
    id: 'username',
  },
};

// 성공 상태
export const Success: Story = {
  args: {
    label: '이메일',
    value: 'user@example.com',
    placeholder: '이메일을 입력하세요',
    success: '사용 가능한 이메일입니다',
    id: 'email',
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화 필드',
    value: '수정할 수 없습니다',
    disabled: true,
    id: 'disabled-input',
  },
};

// 패스워드 입력
export const Password: Story = {
  args: {
    label: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력하세요',
    info: '8자 이상, 영문/숫자/특수문자 조합',
    id: 'password',
  },
};

// 필수 입력 필드
export const Required: Story = {
  args: {
    label: '필수 입력 필드 *',
    placeholder: '필수 입력 항목입니다',
    required: true,
    id: 'required-input',
  },
};

// 읽기 전용
export const ReadOnly: Story = {
  args: {
    label: '읽기 전용',
    value: '수정할 수 없는 값',
    readOnly: true,
    id: 'readonly-input',
  },
};

// 다양한 타입
export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Input 
        label="텍스트" 
        type="text" 
        placeholder="텍스트를 입력하세요" 
        id="text-input"
      />
      <Input 
        label="이메일" 
        type="email" 
        placeholder="email@example.com" 
        id="email-input"
      />
      <Input 
        label="전화번호" 
        type="tel" 
        placeholder="010-1234-5678" 
        id="tel-input"
      />
      <Input 
        label="숫자" 
        type="number" 
        placeholder="숫자를 입력하세요" 
        id="number-input"
      />
      <Input 
        label="검색" 
        type="search" 
        placeholder="검색어를 입력하세요" 
        id="search-input"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 입력 타입을 보여주는 예시입니다.',
      },
    },
  },
};

// 다양한 상태
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Input 
        label="기본 상태" 
        placeholder="기본 입력 필드" 
        id="default-state"
      />
      <Input 
        label="입력된 상태" 
        value="입력된 텍스트" 
        id="filled-state"
      />
      <Input 
        label="에러 상태" 
        value="잘못된 입력" 
        error="올바르지 않은 형식입니다" 
        id="error-state"
      />
      <Input 
        label="성공 상태" 
        value="올바른 입력" 
        success="입력이 완료되었습니다" 
        id="success-state"
      />
      <Input 
        label="정보 메시지" 
        placeholder="도움말이 있는 필드" 
        info="추가 정보나 설명을 제공합니다" 
        id="info-state"
      />
      <Input 
        label="비활성화 상태" 
        value="수정 불가" 
        disabled={true}
        id="disabled-state"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '입력 필드의 모든 상태를 한눈에 볼 수 있습니다.',
      },
    },
  },
};

// 긴 메시지 테스트
export const LongMessages: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Input 
        label="긴 에러 메시지" 
        value="잘못된 값" 
        error="이것은 매우 긴 에러 메시지입니다. 사용자에게 상세한 오류 정보를 제공하기 위해 여러 줄에 걸쳐 표시될 수 있습니다." 
        id="long-error"
      />
      <Input 
        label="긴 정보 메시지" 
        placeholder="입력하세요" 
        info="이것은 사용자에게 도움이 되는 긴 정보 메시지입니다. 입력 방법이나 제약사항에 대한 자세한 설명을 포함할 수 있습니다." 
        id="long-info"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '긴 메시지가 어떻게 표시되는지 확인할 수 있습니다.',
      },
    },
  },
};

// 폼 예시
export const FormExample: Story = {
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', width: '400px' }}>
      <Input 
        label="이름 *" 
        placeholder="이름을 입력하세요" 
        required
        id="name"
      />
      <Input 
        label="이메일 *" 
        type="email" 
        placeholder="email@example.com" 
        required
        id="email-form"
      />
      <Input 
        label="전화번호" 
        type="tel" 
        placeholder="010-1234-5678" 
        info="선택 입력 항목입니다"
        id="phone"
      />
      <Input 
        label="비밀번호 *" 
        type="password" 
        placeholder="비밀번호를 입력하세요" 
        info="8자 이상, 영문/숫자/특수문자 조합"
        required
        id="password-form"
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 폼에서 사용되는 입력 필드들의 예시입니다.',
      },
    },
  },
};