import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 카드 컴포넌트입니다. 26가지 다양한 변형과 타입을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['account', 'general', 'summary', 'data', 'etc'],
      description: '카드의 주요 변형',
    },
    type: {
      control: 'select',
      options: ['accordion', 'list', 'price', 'detail', 'input', 'info', 'rate', 'sum', 
               'basic', '2column', '4column', 'highlight', 'divide', 'grip', 'date',
               'divide-multi', 'divide-single', 'double', 'single'],
      description: '카드의 세부 타입',
    },
    title: {
      control: 'text',
      description: '카드 제목',
    },
    subtitle: {
      control: 'text',
      description: '카드 부제목',
    },
    hasAccordion: {
      control: 'boolean',
      description: '아코디언 기능 사용 여부',
    },
    hasDotMenu: {
      control: 'boolean',
      description: '더보기 메뉴 표시 여부',
    },
    highlighted: {
      control: 'boolean',
      description: '강조 표시 여부',
    },
    selectable: {
      control: 'boolean',
      description: '선택 가능 여부',
    },
  },
  args: {
    variant: 'general',
    type: 'basic',
    title: 'Card Title',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    title: 'Default Card',
    items: [
      { title: '항목 1', value: '값 1' },
      { title: '항목 2', value: '값 2' },
    ],
  },
};

// === ACCOUNT 변형 (4개) ===

// 1. Card - account/accordion - State=close
export const AccountAccordionClosed: Story = {
  args: {
    variant: 'account',
    type: 'accordion',
    title: '주거래우대통장',
    bankName: 'NH농협',
    accountNumber: '111-1234-5678-99',
    bankCode: '011',
    hasAccordion: true,
    defaultExpanded: false,
    items: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
    ],
    hiddenItems: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: '원본 HTML과 동일한 Account 카드의 아코디언 닫힌 상태입니다. CSS 클래스 기반으로 구현됩니다.',
      },
    },
  },
};

// 2. Card - account/accordion - State=open
export const AccountAccordionOpen: Story = {
  args: {
    variant: 'account',
    type: 'accordion',
    title: '주거래우대통장',
    bankName: 'NH농협',
    accountNumber: '111-1234-5678-99',
    bankCode: '011',
    hasAccordion: true,
    defaultExpanded: true,
    items: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
    ],
    hiddenItems: [
      { title: '숨겨진 항목 1', value: '숨겨진 데이터 1' },
      { title: '숨겨진 항목 2', value: '숨겨진 데이터 2' },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'Account 카드의 아코디언 열린 상태입니다.',
      },
    },
  },
};

// 3. Card - account/list
export const AccountList: Story = {
  args: {
    variant: 'account',
    type: 'list',
    title: '금융사명',
    accountNumber: '계좌번호',
    bankCode: '011',
    hasDotMenu: true,
    items: [
      { title: '타이틀', value: '<span>데이터</span>' },
    ],
  },
};

// 4. Card - account/price
export const AccountPrice: Story = {
  args: {
    variant: 'account',
    type: 'price',
    title: '금융사명',
    accountNumber: '계좌번호',
    bankCode: '011',
    hasDotMenu: true,
    priceValue: '150,000,000원',
    selectable: true,
    items: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
    ],
  },
};

// === DATA 변형 (2개) ===

// 5. Card - data/4column
export const Data4Column: Story = {
  args: {
    variant: 'data',
    type: '4column',
    badges: [
      { text: '다소높은위험', variant: 'line-gray' },
      { text: '거치식', variant: 'line-blue' },
      { text: '선취', variant: 'line-yellow' },
    ],
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.2rem', color: '#666', marginBottom: '1rem' }}>부가텍스트</div>
        <div style={{ fontSize: '2.4rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>1.50%</div>
        <div style={{ fontSize: '1.4rem', color: '#999' }}>연 수익률</div>
      </div>
    ),
  },
};

// 6. Card - data/highlight
export const DataHighlight: Story = {
  args: {
    variant: 'data',
    type: 'highlight',
    highlighted: true,
    badges: [
      { text: '추천', variant: 'line-gray' },
      { text: '신규', variant: 'line-red' },
    ],
    children: (
      <div style={{ padding: '1rem' }}>
        <div style={{ fontSize: '1.6rem', fontWeight: '600', marginBottom: '1rem' }}>
          미래에셋스마트롱숏70증권자투자신탁1호[주식]
        </div>
        <div style={{ fontSize: '1.4rem', color: '#666', marginBottom: '1rem' }}>상품명</div>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', fontSize: '1.2rem', color: '#888' }}>
          <li>수수료 선취</li>
          <li>국내[주식형]</li>
          <li>국내</li>
        </ul>
        <div style={{ marginTop: '2rem', textAlign: 'right' }}>
          <div style={{ fontSize: '1.2rem', color: '#666' }}>기준가</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>12,345원</div>
        </div>
      </div>
    ),
  },
};

// === ETC 변형 (1개) ===

// 7. Card - etc/input
export const EtcInput: Story = {
  args: {
    variant: 'etc',
    type: 'input',
    title: 'Input Card',
    hasInput: true,
    inputType: 'price',
    items: [
      { title: '기본 정보', value: '입력 전 정보' },
    ],
  },
};

// === GENERAL 변형 (12개) ===

// 8. Card - general/accordion
export const GeneralAccordion: Story = {
  args: {
    variant: 'general',
    type: 'accordion',
    title: 'General Accordion Card',
    hasAccordion: true,
    items: [
      { title: '기본 정보', value: '항상 표시' },
    ],
    hiddenItems: [
      { title: '상세 정보 1', value: '토글 시 표시' },
      { title: '상세 정보 2', value: '토글 시 표시' },
    ],
  },
};

// 9. Card - general/date
export const GeneralDate: Story = {
  args: {
    variant: 'general',
    type: 'date',
    title: '2025.01.01',
    items: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
    ],
  },
};

