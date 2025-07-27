import type { Meta, StoryObj } from '@storybook/react';
import { Popup, PopupProps } from './Popup';

const meta: Meta<typeof Popup> = {
  title: 'Components/Popup',
  component: Popup,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['alert', 'fullscreen', 'layer'],
      description: '팝업 타입',
    },
    isOpen: {
      control: 'boolean',
      description: '표시 여부',
    },
    showHeader: {
      control: 'boolean',
      description: '헤더 표시 여부 (layer 타입용)',
    },
    buttonLayout: {
      control: 'radio',
      options: ['single', 'half', 'custom'],
      description: '버튼 레이아웃',
    },
    closeOnEsc: {
      control: 'boolean',
      description: 'ESC 키로 닫기',
    },
    closeOnBackdrop: {
      control: 'boolean',
      description: '배경 클릭으로 닫기',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Alert Popup Stories
export const AlertBasic: Story = {
  args: {
    id: 'popup-basic',
    type: 'alert',
    isOpen: true,
    title: '타이틀',
    content: '내용을 입력해주세요.',
    buttons: [
      {
        text: '확인',
        variant: 'secondary',
        onClick: () => console.log('확인 clicked'),
      },
    ],
    onClose: () => console.log('Popup closed'),
  },
};

export const AlertLogin: Story = {
  args: {
    id: 'popup-login',
    type: 'alert',
    isOpen: true,
    title: '로그인 연장 안내',
    content: '약 10분간 이용이 없으면 금융정보 보호를 위해 자동으로 로그아웃됩니다.\n계속 이용하려면 로그인을 연장해 주세요.',
    buttonLayout: 'half',
    buttons: [
      {
        text: '로그아웃',
        variant: 'tertiary',
        size: 'md',
        onClick: () => console.log('로그아웃 clicked'),
      },
      {
        text: '로그인 연장',
        variant: 'secondary',
        size: 'md',
        onClick: () => console.log('로그인 연장 clicked'),
      },
    ],
    onClose: () => console.log('Popup closed'),
  },
};

export const AlertPush: Story = {
  args: {
    id: 'popup-push',
    type: 'alert',
    isOpen: true,
    title: '혜택정보 PUSH 알림',
    content: '이벤트, 새소식, 상품정보 등 다양한 혜택 정보를 Push알림으로 받아보세요.',
    buttonLayout: 'custom',
    buttons: [
      {
        text: '닫기',
        variant: 'tertiary',
        size: 'md',
        flex: 3,
        onClick: () => console.log('닫기 clicked'),
      },
      {
        text: '동의하고 알림받기',
        variant: 'secondary',
        size: 'md',
        flex: 7,
        onClick: () => console.log('동의하고 알림받기 clicked'),
      },
    ],
    onClose: () => console.log('Popup closed'),
  },
};

export const AlertError: Story = {
  args: {
    id: 'popup-error',
    type: 'alert',
    isOpen: true,
    content: '고객님의 이용에 불편을 드려 대단히 죄송합니다. 해결에 어려움이 있으시면 아래로 문의하세요.',
    buttons: [
      {
        text: '확인',
        variant: 'secondary',
        onClick: () => console.log('확인 clicked'),
      },
    ],
    children: (
      <div className="accordion">
        <button type="button" className="title">
          오류코드 확인
        </button>
        <div className="panel">
          <div className="-error">
            <p className="noti-phrase">ABCD0000</p>
            <p className="noti-phrase">EFGH1111</p>
            <p className="noti-phrase">IJKL2222</p>
          </div>
        </div>
      </div>
    ),
    onClose: () => console.log('Popup closed'),
  },
};

// Fullscreen Popup Stories
export const Fullscreen: Story = {
  args: {
    id: 'popup-fullscreen',
    type: 'fullscreen',
    isOpen: true,
    title: '서비스 타이틀',
    onClose: () => console.log('Fullscreen popup closed'),
  },
};

// Layer Popup Stories
export const LayerWithHeader: Story = {
  args: {
    id: 'layer-with-header',
    type: 'layer',
    isOpen: true,
    title: '타이틀',
    content: '레이어 팝업 내용입니다.',
    showHeader: true,
    onClose: () => console.log('Layer popup closed'),
  },
};

export const LayerWithoutHeader: Story = {
  args: {
    id: 'layer-without-header',
    type: 'layer',
    isOpen: true,
    content: '헤더가 없는 레이어 팝업입니다.',
    showHeader: false,
    buttons: [
      {
        text: '버튼명',
        variant: 'primary',
        size: 'lg',
        onClick: () => console.log('버튼 clicked'),
      },
    ],
    onClose: () => console.log('Layer popup closed'),
  },
};

export const LayerWithCTA: Story = {
  args: {
    id: 'layer-with-cta',
    type: 'layer',
    isOpen: true,
    title: '레이어 제목',
    content: 'CTA 버튼이 있는 레이어 팝업입니다.',
    showHeader: true,
    buttonLayout: 'half',
    buttons: [
      {
        text: '취소',
        variant: 'tertiary',
        size: 'md',
        onClick: () => console.log('취소 clicked'),
      },
      {
        text: '확인',
        variant: 'secondary',
        size: 'md',
        onClick: () => console.log('확인 clicked'),
      },
    ],
    onClose: () => console.log('Layer popup closed'),
  },
};

// Complex Content Examples
export const AlertWithComplexContent: Story = {
  args: {
    id: 'popup-complex',
    type: 'alert',
    isOpen: true,
    title: '계좌 정보 확인',
    children: (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <p className="noti-phrase">계좌번호: <strong>123-456-789012</strong></p>
          <p className="noti-phrase">잔액: <strong style={{ color: '#007bff' }}>1,234,567원</strong></p>
        </div>
        <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <p className="noti-phrase" style={{ fontSize: '12px', margin: 0 }}>
            * 실시간 잔액은 다를 수 있습니다.
          </p>
        </div>
      </div>
    ),
    buttons: [
      {
        text: '확인',
        variant: 'secondary',
        onClick: () => console.log('확인 clicked'),
      },
    ],
    onClose: () => console.log('Complex popup closed'),
  },
};

export const LayerWithForm: Story = {
  args: {
    id: 'layer-form',
    type: 'layer',
    isOpen: true,
    title: '정보 입력',
    showHeader: true,
    children: (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            이름
          </label>
          <input
            type="text"
            placeholder="이름을 입력하세요"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            연락처
          </label>
          <input
            type="tel"
            placeholder="연락처를 입력하세요"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ddd',
              borderRadius: '4px',
            }}
          />
        </div>
      </div>
    ),
    buttonLayout: 'half',
    buttons: [
      {
        text: '취소',
        variant: 'tertiary',
        size: 'md',
        onClick: () => console.log('취소 clicked'),
      },
      {
        text: '저장',
        variant: 'secondary',
        size: 'md',
        onClick: () => console.log('저장 clicked'),
      },
    ],
    onClose: () => console.log('Form layer closed'),
  },
};

// Interaction Examples
export const WithBackdropClose: Story = {
  args: {
    id: 'popup-backdrop',
    type: 'alert',
    isOpen: true,
    title: '배경 클릭으로 닫기',
    content: '배경을 클릭하면 팝업이 닫힙니다.',
    closeOnBackdrop: true,
    buttons: [
      {
        text: '확인',
        variant: 'secondary',
        onClick: () => console.log('확인 clicked'),
      },
    ],
    onClose: () => console.log('Backdrop close popup closed'),
  },
};

export const WithoutEscClose: Story = {
  args: {
    id: 'popup-no-esc',
    type: 'alert',
    isOpen: true,
    title: 'ESC 키 비활성화',
    content: 'ESC 키로 닫을 수 없는 팝업입니다.',
    closeOnEsc: false,
    buttons: [
      {
        text: '닫기',
        variant: 'secondary',
        onClick: () => console.log('닫기 clicked'),
      },
    ],
    onClose: () => console.log('No ESC popup closed'),
  },
};