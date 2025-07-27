import type { Meta, StoryObj } from '@storybook/react';
import { LoadData, LoadDataProps } from './LoadData';

const meta: Meta<typeof LoadData> = {
  title: 'Components/LoadData',
  component: LoadData,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['basic', 'highlight'],
      description: '변형 타입',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: '레이블',
    title: '연도별 한도금액',
    content: '20,000,000원',
    variant: 'basic',
    info: '안내 문구 입력',
  },
};

export const Highlight: Story = {
  args: {
    label: '레이블',
    title: 'Label', // 이 값은 highlight 모드에서는 사용되지 않음
    content: 'Data',
    variant: 'highlight',
    mainLabel: 'Label',
    additionalInfo: '부가설명',
    info: '안내 문구 입력',
  },
};

export const BasicWithoutLabel: Story = {
  args: {
    title: '한도금액',
    content: '20,000,000원',
    variant: 'basic',
  },
};

export const BasicWithoutInfo: Story = {
  args: {
    label: '계좌 정보',
    title: '계좌번호',
    content: '123-456-789012',
    variant: 'basic',
  },
};

export const HighlightWithoutAdditionalInfo: Story = {
  args: {
    label: '잔액 정보',
    title: 'Balance', // 사용되지 않음
    content: '5,000,000원',
    variant: 'highlight',
    mainLabel: '사용가능금액',
    info: '출금 가능한 금액입니다.',
  },
};

export const HighlightWithoutMainLabel: Story = {
  args: {
    label: '상품 정보',
    title: 'Product', // 사용되지 않음
    content: '정기예금',
    variant: 'highlight',
    additionalInfo: '만기 1년',
    info: '금리 3.5% 적용',
  },
};

export const LongContent: Story = {
  args: {
    label: '계약 정보',
    title: '계약자명',
    content: '홍길동 (생년월일: 1980.01.01, 연락처: 010-1234-5678)',
    variant: 'basic',
    info: '계약자 정보를 확인해 주세요.',
  },
};

export const NumericContent: Story = {
  args: {
    label: '대출 정보',
    title: '대출잔액',
    content: '15,750,000원',
    variant: 'basic',
    info: '2024년 12월 기준',
  },
};

export const ReactNodeContent: Story = {
  args: {
    label: '상태 정보',
    title: '처리상태',
    content: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ color: '#28a745', fontWeight: 'bold' }}>승인완료</span>
        <span style={{ fontSize: '12px', color: '#6c757d' }}>(2024.12.27)</span>
      </div>
    ),
    variant: 'basic',
    info: '승인이 완료되었습니다.',
  },
};

export const ClickableLoadData: Story = {
  args: {
    label: '클릭 가능한 데이터',
    title: '계좌 선택',
    content: '123-456-789012',
    variant: 'basic',
    info: '클릭하여 계좌를 변경할 수 있습니다.',
    onClick: () => alert('계좌 변경 팝업이 열립니다!'),
  },
};

export const HighlightClickable: Story = {
  args: {
    label: '투자 상품',
    title: 'Investment', // 사용되지 않음
    content: '100,000,000원',
    variant: 'highlight',
    mainLabel: '투자금액',
    additionalInfo: '수익률 +5.2%',
    info: '클릭하여 상세 정보를 확인하세요.',
    onClick: () => alert('투자 상품 상세 정보를 보여줍니다!'),
  },
};

export const AccountInfo: Story = {
  args: {
    label: '출금 계좌',
    title: '계좌번호',
    content: '농협 123-456-789012',
    variant: 'basic',
    info: '출금할 계좌를 확인해 주세요.',
  },
};

export const LimitAmount: Story = {
  args: {
    label: '이체 한도',
    title: '일일 이체한도',
    content: '5,000,000원',
    variant: 'highlight',
    mainLabel: '잔여한도',
    additionalInfo: '오늘 사용 가능',
    info: '한도 초과 시 이체가 제한됩니다.',
  },
};

export const ProductDetails: Story = {
  args: {
    label: '선택 상품',
    title: '상품명',
    content: 'NH 정기예금',
    variant: 'highlight',
    mainLabel: '상품명',
    additionalInfo: '만기 12개월',
    info: '연 3.5% 금리가 적용됩니다.',
  },
};