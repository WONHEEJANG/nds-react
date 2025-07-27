import type { Meta, StoryObj } from '@storybook/react';
import { Popover, usePopover, PopoverProps } from './Popover';
import { useState, useRef } from 'react';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['bc', 'bl', 'br', 'tc', 'tl', 'tr'],
      description: '팝오버 위치',
    },
    visible: {
      control: 'boolean',
      description: '표시 여부',
    },
    showCloseButton: {
      control: 'boolean',
      description: '닫기 버튼 표시 여부',
    },
    autoHideDelay: {
      control: 'number',
      description: '자동 숨김 시간 (밀리초)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomCenter: Story = {
  args: {
    content: '나에게 맞는 상품을 찾아보세요.',
    position: 'bc',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const BottomLeft: Story = {
  args: {
    content: '하단 좌측에 표시되는 팝오버입니다.',
    position: 'bl',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const BottomRight: Story = {
  args: {
    content: '하단 우측에 표시되는 팝오버입니다.',
    position: 'br',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const TopCenter: Story = {
  args: {
    content: '상단 중앙에 표시되는 팝오버입니다.',
    position: 'tc',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const TopLeft: Story = {
  args: {
    content: '상단 좌측에 표시되는 팝오버입니다.',
    position: 'tl',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const TopRight: Story = {
  args: {
    content: '상단 우측에 표시되는 팝오버입니다.',
    position: 'tr',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const WithoutCloseButton: Story = {
  args: {
    content: '닫기 버튼이 없는 팝오버입니다.',
    position: 'bc',
    visible: true,
    showCloseButton: false,
  },
};

export const AutoHide: Story = {
  args: {
    content: '3초 후 자동으로 사라지는 팝오버입니다.',
    position: 'bc',
    visible: true,
    showCloseButton: true,
    autoHideDelay: 3000,
    onClose: () => console.log('Popover auto-closed'),
  },
};

export const LongContent: Story = {
  args: {
    content: '이것은 매우 긴 내용을 가진 팝오버입니다. 여러 줄에 걸쳐서 표시될 수 있으며, 팝오버의 크기가 내용에 맞게 조정됩니다. 사용자에게 충분한 정보를 제공할 수 있습니다.',
    position: 'bc',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

export const ReactNodeContent: Story = {
  args: {
    content: (
      <div>
        <strong style={{ color: '#007bff' }}>중요 알림</strong>
        <br />
        <span style={{ fontSize: '14px' }}>새로운 상품이 출시되었습니다.</span>
        <br />
        <small style={{ color: '#6c757d' }}>자세한 내용은 상품몰에서 확인하세요.</small>
      </div>
    ),
    position: 'bc',
    visible: true,
    showCloseButton: true,
    onClose: () => console.log('Popover closed'),
  },
};

// Interactive Examples
export const InteractiveExample: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <div style={{ padding: '100px', position: 'relative' }}>
        <button
          ref={buttonRef}
          onClick={() => setVisible(!visible)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          팝오버 토글
        </button>
        
        <Popover
          content="버튼을 클릭하여 팝오버를 제어할 수 있습니다."
          position="bc"
          visible={visible}
          target={buttonRef.current || undefined}
          onClose={() => setVisible(false)}
        />
      </div>
    );
  },
};

export const WithHookExample: Story = {
  render: () => {
    const popover = usePopover();
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
      <div style={{ padding: '100px', position: 'relative' }}>
        <button
          ref={buttonRef}
          onClick={() => popover.toggle(buttonRef.current || undefined)}
          style={{
            padding: '12px 24px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          usePopover 훅 사용
        </button>
        
        <Popover
          content="usePopover 훅을 사용하여 상태를 관리합니다."
          position="tc"
          visible={popover.isVisible}
          target={popover.target || undefined}
          onClose={popover.hide}
        />
      </div>
    );
  },
};

export const MultiplePositions: Story = {
  render: () => {
    const [activePopover, setActivePopover] = useState<string | null>(null);
    const positions = [
      { key: 'bc', label: '하단 중앙', position: 'bc' as const },
      { key: 'bl', label: '하단 좌측', position: 'bl' as const },
      { key: 'br', label: '하단 우측', position: 'br' as const },
      { key: 'tc', label: '상단 중앙', position: 'tc' as const },
      { key: 'tl', label: '상단 좌측', position: 'tl' as const },
      { key: 'tr', label: '상단 우측', position: 'tr' as const },
    ];

    return (
      <div style={{ padding: '150px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {positions.map(({ key, label, position }) => {
          const buttonRef = useRef<HTMLButtonElement>(null);
          
          return (
            <div key={key} style={{ position: 'relative' }}>
              <button
                ref={buttonRef}
                onClick={() => setActivePopover(activePopover === key ? null : key)}
                style={{
                  padding: '8px 16px',
                  backgroundColor: activePopover === key ? '#dc3545' : '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  width: '100%',
                  fontSize: '12px',
                }}
              >
                {label}
              </button>
              
              <Popover
                content={`${label} 팝오버`}
                position={position}
                visible={activePopover === key}
                target={buttonRef.current || undefined}
                onClose={() => setActivePopover(null)}
              />
            </div>
          );
        })}
      </div>
    );
  },
};