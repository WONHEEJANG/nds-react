import React from 'react';
import Toast from '../Toast';

const ToastExamples = ({ isToastVisible, setIsToastVisible }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Toast Components</h2>
      
      {/* Toast - toast */}
      <div className="component-section">
        <h3 className="component-subtitle">Toast - toast</h3>
        <button type="button" className="a underline point" onClick={() => setIsToastVisible(true)}>
          테스트모드에서 클릭
        </button>
        <Toast 
          message="설정이 변경되었습니다."
          isVisible={isToastVisible}
          duration={3000}
          onClose={() => setIsToastVisible(false)}
        />
        <div className="nds__thumbnail">
          <img src="./prototype/NDS/images/1176_30977.png" alt="" />
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <button 
            type="button" 
            className="a underline point" 
            onClick={() => setIsToastVisible(true)}
          >
            테스트모드에서 클릭
          </button>
          <Toast 
            message="설정이 변경되었습니다."
            isVisible={isToastVisible}
            duration={3000}
            onClose={() => setIsToastVisible(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default ToastExamples;