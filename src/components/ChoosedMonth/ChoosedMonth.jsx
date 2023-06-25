import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';

export const ChoosedMonth = ({ date }) => {
  return (
    <>
      <MonthCalendarHead />
      <CalendarTable date={date} />
    </>
  );
};