// 10. Card - general/detail
export const GeneralDetail: Story = {
  args: {
    variant: 'general',
    type: 'detail',
    title: 'Detail Card',
    subtitle: '상세 정보 카드',
    items: [
      { title: '상세 항목 1', value: '상세 데이터 1' },
      { title: '상세 항목 2', value: '상세 데이터 2' },
      { title: '상세 항목 3', value: '상세 데이터 3' },
    ],
  },
};

// 11. Card - general/divide-multi
export const GeneralDivideMulti: Story = {
  args: {
    variant: 'general',
    type: 'divide-multi',
    title: 'Multi Divide Card',
    children: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', padding: '1rem' }}>
        <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #eee', borderRadius: '0.5rem' }}>
          <div style={{ fontSize: '1.2rem', color: '#666' }}>항목 1</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>데이터 1</div>
        </div>
        <div style={{ textAlign: 'center', padding: '1rem', border: '1px solid #eee', borderRadius: '0.5rem' }}>
          <div style={{ fontSize: '1.2rem', color: '#666' }}>항목 2</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>데이터 2</div>
        </div>
      </div>
    ),
  },
};

// 12. Card - general/divide-single
export const GeneralDivideSingle: Story = {
  args: {
    variant: 'general',
    type: 'divide-single',
    title: 'Single Divide Card',
    children: (
      <div style={{ textAlign: 'center', padding: '2rem', border: '1px solid #eee', borderRadius: '0.5rem', margin: '1rem' }}>
        <div style={{ fontSize: '1.4rem', color: '#666', marginBottom: '1rem' }}>단일 분할 항목</div>
        <div style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>단일 데이터</div>
      </div>
    ),
  },
};

// 13. Card - general/grip
export const GeneralGrip: Story = {
  args: {
    variant: 'general',
    type: 'grip',
    title: 'Draggable Card',
    hasGrip: true,
    items: [
      { title: '순서', value: '1' },
      { title: '상태', value: '이동 가능' },
    ],
  },
};

// 14. Card - general/info
export const GeneralInfo: Story = {
  args: {
    variant: 'general',
    type: 'info',
    title: 'Information Card',
    subtitle: '정보 표시용 카드',
    badges: [
      { text: '정보', variant: 'line-blue' },
    ],
    items: [
      { title: '정보 1', value: '내용 1' },
      { title: '정보 2', value: '내용 2' },
    ],
  },
};

// 15. Card - general/input - Input-Type=price
export const GeneralInputPrice: Story = {
  args: {
    variant: 'general',
    type: 'input',
    title: '상품명',
    subtitle: '부가설명명',
    badges: [
      { text: '라벨벨', variant: 'line-gray' },
    ],
    items: [
      { title: '타이틀', value: '데이터' },
      { title: '타이틀', value: '데이터' },
    ],
    buttonText: '버튼',
    onButtonClick: () => console.log('버튼 클릭!'),
  },
};

// 16. Card - general/input - Input-Type=unit
export const GeneralInputUnit: Story = {
  args: {
    variant: 'general',
    type: 'input',
    title: 'Unit Input Card',
    hasInput: true,
    inputType: 'unit',
    items: [
      { title: '단위', value: 'EA' },
      { title: '기본값', value: '1' },
    ],
  },
};

// 17. Card - general/list
export const GeneralList: Story = {
  args: {
    variant: 'general',
    type: 'list',
    title: '기쁨가득NH저축보험(무)_(기본형)',
    accountNumber: '028-0612-0912-11',
    badges: [
      { text: '매우낮은위험', variant: 'line-gray' },
    ],
    items: [
      { title: '평가금액', value: '200,000원' },
      { title: '투자금액', value: '200,000원' },
      { title: '수익률', value: '+20 %', className: 'red' },
    ],
  },
};

// 18. Card - general/rate
export const GeneralRate: Story = {
  args: {
    variant: 'general',
    type: 'rate',
    title: 'Rate Card',
    children: (
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <div style={{ fontSize: '1.4rem', color: '#666', marginBottom: '1rem' }}>현재 금리</div>
        <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', marginBottom: '0.5rem' }}>3.50%</div>
        <div style={{ fontSize: '1.2rem', color: '#999' }}>연 기준</div>
      </div>
    ),
  },
};

