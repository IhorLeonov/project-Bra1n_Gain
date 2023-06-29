import { useDispatch, useSelector } from 'react-redux';

import { Container } from './CalendarToolbar.styled';
import { PeriodPaginator } from './PeriodPaginator/PeriodPaginator';
import { PeriodTypeSelect } from './PeriodTypeSelect/PeriodTypeSelect';
import {getDate} from 'redux/currentDate/selector';
import {setDate} from 'redux/currentDate/curentDateSlice';

export const CalendarToolbar = () => {
  const dispatch = useDispatch()
  const date = new Date(useSelector(getDate))

  const handleSetDate = (newDate) => {
    dispatch(setDate(newDate.toString()))
  }

  return (
    <Container>
      <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={handleSetDate}
      />
      <PeriodTypeSelect date={date}/>
      
    </Container>
  );
};
