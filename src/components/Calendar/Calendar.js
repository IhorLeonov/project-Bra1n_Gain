import { useState } from 'react';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Container } from './Calendar.styled';
import { ChoosedMonth } from 'components/ChoosedMonth/ChoosedMonth';
import { ChoosedDay } from 'components/ChoosedDay/ChoosedDay';

export const Calendar = () => {
  const [date, setDate] = useState(() => new Date());
  const [typeNav, setTypeNav] = useState('month');

  function renderComponent() {
    if (typeNav === 'month') {
      return <ChoosedMonth date={date} />;
    } else {
      return <ChoosedDay date={date} />;
    }
  }

  return (
    <Container>
      <CalendarToolbar
        date={date}
        setDate={setDate}
        typeNav={typeNav}
        setTypeNav={setTypeNav}
      />
      {renderComponent()}
    </Container>
  );
};
