import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 70 },
  { name: 'Group B', value: 30 }
];

const COLORS = ['#7556D3', '#5FD9E0'];

const CustomPieChart = () => (
  <div style={{ flex:1, backgroundColor: "white", padding: "20px", borderRadius: "10px" }}>
    <h4>CHART</h4>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} innerRadius={50} outerRadius={80} dataKey="value">
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default CustomPieChart;