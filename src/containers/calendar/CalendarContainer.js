import React, { useState } from 'react';
import CalendarYMSelector from 'components/calendar/CalendarYMSelector';
import CalendarMSelector from 'components/calendar/CalendarMSelector';
import moment from 'moment';
import CalendarDate from '../../components/calendar/CalenderDate';

const CalendarContainer = () => {
  const date = moment();
  const [calendarState, setState] = useState({
    year: date.year(),
    month: date.month()
  });

  const handleYearChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...calendarState,
      [name]: Number(value)
    });
  }

  const handleMonthChange = (value) => {
    setState({
      ...calendarState,
      month: value
    });
  }

  return (
    <div>
      <CalendarYMSelector yearValue={calendarState.year} handleYearChange={handleYearChange} />
      <CalendarMSelector monthValue={calendarState.month} handleMonthChange={handleMonthChange} />
      <CalendarDate moment={moment().year(calendarState.year).month(calendarState.month)} />
    </div>
  );
};

export default CalendarContainer;