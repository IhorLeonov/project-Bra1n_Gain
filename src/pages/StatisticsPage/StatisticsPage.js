import { useSelector } from 'react-redux';
import {
  Container,
  Text,
  BoxPagination,
  GeneralContainer,
} from './StatisticsPage.styled';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import { selectAllTasks } from 'redux/task/selectors';
import { useFeatchTasksByMonth } from 'hooks/useFeatchTasksByMonth';
import { useDate } from 'hooks/useDate';
import { StatisticsInfo } from 'components/StatisticsChart/StatisticsInfo/StatisticsInfo';

const StatisticsPage = () => {
  const [date, setNewDate] = useDate();
  useFeatchTasksByMonth();
  const tasks = useSelector(selectAllTasks);

  return (
    <GeneralContainer>
      <BoxPagination>
        <PeriodPaginator
          minDate={'Jun 23 2023'}
          date={date}
          setDate={setNewDate}
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
