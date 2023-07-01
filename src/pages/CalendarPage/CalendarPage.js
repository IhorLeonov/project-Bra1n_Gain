import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { format } from 'date-fns';

import { Section } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';

import { Loader } from 'components/Loader/Loader';
import { fetchAllTasks } from 'redux/task/operations';
import { getDate } from 'redux/currentDate/selector';


const CalendarPage = () => {
  const dispatch = useDispatch();  const date = new Date(useSelector(getDate))

  useEffect(() => {
    const dateObj = {
      month: format(date, "L"),
      year: format(date, "yyy")
    }

    dispatch(fetchAllTasks(dateObj));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
