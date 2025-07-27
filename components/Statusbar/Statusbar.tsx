import React from 'react';

export type StatusbarPlatform = 'aos' | 'ios';
export type StatusbarMode = 'light' | 'dark';

export interface StatusbarProps {
  /** 플랫폼 */
  platform?: StatusbarPlatform;
  /** 모드 */
  mode?: StatusbarMode;
  /** 시간 표시 */
  time?: string;
  /** 배터리 레벨 (0-100) */
  batteryLevel?: number;
  /** 신호 강도 (0-4) */
  signalStrength?: number;
  /** WiFi 연결 상태 */
  wifiConnected?: boolean;
  /** 블루투스 연결 상태 */
  bluetoothConnected?: boolean;
  /** 알림 아이콘 표시 */
  hasNotifications?: boolean;
  /** 커스텀 스타일 사용 여부 */
  useCustomStyle?: boolean;
  /** 이미지 사용 여부 (NDS 기본 이미지) */
  useImage?: boolean;
  /** CSS 클래스명 */
  className?: string;
}

export const Statusbar: React.FC<StatusbarProps> = ({
  platform = 'aos',
  mode = 'light',
  time = '9:41',
  batteryLevel = 85,
  signalStrength = 4,
  wifiConnected = true,
  bluetoothConnected = false,
  hasNotifications = false,
  useCustomStyle = true,
  useImage = false,
  className = '',
}) => {
  const getStatusbarClasses = () => {
    const classes = ['statusbar', `statusbar-${platform}`, `statusbar-${mode}`];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const getImagePath = () => {
    const imageMap = {
      'aos-dark': './prototype/NDS/images/9770_76798.png',
      'aos-light': './prototype/NDS/images/293_4899.png',
      'ios-dark': './prototype/NDS/images/9770_76817.png',
      'ios-light': './prototype/NDS/images/416_11121.png',
    };
    
    return imageMap[`${platform}-${mode}` as keyof typeof imageMap];
  };

  const getStatusbarStyle = (): React.CSSProperties => {
    const isDark = mode === 'dark';
    
    return {
      height: platform === 'ios' ? '44px' : '24px',
      backgroundColor: isDark ? '#000000' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      fontSize: platform === 'ios' ? '14px' : '12px',
      fontWeight: platform === 'ios' ? '600' : '400',
      fontFamily: platform === 'ios' ? '-apple-system, BlinkMacSystemFont' : 'Roboto, sans-serif',
    };
  };

  const renderBatteryIcon = () => {
    const width = 24;
    const height = 12;
    const fillWidth = (batteryLevel / 100) * (width - 2);
    const isDark = mode === 'dark';
    
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {/* Battery outline */}
          <rect
            x="0"
            y="2"
            width={width - 2}
            height={height - 4}
            rx="1"
            fill="none"
            stroke={isDark ? '#ffffff' : '#000000'}
            strokeWidth="0.5"
          />
          {/* Battery tip */}
          <rect
            x={width - 2}
            y="4"
            width="2"
            height={height - 8}
            rx="0.5"
            fill={isDark ? '#ffffff' : '#000000'}
          />
          {/* Battery fill */}
          <rect
            x="1"
            y="3"
            width={fillWidth}
            height={height - 6}
            rx="0.5"
            fill={batteryLevel > 20 ? (isDark ? '#ffffff' : '#000000') : '#ff0000'}
          />
        </svg>
        {platform === 'ios' && (
          <span style={{ fontSize: '11px' }}>{batteryLevel}%</span>
        )}
      </div>
    );
  };

  const renderSignalIcon = () => {
    const isDark = mode === 'dark';
    const bars = Array.from({ length: 4 }, (_, index) => (
      <rect
        key={index}
        x={index * 3}
        y={12 - (index + 1) * 2}
        width="2"
        height={(index + 1) * 2}
        fill={index < signalStrength ? (isDark ? '#ffffff' : '#000000') : (isDark ? '#333333' : '#cccccc')}
      />
    ));

    return (
      <svg width="12" height="12" viewBox="0 0 12 12">
        {bars}
      </svg>
    );
  };

  const renderWifiIcon = () => {
    const isDark = mode === 'dark';
    
    return wifiConnected ? (
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path
          d="M6 2.5c1.66 0 3.16.6 4.33 1.6l-.75.75C8.7 4.2 7.4 3.75 6 3.75s-2.7.45-3.58 1.1l-.75-.75C2.84 3.1 4.34 2.5 6 2.5zm-2.92 3.17c.78-.62 1.8-.92 2.92-.92s2.14.3 2.92.92l-.75.75c-.58-.46-1.3-.67-2.17-.67s-1.59.21-2.17.67l-.75-.75zM6 7.5c.58 0 1.08.2 1.42.58l-.84.84L6 8.5l-.58.42-.84-.84C4.92 7.7 5.42 7.5 6 7.5z"
          fill={isDark ? '#ffffff' : '#000000'}
        />
      </svg>
    ) : null;
  };

  const renderBluetoothIcon = () => {
    const isDark = mode === 'dark';
    
    return bluetoothConnected ? (
      <svg width="8" height="12" viewBox="0 0 8 12">
        <path
          d="M4.5 1.5L3 3h1v2.5L2.5 4 2 4.5 3.5 6 2 7.5 2.5 8 4 6.5V9h1L6.5 7.5 5.5 6.5 6.5 5.5 5.5 4.5 6.5 3.5 4.5 1.5zm0 2v1l.5-.5-.5-.5zm0 3v1l.5-.5-.5-.5z"
          fill={isDark ? '#ffffff' : '#000000'}
        />
      </svg>
    ) : null;
  };

  const renderNotificationIcon = () => {
    const isDark = mode === 'dark';
    
    return hasNotifications ? (
      <div
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#ff0000',
        }}
      />
    ) : null;
  };

  const renderCustomStatusbar = () => {
    return (
      <div className={getStatusbarClasses()} style={getStatusbarStyle()}>
        {/* Left side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontWeight: platform === 'ios' ? '600' : '400' }}>
            {time}
          </span>
          {hasNotifications && renderNotificationIcon()}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {renderSignalIcon()}
          {wifiConnected && renderWifiIcon()}
          {bluetoothConnected && renderBluetoothIcon()}
          {renderBatteryIcon()}
        </div>
      </div>
    );
  };

  const renderImageStatusbar = () => {
    return (
      <div className={getStatusbarClasses()}>
        <p className="point center">App 영역</p>
        <div className="nds__thumbnail">
          <img src={getImagePath()} alt={`${platform} ${mode} statusbar`} />
        </div>
      </div>
    );
  };

  if (useImage) {
    return renderImageStatusbar();
  }

  if (useCustomStyle) {
    return renderCustomStatusbar();
  }

  // Default fallback
  return (
    <div className={getStatusbarClasses()} style={getStatusbarStyle()}>
      <span>{time}</span>
      <span>{batteryLevel}%</span>
    </div>
  );
};

export default Statusbar;