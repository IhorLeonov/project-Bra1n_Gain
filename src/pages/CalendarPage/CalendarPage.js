import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Section } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';

import { Loader } from 'components/Loader/Loader';
const CalendarPage = () => {
  return (
    <Section>
      <CalendarToolbar />
      <Suspense fallback={<Loader width={96} />}>
        <Outlet />
      </Suspense>
    </Section>
  );
};

export default CalendarPage;
