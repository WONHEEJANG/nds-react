import React from 'react';
import Radio, { 
  BasicRadio, 
  BoxRadio, 
  LargeRadio, 
  SmallRadio, 
  SelectedRadio
} from '../Radio';

const RadioExamples = () => {
  return (
    <div className="component-section">
      <h2 className="component-title">Radio Components</h2>
      
      {/* Basic Radio - Size=lg */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Radio - Size=lg</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <BasicRadio
            name="radio-lg-group"
            value="option1"
            label="라디오"
            size="lg"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <BasicRadio
            name="radio-lg-group"
            value="option2"
            label="라디오"
            size="lg"
            disabled={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=select-disabled */}
        <div className="component-section">
          <h4>State=select-disabled</h4>
          <BasicRadio
            name="radio-lg-group"
            value="option3"
            label="라디오"
            size="lg"
            disabled={true}
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <BasicRadio
            name="radio-lg-group"
            value="option4"
            label="라디오"
            size="lg"
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>

      {/* Basic Radio - Size=sm */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Radio - Size=sm</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <SmallRadio
            name="radio-sm-group"
            value="option1"
            label="라디오"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <SmallRadio
            name="radio-sm-group"
            value="option2"
            label="라디오"
            disabled={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=select-disabled */}
        <div className="component-section">
          <h4>State=select-disabled</h4>
          <SmallRadio
            name="radio-sm-group"
            value="option3"
            label="라디오"
            disabled={true}
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <SmallRadio
            name="radio-sm-group"
            value="option4"
            label="라디오"
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>

      {/* Box Radio - Center */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Radio - Center</h3>
        
        {/* Size=lg, State=default */}
        <div className="component-section">
          <h4>Size=lg, State=default</h4>
          <BoxRadio
            name="box-radio-lg-group"
            value="option1"
            label="라디오"
            size="lg"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* Size=lg, State=disabled */}
        <div className="component-section">
          <h4>Size=lg, State=disabled</h4>
          <BoxRadio
            name="box-radio-lg-group"
            value="option2"
            label="라디오"
            size="lg"
            disabled={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* Size=lg, State=selected */}
        <div className="component-section">
          <h4>Size=lg, State=selected</h4>
          <BoxRadio
            name="box-radio-lg-group"
            value="option3"
            label="라디오"
            size="lg"
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* Size=sm, State=default */}
        <div className="component-section">
          <h4>Size=sm, State=default</h4>
          <BoxRadio
            name="box-radio-sm-group"
            value="option1"
            label="라디오"
            size="sm"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* Size=sm, State=disabled */}
        <div className="component-section">
          <h4>Size=sm, State=disabled</h4>
          <BoxRadio
            name="box-radio-sm-group"
            value="option2"
            label="라디오"
            size="sm"
            disabled={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* Size=sm, State=selected */}
        <div className="component-section">
          <h4>Size=sm, State=selected</h4>
          <BoxRadio
            name="box-radio-sm-group"
            value="option3"
            label="라디오"
            size="sm"
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>

      {/* Box Radio - Left */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Radio - Left</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <BoxRadio
            name="box-radio-left-group"
            value="option1"
            label="라디오"
            variant="left"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <BoxRadio
            name="box-radio-left-group"
            value="option2"
            label="라디오"
            variant="left"
            disabled={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <BoxRadio
            name="box-radio-left-group"
            value="option3"
            label="라디오"
            variant="left"
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>

      {/* Explain Radio - Icon */}
      <div className="component-section">
        <h3 className="component-subtitle">Explain Radio - Icon</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <SelectedRadio
            name="explain-radio-icon-group"
            value="option1"
            title="라디오"
            subInfo="부가설명"
            hasIcon={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <SelectedRadio
            name="explain-radio-icon-group"
            value="option2"
            title="라디오"
            subInfo="부가설명"
            hasIcon={true}
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>

      {/* Explain Radio - None */}
      <div className="component-section">
        <h3 className="component-subtitle">Explain Radio - None</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <SelectedRadio
            name="explain-radio-none-group"
            value="option1"
            title="라디오"
            subInfo="부가설명"
            hasIcon={false}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <SelectedRadio
            name="explain-radio-none-group"
            value="option2"
            title="라디오"
            subInfo="부가설명"
            hasIcon={false}
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>

      {/* Survey Radio - Icon */}
      <div className="component-section">
        <h3 className="component-subtitle">Survey Radio - Icon</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <SelectedRadio
            name="survey-radio-group"
            value="option1"
            title="라디오"
            subInfo="부가설명"
            hasIcon={true}
            variant="survey"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <SelectedRadio
            name="survey-radio-group"
            value="option2"
            title="라디오"
            subInfo="부가설명"
            hasIcon={true}
            variant="survey"
            error="에러메시지"
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <SelectedRadio
            name="survey-radio-group"
            value="option3"
            title="라디오"
            subInfo="부가설명"
            hasIcon={true}
            variant="survey"
            checked={true}
            onChange={(value, checked) => console.log('Radio changed:', value, checked)}
          />
        </div>
      </div>



      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <BasicRadio 
              name="test1"
              value="option1"
              label="기본 라디오"
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <BasicRadio 
              name="test1"
              value="option2"
              label="기본 라디오 (선택됨)"
              checked={true}
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <BasicRadio 
              name="test1"
              value="option3"
              label="기본 라디오 (비활성화)"
              disabled={true}
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <LargeRadio 
              name="test2"
              value="option1"
              label="큰 라디오"
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <LargeRadio 
              name="test2"
              value="option2"
              label="큰 라디오 (선택됨)"
              checked={true}
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <SmallRadio 
              name="test3"
              value="option1"
              label="작은 라디오"
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <SmallRadio 
              name="test3"
              value="option2"
              label="작은 라디오 (선택됨)"
              checked={true}
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <BoxRadio 
              name="test4"
              value="option1"
              label="박스 라디오"
              size="sm"
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <BoxRadio 
              name="test4"
              value="option2"
              label="박스 라디오 (선택됨)"
              size="sm"
              checked={true}
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
            <BoxRadio 
              name="test4"
              value="option3"
              label="박스 라디오 (비활성화)"
              size="sm"
              disabled={true}
              onChange={(value, checked) => console.log('Radio changed:', value, checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioExamples;