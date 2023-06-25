import React, { useState, useEffect } from 'react';
import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  Modal,
  ModalContent,
  ShowDayWrapper,
  TaskItem,
  TasksMoreLabel,
  TaskWrapper,
} from './CalendarTable.styled';
import { nanoid } from 'nanoid';

export const CalendarTable = ({ date }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [calendarGrid, setCalendarGrid] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    generateCalendar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDateClick = date => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTaskChange = event => {
    setTask(event.target.value);
  };
  const handleTaskSubmit = event => {
    event.preventDefault();
    const newTask = {
      date: selectedDate,
      task: task,
    };
    setTasks([...tasks, newTask]);
    setTask('');
    closeModal();
  };

  const generateCalendar = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();

    const calendarGrid = [];
    const emptyCellsBefore = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const totalWeeks = Math.ceil((emptyCellsBefore + daysInMonth) / 7);

    for (let i = 0; i < emptyCellsBefore; i++) {
      calendarGrid.push(<CellWrapper key={nanoid()} />);
    }

    for (let dayNum = 1; dayNum <= daysInMonth; dayNum++) {
      const dateS = new Date(year, month, dayNum);
      const isCurrentDay =
        dayNum === date.getDate() &&
        month === date.getMonth() &&
        year === date.getFullYear();

      const dayTasks = tasks.filter(
        task => task.dateS.toDateString() === dateS.toDateString()
      );

      calendarGrid.push(
        <CellWrapper
          key={nanoid()}
          selected={selectedDate === date}
          to={`/calendar/day/${dayNum}`}
        >
          <ShowDayWrapper>
            <DayWrapper>
              <CurrentDay isCurrentDate={isCurrentDay}>{dayNum}</CurrentDay>
            </DayWrapper>
          </ShowDayWrapper>
          {dayTasks.length > 0 && (
            <TaskWrapper>
              {dayTasks.slice(0, 2).map(task => (
                <TaskItem key={nanoid()} onClick={() => handleDateClick(date)}>
                  {task.task}
                </TaskItem>
              ))}
            </TaskWrapper>
          )}
          {dayTasks?.length > 2 && <TasksMoreLabel>...</TasksMoreLabel>}
        </CellWrapper>
      );
    }

    const remainingCells = totalWeeks * 7 - emptyCellsBefore - daysInMonth;
    for (let i = 0; i < remainingCells; i++) {
      calendarGrid.push(<CellWrapper key={nanoid()} />);
    }

    setCalendarGrid(calendarGrid);
  };

  return (
    <>
      <GridWrapper>
        {calendarGrid}
        {isModalOpen && (
          <Modal>
            <ModalContent>
              <h3>Selected Date:</h3>
              <p>{selectedDate?.toDateString()}</p>
              <form onSubmit={handleTaskSubmit}>
                <label htmlFor="task">Task:</label>
                <input
                  type="text"
                  id="task"
                  value={task}
                  onChange={handleTaskChange}
                />
                <button type="submit">Add Task</button>
              </form>
              <button onClick={closeModal}>Close</button>
            </ModalContent>
          </Modal>
        )}
      </GridWrapper>
    </>
  );
};
