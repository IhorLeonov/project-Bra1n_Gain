import { useDispatch, useSelector } from 'react-redux';
import { CalendarTable } from './CalendarTable/CalendarTable';

import {getDate} from 'redux/currentDate/selector'
import {setDate} from 'redux/currentDate/curentDateSlice'
import { CalendarHead } from 'components/CalendarHead/CalendarHead';

const ChoosedMonth = () => {

  const dispatch = useDispatch()
  const date = new Date(useSelector(getDate))

  const handleSetDate = (newDate) => {
    dispatch(setDate(newDate.toString()))
  }
  return (
    <div>
    <CalendarHead date={date} setDate={handleSetDate}/>
      <CalendarTable date={date} setDate={handleSetDate}/>
    </div>
  );
};

export default ChoosedMonth
