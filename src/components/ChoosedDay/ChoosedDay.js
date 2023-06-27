import { useDispatch, useSelector } from 'react-redux';

import { CalendarHead } from '../CalendarHead/CalendarHead';
import { TasksColumnsList } from './TasksColumnsList';

import { getDate } from 'redux/currentDate/selector';
import { setDate } from 'redux/currentDate/curentDateSlice';
import { useEffect } from 'react';
import { fetchAllTasks } from 'redux/task/operations';

const ChoosedDay = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));

  const handleSetDate = newDate => {
    dispatch(setDate(newDate.toString()));
  };
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  return (
    <>
      <CalendarHead date={date} setDate={handleSetDate} />
      <TasksColumnsList date={date} />
    </>
  );
};

export default ChoosedDay;
