import React from 'react';

const Button = ({ 
  // 기본 props
  type = 'basic', // basic, cta, icon, text
  variant = 'primary', // primary, secondary, tertiary, text, link, cta, icon
  size = 'md', // lg, md, rg, sm, xs
  state = 'default', // default, disabled, pressed, loading
  children = '버튼',
  onClick,
  className = '',
  disabled = false,
  loading = false,
  
  // CTA 타입 props
  ctaType = 'basic', // basic, popup
  ratio = '3:7', // 3:7, 5:5, full
  
  // Icon 타입 props
  iconType = 'download', // download 등
  
  // Text 타입 props
  textType = 'icon', // icon, link
  
  ...props
}) => {
  // 클래스명 생성
  const getClassName = () => {
    let className = 'button';
    
    if (type === 'basic') {
      if (variant === 'primary') {
        className += ' -primary';
      } else if (variant === 'secondary') {
        className += ' -secondary';
      } else if (variant === 'tertiary') {
        className += ' -tertiary';
      }
    } else if (type === 'cta') {
      if (ctaType === 'basic') {
        className += ' -basic';
      } else if (ctaType === 'popup') {
        className += ' -popup';
      }
      if (variant === 'primary') {
        className += ' -primary';
      } else if (variant === 'secondary') {
        className += ' -secondary';
      } else if (variant === 'tertiary') {
        className += ' -tertiary';
      }
      // ratio는 CSS에서 처리하므로 클래스에 추가하지 않음
    } else if (type === 'icon') {
      if (iconType === 'download') {
        className += ' -download';
      }
    } else if (type === 'text') {
      if (textType === 'icon') {
        className += ' -icon';
      } else if (textType === 'link') {
        className += ' -link';
      }
    }
    
    // 크기
    if (size === 'lg') {
      className += ' -lg';
    } else if (size === 'md') {
      className += ' -md';
    } else if (size === 'rg') {
      className += ' -rg';
    } else if (size === 'sm') {
      className += ' -sm';
    } else if (size === 'xs') {
      className += ' -xs';
    }
    
    // 상태
    if (state === 'disabled' || disabled) {
      className += ' -disabled';
    } else if (state === 'pressed') {
      className += ' -pressed';
    } else if (state === 'loading' || loading) {
      className += ' -loading';
    }
    
    return className;
  };

  // 아이콘 렌더링
  const renderIcon = () => {
    if (type === 'icon' && iconType === 'download') {
      return <span className="icon-download"></span>;
    }
    if (type === 'text' && textType === 'icon') {
      return <span className="icon-arrow"></span>;
    }
    return null;
  };

  // 로딩 상태 렌더링
  const renderLoading = () => {
    if (state === 'loading' || loading) {
      return <span className="loading-spinner"></span>;
    }
    return null;
  };

  const handleClick = (e) => {
    if (disabled || state === 'disabled' || loading || state === 'loading') {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // CTA 타입이고 ratio가 지정된 경우 단순히 버튼만 반환 (컨테이너는 외부에서 관리)
  if (type === 'cta' && ratio) {
    const buttonStyle = {
      flexBasis: `calc(${ratio}0% - 0.6rem)`,
      margin: '0 0.3rem 0.6rem'
    };
    
    return (
      <button 
        type="button" 
        className={getClassName()}
        onClick={handleClick}
        disabled={disabled || state === 'disabled'}
        style={buttonStyle}
        {...props}
      >
        {renderLoading()}
        {renderIcon()}
        <span className="button-text">{children}</span>
      </button>
    );
  }

  return (
    <button 
      type="button" 
      className={getClassName()}
      onClick={handleClick}
      disabled={disabled || state === 'disabled'}
      {...props}
    >
      {renderLoading()}
      {renderIcon()}
      <span className="button-text">{children}</span>
    </button>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const BasicButton = (props) => <Button type="basic" {...props} />;
export const BasicPrimaryButton = (props) => <Button type="basic" variant="primary" {...props} />;
export const BasicSecondaryButton = (props) => <Button type="basic" variant="secondary" {...props} />;
export const BasicTertiaryButton = (props) => <Button type="basic" variant="tertiary" {...props} />;

export const CTAButton = (props) => <Button type="cta" {...props} />;
export const CTABasicButton = (props) => <Button type="cta" ctaType="basic" {...props} />;
export const CTAPopupButton = (props) => <Button type="cta" ctaType="popup" {...props} />;
export const CTARatio37Button = (props) => <Button type="cta" ratio="3:7" {...props} />;
export const CTARatio55Button = (props) => <Button type="cta" ratio="5:5" {...props} />;
export const CTAFullButton = (props) => <Button type="cta" ratio="full" {...props} />;

export const IconButton = (props) => <Button type="icon" {...props} />;
export const IconDownloadButton = (props) => <Button type="icon" iconType="download" {...props} />;

export const TextButton = (props) => <Button type="text" {...props} />;
export const TextIconButton = (props) => <Button type="text" textType="icon" {...props} />;
export const TextLinkButton = (props) => <Button type="text" textType="link" {...props} />;

export default Button; 