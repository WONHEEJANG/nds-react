import React, { useState } from 'react';

const Indicator = ({ 
  type = 'dot', // dot, number
  state = 'play', // play, stop
  total = 3,
  current = 1,
  onSlideChange,
  onPlayStop,
  className = '',
  ...props
}) => {
  const [isPlaying, setIsPlaying] = useState(state === 'play');

  const handleSlideChange = (index) => {
    if (onSlideChange) {
      onSlideChange(index);
    }
  };

  const handlePlayStop = () => {
    const newState = !isPlaying;
    setIsPlaying(newState);
    if (onPlayStop) {
      onPlayStop(newState);
    }
  };

  // Number 타입 인디케이터
  if (type === 'number') {
    return (
      <div className="swiper swiper-number" style={{ position: 'relative', height: '100px', backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '20px' }} {...props}>
        <div className="swiper-container swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div className="pagination-wrap indicator" style={{ position: 'relative', bottom: 'auto', left: 'auto', right: 'auto', top: 'auto', display: 'flex', alignItems: 'center' }}>
            <div className="swiper-pagination swiper-pagination-fraction swiper-pagination-horizontal" style={{ position: 'relative', background: 'var(--color-bg-indicator-number-default)', padding: '0 2.2rem', borderRadius: '10rem', height: '2rem', display: 'flex', alignItems: 'center' }}>
              <span className="swiper-pagination-current">{current}</span> / <span className="swiper-pagination-total">{total}</span>
            </div>
            <a 
              href="javascript:void(0);" 
              className={`button-stop ${isPlaying ? '-pause' : ''}`} 
              role="button" 
              aria-label={isPlaying ? '재생' : '정지'}
              onClick={handlePlayStop}
              style={{ display: 'inline-block', width: '2rem', height: '2rem', borderRadius: '50%', backgroundColor: 'var(--color-bg-indicator-number-default)', marginLeft: '0' }}
            >
              <span className="hide">{isPlaying ? '재생' : '정지'}</span>
            </a>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    );
  }

  // Dot 타입 인디케이터
  return (
    <div className="group-banner-wrap -dmp" {...props}>
      <div className="swiper-container dmp-swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
        <div className="pagination-wrap -center">
          <span className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
            {Array.from({ length: total }, (_, index) => (
              <span
                key={index}
                className={`swiper-pagination-bullet ${index === current - 1 ? 'swiper-pagination-bullet-active' : ''}`}
                tabIndex="0"
                role="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current - 1 ? 'true' : undefined}
                onClick={() => handleSlideChange(index + 1)}
              ></span>
            ))}
          </span>
          <a 
            href="javascript:;" 
            className={`button-stop ${isPlaying ? '-active' : ''}`} 
            role="button"
            onClick={handlePlayStop}
          >
            <span className="hide">{isPlaying ? '정지' : '재생'}</span>
          </a>
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  );
};

// 편의를 위한 래퍼 컴포넌트들
export const DotIndicator = (props) => <Indicator type="dot" {...props} />;
export const NumberIndicator = (props) => <Indicator type="number" {...props} />;

export default Indicator; 