import { useDispatch, useSelector } from 'react-redux';


import { CalendarHead } from '../CalendarHead/CalendarHead';
import { TasksColumnsList } from './TasksColumnsList';
import {getDate} from 'redux/currentDate/selector';
import {setDate} from 'redux/currentDate/curentDateSlice';


const ChoosedDay = () => {
  const dispatch = useDispatch()

  const date = new Date(useSelector(getDate))
  const handleSetDate = (newDate) => {
    dispatch(setDate(newDate.toString()))
  }

  return (
    <>
      <CalendarHead date={date} setDate={handleSetDate}/>
      <TasksColumnsList date={date} />
    </>
  );
};

export default ChoosedDay
