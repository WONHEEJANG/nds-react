import React, { useState } from 'react';
import Indicator, { DotIndicator, NumberIndicator } from '../Indicator';

const IndicatorExamples = () => {
  const [currentSlide, setCurrentSlide] = useState(2);

  return (
    <div className="component-section">
      <h2 className="component-title">Indicator Components</h2>
      
      {/* Dot Indicators */}
      <div className="component-section">
        <h3 className="component-subtitle">Dot Indicators</h3>
        
        {/* State=play */}
        <div className="component-section">
          <h4>State=play</h4>
          <DotIndicator 
            total={3}
            current={2}
            state="play"
            onSlideChange={setCurrentSlide}
            onPlayStop={(isPlaying) => console.log('Play/Stop:', isPlaying)}
          />
        </div>

        {/* State=stop */}
        <div className="component-section">
          <h4>State=stop</h4>
          <DotIndicator 
            total={3}
            current={2}
            state="stop"
            onSlideChange={setCurrentSlide}
            onPlayStop={(isPlaying) => console.log('Play/Stop:', isPlaying)}
          />
        </div>
      </div>

      {/* Number Indicators */}
      <div className="component-section">
        <h3 className="component-subtitle">Number Indicators</h3>
        
        {/* State=play */}
        <div className="component-section">
          <h4>State=play</h4>
          <NumberIndicator 
            total={3}
            current={1}
            state="play"
            onPlayStop={(isPlaying) => console.log('Play/Stop:', isPlaying)}
          />
        </div>

        {/* State=stop */}
        <div className="component-section">
          <h4>State=stop</h4>
          <NumberIndicator 
            total={3}
            current={3}
            state="stop"
            onPlayStop={(isPlaying) => console.log('Play/Stop:', isPlaying)}
          />
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <DotIndicator 
            total={3}
            current={currentSlide}
            onSlideChange={setCurrentSlide}
            onPlayStop={(isPlaying) => console.log('Play/Stop:', isPlaying)}
          />
          <NumberIndicator 
            total={3}
            current={currentSlide}
            onPlayStop={(isPlaying) => console.log('Play/Stop:', isPlaying)}
          />
        </div>
      </div>
    </div>
  );
};

export default IndicatorExamples; 