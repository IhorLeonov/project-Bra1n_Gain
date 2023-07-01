import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const StatisticsChart = ({ date }) => {
  const [tasks, setTasks] = useState([]);

  const checkTasksPercent = percent => (isFinite(percent) ? percent : 0);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(
          'https://bra1n-gain-backend.onrender.com/api/tasks',
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OWM4OGYxNjQ4NjdlMzZiMTJiOGVkMCIsImlhdCI6MTY4ODE1MDk1NSwiZXhwIjoxNjg4MjMzNzU1fQ.ixUAtvxpcWRx9O4Xr-8mKmNjSYmsA7I6U71eX8eE6Gs',
            },
          }
        );
        console.log(response.data.data);

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
        const filteredDatesByMonth = response.data.data.filter(
          task => new Date(task.date).getMonth() === date.getMonth()
        );

        const filteredDatesByDay = response.data.data.filter(
          task => new Date(task.date).getDay() === date.getDay()
        );

        filteredDatesByMonth.forEach(task => {
          if (task.category === 'to-do') {
            data[0].month +=
              checkTasksPercent(1 / filteredDatesByMonth.length) * 100;
            data[0].day +=
              checkTasksPercent(1 / filteredDatesByDay.length) * 100;
          } else if (task.category === 'in-progress') {
            data[1].month +=
              checkTasksPercent(1 / filteredDatesByMonth.length) * 100;
            data[1].day +=
              checkTasksPercent(1 / filteredDatesByDay.length) * 100;
          } else {
            data[2].month +=
              checkTasksPercent(1 / filteredDatesByMonth.length) * 100;
            data[2].day +=
              checkTasksPercent(1 / filteredDatesByDay.length) * 100;
          }
        });
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchTasks();
  }, [date]);

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
        data={tasks}
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
          domain={[0, 'dataMax + 2']}
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
