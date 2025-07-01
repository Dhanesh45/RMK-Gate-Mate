import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
  { month: 'Dec', approved: 10, rejected: 6 }
];

const VerdictChart = () => (
  <div style={{ flex: 2, backgroundColor: "white", padding: "5px", borderRadius: "10px", width:"75%",height:"100%" }}>
    <h4>Number of Student</h4>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="approved" fill="#0e4947" barSize={17}/>
        <Bar dataKey="rejected" fill="#ccc" barSize={15}/>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default VerdictChart;
