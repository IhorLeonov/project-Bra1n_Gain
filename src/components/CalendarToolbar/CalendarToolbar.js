import { useState } from 'react';
import { Container } from './CalendarToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';

export const CalendarToolbar = () => {
  const [date, setDate] = useState(() => new Date());
  const [typeNav, setTypeNav] = useState('month');

  return (
    <Container>
      <PeriodPaginator date={date} setDate={setDate} typenav={typeNav} />
      <PeriodTypeSelect typenav={typeNav} setTypeNav={setTypeNav} />
    </Container>
  );
};
