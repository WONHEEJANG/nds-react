import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 아코디언 컴포넌트입니다. 접고 펼칠 수 있는 콘텐츠 영역을 제공합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '아코디언 제목',
    },
    subInfo: {
      control: 'text',
      description: '부가 정보',
    },
    badge: {
      control: 'text',
      description: '배지 텍스트',
    },
    variant: {
      control: 'select',
      options: ['box', 'line'],
      description: '아코디언 스타일 변형',
    },
    type: {
      control: 'select',
      options: ['list', 'content'],
      description: '아코디언 타입',
    },
    isOpen: {
      control: 'boolean',
      description: '열림/닫힘 상태',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 상태',
    },
    children: {
      control: 'text',
      description: '아코디언 내용',
    },
    onToggle: {
      action: 'toggled',
      description: '열림/닫힘 토글 시 호출되는 함수',
    },
  },
  args: {
    title: 'Accordion Title',
    variant: 'box',
    type: 'list',
    isOpen: false,
    disabled: false,
    children: '아코디언 내용입니다.',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    title: '기본 아코디언',
    children: (
      <div style={{ padding: '16px' }}>
        <p>이것은 기본 아코디언의 내용입니다.</p>
        <p>여러 줄의 텍스트나 다른 컴포넌트들을 포함할 수 있습니다.</p>
      </div>
    ),
  },
};

// 계좌 정보 아코디언
export const AccountInfo: Story = {
  args: {
    title: '계좌 정보',
    subInfo: 'NH농협은행',
    badge: '주거래',
    variant: 'box',
    type: 'list',
    children: (
      <dl className="dl" style={{ margin: 0, padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <dt>계좌번호</dt>
          <dd style={{ margin: 0 }}>123-456-789012</dd>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <dt>잔액</dt>
          <dd style={{ margin: 0 }}>1,234,567원</dd>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <dt>개설일</dt>
          <dd style={{ margin: 0 }}>2024.01.15</dd>
        </div>
      </dl>
    ),
  },
};

// 열린 상태
export const Opened: Story = {
  args: {
    title: '열린 아코디언',
    isOpen: true,
    children: (
      <div style={{ padding: '16px' }}>
        <p>이 아코디언은 초기에 열린 상태입니다.</p>
      </div>
    ),
  },
};

// 비활성화 상태
export const Disabled: Story = {
  args: {
    title: '비활성화된 아코디언',
    disabled: true,
    children: (
      <div style={{ padding: '16px' }}>
        <p>이 내용은 보이지 않습니다.</p>
      </div>
    ),
  },
};

// 라인 변형
export const LineVariant: Story = {
  args: {
    title: '라인 변형 아코디언',
    variant: 'line',
    children: (
      <div style={{ padding: '16px' }}>
        <p>라인 스타일의 아코디언입니다.</p>
      </div>
    ),
  },
};

// 콘텐츠 타입
export const ContentType: Story = {
  args: {
    title: '콘텐츠 타입 아코디언',
    type: 'content',
    children: (
      <div style={{ padding: '16px' }}>
        <h4 style={{ margin: '0 0 12px 0' }}>상세 내용</h4>
        <p>콘텐츠 타입의 아코디언은 더 자유로운 형태의 내용을 담을 수 있습니다.</p>
        <ul>
          <li>첫 번째 항목</li>
          <li>두 번째 항목</li>
          <li>세 번째 항목</li>
        </ul>
      </div>
    ),
  },
};

// 다양한 변형 비교
export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
      <Accordion
        title="박스 + 리스트 타입"
        variant="box"
        type="list"
        subInfo="NH농협은행"
        badge="주거래"
      >
        <div style={{ padding: '16px' }}>박스 스타일, 리스트 타입</div>
      </Accordion>
      
      <Accordion
        title="박스 + 콘텐츠 타입"
        variant="box"
        type="content"
      >
        <div style={{ padding: '16px' }}>박스 스타일, 콘텐츠 타입</div>
      </Accordion>
      
      <Accordion
        title="라인 + 리스트 타입"
        variant="line"
        type="list"
      >
        <div style={{ padding: '16px' }}>라인 스타일, 리스트 타입</div>
      </Accordion>
      
      <Accordion
        title="라인 + 콘텐츠 타입"
        variant="line"
        type="content"
      >
        <div style={{ padding: '16px' }}>라인 스타일, 콘텐츠 타입</div>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '아코디언의 다양한 변형을 비교해볼 수 있습니다.',
      },
    },
  },
};

