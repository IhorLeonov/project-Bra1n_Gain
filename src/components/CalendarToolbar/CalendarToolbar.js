/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { useRef, useEffect } from 'react';

import { Container } from './CalendarToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import {getDate} from 'redux/currentDate/selector';
import {setDate} from 'redux/currentDate/curentDateSlice';
import { fetchAllTasks } from 'redux/task/operations';

export const CalendarToolbar = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));

  const dateObj = {
    month: format(date, "L"),
    year: format(date, "yyyy"),
  };

  const prevMonthRef = useRef(dateObj.month);

  const handleSetDate = (newDate) => {
    dispatch(setDate(newDate.toString()))
  }

  useEffect(() => {
    const {year, month} = dateObj

    if (prevMonthRef.current !== month) {
      dispatch(fetchAllTasks({ month, year }));
    }
    prevMonthRef.current = month;
  }, [ dispatch, dateObj]);

  return (
    <Container>
      <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={handleSetDate}
      />
      <PeriodTypeSelect date={date} />
    </Container>
  );
};
