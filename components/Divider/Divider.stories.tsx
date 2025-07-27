import type { Meta, StoryObj } from '@storybook/react';
import { Divider, VerticalDivider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 구분선 컴포넌트입니다. 수평 및 수직 구분선을 지원합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['content-8', 'list-1', 'list-2', 'page-1'],
      description: '구분선의 타입',
    },
    color: {
      control: 'color',
      description: '구분선의 색상',
    },
    thickness: {
      control: 'text',
      description: '구분선의 두께',
    },
    margin: {
      control: 'text',
      description: '구분선의 여백',
    },
  },
  args: {
    type: 'content-8',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>위쪽 컨텐츠</p>
      <Divider />
      <p>아래쪽 컨텐츠</p>
    </div>
  ),
};

// 타입별 구분선
export const Types: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div>
        <h4>Content-8 (기본)</h4>
        <p>컨텐츠 위</p>
        <Divider type="content-8" />
        <p>컨텐츠 아래</p>
      </div>
      
      <div>
        <h4>List-1</h4>
        <p>리스트 항목 1</p>
        <Divider type="list-1" />
        <p>리스트 항목 2</p>
      </div>
      
      <div>
        <h4>List-2</h4>
        <p>리스트 항목 1</p>
        <Divider type="list-2" />
        <p>리스트 항목 2</p>
      </div>
      
      <div>
        <h4>Page-1</h4>
        <p>페이지 섹션 1</p>
        <Divider type="page-1" />
        <p>페이지 섹션 2</p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 타입의 구분선을 보여줍니다.',
      },
    },
  },
};

// 커스텀 스타일
export const CustomStyle: Story = {
  render: () => (
    <div style={{ width: '300px' }}>
      <p>커스텀 색상</p>
      <Divider color="#ff6b6b" />
      <p>커스텀 두께</p>
      <Divider thickness="3px" color="#4ecdc4" />
      <p>커스텀 여백</p>
      <Divider margin="30px 0" color="#45b7d1" />
      <p>마지막 컨텐츠</p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '색상, 두께, 여백을 커스터마이징한 구분선입니다.',
      },
    },
  },
};

// 수직 구분선
export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
      <span>메뉴 1</span>
      <VerticalDivider />
      <span>메뉴 2</span>
      <VerticalDivider />
      <span>메뉴 3</span>
      <VerticalDivider color="#ff6b6b" thickness="2px" />
      <span>메뉴 4</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '인라인 요소들을 구분하는 수직 구분선입니다.',
      },
    },
  },
};

// 수직 구분선 높이 조절
export const VerticalHeights: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0', fontSize: '16px' }}>
      <span>작은 높이</span>
      <VerticalDivider height="12px" />
      <span>기본 높이</span>
      <VerticalDivider />
      <span>큰 높이</span>
      <VerticalDivider height="24px" thickness="2px" color="#45b7d1" />
      <span>매우 큰 높이</span>
      <VerticalDivider height="30px" thickness="3px" color="#ff6b6b" />
      <span>끝</span>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '다양한 높이의 수직 구분선을 보여줍니다.',
      },
    },
  },
};

// 실제 사용 예시
export const RealWorldExample: Story = {
  render: () => (
    <div style={{ width: '400px' }}>
      <header style={{ padding: '16px 0' }}>
        <h2>게시글 제목</h2>
        <div style={{ display: 'flex', alignItems: 'center', color: '#666', fontSize: '14px' }}>
          <span>작성자: 홍길동</span>
          <VerticalDivider height="12px" color="#ccc" />
          <span>2024.01.15</span>
          <VerticalDivider height="12px" color="#ccc" />
          <span>조회수: 1,234</span>
        </div>
      </header>
      
      <Divider type="content-8" />
      
      <main style={{ padding: '20px 0' }}>
        <p>게시글 내용이 여기에 들어갑니다...</p>
      </main>
      
      <Divider type="page-1" />
      
      <footer style={{ padding: '16px 0' }}>
        <h3>댓글</h3>
        <div style={{ marginTop: '10px' }}>
          <p><strong>사용자1:</strong> 좋은 글이네요!</p>
          <Divider type="list-1" />
          <p><strong>사용자2:</strong> 감사합니다.</p>
        </div>
      </footer>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '실제 웹페이지에서 구분선이 사용되는 예시입니다.',
      },
    },
  },
};