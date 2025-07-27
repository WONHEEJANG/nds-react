import React, { useState } from 'react';

export type CalendarType = 'day' | 'period' | 'month' | 'year-month-day';
export type CalendarViewMode = 'day' | 'month' | 'year';

export interface CalendarDate {
  year: number;
  month: number;
  day?: number;
}

export interface CalendarProps {
  /** 달력 타입 */
  type?: CalendarType;
  /** 선택된 날짜 */
  selectedDate?: CalendarDate;
  /** 시작 날짜 (period 타입용) */
  startDate?: CalendarDate;
  /** 종료 날짜 (period 타입용) */
  endDate?: CalendarDate;
  /** 최소 날짜 */
  minDate?: CalendarDate;
  /** 최대 날짜 */
  maxDate?: CalendarDate;
  /** 오늘 날짜 표시 */
  showToday?: boolean;
  /** 컨트롤 스타일 */
  controlStyle?: 'default' | 'separate';
  /** 날짜 선택 이벤트 */
  onDateSelect?: (date: CalendarDate) => void;
  /** 기간 선택 이벤트 */
  onPeriodSelect?: (startDate: CalendarDate, endDate: CalendarDate) => void;
  /** 오늘 버튼 클릭 이벤트 */
  onTodayClick?: () => void;
  /** CSS 클래스명 */
  className?: string;
}

