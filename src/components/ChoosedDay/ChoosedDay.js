import { useSelector } from 'react-redux';

import { DayCalendarHead } from './DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList';
import {getDate} from 'redux/currentDate/selector';

const ChoosedDay = () => {
  const date = new Date(useSelector(getDate))

  return (
    <>
      <DayCalendarHead date={date} />
      <TasksColumnsList date={date} />
    </>
  );
};

export default ChoosedDay
