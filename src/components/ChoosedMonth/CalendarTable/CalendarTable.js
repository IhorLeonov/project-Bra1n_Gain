import React, { useState, useEffect } from 'react';
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  EmptyCalendarDate,
  ShowDayWrapper,
  TaskItem,
  TaskWrapper,
} from './CalendarTable.styled';
import { nanoid } from 'nanoid';

export const CalendarTable = ({ date, setDate, tasks }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [calendarGrid, setCalendarGrid] = useState([]);

  useEffect(() => {
    generateCalendar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  const handleDateClick = date => {
    setSelectedDate(date);
    // setIsModalOpen(true);
  };

  const generateCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const calendarGrid = [];
    const emptyCellsBefore = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const totalWeeks = Math.ceil((emptyCellsBefore + daysInMonth) / 7);

    const isCurrentTask = (date, task) => {
      const day = trimDate(date);
      if (task.date === day) {
        return true;
      }
      return false;
    };

    const trimDate = date => {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    };

    for (let i = 0; i < emptyCellsBefore; i++) {
      calendarGrid.push(<EmptyCalendarDate key={nanoid()} />);
    }

    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const clickDate = new Date(year, month, dayNum);

      const isCurrentDay =
        dayNum === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear();

      calendarGrid.push(
        <CellWrapper
          key={nanoid()}
          onClick={() => setDate(clickDate)}
          selected={selectedDate === date}
          to={`/layout/calendar/day/${dayNum}`}
        >
          <ShowDayWrapper>
            <DayWrapper>
              <CurrentDay isCurrentDate={isCurrentDay}>{dayNum}</CurrentDay>
            </DayWrapper>
          </ShowDayWrapper>
          <TaskWrapper>
            {tasks?.map(task =>
              isCurrentTask(clickDate, task) ? (
                <TaskItem
                  key={task._id}
                  priority={task.priority}
                  onClick={() => handleDateClick(date)}
                >
                  {task.title}
                </TaskItem>
              ) : null
            )}
          </TaskWrapper>
        </CellWrapper>
      );
    }

    const remainingCells = totalWeeks * 7 - emptyCellsBefore - daysInMonth;
    for (let i = 0; i < remainingCells; i++) {
      calendarGrid.push(<EmptyCalendarDate key={nanoid()} />);
    }

    setCalendarGrid(calendarGrid);
  };

  return (
    <>
      <GridWrapper>{calendarGrid}</GridWrapper>
    </>
  );
};
