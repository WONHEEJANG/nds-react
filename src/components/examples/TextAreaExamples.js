import React from 'react';
import TextArea, { InactiveTextArea, FilledTextArea, FocusTextArea, ErrorTextArea } from '../TextArea';

const TextAreaExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">TextArea Components</h2>
      
      {/* Text area - State=error */}
      <div className="component-section">
        <h3 className="component-subtitle">Text area - State=error</h3>
        <ErrorTextArea 
          label="레이블"
          value="입력된 텍스트 입니다"
          errorMessage="오류 메시지 출력"
          onChange={(value) => console.log('TextArea changed:', value)}
        />
      </div>

      {/* Text area - State=filled */}
      <div className="component-section">
        <h3 className="component-subtitle">Text area - State=filled</h3>
        <FilledTextArea 
          label="레이블"
          value="입력된 텍스트 입니다"
          maxLength={50}
          onChange={(value) => console.log('TextArea changed:', value)}
        />
      </div>

      {/* Text area - State=focus */}
      <div className="component-section">
        <h3 className="component-subtitle">Text area - State=focus</h3>
        <FocusTextArea 
          label="레이블"
          value="입력된 텍스트 입니다"
          maxLength={50}
          onChange={(value) => console.log('TextArea changed:', value)}
        />
      </div>

      {/* Text area - State=inactive */}
      <div className="component-section">
        <h3 className="component-subtitle">Text area - State=inactive</h3>
        <InactiveTextArea 
          label="레이블"
          placeholder="내용을 입력하세요"
          maxLength={50}
          onChange={(value) => console.log('TextArea changed:', value)}
        />
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <InactiveTextArea 
            label="기본 텍스트 영역"
            placeholder="내용을 입력하세요"
            onChange={(value) => console.log('TextArea changed:', value)}
          />
          <FilledTextArea 
            label="채워진 텍스트 영역"
            value="입력된 텍스트입니다"
            maxLength={100}
            onChange={(value) => console.log('TextArea changed:', value)}
          />
          <TextArea 
            label="포커스 텍스트 영역"
            value="포커스된 텍스트"
            state="focus"
            onChange={(value) => console.log('TextArea changed:', value)}
          />
          <ErrorTextArea 
            label="오류 텍스트 영역"
            value="잘못된 입력"
            errorMessage="오류 메시지 출력"
            onChange={(value) => console.log('TextArea changed:', value)}
          />
          <TextArea 
            label="비활성화 텍스트 영역"
            value="비활성화된 텍스트"
            disabled={true}
            onChange={(value) => console.log('TextArea changed:', value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextAreaExamples;