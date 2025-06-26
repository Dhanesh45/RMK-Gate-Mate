import React from 'react';
import {
    PieChart, Pie, Cell, Tooltip, ResponsiveContainer
} from 'recharts';

const data = [
    { name: 'Pending', value: 12 },
    { name: 'Approved', value: 45 },
    { name: 'Rejected', value: 9 },
];

const COLORS = ['#FFBB28', '#00BFA6', '#EF4C8B'];

const OutpassChart = () => {
    const total = data.reduce((acc, curr) => acc + curr.value, 0);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '92%',
            padding: '3%',
            gap: '5%',
        }}>
            {/* Donut Chart Section */}
            <div style={{
                width: '50%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}  // decreased from 70
                            outerRadius={85}  // decreased from 100
                            paddingAngle={3}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>

                        <Tooltip formatter={(value) => `${value} requests`} />
                    </PieChart>
                </ResponsiveContainer>

                {/* Center total value */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}>
                    <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#555' }}>Total</div>
                    <div style={{ fontSize: '28px', fontWeight: 'bold' }}>{total}</div>
                </div>
            </div>

            {/* Table Section */}
            <div style={{
                width: '45%',
                fontSize: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}>
                <table style={{
                    width: '100%',
                    borderCollapse: 'separate',
                    borderSpacing: '0 12px',
                }}>
                    <thead>
                        <tr style={{ textAlign: 'left', fontSize: '16px' }}>
                            <th style={{ paddingBottom: '6px' }}>Status</th>
                            <th style={{ paddingBottom: '6px' }}>Count</th>
                            <th style={{ paddingBottom: '6px' }}>%</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((entry, index) => (
                            <tr key={index}>
                                <td style={{ color: COLORS[index], fontWeight: 'bold', paddingBottom: '8px' }}>{entry.name}</td>
                                <td style={{ paddingBottom: '8px' }}>{entry.value}</td>
                                <td style={{ paddingBottom: '8px' }}>{((entry.value / total) * 100).toFixed(1)}%</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default OutpassChart;
