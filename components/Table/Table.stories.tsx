import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableProps } from './Table';
import { useState } from 'react';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['default', 'striped', 'bordered'],
      description: '테이블 변형',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: '크기',
    },
    selectable: {
      control: 'boolean',
      description: '행 선택 가능 여부',
    },
    loading: {
      control: 'boolean',
      description: '로딩 상태',
    },
    hiddenCaption: {
      control: 'boolean',
      description: '숨김 제목 (접근성용)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data
const sampleData = [
  { id: 1, name: '홍길동', age: 25, city: '서울', email: 'hong@example.com', status: '활성' },
  { id: 2, name: '김영희', age: 30, city: '부산', email: 'kim@example.com', status: '비활성' },
  { id: 3, name: '이철수', age: 35, city: '대구', email: 'lee@example.com', status: '활성' },
  { id: 4, name: '박민수', age: 28, city: '인천', email: 'park@example.com', status: '대기' },
  { id: 5, name: '정수현', age: 32, city: '광주', email: 'jung@example.com', status: '활성' },
];

const basicColumns = [
  { key: 'name', title: '이름' },
  { key: 'age', title: '나이', align: 'center' as const },
  { key: 'city', title: '도시' },
  { key: 'email', title: '이메일' },
  { key: 'status', title: '상태', align: 'center' as const },
];

// Basic Examples
export const Default: Story = {
  args: {
    caption: '사용자 목록',
    columns: basicColumns,
    data: sampleData,
    variant: 'default',
    size: 'md',
  },
};

export const Striped: Story = {
  args: {
    caption: '스트라이프 테이블',
    columns: basicColumns,
    data: sampleData,
    variant: 'striped',
    size: 'md',
  },
};

export const Bordered: Story = {
  args: {
    caption: '테두리 테이블',
    columns: basicColumns,
    data: sampleData,
    variant: 'bordered',
    size: 'md',
  },
};

// Size Variants
export const SmallSize: Story = {
  args: {
    caption: '작은 크기 테이블',
    columns: basicColumns,
    data: sampleData,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    caption: '큰 크기 테이블',
    columns: basicColumns,
    data: sampleData,
    size: 'lg',
  },
};

// Empty State
export const EmptyTable: Story = {
  args: {
    caption: '빈 테이블',
    columns: basicColumns,
    data: [],
    emptyContent: '등록된 사용자가 없습니다.',
  },
};

// Loading State
export const LoadingTable: Story = {
  args: {
    caption: '로딩 중인 테이블',
    columns: basicColumns,
    data: sampleData,
    loading: true,
  },
};

// Hidden Caption (Accessibility)
export const HiddenCaption: Story = {
  args: {
    caption: '접근성을 위한 숨김 제목',
    hiddenCaption: true,
    columns: basicColumns,
    data: sampleData,
  },
};

// Selectable Table
export const SelectableTable: Story = {
  args: {
    caption: '선택 가능한 테이블',
    columns: basicColumns,
    data: sampleData,
    selectable: true,
    onRowSelectionChange: (keys, rows) => console.log('Selected:', keys, rows),
  },
};

// Custom Render Columns
export const CustomRenderTable: Story = {
  args: {
    caption: '커스텀 렌더링 테이블',
    columns: [
      { key: 'name', title: '이름' },
      { 
        key: 'age', 
        title: '나이', 
        align: 'center' as const,
        render: (value) => `${value}세`
      },
      { key: 'city', title: '도시' },
      { 
        key: 'status', 
        title: '상태', 
        align: 'center' as const,
        render: (value) => (
          <span style={{
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            backgroundColor: value === '활성' ? '#d4edda' : value === '비활성' ? '#f8d7da' : '#fff3cd',
            color: value === '활성' ? '#155724' : value === '비활성' ? '#721c24' : '#856404'
          }}>
            {value}
          </span>
        )
      },
      {
        key: 'actions',
        title: '작업',
        align: 'center' as const,
        render: (_, record) => (
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
            <button 
              style={{ 
                padding: '4px 8px', 
                fontSize: '12px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => console.log('Edit:', record)}
            >
              수정
            </button>
            <button 
              style={{ 
                padding: '4px 8px', 
                fontSize: '12px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
              onClick={() => console.log('Delete:', record)}
            >
              삭제
            </button>
          </div>
        )
      }
    ],
    data: sampleData,
  },
};

// Column Width Table
export const ColumnWidthTable: Story = {
  args: {
    caption: '컬럼 너비 지정 테이블',
    columns: [
      { key: 'name', title: '이름', width: 120 },
      { key: 'age', title: '나이', width: 80, align: 'center' as const },
      { key: 'city', title: '도시', width: 100 },
      { key: 'email', title: '이메일', width: 200 },
      { key: 'status', title: '상태', width: 100, align: 'center' as const },
    ],
    data: sampleData,
  },
};

// Interactive Examples
export const InteractiveSelectable: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<string[]>([]);
    
    return (
      <div>
        <div style={{ marginBottom: '16px' }}>
          <p>선택된 행: {selectedRowKeys.length}개</p>
          {selectedRowKeys.length > 0 && (
            <p style={{ fontSize: '14px', color: '#666' }}>
              선택된 ID: {selectedRowKeys.join(', ')}
            </p>
          )}
        </div>
        
        <Table
          caption="상호작용 가능한 선택 테이블"
          columns={basicColumns}
          data={sampleData}
          selectable={true}
          selectedRowKeys={selectedRowKeys}
          onRowSelectionChange={(keys, rows) => {
            setSelectedRowKeys(keys);
            console.log('Selection changed:', keys, rows);
          }}
          onRowClick={(record, index) => {
            console.log('Row clicked:', record, index);
          }}
        />
      </div>
    );
  },
};

// Financial Data Example
export const FinancialDataTable: Story = {
  args: {
    caption: '금융 상품 목록',
    columns: [
      { key: 'product', title: '상품명' },
      { 
        key: 'rate', 
        title: '금리', 
        align: 'right' as const,
        render: (value) => `${value}%`
      },
      { 
        key: 'amount', 
        title: '금액', 
        align: 'right' as const,
        render: (value) => `${value.toLocaleString()}원`
      },
      { key: 'period', title: '기간', align: 'center' as const },
      { 
        key: 'type', 
        title: '상품유형', 
        align: 'center' as const,
        render: (value) => (
          <span style={{
            padding: '2px 8px',
            borderRadius: '12px',
            fontSize: '12px',
            backgroundColor: value === '예금' ? '#e3f2fd' : '#f3e5f5',
            color: value === '예금' ? '#1976d2' : '#7b1fa2'
          }}>
            {value}
          </span>
        )
      },
    ],
    data: [
      { id: 1, product: 'NH 정기예금', rate: 3.5, amount: 10000000, period: '12개월', type: '예금' },
      { id: 2, product: 'NH 적금', rate: 3.2, amount: 5000000, period: '24개월', type: '적금' },
      { id: 3, product: 'NH 정기적금', rate: 3.8, amount: 3000000, period: '36개월', type: '적금' },
      { id: 4, product: 'NH 자유예금', rate: 2.1, amount: 15000000, period: '자유', type: '예금' },
    ],
    variant: 'bordered',
  },
};

// Account List Example
export const AccountListTable: Story = {
  args: {
    caption: '계좌 목록',
    columns: [
      { key: 'accountNumber', title: '계좌번호' },
      { key: 'accountName', title: '계좌명' },
      { 
        key: 'balance', 
        title: '잔액', 
        align: 'right' as const,
        render: (value) => (
          <span style={{ fontWeight: 'bold', color: '#007bff' }}>
            {value.toLocaleString()}원
          </span>
        )
      },
      { key: 'bankName', title: '은행명', align: 'center' as const },
      { 
        key: 'status', 
        title: '상태', 
        align: 'center' as const,
        render: (value) => (
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: value === '정상' ? '#28a745' : '#dc3545',
            display: 'inline-block',
            marginRight: '4px'
          }}>
          </span>
        )
      },
    ],
    data: [
      { id: 1, accountNumber: '123-456-789012', accountName: '급여통장', balance: 2500000, bankName: '농협', status: '정상' },
      { id: 2, accountNumber: '987-654-321098', accountName: '적금통장', balance: 15000000, bankName: '농협', status: '정상' },
      { id: 3, accountNumber: '555-777-999000', accountName: '비상금통장', balance: 500000, bankName: '농협', status: '정지' },
    ],
    variant: 'striped',
  },
};