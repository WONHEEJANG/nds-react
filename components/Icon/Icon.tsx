import React from 'react';
import './icon.css';

export interface IconProps {
  name: string;
  size?: 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 48 | 56;
  style?: 'fill' | 'line';
  category?: 'general' | 'system' | 'tabbar';
  color?: string;
  darkMode?: boolean;
  disabled?: boolean;
  className?: string;
  alt?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  style = 'line',
  category = 'general',
  color = '',
  darkMode = false,
  disabled = false,
  className = '',
  alt,
}) => {
  // 파일명 생성 로직
  const buildIconFileName = () => {
    const parts = ['ico', name];
    
    if (color) parts.push(color);
    if (style) parts.push(style);
    if (size) parts.push(size.toString());
    if (disabled) parts.push('disabled');
    if (darkMode) parts.push('dk');
    
    return parts.join('_') + '.png';
  };

  const fileName = buildIconFileName();
  const srcSet = `assets/imgs/nds/common/${fileName} 2x`;
  const altText = alt || fileName.replace('.png', '');

  return (
    <div className={`nds__icon__wrap ${className}`.trim()}>
      <img 
        srcSet={srcSet} 
        alt={altText}
      />
    </div>
  );
};

export default Icon;