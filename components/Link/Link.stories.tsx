import type { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['basic', 'category', 'divide', 'horizontal', 'mix', 'vertical', 'none-border'],
      description: '링크 변형',
    },
    style: {
      control: 'radio',
      options: ['default', 'underline', 'point'],
      description: '링크 스타일 (basic 타입용)',
    },
    certificationType: {
      control: 'radio',
      options: ['fss', 'folder'],
      description: '인증서 타입 (category, mix 타입용)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Link Stories
export const BasicDefault: Story = {
  args: {
    variant: 'basic',
    style: 'default',
    children: '기본 링크',
    onClick: () => console.log('Basic link clicked'),
  },
};

export const BasicUnderline: Story = {
  args: {
    variant: 'basic',
    style: 'underline',
    children: '밑줄 링크',
    onClick: () => console.log('Underline link clicked'),
  },
};

export const BasicPoint: Story = {
  args: {
    variant: 'basic',
    style: 'point',
    children: '포인트 링크',
    onClick: () => console.log('Point link clicked'),
  },
};

// Category Link Stories
export const Category: Story = {
  args: {
    variant: 'category',
    certificationType: 'fss',
    items: [
      {
        id: '1',
        title: '카테고리',
        info: '타이틀',
        onClick: () => console.log('Category item 1 clicked'),
      },
      {
        id: '2',
        title: '두 번째 카테고리',
        info: '설명 텍스트',
        onClick: () => console.log('Category item 2 clicked'),
      },
    ],
  },
};

export const CategoryFolder: Story = {
  args: {
    variant: 'category',
    certificationType: 'folder',
    items: [
      {
        id: '1',
        title: '폴더 카테고리',
        info: '폴더 타입 설명',
        onClick: () => console.log('Folder category clicked'),
      },
    ],
  },
};

// Divide Link Stories
export const Divide: Story = {
  args: {
    variant: 'divide',
    items: [
      {
        id: '1',
        title: '첫 번째 타이틀',
        subtitle: '첫 번째 부가설명',
        onClick: () => console.log('Divide item 1 clicked'),
      },
      {
        id: '2',
        title: '두 번째 타이틀',
        subtitle: '두 번째 부가설명',
        onClick: () => console.log('Divide item 2 clicked'),
      },
      {
        id: '3',
        title: '세 번째 타이틀',
        subtitle: '세 번째 부가설명',
        onClick: () => console.log('Divide item 3 clicked'),
      },
    ],
  },
};

// Horizontal Link Stories
export const Horizontal: Story = {
  args: {
    variant: 'horizontal',
    items: [
      {
        id: '1',
        title: '첫 번째 타이틀',
        onClick: () => console.log('Horizontal item 1 clicked'),
      },
      {
        id: '2',
        title: '두 번째 타이틀',
        onClick: () => console.log('Horizontal item 2 clicked'),
      },
      {
        id: '3',
        title: '세 번째 타이틀',
        onClick: () => console.log('Horizontal item 3 clicked'),
      },
    ],
  },
};

// Mix Link Stories
export const Mix: Story = {
  args: {
    variant: 'mix',
    certificationType: 'folder',
    items: [
      {
        id: '1',
        title: '믹스 타이틀',
        subtitle: '믹스 부가설명',
        onClick: () => console.log('Mix item clicked'),
      },
    ],
  },
};

// Vertical Link Stories
export const Vertical: Story = {
  args: {
    variant: 'vertical',
    items: [
      {
        id: '1',
        title: '인증 타이틀',
        onClick: () => console.log('Vertical item clicked'),
      },
    ],
  },
};

// None Border Link Stories
export const NoneBorder: Story = {
  args: {
    variant: 'none-border',
    items: [
      {
        id: '1',
        title: '경계선 없는 링크 1',
        onClick: () => console.log('None border item 1 clicked'),
      },
      {
        id: '2',
        title: '경계선 없는 링크 2',
        onClick: () => console.log('None border item 2 clicked'),
      },
      {
        id: '3',
        title: '경계선 없는 링크 3',
        onClick: () => console.log('None border item 3 clicked'),
      },
    ],
  },
};

// Complex Examples
export const ComplexCategory: Story = {
  args: {
    variant: 'category',
    certificationType: 'fss',
    items: [
      {
        id: '1',
        title: '금융상품',
        info: '예금, 적금, 대출 상품 조회',
        onClick: () => console.log('Financial products clicked'),
      },
      {
        id: '2',
        title: '투자상품',
        info: '펀드, 주식, 채권 상품 조회',
        onClick: () => console.log('Investment products clicked'),
      },
      {
        id: '3',
        title: '보험상품',
        info: '생명보험, 손해보험 상품 조회',
        onClick: () => console.log('Insurance products clicked'),
      },
    ],
  },
};

export const ComplexDivide: Story = {
  args: {
    variant: 'divide',
    items: [
      {
        id: '1',
        title: '계좌 관리',
        subtitle: '잔액 조회 및 이체 서비스',
        onClick: () => console.log('Account management clicked'),
      },
      {
        id: '2',
        title: '카드 관리',
        subtitle: '카드 사용 내역 및 결제 관리',
        onClick: () => console.log('Card management clicked'),
      },
      {
        id: '3',
        title: '대출 관리',
        subtitle: '대출 잔액 및 상환 계획 조회',
        onClick: () => console.log('Loan management clicked'),
      },
    ],
  },
};

// With Custom Href
export const WithHref: Story = {
  args: {
    variant: 'none-border',
    items: [
      {
        id: '1',
        title: '외부 링크',
        href: 'https://example.com',
        onClick: () => console.log('External link clicked'),
      },
      {
        id: '2',
        title: '내부 링크',
        href: '/internal-page',
        onClick: () => console.log('Internal link clicked'),
      },
    ],
  },
};