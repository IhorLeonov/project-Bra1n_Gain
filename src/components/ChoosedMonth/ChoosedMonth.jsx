import { useDispatch, useSelector } from 'react-redux';
import { CalendarTable } from './CalendarTable/CalendarTable';

import { getDate } from 'redux/currentDate/selector';
import { setDate } from 'redux/currentDate/curentDateSlice';
import { DayCalendarHead } from 'components/DayCalendarHead/DayCalendarHead';
import { selectAllTasks } from 'redux/task/selectors';

const ChoosedMonth = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  const tasks = useSelector(selectAllTasks);

  const handleSetDate = newDate => {
    dispatch(setDate(newDate.toString()));
  };

  return (
    <div>
      <DayCalendarHead date={date} setDate={handleSetDate} />
      <CalendarTable date={date} setDate={handleSetDate} tasks={tasks} />
    </div>
  );
};

export default ChoosedMonth;
