import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: 'APPROVED', value: 70 },
  { name: 'REJECTED', value: 30 }
];

const COLORS = ['#166F1A', '#7AD75E']; // Match the green shades

const CustomPieChart = () => (
  <div
    style={{
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '12px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width:"25%"
    }}
  >
    

    <h4 style={{fontWeight:"bold"}}>CURRENT LIST</h4>


    <ResponsiveContainer width="100%" height={150}>
      <PieChart>
        <Pie
          data={data}
          innerRadius={40}
          outerRadius={60}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>

    {/* Custom Legend */}
    <div style={{ fontSize: '14px', color: '#333' }}>
      <span style={{ color: '#166F1A', fontWeight: 'bold' }}>APPROVED – 118 </span>
      &nbsp; &nbsp;
      <span style={{ color: '#7AD75E', fontWeight: 'bold' }}>REJECTED – 6</span>
    </div>
  </div>
);

export default CustomPieChart;
