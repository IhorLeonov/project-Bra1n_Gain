import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Container, Text } from './StatisticsPage.styled';
import { PeriodPaginator } from 'components/CalendarToolbar/PeriodPaginator/PeriodPaginator';

const StatisticsPage = ({ date, setDate, typeNav }) => {
  const data = [
    {
      name: 'To Do',
      uv: 80,
      pv: 60,
    },
    {
      name: 'In Progress',
      uv: 70,
      pv: 50,
    },
    {
      name: 'Done',
      uv: 98,
      pv: 45,
    },
  ];

  const renderLabel = props => {
    const { x, y, width, value } = props;

    return (
      <text x={x + width / 2} y={y} fill="#black" textAnchor="middle" dy={-6}>
        {value}
      </text>
    );
  };

  return (
    <div style={{ padding: '100px' }}>
      {/* <PeriodPaginator
        minDate={'Jun 23 2023'}
        date={date}
        setDate={setDate}
        typenav={typeNav}
      /> */}

      <Container style={{ width: 860, height: 440, margin: 'auto' }}>
        <Text>Tasks</Text>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data}
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
              dataKey="pv"
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
              dataKey="uv"
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
            {/* <LabelList
              dataKey="uv"
              position="top"
              style={{ fill: '#343434' }}
            /> */}
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </div>
  );
};

export default StatisticsPage;
