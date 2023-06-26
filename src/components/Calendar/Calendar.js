import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Container } from './Calendar.styled';
import { Loader } from 'components/Loader/Loader';

export const Calendar = () => {
  return (
    <Container>
      <CalendarToolbar />
      <Suspense fallback={<Loader width={96} />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
