import { useSelector } from 'react-redux';

import { DayCalendarHead } from '../DayCalendarHead/DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList';

import {selectAllTasks} from 'redux/task/selectors'
import { useDate } from 'hooks/useDate';

const ChoosedDay = () => {
  const [date, setNewDate] = useDate()
  const tasks = useSelector(selectAllTasks)

  return (
    <>
      <DayCalendarHead date={date} setDate={setNewDate} />
      <TasksColumnsList date={date} tasks={tasks}/>
    </>
  );
};

export default ChoosedDay;
