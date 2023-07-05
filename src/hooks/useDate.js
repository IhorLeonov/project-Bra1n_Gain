import { useDispatch, useSelector } from 'react-redux';
import {getDate} from 'redux/currentDate/selector';
import {setDate} from 'redux/currentDate/curentDateSlice';

export const useDate = () => {
  const dispatch = useDispatch();
  const date = new Date(useSelector(getDate));

  const setNewDate = (newDate) => {
    dispatch(setDate(newDate.toString()))
  }

  return [date, setNewDate]
}