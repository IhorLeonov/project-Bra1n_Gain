import { useDispatch, useSelector } from 'react-redux';

import { CalendarTable } from './CalendarTable/CalendarTable';
import { MonthCalendarHead } from './MonthCalendarHead/MonthCalendarHead';

import {getDate} from 'redux/currentDate/selector'
import {setDate} from 'redux/currentDate/curentDateSlice'

const ChoosedMonth = () => {

  const dispatch = useDispatch()
  const date = new Date(useSelector(getDate))

  const handleSetDate = (newDate) => {
    dispatch(setDate(newDate.toString()))
  }
  return (
    <div>
      <MonthCalendarHead />
      <CalendarTable date={date} setDate={handleSetDate}/>
    </div>
  );
};

export default ChoosedMonth
