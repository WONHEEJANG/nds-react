import React, { useState } from 'react';
import Check from '../Check';

const CheckExamples = () => {
  const [checkStates, setCheckStates] = useState({
    basic: false,
    box: false,
    survey: false
  });

  const handleCheckChange = (field, value) => {
    setCheckStates(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="component-section">
      <h2 className="component-title">Check Components</h2>
      
      {/* Basic Check */}
      <div className="component-section">
        <h3 className="component-subtitle">Basic Check</h3>
        
        {/* Size=sm, State=default */}
        <div className="component-section">
          <h4>Size=sm, State=default</h4>
          <Check type="basic" size="sm" label="체크박스" id="checkbox-sm1" />
        </div>

        {/* Size=sm, State=disabled */}
        <div className="component-section">
          <h4>Size=sm, State=disabled</h4>
          <Check type="basic" size="lg" label="체크박스" id="checkbox-lg2" disabled />
        </div>

        {/* Size=sm, State=select-disabled */}
        <div className="component-section">
          <h4>Size=sm, State=select-disabled</h4>
          <Check type="basic" size="lg" label="체크박스" id="checkbox-lg3" state="select-disabled" />
        </div>

        {/* Size=sm, State=selected */}
        <div className="component-section">
          <h4>Size=sm, State=selected</h4>
          <Check type="basic" size="lg" label="체크박스" id="checkbox-lg1" checked />
        </div>

        {/* Size=xs, State=default */}
        <div className="component-section">
          <h4>Size=xs, State=default</h4>
          <Check type="basic" size="xs" label="체크박스" id="checkbox-xs1" />
        </div>

        {/* Size=xs, State=disabled */}
        <div className="component-section">
          <h4>Size=xs, State=disabled</h4>
          <Check type="basic" size="xs" label="체크박스" id="checkbox-xs3" disabled />
        </div>

        {/* Size=xs, State=select-disabled */}
        <div className="component-section">
          <h4>Size=xs, State=select-disabled</h4>
          <Check type="basic" size="xs" label="체크박스" id="checkbox-xs4" state="select-disabled" />
        </div>

        {/* Size=xs, State=selected */}
        <div className="component-section">
          <h4>Size=xs, State=selected</h4>
          <Check type="basic" size="xs" label="체크박스" id="checkbox-xs2" checked />
        </div>
      </div>

      {/* Box Check */}
      <div className="component-section">
        <h3 className="component-subtitle">Box Check</h3>
        
        {/* Size=lg, State=default */}
        <div className="component-section">
          <h4>Size=lg, State=default</h4>
          <Check type="box" size="lg" label="박스체크" id="box-rdio1-5527" />
        </div>

        {/* Size=lg, State=disabled */}
        <div className="component-section">
          <h4>Size=lg, State=disabled</h4>
          <Check type="box" size="lg" label="박스체크" id="box-rdio1-5507" disabled />
        </div>

        {/* Size=lg, State=selected */}
        <div className="component-section">
          <h4>Size=lg, State=selected</h4>
          <Check type="box" size="lg" label="박스체크" id="box-rdio1-5528" checked />
        </div>

        {/* Size=sm, State=default */}
        <div className="component-section">
          <h4>Size=sm, State=default</h4>
          <Check type="box" size="sm" label="박스체크" id="box-rdio1-552" className="-fitted" />
        </div>

        {/* Size=sm, State=disabled */}
        <div className="component-section">
          <h4>Size=sm, State=disabled</h4>
          <Check type="box" size="sm" label="박스체크" id="box-rdio1-550" disabled className="-fitted" />
        </div>

        {/* Size=sm, State=selected */}
        <div className="component-section">
          <h4>Size=sm, State=selected</h4>
          <Check type="box" size="sm" label="박스체크" id="box-rdio1-551" checked className="-fitted" />
        </div>
      </div>

      {/* Survey Check */}
      <div className="component-section">
        <h3 className="component-subtitle">Survey Check</h3>
        
        {/* State=default */}
        <div className="component-section">
          <h4>State=default</h4>
          <div className="field">
            <dl className="invest-qna survey">
              <dd className="answer-list">
                <div className="item">
                  <input type="checkbox" name="radio113" id="checkbox1-111" />
                  <label htmlFor="checkbox1-111" className="invest-unit -icon1">현재 수입이 일정하지만, 한줄일 때</label>
                </div>
              </dd>
            </dl>
          </div>
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <div className="field">
            <dl className="invest-qna survey">
              <dd className="answer-list">
                <div className="item">
                  <input type="checkbox" className="-error" name="radio113" id="checkbox1-313" defaultChecked />
                  <label htmlFor="checkbox1-313" className="invest-unit -icon1">현재 일정한 수입이 없거나, 연금 등이 주 수입원임</label>
                  <div className="invest-notice">
                    <div className="inner">
                      <span className="message -error">다시 확인해 주세요.</span>
                      <div className="message">
                        내용을 입력해 주세요.
                      </div>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>

        {/* State=selected */}
        <div className="component-section">
          <h4>State=selected</h4>
          <div className="field">
            <dl className="invest-qna survey">
              <dd className="answer-list">
                <div className="item">
                  <input type="checkbox" name="radio113" id="checkbox1-212" defaultChecked />
                  <label htmlFor="checkbox1-212" className="invest-unit -icon1">현재 수입이 일정하지만, 향후 감소하거나 불안정할 것으로 예상</label>
                  <div className="invest-notice">
                    <div className="inner">
                      <span className="message point">정답 입니다.</span>
                      <div className="message">
                        내용을 입력해 주세요.
                      </div>
                    </div>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>

      {/* Component Examples */}
      <div className="component-section">
        <h3 className="component-subtitle">Component Examples</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Check
            label="기본 체크박스"
            checked={checkStates.basic}
            onChange={(checked) => handleCheckChange('basic', checked)}
            size="sm"
          />
          <Check
            type="box"
            label="박스 체크박스"
            checked={checkStates.box}
            onChange={(checked) => handleCheckChange('box', checked)}
            size="lg"
          />
          <Check
            type="survey"
            label="설문 체크박스"
            checked={checkStates.survey}
            onChange={(checked) => handleCheckChange('survey', checked)}
            description="현재 수입이 일정하지만, 한줄일 때"
          />
        </div>
      </div>
    </div>
  );
};

export default CheckExamples; 