export const Calendar: React.FC<CalendarProps> = ({
  type = 'day',
  selectedDate,
  startDate,
  endDate,
  minDate,
  maxDate,
  showToday = true,
  controlStyle = 'default',
  onDateSelect,
  onPeriodSelect,
  onTodayClick,
  className = '',
}) => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState<CalendarDate>({
    year: selectedDate?.year || today.getFullYear(),
    month: selectedDate?.month || today.getMonth() + 1,
  });
  const [viewMode, setViewMode] = useState<CalendarViewMode>('day');

  const isDateDisabled = (date: CalendarDate): boolean => {
    if (minDate && (date.year < minDate.year || 
        (date.year === minDate.year && date.month < minDate.month) ||
        (date.year === minDate.year && date.month === minDate.month && date.day && minDate.day && date.day < minDate.day))) {
      return true;
    }
    if (maxDate && (date.year > maxDate.year || 
        (date.year === maxDate.year && date.month > maxDate.month) ||
        (date.year === maxDate.year && date.month === maxDate.month && date.day && maxDate.day && date.day > maxDate.day))) {
      return true;
    }
    return false;
  };

  const isToday = (date: CalendarDate): boolean => {
    return date.year === today.getFullYear() && 
           date.month === today.getMonth() + 1 && 
           date.day === today.getDate();
  };

  const isSelected = (date: CalendarDate): boolean => {
    if (!selectedDate) return false;
    return date.year === selectedDate.year && 
           date.month === selectedDate.month && 
           date.day === selectedDate.day;
  };

  const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month - 1, 1).getDay();
  };

  const handlePrevious = () => {
    if (viewMode === 'day') {
      if (currentDate.month === 1) {
        setCurrentDate({ year: currentDate.year - 1, month: 12 });
      } else {
        setCurrentDate({ ...currentDate, month: currentDate.month - 1 });
      }
    } else if (viewMode === 'year') {
      setCurrentDate({ ...currentDate, year: currentDate.year - 1 });
    }
  };

  const handleNext = () => {
    if (viewMode === 'day') {
      if (currentDate.month === 12) {
        setCurrentDate({ year: currentDate.year + 1, month: 1 });
      } else {
        setCurrentDate({ ...currentDate, month: currentDate.month + 1 });
      }
    } else if (viewMode === 'year') {
      setCurrentDate({ ...currentDate, year: currentDate.year + 1 });
    }
  };

  const handleDateClick = (day: number) => {
    const date: CalendarDate = {
      year: currentDate.year,
      month: currentDate.month,
      day,
    };
    
    if (isDateDisabled(date)) return;
    
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const handleTodayClick = () => {
    const todayDate: CalendarDate = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };
    setCurrentDate(todayDate);
    if (onTodayClick) {
      onTodayClick();
    }
  };

  const renderCalendarControl = () => {
    const controlClasses = ['control'];
    if (type === 'month') controlClasses.push('choose-m');
    if (controlStyle === 'separate') controlClasses.push('-seperate');

    return (
      <div className={controlClasses.join(' ')}>
        {showToday && (
          <button type="button" className="button -xs -fit" onClick={handleTodayClick}>
            {type === 'month' ? '당월' : '오늘'}
          </button>
        )}
        <div className="title">
          <button type="button" className="prev" onClick={handlePrevious}>
            <span className="hide">이전{viewMode === 'day' ? '달' : '년'}</span>
          </button>
          <span className="value">
            {viewMode === 'year' ? currentDate.year : `${currentDate.year}.${currentDate.month.toString().padStart(2, '0')}`}
          </span>
          <button type="button" className="next" onClick={handleNext}>
            <span className="hide">다음{viewMode === 'day' ? '달' : '년'}</span>
          </button>
        </div>
        {controlStyle === 'separate' && viewMode === 'day' && (
          <div className="title -month">
            <button type="button" className="prev">
              <span className="hide">이전달</span>
            </button>
            <span className="value">{currentDate.month}</span>
            <button type="button" className="next">
              <span className="hide">다음달</span>
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderDayCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate.year, currentDate.month);
    const firstDay = getFirstDayOfMonth(currentDate.year, currentDate.month);
    const weeks = [];
    let days = [];

    // Previous month's trailing days
    const prevMonth = currentDate.month === 1 ? 12 : currentDate.month - 1;
    const prevYear = currentDate.month === 1 ? currentDate.year - 1 : currentDate.year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push(
        <td key={`prev-${day}`}>
          <button type="button" disabled>{day}</button>
        </td>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date: CalendarDate = { year: currentDate.year, month: currentDate.month, day };
      const disabled = isDateDisabled(date);
      const todayClass = isToday(date) ? '-today' : '';
      const selectedClass = isSelected(date) ? '-active' : '';
      const buttonClass = [todayClass, selectedClass].filter(Boolean).join(' ');

      days.push(
        <td key={day}>
          <button 
            type="button" 
            className={buttonClass}
            disabled={disabled}
            onClick={() => handleDateClick(day)}
          >
            {day}
            {isToday(date) && <span className="hide">오늘</span>}
          </button>
        </td>
      );

      if (days.length === 7) {
        weeks.push(<tr key={weeks.length}>{days}</tr>);
        days = [];
      }
    }

    // Next month's leading days
    if (days.length > 0) {
      const remainingDays = 7 - days.length;
      for (let day = 1; day <= remainingDays; day++) {
        days.push(
          <td key={`next-${day}`}>
            <button type="button" disabled>{day}</button>
          </td>
        );
      }
      weeks.push(<tr key={weeks.length}>{days}</tr>);
    }

    return (
      <table>
        <caption><span className="hide">일별 선택 달력</span></caption>
        <thead>
          <tr>
            <th scope="col">일</th>
            <th scope="col">월</th>
            <th scope="col">화</th>
            <th scope="col">수</th>
            <th scope="col">목</th>
            <th scope="col">금</th>
            <th scope="col">토</th>
          </tr>
        </thead>
        <tbody>{weeks}</tbody>
      </table>
    );
  };

  const renderMonthCalendar = () => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      const date: CalendarDate = { year: currentDate.year, month };
      const disabled = isDateDisabled(date);
      const isCurrentMonth = month === today.getMonth() + 1 && currentDate.year === today.getFullYear();
      const isSelectedMonth = selectedDate?.year === currentDate.year && selectedDate?.month === month;
      
      const buttonClass = [];
      if (isCurrentMonth) buttonClass.push('-today');
      if (isSelectedMonth) buttonClass.push('-active');

      months.push(
        <li key={month}>
          <button 
            type="button" 
            className={buttonClass.join(' ')}
            disabled={disabled}
            onClick={() => onDateSelect?.({ year: currentDate.year, month })}
          >
            {month}
            {isCurrentMonth && <span className="hide">선택됨</span>}
          </button>
        </li>
      );
    }

    return (
      <div className="month">
        <caption><span className="hide">월별 선택 달력</span></caption>
        <ol>{months}</ol>
      </div>
    );
  };

  return (
    <div className={`calendar ${className}`.trim()}>
      {renderCalendarControl()}
      {type === 'month' ? renderMonthCalendar() : renderDayCalendar()}
    </div>
  );
};

export default Calendar;