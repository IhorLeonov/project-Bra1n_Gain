import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { format } from 'date-fns';
import { Toaster } from 'react-hot-toast';

import { Section } from './CalendarPage.styled';
import { CalendarToolbar } from 'components/CalendarToolbar/CalendarToolbar';
import { Loader } from 'components/Loader/Loader';
import { fetchAllTasks } from 'redux/task/operations';

import { selectAllTasks } from 'redux/task/selectors';
import { useDate } from 'hooks/useDate';

const CalendarPage = () => {
  const dispatch = useDispatch();
  const [date] = useDate()
  const task = useSelector(selectAllTasks);

  useEffect(() => {
    if (task.length === 0) {
      const dateObj = {
        month: format(date, 'L'),
        year: format(date, 'yyyy'),
      };
      dispatch(fetchAllTasks(dateObj));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Section>
      <CalendarToolbar />
      <Suspense fallback={<Loader width={96} />}>
        <Outlet />
      </Suspense>
      <Toaster/>
    </Section>
  );
};

export default CalendarPage;