// FAQ 예제
export const FAQ: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '500px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>자주 묻는 질문</h3>
      
      <Accordion
        title="계좌 개설은 어떻게 하나요?"
        variant="line"
        type="content"
      >
        <div style={{ padding: '16px' }}>
          <p>온라인 또는 영업점 방문을 통해 계좌를 개설할 수 있습니다.</p>
          <ol>
            <li>신분증 준비</li>
            <li>개설 신청서 작성</li>
            <li>초기 입금 (최소 1만원)</li>
          </ol>
        </div>
      </Accordion>
      
      <Accordion
        title="인터넷뱅킹 비밀번호를 잊어버렸어요"
        variant="line"
        type="content"
      >
        <div style={{ padding: '16px' }}>
          <p>고객센터(1588-2100) 또는 영업점 방문을 통해 재설정이 가능합니다.</p>
          <p>본인 확인 후 즉시 재설정해드립니다.</p>
        </div>
      </Accordion>
      
      <Accordion
        title="수수료는 언제 부과되나요?"
        variant="line"
        type="content"
      >
        <div style={{ padding: '16px' }}>
          <p>거래 유형에 따라 수수료가 부과됩니다:</p>
          <ul>
            <li>타행 이체: 500원</li>
            <li>ATM 타행 출금: 1,000원</li>
            <li>해외 송금: 15,000원</li>
          </ul>
        </div>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'FAQ 페이지에서 사용되는 아코디언 예제입니다.',
      },
    },
  },
};

// 계좌 목록 예제
export const AccountList: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '400px' }}>
      <h3 style={{ margin: '0 0 16px 0' }}>내 계좌</h3>
      
      <Accordion
        title="주거래우대통장"
        subInfo="NH농협은행"
        badge="주거래"
        variant="box"
        type="list"
      >
        <dl style={{ margin: 0, padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <dt>계좌번호</dt>
            <dd style={{ margin: 0 }}>111-1234-5678-99</dd>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <dt>잔액</dt>
            <dd style={{ margin: 0 }}>2,567,890원</dd>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <dt>개설일</dt>
            <dd style={{ margin: 0 }}>2023.05.15</dd>
          </div>
        </dl>
      </Accordion>
      
      <Accordion
        title="자유적금"
        subInfo="NH농협은행"
        variant="box"
        type="list"
      >
        <dl style={{ margin: 0, padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <dt>계좌번호</dt>
            <dd style={{ margin: 0 }}>222-5678-9012-34</dd>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <dt>잔액</dt>
            <dd style={{ margin: 0 }}>1,234,567원</dd>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <dt>만기일</dt>
            <dd style={{ margin: 0 }}>2025.01.15</dd>
          </div>
        </dl>
      </Accordion>
      
      <Accordion
        title="정기예금"
        subInfo="NH농협은행"
        variant="box"
        type="list"
      >
        <dl style={{ margin: 0, padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <dt>계좌번호</dt>
            <dd style={{ margin: 0 }}>333-9012-3456-78</dd>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <dt>잔액</dt>
            <dd style={{ margin: 0 }}>5,000,000원</dd>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <dt>만기일</dt>
            <dd style={{ margin: 0 }}>2024.12.31</dd>
          </div>
        </dl>
      </Accordion>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '계좌 목록을 표시하는 아코디언 예제입니다.',
      },
    },
  },
};