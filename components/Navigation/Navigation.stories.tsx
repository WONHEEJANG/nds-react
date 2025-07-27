import type { Meta, StoryObj } from '@storybook/react';
import { Navigation, NavigationProps } from './Navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'radio',
      options: ['top', 'bottom', 'tab'],
      description: '네비게이션 타입',
    },
    topVariant: {
      control: 'select',
      options: ['basic', 'main', 'process', 'full-popup', 'login'],
      description: '상단 네비게이션 변형',
    },
    tabType: {
      control: 'radio',
      options: ['fixed', 'flexible'],
      description: '탭 타입',
    },
    swipeable: {
      control: 'boolean',
      description: '스와이프 활성화',
    },
    hasNotification: {
      control: 'boolean',
      description: '알림 활성 상태',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Top Navigation Stories
export const TopBasic: Story = {
  args: {
    type: 'top',
    topVariant: 'basic',
    title: 'basic',
    onBackClick: () => console.log('Back clicked'),
    onHomeClick: () => console.log('Home clicked'),
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const TopMain: Story = {
  args: {
    type: 'top',
    topVariant: 'main',
    userName: '김농협',
    hasNotification: true,
    onUserNameClick: () => console.log('User name clicked'),
    onBigSizeClick: () => console.log('Big size clicked'),
    onNotificationClick: () => console.log('Notification clicked'),
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const TopProcess: Story = {
  args: {
    type: 'top',
    topVariant: 'process',
    title: 'process',
    onBackClick: () => console.log('Back clicked'),
    onCancelClick: () => console.log('Cancel clicked'),
  },
};

export const TopFullPopup: Story = {
  args: {
    type: 'top',
    topVariant: 'full-popup',
    title: '서비스 타이틀',
    onCloseClick: () => console.log('Close clicked'),
  },
};

export const TopLogin: Story = {
  args: {
    type: 'top',
    topVariant: 'login',
    logoSrc: './assets/imgs/nds/common/img_nh-allone_24.png',
    onBackClick: () => console.log('Back clicked'),
    onMenuClick: () => console.log('Menu clicked'),
  },
};

export const TopMainWithoutNotification: Story = {
  args: {
    type: 'top',
    topVariant: 'main',
    userName: '김농협',
    hasNotification: false,
    onUserNameClick: () => console.log('User name clicked'),
    onBigSizeClick: () => console.log('Big size clicked'),
    onNotificationClick: () => console.log('Notification clicked'),
    onMenuClick: () => console.log('Menu clicked'),
  },
};

// Bottom Navigation Stories
export const BottomAllOne: Story = {
  args: {
    type: 'bottom',
    items: [
      {
        id: '1',
        label: '홈',
        type: 'finance',
        active: true,
        onClick: () => console.log('Home clicked'),
      },
      {
        id: '2',
        label: '상품몰',
        type: 'mall',
        onClick: () => console.log('Mall clicked'),
      },
      {
        id: '3',
        label: '마이데이터',
        type: 'mydata',
        onClick: () => console.log('MyData clicked'),
      },
      {
        id: '4',
        label: '생활+',
        type: 'life',
        onClick: () => console.log('Life clicked'),
      },
    ],
  },
};

// Tab Navigation Stories
export const TabFixed: Story = {
  args: {
    type: 'tab',
    tabType: 'fixed',
    items: [
      {
        id: '1',
        label: '메뉴1',
        active: true,
        onClick: () => console.log('Tab 1 clicked'),
      },
      {
        id: '2',
        label: '메뉴2',
        onClick: () => console.log('Tab 2 clicked'),
      },
      {
        id: '3',
        label: '메뉴3',
        onClick: () => console.log('Tab 3 clicked'),
      },
      {
        id: '4',
        label: '메뉴4',
        onClick: () => console.log('Tab 4 clicked'),
      },
    ],
  },
};

export const TabFlexible: Story = {
  args: {
    type: 'tab',
    tabType: 'flexible',
    swipeable: true,
    items: [
      {
        id: '1',
        label: '메뉴',
        active: true,
        onClick: () => console.log('Tab 1 clicked'),
      },
      {
        id: '2',
        label: '메뉴',
        onClick: () => console.log('Tab 2 clicked'),
      },
      {
        id: '3',
        label: '메뉴',
        onClick: () => console.log('Tab 3 clicked'),
      },
      {
        id: '4',
        label: '메뉴',
        onClick: () => console.log('Tab 4 clicked'),
      },
      {
        id: '5',
        label: '메뉴',
        onClick: () => console.log('Tab 5 clicked'),
      },
      {
        id: '6',
        label: '메뉴',
        onClick: () => console.log('Tab 6 clicked'),
      },
    ],
  },
};

export const TabFixedTwoItems: Story = {
  args: {
    type: 'tab',
    tabType: 'fixed',
    items: [
      {
        id: '1',
        label: '첫 번째',
        active: true,
        onClick: () => console.log('Tab 1 clicked'),
      },
      {
        id: '2',
        label: '두 번째',
        onClick: () => console.log('Tab 2 clicked'),
      },
    ],
  },
};

export const TabFlexibleManyItems: Story = {
  args: {
    type: 'tab',
    tabType: 'flexible',
    swipeable: true,
    items: [
      {
        id: '1',
        label: '계좌조회',
        active: true,
        onClick: () => console.log('Account clicked'),
      },
      {
        id: '2',
        label: '이체',
        onClick: () => console.log('Transfer clicked'),
      },
      {
        id: '3',
        label: '예금',
        onClick: () => console.log('Deposit clicked'),
      },
      {
        id: '4',
        label: '적금',
        onClick: () => console.log('Savings clicked'),
      },
      {
        id: '5',
        label: '대출',
        onClick: () => console.log('Loan clicked'),
      },
      {
        id: '6',
        label: '카드',
        onClick: () => console.log('Card clicked'),
      },
      {
        id: '7',
        label: '보험',
        onClick: () => console.log('Insurance clicked'),
      },
      {
        id: '8',
        label: '투자',
        onClick: () => console.log('Investment clicked'),
      },
    ],
  },
};

// Complex Examples
export const CompletePageExample: Story = {
  render: () => (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navigation
        type="top"
        topVariant="basic"
        title="서비스 페이지"
        onBackClick={() => console.log('Back clicked')}
        onHomeClick={() => console.log('Home clicked')}
        onMenuClick={() => console.log('Menu clicked')}
      />
      
      <Navigation
        type="tab"
        tabType="fixed"
        items={[
          { id: '1', label: '전체', active: true, onClick: () => console.log('All clicked') },
          { id: '2', label: '예금', onClick: () => console.log('Deposit clicked') },
          { id: '3', label: '적금', onClick: () => console.log('Savings clicked') },
          { id: '4', label: '대출', onClick: () => console.log('Loan clicked') },
        ]}
      />
      
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f8f9fa' }}>
        <p>페이지 콘텐츠 영역</p>
      </div>
      
      <Navigation
        type="bottom"
        items={[
          { id: '1', label: '홈', type: 'finance', active: true },
          { id: '2', label: '상품몰', type: 'mall' },
          { id: '3', label: '마이데이터', type: 'mydata' },
          { id: '4', label: '생활+', type: 'life' },
        ]}
      />
    </div>
  ),
};