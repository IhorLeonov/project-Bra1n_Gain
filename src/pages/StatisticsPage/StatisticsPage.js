import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import {
  Container,
  Text,
  BoxPagination,
  GeneralContainer,
} from './StatisticsPage.styled';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import { getDate } from 'redux/currentDate/selector';
import { setDate } from 'redux/currentDate/curentDateSlice';
import { fetchAllTasks } from 'redux/task/operations';
import { selectAllTasks } from 'redux/task/selectors';
import { StatisticsInfo } from 'components/StatisticsChart/StatisticsInfo/StatisticsInfo';

const StatisticsPage = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));
  const tasks = useSelector(selectAllTasks);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dateObj = {
    month: format(date, 'L'),
    year: format(date, 'yyyy'),
  };

  const prevMonthRef = useRef(dateObj.month);

  const handleSetDate = newDate => {
    dispatch(setDate(newDate.toString()));
  };

  useEffect(() => {
    const { year, month } = dateObj;

    if (prevMonthRef.current !== month) {
      dispatch(fetchAllTasks({ month, year }));
    }
    prevMonthRef.current = month;
  }, [dispatch, dateObj]);

  return (
    <GeneralContainer>
      <BoxPagination>
        <PeriodPaginator
          minDate={'Jun 23 2023'}
          date={date}
          setDate={handleSetDate}
          typenav={'day'}
        />
        <StatisticsInfo />
      </BoxPagination>
      <Container>
        <Text>Tasks</Text>
        <StatisticsChart date={date} tasks={tasks} />
      </Container>
    </GeneralContainer>
  );
};

export default StatisticsPage;
