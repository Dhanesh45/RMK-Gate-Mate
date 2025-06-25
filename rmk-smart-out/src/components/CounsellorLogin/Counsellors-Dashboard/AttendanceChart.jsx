import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts'; // ✅ Tooltip added here

const data = [
  { name: 'Male', value: 12 },
  { name: 'Female', value: 9 },
];

const COLORS = ['#A4E4B3', '#3CA473']; // Match colors from your image

const RADIAN = Math.PI / 180;

const renderLabel = ({ cx, cy }) => {
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan x={cx} y={cy - 10} fontSize="12" fill="#000">TOTAL</tspan>
      <tspan x={cx} y={cy + 10} fontSize="22" fontWeight="bold">21</tspan>
    </text>
  );
};

const AttendanceChart = () => {
  return (
    <div style={{ width: '100%', height: '70%', justifyItems: "center", marginTop: "4%" }}>
      
      <PieChart width={260} height={160}>
        {/* ✅ Hover tooltip */}
        <Tooltip 
          formatter={(value, name) => [`${value}`, `${name}`]} 
        />

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={45}
          outerRadius={60}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          labelLine={false}
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        {/* Legend manually created */}
        <Legend
          verticalAlign="bottom"
          align="center"
          iconType="rect"
          layout="horizontal"
          content={() => (
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              paddingTop: "2%",
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#A4E4B3', borderRadius: '2px' }}></div>
                <span style={{ color: 'black', fontSize: '17px' }}>MALE</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '20px', height: '20px', backgroundColor: '#3CA473', borderRadius: '2px' }}></div>
                <span style={{ color: 'black', fontSize: '17px' }}>FEMALE</span>
              </div>
            </div>
          )}
        />

      </PieChart>
    </div>
  );
};

export default AttendanceChart;
