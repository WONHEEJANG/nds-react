import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'NDS 디자인 시스템의 탭 컴포넌트입니다. 다양한 컨텐츠를 탭으로 구성할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    defaultActiveTab: {
      control: 'text',
      description: '기본으로 활성화될 탭의 ID',
    },
    onTabChange: {
      action: 'tab-changed',
      description: '탭 변경 시 호출되는 함수',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    items: [
      {
        id: 'tab1',
        label: '첫 번째 탭',
        content: <div style={{ padding: '20px' }}>첫 번째 탭의 내용입니다.</div>,
      },
      {
        id: 'tab2',
        label: '두 번째 탭',
        content: <div style={{ padding: '20px' }}>두 번째 탭의 내용입니다.</div>,
      },
      {
        id: 'tab3',
        label: '세 번째 탭',
        content: <div style={{ padding: '20px' }}>세 번째 탭의 내용입니다.</div>,
      },
    ],
  },
};

// 기본 활성 탭 지정
export const WithDefaultActive: Story = {
  args: {
    defaultActiveTab: 'profile',
    items: [
      {
        id: 'home',
        label: '홈',
        content: (
          <div style={{ padding: '20px' }}>
            <h3>홈 페이지</h3>
            <p>메인 대시보드 내용입니다.</p>
          </div>
        ),
      },
      {
        id: 'profile',
        label: '프로필',
        content: (
          <div style={{ padding: '20px' }}>
            <h3>프로필 설정</h3>
            <p>사용자 정보를 관리하는 페이지입니다.</p>
          </div>
        ),
      },
      {
        id: 'settings',
        label: '설정',
        content: (
          <div style={{ padding: '20px' }}>
            <h3>시스템 설정</h3>
            <p>애플리케이션 설정을 변경할 수 있습니다.</p>
          </div>
        ),
      },
    ],
  },
};

// 비활성화된 탭 포함
export const WithDisabledTab: Story = {
  args: {
    items: [
      {
        id: 'active1',
        label: '활성 탭 1',
        content: <div style={{ padding: '20px' }}>첫 번째 활성 탭입니다.</div>,
      },
      {
        id: 'disabled',
        label: '비활성 탭',
        content: <div style={{ padding: '20px' }}>접근할 수 없는 탭입니다.</div>,
        disabled: true,
      },
      {
        id: 'active2',
        label: '활성 탭 2',
        content: <div style={{ padding: '20px' }}>두 번째 활성 탭입니다.</div>,
      },
    ],
  },
};

// 복잡한 컨텐츠
export const WithComplexContent: Story = {
  args: {
    items: [
      {
        id: 'overview',
        label: '개요',
        content: (
          <div style={{ padding: '24px' }}>
            <h2>프로젝트 개요</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
              <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <h4>진행률</h4>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4caf50' }}>75%</div>
              </div>
              <div style={{ padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
                <h4>남은 기간</h4>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff9800' }}>12일</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'tasks',
        label: '작업 목록',
        content: (
          <div style={{ padding: '24px' }}>
            <h2>할 일</h2>
            <ul style={{ marginTop: '16px', listStyle: 'none', padding: 0 }}>
              {['UI 디자인 완료', '백엔드 API 개발', '테스트 작성', '배포 준비'].map((task, idx) => (
                <li key={idx} style={{ 
                  padding: '12px', 
                  margin: '8px 0', 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: '4px',
                  borderLeft: `4px solid ${idx < 2 ? '#4caf50' : '#ccc'}`
                }}>
                  {task} {idx < 2 && '✓'}
                </li>
              ))}
            </ul>
          </div>
        ),
      },
      {
        id: 'team',
        label: '팀원',
        content: (
          <div style={{ padding: '24px' }}>
            <h2>팀 구성원</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
              {[
                { name: '김개발', role: '프론트엔드 개발자', status: '온라인' },
                { name: '이디자인', role: 'UI/UX 디자이너', status: '오프라인' },
                { name: '박백엔드', role: '백엔드 개발자', status: '온라인' },
              ].map((member, idx) => (
                <div key={idx} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  padding: '12px',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    backgroundColor: '#ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{member.name}</div>
                    <div style={{ fontSize: '14px', color: '#666' }}>{member.role}</div>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <span style={{ 
                      padding: '4px 8px', 
                      borderRadius: '12px', 
                      fontSize: '12px',
                      backgroundColor: member.status === '온라인' ? '#e8f5e8' : '#f5f5f5',
                      color: member.status === '온라인' ? '#4caf50' : '#666'
                    }}>
                      {member.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ),
      },
    ],
  },
};

// 많은 탭
export const ManyTabs: Story = {
  args: {
    items: Array.from({ length: 8 }, (_, i) => ({
      id: `tab-${i + 1}`,
      label: `탭 ${i + 1}`,
      content: (
        <div style={{ padding: '20px' }}>
          <h3>탭 {i + 1} 내용</h3>
          <p>이것은 {i + 1}번째 탭의 내용입니다.</p>
        </div>
      ),
    })),
  },
  parameters: {
    docs: {
      description: {
        story: '많은 탭이 있을 때의 레이아웃을 확인할 수 있습니다.',
      },
    },
  },
};

// 이벤트 핸들링
export const WithEventHandling: Story = {
  args: {
    items: [
      {
        id: 'console',
        label: '콘솔',
        content: (
          <div style={{ padding: '20px' }}>
            <p>개발자 도구의 콘솔 탭을 시뮬레이션합니다.</p>
            <div style={{ 
              backgroundColor: '#1e1e1e', 
              color: '#fff', 
              padding: '12px', 
              fontFamily: 'monospace',
              borderRadius: '4px',
              marginTop: '16px'
            }}>
              &gt; console.log('Hello, World!');<br/>
              Hello, World!<br/>
              &gt; _
            </div>
          </div>
        ),
      },
      {
        id: 'network',
        label: '네트워크',
        content: (
          <div style={{ padding: '20px' }}>
            <p>네트워크 요청을 모니터링하는 탭입니다.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Method</th>
                  <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>URL</th>
                  <th style={{ padding: '8px', textAlign: 'left', border: '1px solid #ddd' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>GET</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>/api/users</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd', color: '#4caf50' }}>200</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>POST</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd' }}>/api/login</td>
                  <td style={{ padding: '8px', border: '1px solid #ddd', color: '#4caf50' }}>200</td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: 'sources',
        label: '소스',
        content: (
          <div style={{ padding: '20px' }}>
            <p>소스 코드 탭입니다.</p>
            <pre style={{ 
              backgroundColor: '#f8f8f8', 
              padding: '12px', 
              borderRadius: '4px',
              overflow: 'auto',
              fontSize: '14px'
            }}>
{`function greet(name) {
  return \`Hello, \${name}!\`;
}

const message = greet('World');
console.log(message);`}
            </pre>
          </div>
        ),
      },
    ],
    onTabChange: (tabId) => {
      console.log(`탭이 변경되었습니다: ${tabId}`);
    },
  },
  parameters: {
    docs: {
      description: {
        story: '탭 변경 이벤트를 처리하는 예시입니다. 콘솔에서 탭 변경 로그를 확인할 수 있습니다.',
      },
    },
  },
};