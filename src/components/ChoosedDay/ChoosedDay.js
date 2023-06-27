import { useDispatch, useSelector } from 'react-redux';

import { DayCalendarHead } from './DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList';
import { getDate } from 'redux/currentDate/selector';
import { useEffect } from 'react';
import { fetchAllTasks } from 'redux/task/operations';

const ChoosedDay = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  useEffect(() => {
    dispatch(fetchAllTasks());
  }, [dispatch]);

  return (
    <>
      <DayCalendarHead date={date} />
      <TasksColumnsList date={date} />
    </>
  );
};

export default ChoosedDay;
