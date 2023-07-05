import { Container } from './CalendarToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';

import { useDate } from 'hooks/useDate';
import { useFeatchTasksByMonth } from 'hooks/useFeatchTasksByMonth';

export const CalendarToolbar = () => {
  const [date, setNewDate] = useDate()

  useFeatchTasksByMonth()

  return (
    <Container>
      <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={setNewDate}
      />
      <PeriodTypeSelect date={date} />
    </Container>
  );
};
