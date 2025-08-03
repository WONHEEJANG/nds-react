import React from 'react';
import Process, { ProgressBar, StepProcess, IconProcess, ThreeStepProcess } from '../Process';

const ProcessExamples = ({ processSteps }) => {
  return (
    <div className="component-section">
      <h2 className="component-title">Process Components</h2>
      
      {/* Progress Bar */}
      <div className="component-section">
        <h3 className="component-subtitle">Progress Bar</h3>
        <ProgressBar 
          currentStep={3}
          totalSteps={12}
        />
      </div>

      {/* Step Horizontal Process */}
      <div className="component-section">
        <h3 className="component-subtitle">Step Horizontal Process</h3>
        
        {/* Step=3step */}
        <div className="component-section">
          <h4>Step=3step</h4>
          <StepProcess
            steps={[
              { title: '스탭명', status: 'done' },
              { title: '스탭명', status: 'active' },
              { title: '스탭명', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
        </div>

        {/* Step=4step */}
        <div className="component-section">
          <h4>Step=4step</h4>
          <StepProcess
            steps={[
              { title: '스탭명', status: 'done' },
              { title: '스탭명', status: 'active' },
              { title: '스탭명', status: 'pending' },
              { title: '스탭명', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
        </div>

        {/* Step=5step */}
        <div className="component-section">
          <h4>Step=5step</h4>
          <StepProcess
            steps={[
              { title: '스탭명', status: 'done' },
              { title: '스탭명', status: 'active' },
              { title: '스탭명', status: 'pending' },
              { title: '스탭명', status: 'pending' },
              { title: '스탭명', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
        </div>
      </div>

      {/* Step Icon Horizontal Process */}
      <div className="component-section">
        <h3 className="component-subtitle">Step Icon Horizontal Process</h3>
        
        {/* Type=3step */}
        <div className="component-section">
          <h4>Type=3step</h4>
          <IconProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' },
              { title: '스탭명', subInfo: '부가설명', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
        </div>

        {/* Type=4step */}
        <div className="component-section">
          <h4>Type=4step</h4>
          <IconProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' },
              { title: '스탭명', subInfo: '부가설명', status: 'pending' },
              { title: '스탭명', subInfo: '부가설명', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
        </div>
      </div>

      {/* Step Icon Vertical Process */}
      <div className="component-section">
        <h3 className="component-subtitle">Step Icon Vertical Process</h3>
        
        {/* Step=2step */}
        <div className="component-section">
          <h4>Step=2step</h4>
          <IconProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' }
            ]}
            currentStep={2}
            variant="vertical"
          />
        </div>

        {/* Step=3step */}
        <div className="component-section">
          <h4>Step=3step</h4>
          <IconProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' },
              { title: '스탭명', subInfo: '부가설명', status: 'pending' }
            ]}
            currentStep={2}
            variant="vertical"
          />
        </div>
      </div>

      {/* Step Text Large Process */}
      <div className="component-section">
        <h3 className="component-subtitle">Step Text Large Process</h3>
        
        {/* Step=2step */}
        <div className="component-section">
          <h4>Step=2step</h4>
          <ThreeStepProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' }
            ]}
            currentStep={2}
            size="lg"
          />
        </div>

        {/* Step=3step */}
        <div className="component-section">
          <h4>Step=3step</h4>
          <ThreeStepProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' },
              { title: '스탭명', subInfo: '부가설명', status: 'pending' }
            ]}
            currentStep={2}
            size="lg"
          />
        </div>
      </div>

      {/* Step Text Small Process */}
      <div className="component-section">
        <h3 className="component-subtitle">Step Text Small Process</h3>
        
        {/* Step=1step */}
        <div className="component-section">
          <h4>Step=1step</h4>
          <ThreeStepProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'active' }
            ]}
            currentStep={1}
            size="sm"
          />
        </div>

        {/* Step=2step */}
        <div className="component-section">
          <h4>Step=2step</h4>
          <ThreeStepProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' }
            ]}
            currentStep={2}
            size="sm"
          />
        </div>

        {/* Step=3step */}
        <div className="component-section">
          <h4>Step=3step</h4>
          <ThreeStepProcess
            steps={[
              { title: '스탭명', subInfo: '부가설명', status: 'done' },
              { title: '스탭명', subInfo: '부가설명', status: 'active' },
              { title: '스탭명', subInfo: '부가설명', status: 'pending' }
            ]}
            currentStep={2}
            size="sm"
          />
        </div>
      </div>

      {/* Step Vertical Process */}
      <div className="component-section">
        <h3 className="component-subtitle">Step Vertical Process</h3>
        
        {/* Step=2step */}
        <div className="component-section">
          <h4>Step=2step</h4>
          <StepProcess
            steps={[
              { title: '스탭명', status: 'done' },
              { title: '스탭명', status: 'active' }
            ]}
            currentStep={2}
            variant="vertical"
          />
        </div>

        {/* Step=3step */}
        <div className="component-section">
          <h4>Step=3step</h4>
          <StepProcess
            steps={[
              { title: '스탭명', status: 'done' },
              { title: '스탭명', status: 'active' },
              { title: '스탭명', status: 'pending' }
            ]}
            currentStep={2}
            variant="vertical"
          />
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ProgressBar 
            currentStep={2}
            totalSteps={5}
          />
          <StepProcess 
            steps={processSteps || [
              { title: '스탭1', status: 'done' },
              { title: '스탭2', status: 'active' },
              { title: '스탭3', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
          <IconProcess 
            steps={processSteps || [
              { title: '스탭1', subInfo: '부가설명', status: 'done' },
              { title: '스탭2', subInfo: '부가설명', status: 'active' },
              { title: '스탭3', subInfo: '부가설명', status: 'pending' }
            ]}
            currentStep={2}
            variant="horizontal"
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessExamples;