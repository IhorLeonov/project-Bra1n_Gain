import { DayCalendarHead } from './DayCalendarHead';
import { TasksColumnsList } from './TasksColumnsList';

export const ChoosedDay = ({ date }) => {
  return (
    <>
      <DayCalendarHead date={date} />
      <TasksColumnsList date={date} />
    </>
  );
};
