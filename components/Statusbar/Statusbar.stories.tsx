import type { Meta, StoryObj } from '@storybook/react';
import { Statusbar, StatusbarProps } from './Statusbar';

const meta: Meta<typeof Statusbar> = {
  title: 'Components/Statusbar',
  component: Statusbar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    platform: {
      control: 'radio',
      options: ['aos', 'ios'],
      description: '플랫폼',
    },
    mode: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '모드',
    },
    batteryLevel: {
      control: 'range',
      min: 0,
      max: 100,
      description: '배터리 레벨 (0-100)',
    },
    signalStrength: {
      control: 'range',
      min: 0,
      max: 4,
      description: '신호 강도 (0-4)',
    },
    wifiConnected: {
      control: 'boolean',
      description: 'WiFi 연결 상태',
    },
    bluetoothConnected: {
      control: 'boolean',
      description: '블루투스 연결 상태',
    },
    hasNotifications: {
      control: 'boolean',
      description: '알림 아이콘 표시',
    },
    useCustomStyle: {
      control: 'boolean',
      description: '커스텀 스타일 사용 여부',
    },
    useImage: {
      control: 'boolean',
      description: '이미지 사용 여부 (NDS 기본 이미지)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Android (AOS) Variants
export const AOSLight: Story = {
  args: {
    platform: 'aos',
    mode: 'light',
    time: '9:41',
    batteryLevel: 85,
    signalStrength: 4,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

export const AOSDark: Story = {
  args: {
    platform: 'aos',
    mode: 'dark',
    time: '9:41',
    batteryLevel: 85,
    signalStrength: 4,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

// iOS Variants
export const IOSLight: Story = {
  args: {
    platform: 'ios',
    mode: 'light',
    time: '9:41',
    batteryLevel: 85,
    signalStrength: 4,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

export const IOSDark: Story = {
  args: {
    platform: 'ios',
    mode: 'dark',
    time: '9:41',
    batteryLevel: 85,
    signalStrength: 4,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

// Battery Level Variants
export const LowBattery: Story = {
  args: {
    platform: 'ios',
    mode: 'light',
    time: '9:41',
    batteryLevel: 15,
    signalStrength: 3,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: true,
    useCustomStyle: true,
    useImage: false,
  },
};

export const FullBattery: Story = {
  args: {
    platform: 'aos',
    mode: 'dark',
    time: '9:41',
    batteryLevel: 100,
    signalStrength: 4,
    wifiConnected: true,
    bluetoothConnected: true,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

// Signal Strength Variants
export const WeakSignal: Story = {
  args: {
    platform: 'aos',
    mode: 'light',
    time: '9:41',
    batteryLevel: 65,
    signalStrength: 1,
    wifiConnected: false,
    bluetoothConnected: false,
    hasNotifications: true,
    useCustomStyle: true,
    useImage: false,
  },
};

export const NoSignal: Story = {
  args: {
    platform: 'ios',
    mode: 'dark',
    time: '9:41',
    batteryLevel: 45,
    signalStrength: 0,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

// Connectivity Variants
export const AllConnected: Story = {
  args: {
    platform: 'ios',
    mode: 'light',
    time: '2:30',
    batteryLevel: 75,
    signalStrength: 3,
    wifiConnected: true,
    bluetoothConnected: true,
    hasNotifications: true,
    useCustomStyle: true,
    useImage: false,
  },
};

export const NoConnectivity: Story = {
  args: {
    platform: 'aos',
    mode: 'dark',
    time: '11:59',
    batteryLevel: 25,
    signalStrength: 0,
    wifiConnected: false,
    bluetoothConnected: false,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

// NDS Image Variants (Original Design)
export const NDSImageAOSLight: Story = {
  args: {
    platform: 'aos',
    mode: 'light',
    useImage: true,
    useCustomStyle: false,
  },
};

export const NDSImageAOSDark: Story = {
  args: {
    platform: 'aos',
    mode: 'dark',
    useImage: true,
    useCustomStyle: false,
  },
};

export const NDSImageIOSLight: Story = {
  args: {
    platform: 'ios',
    mode: 'light',
    useImage: true,
    useCustomStyle: false,
  },
};

export const NDSImageIOSDark: Story = {
  args: {
    platform: 'ios',
    mode: 'dark',
    useImage: true,
    useCustomStyle: false,
  },
};

// Time Variants
export const MorningTime: Story = {
  args: {
    platform: 'ios',
    mode: 'light',
    time: '7:30',
    batteryLevel: 95,
    signalStrength: 4,
    wifiConnected: true,
    bluetoothConnected: false,
    hasNotifications: true,
    useCustomStyle: true,
    useImage: false,
  },
};

export const EveningTime: Story = {
  args: {
    platform: 'aos',
    mode: 'dark',
    time: '8:45',
    batteryLevel: 35,
    signalStrength: 2,
    wifiConnected: true,
    bluetoothConnected: true,
    hasNotifications: false,
    useCustomStyle: true,
    useImage: false,
  },
};

// Mobile App Demo
export const MobileAppDemo: Story = {
  render: () => (
    <div style={{ 
      width: '375px', 
      height: '812px', 
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6',
      borderRadius: '20px',
      overflow: 'hidden',
      margin: '0 auto'
    }}>
      <Statusbar
        platform="ios"
        mode="dark"
        time="9:41"
        batteryLevel={87}
        signalStrength={4}
        wifiConnected={true}
        bluetoothConnected={false}
        hasNotifications={true}
        useCustomStyle={true}
      />
      
      <div style={{ 
        padding: '20px', 
        height: 'calc(100% - 44px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
      }}>
        <h1 style={{ 
          fontSize: '24px', 
          fontWeight: 'bold', 
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          NH 올원뱅크
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#666',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          모바일 앱 예시
        </p>
        <div style={{
          width: '100%',
          height: '200px',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666'
        }}>
          앱 콘텐츠 영역
        </div>
      </div>
    </div>
  ),
};

// Comparison View
export const PlatformComparison: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>Android Light</h3>
        <div style={{ 
          width: '300px', 
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <Statusbar
            platform="aos"
            mode="light"
            time="9:41"
            batteryLevel={75}
            signalStrength={3}
            wifiConnected={true}
            bluetoothConnected={false}
            hasNotifications={true}
            useCustomStyle={true}
          />
        </div>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ marginBottom: '10px' }}>iOS Light</h3>
        <div style={{ 
          width: '300px', 
          border: '1px solid #dee2e6',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <Statusbar
            platform="ios"
            mode="light"
            time="9:41"
            batteryLevel={75}
            signalStrength={3}
            wifiConnected={true}
            bluetoothConnected={false}
            hasNotifications={true}
            useCustomStyle={true}
          />
        </div>
      </div>
    </div>
  ),
};