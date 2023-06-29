import { useDispatch, useSelector } from 'react-redux';
import { CalendarTable } from './CalendarTable/CalendarTable';

import { getDate } from 'redux/currentDate/selector';
import { setDate } from 'redux/currentDate/curentDateSlice';
import { CalendarHead } from 'components/CalendarHead/CalendarHead';
import { selectAllTasks } from 'redux/task/selectors';
import { useEffect } from 'react';
import { fetchAllTasks } from 'redux/task/operations';

const ChoosedMonth = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  const tasks = useSelector(selectAllTasks);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dataDay = {
    month,
    day,
    year,
  };

  const handleSetDate = newDate => {
    dispatch(setDate(newDate.toString()));
  };
  useEffect(() => {
    dispatch(fetchAllTasks(dataDay));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div>
      <CalendarHead date={date} setDate={handleSetDate} />
      <CalendarTable date={date} setDate={handleSetDate} tasks={tasks} />
    </div>
  );
};

export default ChoosedMonth;
