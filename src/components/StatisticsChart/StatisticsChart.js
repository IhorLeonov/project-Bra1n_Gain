import { useState, useEffect, useCallback } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const StatisticsChart = ({ date, tasks }) => {
  const [tasksStatistic, setTasksStatistic] = useState([]);
  
  const getProcentTaskStatistic = useCallback( arr => {

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

    const todoProc = checkTasksPercent(Math.floor((toDo * 100) / arr.length));
    const inProgressProc = checkTasksPercent(
      Math.floor((inProgress * 100) / arr.length)
    );
    const doneProc = checkTasksPercent(Math.floor((done * 100) / arr.length));

    return [todoProc, inProgressProc, doneProc];
  }, [])

  useEffect(() => {
    const data = [
      {
        name: 'To Do',
        day: 0,
        month: 0,
      },
      {
        name: 'In Progress',
        day: 0,
        month: 0,
      },
      {
        name: 'Done',
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
  }, [date, getProcentTaskStatistic, tasks]);

  const renderLabel = props => {
    const { x, y, width, value } = props;
    return (
      <text x={x + width / 2} y={y} fill="#black" textAnchor="middle" dy={-6}>
        {value} %
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        width={150}
        height={40}
        data={tasksStatistic}
        barGap={-95}
        maxBarSize={27}
        margin={{
          top: 20,
          right: 20,
          left: 20,
          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="0" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          axisLine={false}
          tickLine={false}
          domain={[0, 100]}
          tickCount={6}
        />
        <Tooltip cursor={{ fill: 'transparent' }} />
        <Bar
          dataKey="day"
          unit="%"
          fill="url(#gradient)"
          label={{ content: renderLabel }}
          radius={[0, 0, 10, 10]}
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#FFD2DD" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Bar
          dataKey="month"
          unit="%"
          fill="url(#gradient2)"
          label={{ content: renderLabel }}
          radius={[0, 0, 10, 10]}
        />
        <defs>
          <linearGradient id="gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3E85F3" stopOpacity={0.1} />
            <stop offset="95%" stopColor="#3E85F3" stopOpacity={1} />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StatisticsChart;
