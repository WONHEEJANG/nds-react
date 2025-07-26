import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 다중행 텍스트 입력 컴포넌트입니다. 자동 크기 조절과 문자 수 제한 기능을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '텍스트에어리어 라벨',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    maxLength: {
      control: 'number',
      description: '최대 문자 수',
    },
    minRows: {
      control: 'number',
      description: '최소 행 수',
    },
    maxRows: {
      control: 'number',
      description: '최대 행 수 (자동 크기 조절 시)',
    },
    autoResize: {
      control: 'boolean',
      description: '자동 크기 조절 여부',
    },
    showCounter: {
      control: 'boolean',
      description: '문자 카운트 표시 여부',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    readonly: {
      control: 'boolean',
      description: '읽기 전용 상태',
    },
    error: {
      control: 'boolean',
      description: '에러 상태',
    },
    required: {
      control: 'boolean',
      description: '필수 입력 여부',
    },
    info: {
      control: 'text',
      description: '안내 메시지',
    },
    errorMessage: {
      control: 'text',
      description: '에러 메시지',
    },
  },
  args: {
    label: 'TextArea Label',
    placeholder: '내용을 입력하세요',
    minRows: 3,
    disabled: false,
    readonly: false,
    error: false,
    required: false,
    autoResize: false,
    showCounter: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '기본 텍스트 영역',
    placeholder: '여러 줄의 텍스트를 입력하세요',
  },
};

// 문자 수 제한
export const WithMaxLength: Story = {
  args: {
    label: '문자 수 제한 (100자)',
    placeholder: '최대 100자까지 입력 가능',
    maxLength: 100,
    showCounter: true,
    minRows: 4,
  },
};

// 자동 크기 조절
export const AutoResize: Story = {
  args: {
    label: '자동 크기 조절',
    placeholder: '입력하면 자동으로 크기가 조절됩니다',
    autoResize: true,
    minRows: 2,
    maxRows: 6,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화 상태',
    value: '수정할 수 없는 텍스트입니다',
    disabled: true,
  },
};

// 읽기 전용
export const ReadOnly: Story = {
  args: {
    label: '읽기 전용',
    value: '읽기 전용 텍스트입니다.\n여러 줄로 작성된 내용을 볼 수 있습니다.',
    readonly: true,
  },
};

// 에러 상태
export const Error: Story = {
  args: {
    label: '에러 상태',
    placeholder: '내용을 입력하세요',
    error: true,
    errorMessage: '필수 항목입니다. 내용을 입력해주세요.',
  },
};

// 필수 입력
export const Required: Story = {
  args: {
    label: '필수 입력 텍스트 영역',
    placeholder: '필수 내용을 입력하세요',
    required: true,
  },
};

// 안내 메시지
export const WithInfo: Story = {
  args: {
    label: '안내 메시지가 있는 텍스트 영역',
    placeholder: '의견을 자유롭게 작성해주세요',
    info: '최대한 자세히 작성해주시면 더 정확한 답변을 드릴 수 있습니다.',
  },
};

// 다양한 설정 조합
export const VariousConfigurations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <TextArea
        label="기본 텍스트 영역"
        placeholder="기본 텍스트 영역입니다"
        minRows={3}
      />
      
      <TextArea
        label="문자 수 제한 + 카운터"
        placeholder="최대 50자까지"
        maxLength={50}
        showCounter={true}
        minRows={2}
      />
      
      <TextArea
        label="자동 크기 조절"
        placeholder="입력하면 크기가 자동으로 조절됩니다"
        autoResize={true}
        minRows={2}
        maxRows={5}
      />
      
      <TextArea
        label="필수 입력 + 안내 메시지"
        placeholder="필수 내용을 입력하세요"
        required={true}
        info="이 항목은 반드시 입력해야 합니다."
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 설정을 조합한 텍스트 영역의 예제입니다.',
      },
    },
  },
};

// 크기별 비교
export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <TextArea
        label="2행 (최소)"
        placeholder="최소 2행"
        minRows={2}
      />
      <TextArea
        label="4행 (중간)"
        placeholder="기본 4행"
        minRows={4}
      />
      <TextArea
        label="6행 (큰 사이즈)"
        placeholder="큰 사이즈 6행"
        minRows={6}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 행 수를 가진 텍스트 영역을 비교해볼 수 있습니다.',
      },
    },
  },
};