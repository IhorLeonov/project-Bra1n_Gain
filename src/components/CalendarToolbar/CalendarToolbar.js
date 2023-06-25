import { Container } from './CalendarToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';

export const CalendarToolbar = ({ date, setDate, typeNav, setTypeNav }) => {
  return (
    <Container>
      <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={setDate}
        typenav={typeNav}
      />
      <PeriodTypeSelect typenav={typeNav} setTypeNav={setTypeNav} />
    </Container>
  );
};
