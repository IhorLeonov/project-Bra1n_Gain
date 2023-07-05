import { useSelector } from 'react-redux';

import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';

import { selectAllTasks } from 'redux/task/selectors';
import { useDate } from 'hooks/useDate';

const ChoosedMonth = () => {
  const [date, setNewDate] = useDate()
  const tasks = useSelector(selectAllTasks);

  return (
    <div>
      <MonthCalendarHead date={date} setDate={setNewDate} />
      <CalendarTable date={date} setDate={setNewDate} tasks={tasks} />
    </div>
  );
};

export default ChoosedMonth;
