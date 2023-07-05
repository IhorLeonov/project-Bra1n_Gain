import { useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';

import { useDate } from 'hooks/useDate';
import { fetchAllTasks } from 'redux/task/operations';


export const  useFeatchTasksByMonth = () => {
    const [date] = useDate()
    const dispatch = useDispatch();
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const dateObj = {
      month: format(date, "L"),
      year: format(date, "yyyy"),
    };
  
    const prevMonthRef = useRef(dateObj.month);
  
    useEffect(() => {
      const {year, month} = dateObj
  
      if (prevMonthRef.current !== month) {
        dispatch(fetchAllTasks({ month, year }));
      }
      prevMonthRef.current = month;
    }, [ dispatch, dateObj]);
    
return null
}