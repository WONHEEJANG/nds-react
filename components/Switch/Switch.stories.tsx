import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 스위치 컴포넌트입니다. 설정 옵션의 켜기/끄기를 제어할 때 사용됩니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: '스위치 라벨',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
      description: '스위치 크기',
    },
    state: {
      control: 'select',
      options: ['false', 'true', 'disabled'],
      description: '스위치 상태',
    },
    checked: {
      control: 'boolean',
      description: '켜짐/꺼짐 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    onChange: {
      action: 'changed',
      description: '상태 변경 시 호출되는 함수',
    },
  },
  args: {
    label: 'Switch Label',
    size: 'lg',
    state: 'false',
    checked: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    label: '기본 스위치',
  },
};

// 켜진 상태
export const Checked: Story = {
  args: {
    label: '켜진 스위치',
    checked: true,
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    label: '비활성화 스위치',
    state: 'disabled',
    disabled: true,
  },
};

// 비활성화 + 켜진 상태
export const DisabledChecked: Story = {
  args: {
    label: '비활성화 + 켜진 상태',
    checked: true,
    disabled: true,
  },
};

// 크기별
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch label="Large (lg)" size="lg" />
      <Switch label="Medium (md)" size="md" />
      <Switch label="Small (sm)" size="sm" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '스위치의 다양한 크기를 보여줍니다.',
      },
    },
  },
};

// 상태별
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="꺼진 상태" state="false" />
      <Switch label="켜진 상태" state="true" />
      <Switch label="비활성화 상태" state="disabled" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '스위치의 다양한 상태를 보여줍니다.',
      },
    },
  },
};

// 설정 패널 예제
export const SettingsPanel: Story = {
  render: () => (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '8px',
      backgroundColor: '#fafafa',
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      minWidth: '280px'
    }}>
      <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>알림 설정</h3>
      <Switch label="푸시 알림 받기" size="lg" />
      <Switch label="이메일 알림 받기" size="lg" />
      <Switch label="SMS 알림 받기" size="lg" />
      
      <hr style={{ border: 'none', borderTop: '1px solid #e0e0e0', margin: '8px 0' }} />
      
      <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>계정 설정</h3>
      <Switch label="자동 로그인" size="lg" checked={true} />
      <Switch label="생체 인증" size="lg" />
      <Switch label="2단계 인증" size="lg" checked={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '설정 패널에서 스위치를 사용하는 실제 예제입니다.',
      },
    },
  },
};

// 모바일 스타일 설정
export const MobileSettings: Story = {
  render: () => (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#ffffff',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      display: 'flex', 
      flexDirection: 'column',
      maxWidth: '320px'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <span>다크 모드</span>
        <Switch size="md" />
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <span>Wi-Fi</span>
        <Switch size="md" checked={true} />
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid #f0f0f0'
      }}>
        <span>블루투스</span>
        <Switch size="md" />
      </div>
      
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        padding: '12px 0'
      }}>
        <span>위치 서비스</span>
        <Switch size="md" checked={true} />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모바일 앱의 설정 화면과 같은 스타일의 스위치 사용 예제입니다.',
      },
    },
  },
};

// 인라인 스위치
export const InlineSwitch: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch size="sm" />
        <span>작은 인라인 스위치</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch size="md" checked={true} />
        <span>중간 크기 인라인 스위치</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Switch size="lg" />
        <span>큰 인라인 스위치</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '텍스트와 인라인으로 배치된 스위치 예제입니다.',
      },
    },
  },
};

// 라벨 없는 스위치
export const WithoutLabel: Story = {
  args: {
    size: 'lg',
    'aria-label': '라벨 없는 스위치',
  },
  parameters: {
    docs: {
      description: {
        story: '시각적 라벨 없이 aria-label만 사용하는 스위치입니다.',
      },
    },
  },
};

// 모든 크기 조합
export const AllSizesComparison: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(3, 1fr)', 
      gap: '24px',
      alignItems: 'center',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Small</div>
        <Switch size="sm" />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Medium</div>
        <Switch size="md" />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>Large</div>
        <Switch size="lg" />
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Switch size="sm" checked={true} />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>ON</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Switch size="md" checked={true} />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>ON</div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <Switch size="lg" checked={true} />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>ON</div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 크기의 스위치를 ON/OFF 상태로 비교해볼 수 있습니다.',
      },
    },
  },
};