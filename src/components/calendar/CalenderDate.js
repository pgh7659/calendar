import React from 'react';

const CalendarDate = ({ moment }) => {
  const lastDateOfThisMonth = moment.endOf('month').date(); // 선택 월의 마지막 일자
  const lastDayOfThisMonth = moment.endOf('month').day(); // 선택 월의 마지막 요일
  const firstDayOfThisMonth = moment.startOf('month').day(); // 선택 월 1일의 요일
  const totalWeeksOfThisMonth = Math.ceil((lastDateOfThisMonth + firstDayOfThisMonth) / 7); // 선택 월의 주 개수

  let totalDateArr = [];
  for(let i = 1; i <= lastDateOfThisMonth; i++) {
    totalDateArr.push(i);
  }

  // 선택된 달이 일요일부터 시작하지 않는 경우 : 빈칸 전월 일자로 채움
  if(firstDayOfThisMonth > 0) {
    const lastMonth = moment.subtract(1, 'month');
    const lastDateOfLastMonth = lastMonth.endOf('month').date();
    for(let i = 0; i < firstDayOfThisMonth; i++) {
      totalDateArr.unshift(lastDateOfLastMonth - i);
    }
  }

  // 선택된 달이 토요일로 끝나지 않는 경우 : 빈칸 익월 일자로 채움
  if(lastDayOfThisMonth < 6) {
    const dateCntToBeAddDateCnt = 7 - lastDayOfThisMonth;
    for(let i = 1; i < dateCntToBeAddDateCnt; i++) {
      totalDateArr.push(i);
    }
  }

  let calendarArr = [];
  for(let i = 0; i < totalWeeksOfThisMonth; i++) {
    let startIndex = 7 * i;
    let endIndex = 7 + startIndex;
    calendarArr.push(totalDateArr.slice(startIndex, endIndex));
  }
  console.log(calendarArr);

  return (
    <table>
      <tbody>
      {calendarArr.map((dateArr, index) => {
        return (
            <tr key={index}>{dateArr.map(date => <td key={date}>{date}</td>)}</tr>
        )
      })}
      </tbody>
    </table>
  );
};

export default CalendarDate;