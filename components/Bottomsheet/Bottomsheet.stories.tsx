import type { Meta, StoryObj } from '@storybook/react';
import { Bottomsheet, BottomsheetProps } from './Bottomsheet';

const meta: Meta<typeof Bottomsheet> = {
  title: 'Components/Bottomsheet',
  component: Bottomsheet,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: '표시 여부',
    },
    showHeader: {
      control: 'boolean',
      description: '헤더 표시 여부',
    },
    dimType: {
      control: 'radio',
      options: ['default', 'white'],
      description: '딤 레이어 타입',
    },
    contentStyle: {
      control: 'radio',
      options: ['default', 'bottom-padding'],
      description: '컨텐츠 스타일',
    },
    buttonLayout: {
      control: 'radio',
      options: ['single', 'half', 'custom'],
      description: '버튼 레이아웃',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeaderNoneType: Story = {
  args: {
    id: 'bottomsheet-basic-1',
    isOpen: true,
    title: '타이틀',
    showHeader: true,
    children: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>기본 바텀시트 컨텐츠입니다.</p>
      </div>
    ),
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const WithHeaderWithCTA: Story = {
  args: {
    id: 'bottomsheet-basic-2',
    isOpen: true,
    title: '타이틀',
    showHeader: true,
    children: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>CTA 버튼이 있는 바텀시트입니다.</p>
      </div>
    ),
    buttons: [
      {
        text: '버튼명',
        variant: 'primary',
        size: 'lg',
        onClick: () => console.log('Button clicked'),
      },
    ],
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const NoneHeaderNoneType: Story = {
  args: {
    id: 'bottomsheet-basic-3',
    isOpen: true,
    showHeader: false,
    children: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>헤더가 없는 바텀시트입니다.</p>
      </div>
    ),
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const NoneHeaderWithCTA: Story = {
  args: {
    id: 'bottomsheet-basic-4',
    isOpen: true,
    showHeader: false,
    children: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>헤더는 없지만 CTA 버튼이 있는 바텀시트입니다.</p>
      </div>
    ),
    buttons: [
      {
        text: '확인',
        variant: 'primary',
        size: 'lg',
        onClick: () => console.log('Confirm clicked'),
      },
    ],
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const HalfButtons: Story = {
  args: {
    id: 'bottomsheet-half',
    isOpen: true,
    title: '선택하세요',
    showHeader: true,
    buttonLayout: 'half',
    children: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>두 개의 버튼이 있는 바텀시트입니다.</p>
      </div>
    ),
    buttons: [
      {
        text: '취소',
        variant: 'tertiary',
        size: 'md',
        onClick: () => console.log('Cancel clicked'),
      },
      {
        text: '확인',
        variant: 'secondary',
        size: 'md',
        onClick: () => console.log('Confirm clicked'),
      },
    ],
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const CustomButtons: Story = {
  args: {
    id: 'bottomsheet-custom',
    isOpen: true,
    title: '알림 설정',
    showHeader: true,
    buttonLayout: 'custom',
    children: (
      <div style={{ padding: '20px' }}>
        <p>알림을 받으시겠습니까?</p>
      </div>
    ),
    buttons: [
      {
        text: '닫기',
        variant: 'tertiary',
        size: 'md',
        flex: 3,
        onClick: () => console.log('Close clicked'),
      },
      {
        text: '동의하고 알림받기',
        variant: 'secondary',
        size: 'md',
        flex: 7,
        onClick: () => console.log('Agree clicked'),
      },
    ],
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const WithBottomPadding: Story = {
  args: {
    id: 'bottomsheet-padding',
    isOpen: true,
    title: '컨텐츠',
    showHeader: true,
    contentStyle: 'bottom-padding',
    children: (
      <div style={{ padding: '20px' }}>
        <p>하단 패딩이 있는 컨텐츠입니다.</p>
        <p>더 많은 내용이 있을 때 사용합니다.</p>
      </div>
    ),
    buttons: [
      {
        text: '확인',
        variant: 'primary',
        size: 'lg',
        onClick: () => console.log('Confirm clicked'),
      },
    ],
    onClose: () => console.log('Close bottomsheet'),
  },
};

export const WhiteDimLayer: Story = {
  args: {
    id: 'bottomsheet-white-dim',
    isOpen: true,
    title: '키패드 입력',
    showHeader: true,
    dimType: 'white',
    children: (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>흰색 딤 레이어를 사용하는 바텀시트입니다.</p>
        <p>주로 키패드나 특별한 UI에 사용됩니다.</p>
      </div>
    ),
    buttons: [
      {
        text: '입력완료',
        variant: 'primary',
        size: 'lg',
        onClick: () => console.log('Input complete'),
      },
    ],
    onClose: () => console.log('Close bottomsheet'),
  },
};