// 19. Card - general/sum
export const GeneralSum: Story = {
  args: {
    variant: 'general',
    type: 'sum',
    title: 'Summary Card',
    children: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <div>
          <div style={{ fontSize: '1.4rem', color: '#666' }}>총합</div>
          <div style={{ fontSize: '2.4rem', fontWeight: 'bold' }}>1,234,567원</div>
        </div>
        <div style={{ fontSize: '4rem', color: '#eee' }}>Σ</div>
      </div>
    ),
  },
};

// === SUMMARY 변형 (7개) ===

// 20. Card - summary/2column
export const Summary2Column: Story = {
  args: {
    variant: 'summary',
    type: '2column',
    children: (
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '1rem' }}>
        <div>
          <div style={{ fontSize: '1.4rem', color: '#666', marginBottom: '0.8rem' }}>타이틀</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>데이터</div>
        </div>
        <div>
          <div style={{ fontSize: '1.4rem', color: '#666', marginBottom: '0.8rem' }}>타이틀</div>
          <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#007bff' }}>데이터</div>
        </div>
      </div>
    ),
  },
};

// 21. Card - summary/accordion - State=close
export const SummaryAccordionClosed: Story = {
  args: {
    variant: 'summary',
    type: 'accordion',
    title: '타이틀',
    hasAccordion: true,
    defaultExpanded: false,
    items: [
      { title: '대출과목', value: '예적금담보대출' },
    ],
    hiddenItems: [
      { title: '상세 정보 1', value: '숨겨진 데이터 1' },
      { title: '상세 정보 2', value: '숨겨진 데이터 2' },
    ],
  },
};

// 22. Card - summary/accordion - State=open
export const SummaryAccordionOpen: Story = {
  args: {
    variant: 'summary',
    type: 'accordion',
    title: '타이틀',
    hasAccordion: true,
    defaultExpanded: true,
    items: [
      { title: '대출과목', value: '예적금담보대출' },
    ],
    hiddenItems: [
      { title: '상세 정보 1', value: '숨겨진 데이터 1' },
      { title: '상세 정보 2', value: '숨겨진 데이터 2' },
    ],
  },
};

// 23. Card - summary/basic
export const SummaryBasic: Story = {
  args: {
    variant: 'summary',
    type: 'basic',
    title: '타이틀',
    subtitle: '부가설명',
    badges: [
      { text: '매우낮은위험', variant: 'line-gray' },
    ],
    items: [
      { title: '항목 1', value: '데이터 1' },
      { title: '항목 2', value: '데이터 2' },
    ],
  },
};

// 24. Card - summary/price/divide
export const SummaryPriceDivide: Story = {
  args: {
    variant: 'summary',
    type: 'divide',
    title: '타이틀',
    priceInfo: {
      monthly: '100,000원',
      description: '부가설명',
      subInfo: '부가설명',
    },
    children: (
      <div style={{ borderTop: '1px solid #eee', paddingTop: '1.6rem', marginTop: '1.6rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '1.4rem', color: '#666' }}>예상금리</div>
            <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>매월 0원</div>
            <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
          </div>
        </div>
      </div>
    ),
  },
};

// 25. Card - summary/price/double
export const SummaryPriceDouble: Story = {
  args: {
    variant: 'summary',
    type: 'double',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '1.4rem', color: '#666' }}>예상금리</div>
            <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>매월 0원</div>
            <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '1.4rem', color: '#666' }}>예상금리</div>
            <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>매월 0원</div>
            <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
          </div>
        </div>
      </div>
    ),
  },
};

// 26. Card - summary/price/single
export const SummaryPriceSingle: Story = {
  args: {
    variant: 'summary',
    type: 'single',
    children: (
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '1.4rem', color: '#666' }}>예상금리</div>
          <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>매월 0원</div>
          <div style={{ fontSize: '1.2rem', color: '#999' }}>부가설명</div>
        </div>
      </div>
    ),
  },
};

// 모든 변형 한눈에 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
      gap: '2rem', 
      padding: '2rem',
      maxWidth: '1200px',
    }}>
      <div>
        <h3>Account Cards</h3>
        <Card
          variant="account"
          type="list"
          title="계좌 카드"
          bankName="NH농협"
          accountNumber="111-1234-5678"
          items={[{ title: '잔액', value: '1,000,000원' }]}
        />
      </div>
      
      <div>
        <h3>General Cards</h3>
        <Card
          variant="general"
          type="list"
          title="일반 카드"
          subtitle="부제목"
          items={[{ title: '항목', value: '데이터' }]}
        />
      </div>
      
      <div>
        <h3>Summary Cards</h3>
        <Card
          variant="summary"
          type="basic"
          title="요약 카드"
          items={[{ title: '총계', value: '999,999원' }]}
        />
      </div>
      
      <div>
        <h3>Data Cards</h3>
        <Card
          variant="data"
          type="4column"
          badges={[{ text: '추천', variant: 'line-blue' }]}
          children={
            <div style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>3.5%</div>
            </div>
          }
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 카드 변형을 한눈에 볼 수 있습니다.',
      },
    },
  },
};