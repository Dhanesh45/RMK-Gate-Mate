import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'day 1', pending: 3, approved: 6, rejected: 2 },
  { name: 'day 2', pending: 4, approved: 6, rejected: 2 },
  { name: 'day 3', pending: 2, approved: 6, rejected: 2 },
  { name: 'day 4', pending: 3, approved: 6, rejected: 2 },
  { name: 'day 5', pending: 3, approved: 6, rejected: 2 },
  { name: 'day 6', pending: 3, approved: 6, rejected: 2 },
  { name: 'day 7', pending: 5, approved: 6, rejected: 2 },
];
const sum1=chartData.reduce((tot,i)=>tot+i.pending,0)
const sum2=chartData.reduce((tot,i)=>tot+i.approved,0)
const sum3=chartData.reduce((tot,i)=>tot+i.rejected,0)
const summaryData = [
  { name: 'Pending', value: sum1, color: '#00BDAE' },
  { name: 'No of approved', value: sum2, color: '#7070F3' },
  { name: 'No of rejected', value: sum3, color: '#F858B0' },
];

const COLORS = {
  pending: '#00BDAE',
  approved: '#7070F3',
  rejected: '#F858B0',
};

const Outpassbar = () => {
  const total = summaryData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '20px',
      alignItems: 'center',
      height: '55%',
      flexWrap: 'wrap',
    }}>
      
      {/* Bar Chart Section */}
      <div style={{ width: '60%', height: '130%', marginBottom:"20%",marginLeft:'-10%'}}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="bottom" height={10} iconType="circle" />
            <Bar dataKey="pending" fill={COLORS.pending} barSize={12} radius={[3, 3, 0, 0]} />
            <Bar dataKey="approved" fill={COLORS.approved} barSize={12} radius={[3, 3, 0, 0]} />
            <Bar dataKey="rejected" fill={COLORS.rejected} barSize={12} radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Table */}
      <div style={{ width: '25%', minWidth: '280px', marginTop:"-25%" }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', paddingBottom: '10px', fontSize: '14px' }}>Label</th>
              <th style={{ textAlign: 'center', paddingBottom: '10px', fontSize: '14px' }}>Value</th>
              <th style={{ textAlign: 'right', paddingBottom: '10px', fontSize: '14px' }}>%</th>
            </tr>
          </thead>
          <tbody>
            {summaryData.map((item, idx) => {
              const percent = ((item.value / total) * 100).toFixed(1);
              return (
                <tr key={idx}>
                  <td style={{ display: 'flex', alignItems: 'center', gap: '6px', paddingBottom: '8px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: item.color }}></div>
                    <span style={{ fontSize: '14px' }}>{item.name}</span>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 'bold' }}>{item.value}</td>
                  <td style={{ textAlign: 'right', fontWeight: 'bold' }}>{percent}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Outpassbar;
