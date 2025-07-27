import React from 'react';

export type ImageSize = 24 | 28 | 32 | 40 | 56 | 68 | 80 | 120 | 140 | 150 | 190 | 232;
export type ImageCategory = 'common' | 'flag';

export interface ImageProps {
  /** 이미지 이름 (확장자 제외) */
  name: string;
  /** 이미지 크기 */
  size: ImageSize;
  /** 이미지 카테고리 */
  category?: ImageCategory;
  /** 대체 텍스트 */
  alt?: string;
  /** 커스텀 이미지 경로 (name 대신 사용) */
  src?: string;
  /** 레티나 지원 여부 */
  retina?: boolean;
  /** 로딩 방식 */
  loading?: 'lazy' | 'eager';
  /** 클릭 이벤트 */
  onClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Image: React.FC<ImageProps> = ({
  name,
  size,
  category = 'common',
  alt,
  src,
  retina = true,
  loading = 'lazy',
  onClick,
  className = '',
}) => {
  const getImagePath = (): string => {
    if (src) return src;
    
    const basePath = `./assets/imgs/nds/${category}`;
    return `${basePath}/${name}_${size}.png`;
  };

  const getImageSrcSet = (): string | undefined => {
    if (!retina || src) return undefined;
    
    const imagePath = getImagePath();
    return `${imagePath} 2x`;
  };

  const getAltText = (): string => {
    if (alt) return alt;
    return name || 'Image';
  };

  const getWrapperClasses = (): string => {
    const classes = ['nds__img__wrap'];
    if (className) {
      classes.push(className);
    }
    return classes.join(' ');
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const imageElement = (
    <img
      src={getImagePath()}
      srcSet={getImageSrcSet()}
      alt={getAltText()}
      width={size}
      height={size}
      loading={loading}
      onClick={onClick ? handleClick : undefined}
      style={{ 
        cursor: onClick ? 'pointer' : 'default',
        maxWidth: '100%',
        height: 'auto'
      }}
    />
  );

  return (
    <div className={getWrapperClasses()}>
      {imageElement}
    </div>
  );
};

export default Image;