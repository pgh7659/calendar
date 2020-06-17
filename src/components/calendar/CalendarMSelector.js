import React from 'react';

const CalendarMSelector = ({ monthValue, handleMonthChange }) => {
  const handleIncrease = (e) => {
    e.stopPropagation();
    if(monthValue < 11) {
      const value = monthValue + 1;
      handleMonthChange(value);
    }
  }

  const handleDecrease = (e) => {
    e.stopPropagation();
    if(monthValue > 0) {
      const value = monthValue - 1;
      handleMonthChange(value);
    }
  }

  return (
    <div>
      <span onClick={handleDecrease}><b>{'< '}</b></span>
      <span>{monthValue + 1}</span>
      <span onClick={handleIncrease}><b>{' >'}</b></span>
    </div>
  );
};

export default CalendarMSelector;