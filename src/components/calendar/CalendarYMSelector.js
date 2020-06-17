import React from 'react';

const CalendarYMSelector = ({yearValue, handleYearChange}) => {
  let arr = [];
  for (let index = 0; index <= 100; index++) {
    arr.push(1970 + index);
  }

  return (
    <>
      <select name="year" value={yearValue} onChange={handleYearChange}>
        {
          arr.map(year => {
            return <option key={year} value={year}>{year}</option>
          })
        }
      </select>
    </>
  );
};

export default CalendarYMSelector;