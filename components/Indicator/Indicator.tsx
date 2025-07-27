import React from 'react';

export type IndicatorType = 'dot' | 'number';
export type IndicatorState = 'play' | 'stop' | 'pause';

export interface IndicatorProps {
  /** 인디케이터 타입 */
  type?: IndicatorType;
  /** 현재 슬라이드 인덱스 (0부터 시작) */
  currentIndex?: number;
  /** 전체 슬라이드 수 */
  totalSlides?: number;
  /** 재생 상태 */
  playState?: IndicatorState;
  /** 중앙 정렬 여부 */
  centered?: boolean;
  /** 슬라이드 클릭 이벤트 */
  onSlideClick?: (index: number) => void;
  /** 재생/정지 버튼 클릭 이벤트 */
  onPlayToggle?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Indicator: React.FC<IndicatorProps> = ({
  type = 'dot',
  currentIndex = 0,
  totalSlides = 1,
  playState = 'stop',
  centered = true,
  onSlideClick,
  onPlayToggle,
  className = '',
}) => {
  const getContainerClasses = () => {
    if (type === 'dot') {
      return `group-banner-wrap -dmp ${className}`.trim();
    } else {
      return `swiper swiper-number ${className}`.trim();
    }
  };

  const getPaginationWrapClasses = () => {
    if (type === 'dot') {
      return centered ? 'pagination-wrap -center' : 'pagination-wrap';
    } else {
      return 'pagination-wrap indicator';
    }
  };

  const getPaginationClasses = () => {
    if (type === 'dot') {
      return 'swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal';
    } else {
      return 'swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal';
    }
  };

  const getControlButtonClasses = () => {
    const baseClass = 'button-stop';
    
    if (type === 'dot') {
      return playState === 'play' ? `${baseClass} -active` : baseClass;
    } else {
      return playState === 'pause' ? `${baseClass} -pause` : baseClass;
    }
  };

  const getControlButtonLabel = () => {
    if (type === 'number' && playState === 'pause') {
      return '재생';
    }
    return '정지';
  };

  const handleSlideClick = (index: number) => {
    if (onSlideClick) {
      onSlideClick(index);
    }
  };

  const handlePlayToggle = () => {
    if (onPlayToggle) {
      onPlayToggle();
    }
  };

  const renderDotPagination = () => {
    const bullets = [];
    
    for (let i = 0; i < totalSlides; i++) {
      const isActive = i === currentIndex;
      const bulletClasses = isActive 
        ? 'swiper-pagination-bullet swiper-pagination-bullet-active'
        : 'swiper-pagination-bullet';
      
      bullets.push(
        <span
          key={i}
          className={bulletClasses}
          tabIndex={0}
          role="button"
          aria-label={`Go to slide ${i + 1}`}
          aria-current={isActive ? 'true' : undefined}
          onClick={() => handleSlideClick(i)}
        />
      );
    }

    return (
      <span className={getPaginationClasses()}>
        {bullets}
      </span>
    );
  };

  const renderNumberPagination = () => {
    return (
      <div className={getPaginationClasses()}>
        <span className="swiper-pagination-current">{currentIndex + 1}</span>
        {' / '}
        <span className="swiper-pagination-total">{totalSlides}</span>
      </div>
    );
  };

  return (
    <div className={getContainerClasses()}>
      <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div className={getPaginationWrapClasses()}>
          {type === 'dot' ? renderDotPagination() : renderNumberPagination()}
          <a
            href="javascript:;"
            className={getControlButtonClasses()}
            role="button"
            aria-label={getControlButtonLabel()}
            style={{ display: 'block' }}
            onClick={handlePlayToggle}
          >
            <span className="hide">{getControlButtonLabel()}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Indicator;