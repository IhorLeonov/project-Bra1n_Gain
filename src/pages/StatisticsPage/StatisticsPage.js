import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import { Container } from './StatisticsPage.styled';

const data = [
  {
    name: 'To Do',
    uv: 40,
    pv: 30,
  },
  {
    name: 'In Progress',
    uv: 35,
    pv: 20,
  },
  {
    name: 'Done',
    uv: 98,
    pv: 30,
  },
];

const StatisticsPage = () => {
  return (
    <div>
      <Container style={{ width: 1000, height: 450 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={150}
            height={40}
            data={data}
            barGap={-120}
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
            <Bar dataKey="pv" unit="%" fill="#FFD2DD" radius={[0, 0, 10, 10]}>
              <LabelList
                dataKey="pv"
                position="top"
                style={{ fill: '#343434' }}
              />
            </Bar>
            <Bar dataKey="uv" unit="%" fill="#3E85F3" radius={[0, 0, 10, 10]}>
              <LabelList
                dataKey="uv"
                position="top"
                style={{ fill: '#343434' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </Container>
    </div>
  );
};

export default StatisticsPage;
