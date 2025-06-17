import React from 'react';
import './VerdictChart.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const data = [
  { month: 'Jan', approved: 12, rejected: 5 },
  { month: 'Feb', approved: 14, rejected: 4 },
  { month: 'Mar', approved: 18, rejected: 3 },
  { month: 'Apr', approved: 19, rejected: 5 },
  { month: 'May', approved: 13, rejected: 8 },
  { month: 'Jun', approved: 6, rejected: 10 },
  { month: 'Jul', approved: 15, rejected: 13 },
  { month: 'Aug', approved: 17, rejected: 7 },
  { month: 'Sep', approved: 13, rejected: 5 },
  { month: 'Oct', approved: 14, rejected: 6 },
  { month: 'Nov', approved: 18, rejected: 3 },
  { month: 'Dec', approved: 10, rejected: 6 },
];

const VerdictChart = () => (
  <BarChart width={500} height={250} data={data}>
    <XAxis dataKey="month" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="approved" fill="#16544b" name="Approved" />
    <Bar dataKey="rejected" fill="#dcdcdc" name="Rejected" />
  </BarChart>
);

export default VerdictChart;