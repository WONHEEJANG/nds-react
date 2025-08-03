import React, { useState } from 'react';

const Calendar = ({ 
  // 기본 props
  type = 'day', // day, period
  state = 'default', // default, disabled, error, filled, inactive, readonly
  value,
  startDate,
  endDate,
  onChange,
  onStartDateChange,
  onEndDateChange,
  className = '',
  ...props
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(value ? new Date(value) : null);
  const [selectedStartDate, setSelectedStartDate] = useState(startDate ? new Date(startDate) : null);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate ? new Date(endDate) : null);

  // 클래스명 생성
  const getClassName = () => {
    let className = 'calendar';
    
    if (type === 'day') {
      className += ' -day';
    } else if (type === 'period') {
      className += ' -period';
    }
    
    if (state === 'disabled') {
      className += ' -disabled';
    } else if (state === 'error') {
      className += ' -error';
    } else if (state === 'filled') {
      className += ' -filled';
    } else if (state === 'inactive') {
      className += ' -inactive';
    } else if (state === 'readonly') {
      className += ' -readonly';
    }
    
    return className;
  };

  // 월 이동
  const goToPreviousMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  // 날짜 선택
  const handleDateSelect = (date) => {
    if (state === 'disabled' || state === 'readonly') {
      return;
    }

    if (type === 'day') {
      setSelectedDate(date);
      if (onChange) {
        onChange(date);
      }
    } else if (type === 'period') {
      if (!selectedStartDate || (selectedStartDate && selectedEndDate)) {
        setSelectedStartDate(date);
        setSelectedEndDate(null);
        if (onStartDateChange) {
          onStartDateChange(date);
        }
      } else {
        if (date >= selectedStartDate) {
          setSelectedEndDate(date);
          if (onEndDateChange) {
            onEndDateChange(date);
          }
        } else {
          setSelectedStartDate(date);
          setSelectedEndDate(null);
          if (onStartDateChange) {
            onStartDateChange(date);
          }
        }
      }
    }
  };

  // 달력 그리드 생성
  const generateCalendarGrid = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const grid = [];
    const totalDays = 42; // 6주 x 7일

    for (let i = 0; i < totalDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      const isInRange = type === 'period' && selectedStartDate && selectedEndDate && 
                       date >= selectedStartDate && date <= selectedEndDate;
      const isStartDate = type === 'period' && selectedStartDate && 
                         date.toDateString() === selectedStartDate.toDateString();
      const isEndDate = type === 'period' && selectedEndDate && 
                       date.toDateString() === selectedEndDate.toDateString();
      const isDisabled = state === 'disabled' || 
                        (state === 'inactive' && !isCurrentMonth) ||
                        (state === 'readonly');

      grid.push({
        date,
        isCurrentMonth,
        isToday,
        isSelected,
        isInRange,
        isStartDate,
        isEndDate,
        isDisabled
      });
    }

    return grid;
  };

  // 날짜 셀 렌더링
  const renderDateCell = (day) => {
    let className = 'calendar-day';
    
    if (!day.isCurrentMonth) {
      className += ' -other-month';
    }
    if (day.isToday) {
      className += ' -today';
    }
    if (day.isSelected) {
      className += ' -selected';
    }
    if (day.isInRange) {
      className += ' -in-range';
    }
    if (day.isStartDate) {
      className += ' -start-date';
    }
    if (day.isEndDate) {
      className += ' -end-date';
    }
    if (day.isDisabled) {
      className += ' -disabled';
    }

    return (
      <button
        key={day.date.toISOString()}
        type="button"
        className={className}
        onClick={() => handleDateSelect(day.date)}
        disabled={day.isDisabled}
      >
        {day.date.getDate()}
      </button>
    );
  };

  // 월/년도 표시
  const formatMonthYear = () => {
    return currentDate.toLocaleDateString('ko-KR', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  // 요일 헤더
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div className={getClassName()}>
      <div className="calendar-header">
        <button 
          type="button" 
          className="calendar-nav -prev"
          onClick={goToPreviousMonth}
          disabled={state === 'disabled'}
        >
          <span className="hide">이전 달</span>
        </button>
        <h3 className="calendar-title">{formatMonthYear()}</h3>
        <button 
          type="button" 
          className="calendar-nav -next"
          onClick={goToNextMonth}
          disabled={state === 'disabled'}
        >
          <span className="hide">다음 달</span>
        </button>
      </div>
      
      <div className="calendar-body">
        <div className="calendar-weekdays">
          {weekDays.map(day => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
        </div>
        
        <div className="calendar-grid">
          {generateCalendarGrid().map(day => renderDateCell(day))}
        </div>
      </div>
      
      {state === 'error' && (
        <div className="calendar-error">
          날짜를 선택해 주세요.
        </div>
      )}
    </div>
  );
};

// 특별한 타입들을 위한 래퍼 컴포넌트들
export const DayCalendar = (props) => <Calendar type="day" {...props} />;
export const DayDisabledCalendar = (props) => <Calendar type="day" state="disabled" {...props} />;
export const DayErrorCalendar = (props) => <Calendar type="day" state="error" {...props} />;
export const DayFilledCalendar = (props) => <Calendar type="day" state="filled" {...props} />;
export const DayInactiveCalendar = (props) => <Calendar type="day" state="inactive" {...props} />;
export const DayReadonlyCalendar = (props) => <Calendar type="day" state="readonly" {...props} />;

export const PeriodCalendar = (props) => <Calendar type="period" {...props} />;
export const PeriodDisabledCalendar = (props) => <Calendar type="period" state="disabled" {...props} />;
export const PeriodErrorCalendar = (props) => <Calendar type="period" state="error" {...props} />;
export const PeriodFilledCalendar = (props) => <Calendar type="period" state="filled" {...props} />;
export const PeriodInactiveCalendar = (props) => <Calendar type="period" state="inactive" {...props} />;
export const PeriodReadonlyCalendar = (props) => <Calendar type="period" state="readonly" {...props} />;

export default Calendar; 