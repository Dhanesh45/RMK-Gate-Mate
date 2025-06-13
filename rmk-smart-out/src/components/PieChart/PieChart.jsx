import React from 'react';
import './PieChart.css';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Approved', value: 70 },
  { name: 'Rejected', value: 30 },
];

const COLORS = ['#16544b', '#b3e6e4'];

const CustomPieChart = () => (
  <PieChart width={200} height={200}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      innerRadius={60}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
  </PieChart>
);

export default CustomPieChart;
