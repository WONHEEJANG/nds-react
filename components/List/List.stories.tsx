import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 리스트 컴포넌트입니다. 다양한 변형과 타입을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['account', 'basic', 'finance', 'general', 'graybox'],
      description: '리스트의 스타일 변형',
    },
    type: {
      control: 'select',
      options: ['card-lg', 'card-sm', 'default'],
      description: '리스트의 타입',
    },
    lines: {
      control: 'select',
      options: [1, 2, 3, 4, 5],
      description: '리스트 아이템의 줄 수',
    },
    selectable: {
      control: 'boolean',
      description: '선택 가능한 리스트 여부',
    },
  },
  args: {
    variant: 'basic',
    type: 'default',
    lines: 1,
    selectable: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    items: [
      { id: '1', title: '항목 1', subtitle: '부제목 1' },
      { id: '2', title: '항목 2', subtitle: '부제목 2' },
      { id: '3', title: '항목 3', subtitle: '부제목 3' },
    ],
  },
};

// 기본 변형
export const Basic: Story = {
  args: {
    variant: 'basic',
    items: [
      { id: '1', title: '기본 항목 1', subtitle: '설명 1', value: '값 1' },
      { id: '2', title: '기본 항목 2', subtitle: '설명 2', value: '값 2' },
      { id: '3', title: '기본 항목 3', subtitle: '설명 3', value: '값 3' },
    ],
  },
};

// 계좌 변형
export const Account: Story = {
  args: {
    variant: 'account',
    items: [
      {
        id: '1',
        title: '신한은행 입출금통장',
        bankCode: '088',
        accountNumber: '110-123-456789',
        isFavorite: true,
      },
      {
        id: '2',
        title: '국민은행 적금',
        bankCode: '004',
        accountNumber: '123-45-678901',
        isFavorite: false,
      },
      {
        id: '3',
        title: '우리은행 예금',
        bankCode: '020',
        accountNumber: '987-654-321098',
        isFavorite: false,
      },
    ],
    onFavoriteToggle: (itemId, isFavorite) => {
      console.log(`Item ${itemId} favorite changed to:`, isFavorite);
    },
  },
};

// 클릭 이벤트
export const WithClickEvents: Story = {
  args: {
    items: [
      { id: '1', title: '클릭 가능한 항목 1', subtitle: '클릭해보세요' },
      { id: '2', title: '클릭 가능한 항목 2', subtitle: '클릭해보세요' },
      { id: '3', title: '비활성화된 항목', subtitle: '클릭할 수 없습니다', disabled: true },
    ],
    onItemClick: (item) => {
      alert(`${item.title}을(를) 클릭했습니다!`);
    },
  },
};

// 값이 있는 리스트
export const WithValues: Story = {
  args: {
    variant: 'basic',
    items: [
      { id: '1', title: '상품 A', subtitle: '베스트셀러', value: '29,900원' },
      { id: '2', title: '상품 B', subtitle: '신상품', value: '39,900원' },
      { id: '3', title: '상품 C', subtitle: '할인중', value: '19,900원' },
      { id: '4', title: '상품 D', subtitle: '품절', value: '24,900원', disabled: true },
    ],
  },
};

// 긴 리스트
export const LongList: Story = {
  args: {
    variant: 'general',
    items: Array.from({ length: 10 }, (_, i) => ({
      id: `item-${i + 1}`,
      title: `긴 리스트 항목 ${i + 1}`,
      subtitle: `${i + 1}번째 항목의 설명입니다`,
      value: `${(i + 1) * 1000}원`,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: '많은 항목이 있는 리스트의 예시입니다.',
      },
    },
  },
};

// 즐겨찾기 기능 있는 계좌 리스트
export const AccountWithFavorites: Story = {
  args: {
    variant: 'account',
    items: [
      {
        id: 'acc1',
        title: '주거래 계좌',
        bankCode: '088',
        accountNumber: '110-123-456789',
        isFavorite: true,
      },
      {
        id: 'acc2',
        title: '적금 계좌',
        bankCode: '004',
        accountNumber: '456-78-901234',
        isFavorite: true,
      },
      {
        id: 'acc3',
        title: '부계좌 1',
        bankCode: '020',
        accountNumber: '789-01-234567',
        isFavorite: false,
      },
      {
        id: 'acc4',
        title: '부계좌 2',
        bankCode: '081',
        accountNumber: '234-56-789012',
        isFavorite: false,
      },
    ],
    onFavoriteToggle: (itemId, isFavorite) => {
      console.log(`계좌 ${itemId}의 즐겨찾기가 ${isFavorite ? '설정' : '해제'}되었습니다.`);
    },
    onItemClick: (item) => {
      console.log(`${item.title} 계좌를 선택했습니다.`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '즐겨찾기 기능이 있는 계좌 리스트입니다. 별표를 클릭하여 즐겨찾기를 설정/해제할 수 있습니다.',
      },
    },
  },
};

// 다양한 변형 비교
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <div>
        <h4>Basic Variant</h4>
        <List
          variant="basic"
          items={[
            { id: '1', title: '기본 항목', subtitle: '부제목', value: '값' },
          ]}
        />
      </div>
      
      <div>
        <h4>Account Variant</h4>
        <List
          variant="account"
          items={[
            {
              id: '1',
              title: '신한은행',
              bankCode: '088',
              accountNumber: '110-123-456789',
              isFavorite: false,
            },
          ]}
          onFavoriteToggle={() => {}}
        />
      </div>
      
      <div>
        <h4>Finance Variant</h4>
        <List
          variant="finance"
          items={[
            { id: '1', title: '금융 상품', subtitle: '설명', value: '금액' },
          ]}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '리스트의 다양한 변형을 비교해볼 수 있습니다.',
      },
    },
  },
};