import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Container, Text } from './StatisticsPage.styled';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';
// import { getDate } from 'redux/currentDate/selector';
// import { setDate } from 'redux/currentDate/curentDateSlice';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  const [date, setDate] = useState(new Date());
  // const dispatch = useDispatch();
  // const date = useSelector(getDate);

  const handleSetDate = newDate => {
    console.log(newDate);
    setDate(newDate);
  };

  return (
    <div style={{ padding: '100px' }}>
      <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={handleSetDate}
        typenav={'day'}
      />

      <Container style={{ width: 860, height: 440, margin: 'auto' }}>
        <Text>Tasks</Text>
        <StatisticsChart date={date} />
      </Container>
    </div>
  );
};

export default StatisticsPage;
