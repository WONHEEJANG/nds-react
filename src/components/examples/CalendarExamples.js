import React, { useState } from 'react';

const CalendarExamples = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <div className="component-section">
      <h2 className="component-title">Calendar Components - raw HTML</h2>
      
      {/* Calendar - day */}
      <div className="component-section">
        <h3 className="component-subtitle">Calendar - day</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <div className="field calendar">
            <label htmlFor="gga" className="label">날짜</label>
            <div className="mix datepicker day">
              <div className="text" data-clear="false">
                <input type="text" className="left-side fc-empty" id="gga" value="2024.01.01" placeholder="선택" title="날짜선택" aria-haspopup="true" disabled />
              </div>
              <div className="space -lined date">
                <button type="button" className="icon-button -calendar" aria-haspopup="true" disabled><span className="hide">달력 보기</span></button>
              </div>
              <p className="info">안내 문구 입력</p>
            </div>
          </div>
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <div className="field calendar">
            <label htmlFor="gga1" className="label">날짜</label>
            <div className="mix datepicker day -error">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="gga1" value="2025.08.23" title="첫번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
              <p className="info">안내 문구 입력</p>
            </div>
          </div>
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <div className="field calendar">
            <label htmlFor="gga0" className="label">날짜</label>
            <div className="mix datepicker day -filled">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="gga0" value="2025.08.23" title="첫번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
              <p className="info">안내 문구 입력</p>
            </div>
          </div>
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <div className="field calendar">
            <label htmlFor="gga" className="label">날짜</label>
            <div className="mix datepicker day">
              <div className="text" data-clear="false">
                <input type="text" className="left-side fc-empty" id="gga" value="" placeholder="선택" title="첫번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
              <p className="info">안내 문구 입력</p>
            </div>
          </div>
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <div className="field calendar">
            <label htmlFor="gga" className="label">날짜</label>
            <div className="mix datepicker day">
              <div className="text" data-clear="false">
                <input type="text" className="left-side fc-empty" id="gga" value="2024.01.01" placeholder="선택" title="날짜선택" aria-haspopup="true" disabled />
              </div>
              <div className="space -lined date">
                <button type="button" className="icon-button -calendar" aria-haspopup="true" disabled><span className="hide">달력 보기</span></button>
              </div>
              <p className="info">안내 문구 입력</p>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar - period */}
      <div className="component-section">
        <h3 className="component-subtitle">Calendar - period</h3>
        
        {/* State=disabled */}
        <div className="component-section">
          <h4>State=disabled</h4>
          <div className="field calendar">
            <label htmlFor="datedate01" className="label">날짜</label>
            <div className="mix datepicker period -filled">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="datedate01" value="2024.12.24" placeholder="선택" title="첫번째 날짜선택" aria-haspopup="true" disabled />
              </div>
              <div className="space -lined date -start">
                <button type="button" className="icon-button -calendar" aria-haspopup="true" disabled><span className="hide">달력 보기</span></button>
              </div>
              <div className="dash"><span className="부터"></span>~</div>
              <div className="text" data-clear="false">
                <input type="text" className="left-side" data-id="datedate" value="2025.06.06" placeholder="선택" title="두번째 날짜선택" aria-haspopup="true" disabled />
              </div>
              <div className="space -lined date -end">
                <button type="button" className="icon-button -calendar" aria-haspopup="true" disabled><span className="hide">달력 보기</span></button>
              </div>
            </div>
            <p className="info">안내 문구 입력</p>
          </div>
        </div>

        {/* State=error */}
        <div className="component-section">
          <h4>State=error</h4>
          <div className="field calendar">
            <label htmlFor="datedate03" className="label">날짜</label>
            <div className="mix datepicker period -error">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="datedate03" value="2024.12.24" placeholder="선택" title="첫번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date -start">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
              <div className="dash"><span className="부터"></span>~</div>
              <div className="text" data-clear="false">
                <input type="text" className="left-side" data-id="datedate" value="2025.06.06" placeholder="선택" title="두번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date -end">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
            </div>
            <p className="info -error">안내 문구 입력</p>
          </div>
        </div>

        {/* State=filled */}
        <div className="component-section">
          <h4>State=filled</h4>
          <div className="field calendar">
            <label htmlFor="datedate01" className="label">날짜</label>
            <div className="mix datepicker period -filled">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="datedate01" value="2024.12.24" placeholder="선택" title="첫번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date -start">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
              <div className="dash"><span className="부터"></span>~</div>
              <div className="text" data-clear="false">
                <input type="text" className="left-side" data-id="datedate" value="2025.06.06" placeholder="선택" title="두번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date -end">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
            </div>
            <p className="info">안내 문구 입력</p>
          </div>
        </div>

        {/* State=inactive */}
        <div className="component-section">
          <h4>State=inactive</h4>
          <div className="field calendar">
            <label htmlFor="datedate0" className="label">날짜</label>
            <div className="mix datepicker period">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="datedate0" value="" placeholder="선택" title="첫번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date -start">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
              <div className="dash"><span className="부터"></span>~</div>
              <div className="text" data-clear="false">
                <input type="text" className="left-side" data-id="datedate" value="" placeholder="선택" title="두번째 날짜선택" aria-haspopup="true" readOnly />
              </div>
              <div className="space -lined date -end">
                <button type="button" className="icon-button -calendar" aria-haspopup="true"><span className="hide">달력 보기</span></button>
              </div>
            </div>
            <p className="info">안내 문구 입력</p>
          </div>
        </div>

        {/* State=readonly */}
        <div className="component-section">
          <h4>State=readonly</h4>
          <div className="field calendar">
            <label htmlFor="datedate01" className="label">날짜</label>
            <div className="mix datepicker period -filled">
              <div className="text" data-clear="false">
                <input type="text" className="left-side" id="datedate01" value="2024.12.24" placeholder="선택" title="첫번째 날짜선택" aria-haspopup="true" disabled />
              </div>
              <div className="space -lined date -start">
                <button type="button" className="icon-button -calendar" aria-haspopup="true" disabled><span className="hide">달력 보기</span></button>
              </div>
              <div className="dash"><span className="부터"></span>~</div>
              <div className="text" data-clear="false">
                <input type="text" className="left-side" data-id="datedate" value="2025.06.06" placeholder="선택" title="두번째 날짜선택" aria-haspopup="true" disabled />
              </div>
              <div className="space -lined date -end">
                <button type="button" className="icon-button -calendar" aria-haspopup="true" disabled><span className="hide">달력 보기</span></button>
              </div>
            </div>
            <p className="info">안내 문구 입력</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarExamples; 