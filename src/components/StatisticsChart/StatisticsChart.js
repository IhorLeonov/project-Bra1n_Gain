import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, ListChart, ListItemChart, Column, ListColumn, ListItemColumn, ProcentColumn, TextCategory } from './StatisticsChart.styled';


const StatisticsChart = ({ date, tasks }) => {
  const { t } = useTranslation();
  const chart = [0, 20, 40, 60, 80, 100];
  const [tasksStatistic, setTasksStatistic] = useState([]);

  const getProcentTaskStatistic = useCallback(arr => {
    const checkTasksPercent = percent => (isFinite(percent) ? percent : 0);

    let toDo = 0;
    let inProgress = 0;
    let done = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].category === 'to-do') {
        toDo++;
      } else if (arr[i].category === 'in-progress') {
        inProgress++;
      } else {
        done++;
      }
    }

    const todoProc = checkTasksPercent(Math.round((toDo * 100) / arr.length));
    const inProgressProc = checkTasksPercent(
      Math.round((inProgress * 100) / arr.length)
    );
    const doneProc = checkTasksPercent(Math.round((done * 100) / arr.length));

    return [todoProc, inProgressProc, doneProc];
  }, []);

  useEffect(() => {
    const data = [
      {
        name: `${t('statistics.ToDo')}`,
        day: 0,
        month: 0,
      },
      {
        name: `${t('statistics.InProgress')}`,
        day: 0,
        month: 0,
      },
      {
        name: `${t('statistics.Done')}`,
        day: 0,
        month: 0,
      },
    ];
    const filteredDatesByMonth = tasks.filter(
      task => new Date(task.date).getMonth() === date.getMonth()
    );

    const filteredDatesByDay = tasks.filter(
      task => new Date(task.date).getDate() === date.getDate()
    );

    const statisticMonth = getProcentTaskStatistic(filteredDatesByMonth);
    const statisticDay = getProcentTaskStatistic(filteredDatesByDay);

    data[0].month = statisticMonth[0];
    data[1].month = statisticMonth[1];
    data[2].month = statisticMonth[2];

    data[0].day = statisticDay[0];
    data[1].day = statisticDay[1];
    data[2].day = statisticDay[2];

    setTasksStatistic(data);
  }, [date, getProcentTaskStatistic, tasks, t]);



  return (
<Container>
<ListChart>
  {chart.reverse().map((item) => (<ListItemChart key={item}>{item}</ListItemChart>))}
</ListChart>
<ListColumn>
  {tasksStatistic.map(item => (
    <ListItemColumn key={item.name}>
      <Column data={item.day} type='day'>
      <ProcentColumn>
      {item.day}%
      </ProcentColumn>
      </Column>
      <Column data={item.month} type='month'>
        <ProcentColumn>
          {item.month}%
        </ProcentColumn>
      </Column>
      <TextCategory>
        {item.name}
      </TextCategory>
    </ListItemColumn>
  ))}
</ListColumn>
</Container>
  );
};

export default StatisticsChart;
