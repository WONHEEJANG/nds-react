import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 아이콘 컴포넌트입니다. 다양한 크기와 스타일의 아이콘을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: '아이콘 이름',
    },
    size: {
      control: 'select',
      options: ['16', '20', '24', '28', '32'],
      description: '아이콘 크기 (px)',
    },
    color: {
      control: 'color',
      description: '아이콘 색상',
    },
    className: {
      control: 'text',
      description: 'CSS 클래스명',
    },
  },
  args: {
    name: 'home',
    size: '24',
    color: '#333333',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    name: 'home',
  },
};

// 크기별 아이콘
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>16</div>
        <span style={{ fontSize: '12px' }}>16px</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>20</div>
        <span style={{ fontSize: '12px' }}>20px</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>24</div>
        <span style={{ fontSize: '12px' }}>24px</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '28px', 
          height: '28px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>28</div>
        <span style={{ fontSize: '12px' }}>28px</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '10px'
        }}>32</div>
        <span style={{ fontSize: '12px' }}>32px</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘의 다양한 크기를 보여줍니다.',
      },
    },
  },
};

// 다양한 색상
export const Colors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          backgroundColor: '#333333', 
          borderRadius: '4px'
        }}></div>
        <span style={{ fontSize: '12px' }}>Default</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          backgroundColor: '#007bff', 
          borderRadius: '4px'
        }}></div>
        <span style={{ fontSize: '12px' }}>Primary</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          backgroundColor: '#28a745', 
          borderRadius: '4px'
        }}></div>
        <span style={{ fontSize: '12px' }}>Success</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          backgroundColor: '#ffc107', 
          borderRadius: '4px'
        }}></div>
        <span style={{ fontSize: '12px' }}>Warning</span>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          backgroundColor: '#dc3545', 
          borderRadius: '4px'
        }}></div>
        <span style={{ fontSize: '12px' }}>Error</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘의 다양한 색상을 보여줍니다.',
      },
    },
  },
};

// 일반적인 아이콘들
export const CommonIcons: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(6, 1fr)', 
      gap: '16px',
      padding: '20px'
    }}>
      {[
        'home', 'search', 'menu', 'close', 'arrow-left', 'arrow-right',
        'arrow-up', 'arrow-down', 'plus', 'minus', 'check', 'star',
        'heart', 'settings', 'user', 'mail', 'phone', 'location',
        'calendar', 'clock', 'download', 'upload', 'edit', 'delete'
      ].map((iconName) => (
        <div key={iconName} style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: '8px',
          padding: '12px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px'
        }}>
          <div style={{ 
            width: '24px', 
            height: '24px', 
            backgroundColor: '#666', 
            borderRadius: '4px'
          }}></div>
          <span style={{ fontSize: '11px', textAlign: 'center' }}>{iconName}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '일반적으로 사용되는 아이콘들입니다. 실제 구현에서는 SVG 또는 아이콘 폰트를 사용합니다.',
      },
    },
  },
};

// 인라인 아이콘 사용 예제
export const InlineUsage: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: '#666', 
          borderRadius: '2px'
        }}></div>
        <span>홈으로 가기</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: '#666', 
          borderRadius: '2px'
        }}></div>
        <span>검색하기</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: '#666', 
          borderRadius: '2px'
        }}></div>
        <span>설정 변경</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '텍스트와 함께 인라인으로 사용되는 아이콘 예제입니다.',
      },
    },
  },
};

// 버튼 내 아이콘
export const IconInButton: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px' }}>
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        background: 'white',
        cursor: 'pointer'
      }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: '#666', 
          borderRadius: '2px'
        }}></div>
        <span>저장</span>
      </button>
      
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '8px',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '4px',
        background: '#007bff',
        color: 'white',
        cursor: 'pointer'
      }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: 'white', 
          borderRadius: '2px'
        }}></div>
        <span>다운로드</span>
      </button>
      
      <button style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        width: '32px',
        height: '32px',
        border: 'none',
        borderRadius: '50%',
        background: '#f8f9fa',
        cursor: 'pointer'
      }}>
        <div style={{ 
          width: '16px', 
          height: '16px', 
          backgroundColor: '#666', 
          borderRadius: '2px'
        }}></div>
      </button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '버튼 내에서 사용되는 아이콘 예제입니다.',
      },
    },
  },
};

// 상태를 나타내는 아이콘
export const StatusIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: '#28a745', 
          borderRadius: '50%'
        }}></div>
        <span>성공</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: '#ffc107', 
          borderRadius: '50%'
        }}></div>
        <span>경고</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: '#dc3545', 
          borderRadius: '50%'
        }}></div>
        <span>오류</span>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ 
          width: '20px', 
          height: '20px', 
          backgroundColor: '#17a2b8', 
          borderRadius: '50%'
        }}></div>
        <span>정보</span>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '상태를 나타내는 아이콘들입니다.',
      },
    },
  },
};

// 주의사항
export const Note: Story = {
  render: () => (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#f8f9fa', 
      border: '1px solid #dee2e6',
      borderRadius: '8px'
    }}>
      <h4 style={{ margin: '0 0 8px 0' }}>아이콘 사용 시 주의사항</h4>
      <ul style={{ margin: 0, paddingLeft: '20px' }}>
        <li>실제 구현에서는 SVG 아이콘 또는 아이콘 폰트를 사용합니다</li>
        <li>현재는 플레이스홀더로 회색 박스를 표시하고 있습니다</li>
        <li>접근성을 위해 아이콘에는 적절한 alt 텍스트나 aria-label을 제공해야 합니다</li>
        <li>색상만으로 정보를 전달하지 말고 추가적인 시각적 단서를 제공하세요</li>
      </ul>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아이콘 컴포넌트 사용 시 고려사항입니다.',
      },
    },
  },
};