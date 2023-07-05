import { useSelector } from 'react-redux';

import { Container, Text } from './StatisticsPage.styled';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';

import {selectAllTasks} from 'redux/task/selectors'
import { useDate } from 'hooks/useDate';
import { useFeatchTasksByMonth } from 'hooks/useFeatchTasksByMonth';

const StatisticsPage = () => {
  const [date, setNewDate] = useDate()
  useFeatchTasksByMonth()
  const tasks = useSelector(selectAllTasks)

  return (
    <div style={{ padding: '100px' }}>
      <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={setNewDate}
        typenav={'day'}
      />

      <Container style={{ width: 860, height: 440, margin: 'auto' }}>
        <Text>Tasks</Text>
        <StatisticsChart date={date} tasks={tasks} />
      </Container>
    </div>
  );
};

export default StatisticsPage;
