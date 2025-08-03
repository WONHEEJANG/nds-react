import React from 'react';
import Controls, { Controller, Stepper, ControllerNext, ControllerPrevious, ControllerDisabled } from '../Controls';

const ControlsExamples = ({ stepperValue, setStepperValue }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Controls Components</h2>
      
      {/* Controller Controls */}
      <div className="component-section">
        <h3 className="component-subtitle">Controller Controls</h3>
        
        {/* Type=next, Status=default */}
        <div className="component-section">
          <h4>Type=next, Status=default</h4>
          <Controller variant="next" status="default" />
        </div>

        {/* Type=next, Status=disabled */}
        <div className="component-section">
          <h4>Type=next, Status=disabled</h4>
          <Controller variant="next" status="disabled" />
        </div>

        {/* Type=previous, Status=default */}
        <div className="component-section">
          <h4>Type=previous, Status=default</h4>
          <Controller variant="previous" status="default" />
        </div>

        {/* Type=previous, Status=disabled */}
        <div className="component-section">
          <h4>Type=previous, Status=disabled</h4>
          <Controller variant="previous" status="disabled" />
        </div>
      </div>

      {/* Stepper Control */}
      <div className="component-section">
        <h3 className="component-subtitle">Stepper Control</h3>
        <Stepper 
          value={1}
          onMinus={() => {}}
          onPlus={() => {}}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ControllerNext 
            onNext={() => console.log('Next clicked')}
          />
          <ControllerPrevious 
            onPrev={() => console.log('Prev clicked')}
            onNext={() => console.log('Next clicked')}
          />
          <ControllerDisabled />
          <Stepper 
            value={stepperValue}
            onMinus={() => setStepperValue(prev => Math.max(1, prev - 1))}
            onPlus={() => setStepperValue(prev => prev + 1)}
          />
        </div>
      </div>
    </div>
  );
};

export default ControlsExamples; 