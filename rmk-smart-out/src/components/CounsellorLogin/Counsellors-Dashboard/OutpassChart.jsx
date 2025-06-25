import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// Chart data
const data = [
  { name: 'pending', value: 12 },
  { name: 'No of approved', value: 17 },
  { name: 'No of rejected', value: 19 },
];

// Corresponding segment colors
const COLORS = ['#00BDAE', '#7070F3', '#F858B0'];

const OutpassChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'space-evenly',
      padding: '20px',
      alignItems: 'center',
      height:"55%",
  
    }}>
      
      {/* Chart Section */}
      <div style={{ position: 'relative', width: 200, height: 200 }}>
        <PieChart width={200} height={200}>
          <Tooltip formatter={(value, name) => [`${value}`, `${name}`]} />
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>

        {/* Center Label using absolute positioning */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '12px', color: '#555' }}>Total Value</div>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{total}</div>
        </div>
      </div>

      {/* Chart Container Table */}
      <div style={{ width: '48%' }}>
        <h4 style={{ textAlign: 'center', color: 'gray', marginBottom: '10px' }}>Chart Container</h4>
        <div style={{ display: 'flex', fontWeight: 'bold', marginBottom: '10px' }}>
          <div style={{ flex: 1 }}>Label</div>
          <div style={{ flex: 1, textAlign: 'center' }}>Value</div>
          <div style={{ flex: 1, textAlign: 'right' }}>%</div>
        </div>
        {data.map((entry, index) => {
          const percentage = ((entry.value / total) * 100).toFixed(1);
          return (
            <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: COLORS[index],
                  borderRadius: '50%',
                }} />
                <span style={{ fontSize: '14px' }}>{entry.name}</span>
              </div>
              <div style={{ flex: 1, textAlign: 'center', fontWeight: 'bold' }}>{entry.value}</div>
              <div style={{ flex: 1, textAlign: 'right', fontWeight: 'bold' }}>{percentage}%</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutpassChart;
