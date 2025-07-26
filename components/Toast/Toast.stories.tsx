import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastProvider, useToast } from './Toast';
import { Button } from '../Button/Button';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 토스트 알림 컴포넌트입니다. 임시 메시지를 표시하는 데 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: '토스트 메시지',
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: '토스트 타입',
    },
    visible: {
      control: 'boolean',
      description: '표시 여부',
    },
    duration: {
      control: 'number',
      description: '자동 닫힘 시간 (ms), 0이면 자동으로 닫히지 않음',
    },
    onClose: {
      action: 'closed',
      description: '토스트가 닫힐 때 호출되는 콜백',
    },
  },
  args: {
    message: '토스트 메시지입니다',
    type: 'info',
    visible: true,
    duration: 3000,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    message: '기본 토스트 메시지입니다',
    visible: true,
  },
};

// 정보 토스트
export const Info: Story = {
  args: {
    message: '정보 메시지입니다',
    type: 'info',
    visible: true,
  },
};

// 성공 토스트
export const Success: Story = {
  args: {
    message: '성공적으로 처리되었습니다',
    type: 'success',
    visible: true,
  },
};

// 경고 토스트
export const Warning: Story = {
  args: {
    message: '주의가 필요합니다',
    type: 'warning',
    visible: true,
  },
};

// 에러 토스트
export const Error: Story = {
  args: {
    message: '오류가 발생했습니다',
    type: 'error',
    visible: true,
  },
};

// 자동으로 닫히지 않는 토스트
export const Persistent: Story = {
  args: {
    message: '이 토스트는 자동으로 닫히지 않습니다',
    type: 'info',
    visible: true,
    duration: 0,
  },
};

// 다양한 토스트 타입 비교
export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Toast message="정보 메시지입니다" type="info" visible={true} duration={0} />
      <Toast message="성공적으로 처리되었습니다" type="success" visible={true} duration={0} />
      <Toast message="주의가 필요합니다" type="warning" visible={true} duration={0} />
      <Toast message="오류가 발생했습니다" type="error" visible={true} duration={0} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 토스트 타입을 한눈에 볼 수 있습니다.',
      },
    },
  },
};

// 다양한 메시지 길이
export const MessageLengths: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Toast message="짧은 메시지" type="info" visible={true} duration={0} />
      <Toast 
        message="중간 길이의 메시지입니다. 두 줄 정도 되는 내용입니다." 
        type="success" 
        visible={true} 
        duration={0} 
      />
      <Toast 
        message="매우 긴 메시지입니다. 이런 식으로 긴 내용도 토스트에 표시할 수 있습니다. 토스트는 내용에 따라 적절히 크기가 조절됩니다." 
        type="warning" 
        visible={true} 
        duration={0} 
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 길이의 메시지를 가진 토스트입니다.',
      },
    },
  },
};

// ToastProvider와 useToast 훅 사용 예제
const ToastDemo = () => {
  const { showToast } = useToast();

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Button 
        variant="primary" 
        size="sm"
        onClick={() => showToast('정보 메시지입니다', 'info')}
      >
        정보 토스트
      </Button>
      <Button 
        variant="primary" 
        size="sm"
        onClick={() => showToast('성공적으로 처리되었습니다', 'success')}
      >
        성공 토스트
      </Button>
      <Button 
        variant="primary" 
        size="sm"
        onClick={() => showToast('주의가 필요합니다', 'warning')}
      >
        경고 토스트
      </Button>
      <Button 
        variant="primary" 
        size="sm"
        onClick={() => showToast('오류가 발생했습니다', 'error')}
      >
        오류 토스트
      </Button>
      <Button 
        variant="secondary" 
        size="sm"
        onClick={() => showToast('이 토스트는 5초간 표시됩니다', 'info', 5000)}
      >
        5초 토스트
      </Button>
    </div>
  );
};

export const WithProvider: Story = {
  render: () => (
    <ToastProvider maxToasts={3}>
      <ToastDemo />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'ToastProvider와 useToast 훅을 사용한 실제 구현 예제입니다. 버튼을 클릭하면 토스트가 표시됩니다.',
      },
    },
  },
};

// 연속으로 여러 토스트 표시
const MultipleToastDemo = () => {
  const { showToast } = useToast();

  const showMultipleToasts = () => {
    showToast('첫 번째 토스트', 'info');
    setTimeout(() => showToast('두 번째 토스트', 'success'), 500);
    setTimeout(() => showToast('세 번째 토스트', 'warning'), 1000);
    setTimeout(() => showToast('네 번째 토스트', 'error'), 1500);
  };

  return (
    <Button variant="primary" onClick={showMultipleToasts}>
      여러 토스트 동시 표시
    </Button>
  );
};

export const MultipleToasts: Story = {
  render: () => (
    <ToastProvider maxToasts={5}>
      <MultipleToastDemo />
    </ToastProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: '여러 개의 토스트를 연속으로 표시하는 예제입니다.',
      },
    },
  },
};