import type { Meta, StoryObj } from '@storybook/react';
import { Empty, EmptyProps } from './Empty';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['result', 'page'],
      description: 'Empty 컴포넌트 타입',
    },
    showIcon: {
      control: 'boolean',
      description: '아이콘 표시 여부',
    },
    iconSize: {
      control: 'radio',
      options: [40, 56],
      description: '아이콘 크기',
    },
    iconType: {
      control: 'radio',
      options: ['no-data', 'certificate-empty'],
      description: '아이콘 타입',
    },
    darkMode: {
      control: 'boolean',
      description: '다크 모드 아이콘',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyResult: Story = {
  args: {
    variant: 'result',
    message: '조회 결과가 없습니다.',
  },
};

export const EmptyPage: Story = {
  args: {
    variant: 'page',
    message: '조회 결과가 없습니다.',
  },
};

export const WithNoDataIcon: Story = {
  args: {
    variant: 'result',
    message: '조회 결과가 없습니다.',
    showIcon: true,
    iconType: 'no-data',
    iconSize: 56,
  },
};

export const WithSmallIcon: Story = {
  args: {
    variant: 'result',
    message: '조회 결과가 없습니다.',
    showIcon: true,
    iconType: 'no-data',
    iconSize: 40,
  },
};

export const WithCertificateIcon: Story = {
  args: {
    variant: 'result',
    message: '인증서가 없습니다.',
    showIcon: true,
    iconType: 'certificate-empty',
    iconSize: 56,
  },
};

export const DarkModeIcon: Story = {
  args: {
    variant: 'result',
    message: '조회 결과가 없습니다.',
    showIcon: true,
    iconType: 'no-data',
    iconSize: 56,
    darkMode: true,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const WithAction: Story = {
  args: {
    variant: 'result',
    message: '등록된 계좌가 없습니다.',
    showIcon: true,
    iconType: 'no-data',
    iconSize: 56,
    action: (
      <button 
        type="button" 
        className="button -secondary -md"
        onClick={() => console.log('Add account clicked')}
      >
        계좌 추가하기
      </button>
    ),
  },
};

export const CustomMessage: Story = {
  args: {
    variant: 'result',
    message: '검색 결과를 찾을 수 없습니다.\n다른 검색어로 시도해보세요.',
    showIcon: true,
    iconType: 'no-data',
    iconSize: 56,
  },
};

export const PageVariantWithIcon: Story = {
  args: {
    variant: 'page',
    message: '페이지를 찾을 수 없습니다.',
    showIcon: true,
    iconType: 'no-data',
    iconSize: 56,
  },
};