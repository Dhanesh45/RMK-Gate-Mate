import React from 'react';
import './Dashboard.css';
import rmklogo from "../../assets/LandingPageimg/rmklogo.png";
import banner from "../../assets/dashboardimg/banner.jpg";
import ammuni from "/src/assets/dashboardimg/ammuni.jpg";

// Recharts imports
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const Dashboardhead = () => {
  const barData = [
    { day: "day 1", pending: 3, approved: 6, rejected: 3 },
    { day: "day 2", pending: 3, approved: 6, rejected: 3 },
    { day: "day 3", pending: 2, approved: 5, rejected: 2 },
    { day: "day 4", pending: 3, approved: 6, rejected: 2 },
    { day: "day 5", pending: 3, approved: 6, rejected: 2 },
    { day: "day 6", pending: 3, approved: 6, rejected: 2 },
    { day: "day 7", pending: 3, approved: 4, rejected: 2 },
  ];
  const summary = [
    { label: "pending", value: 12, color: "#00C49F" },
    { label: "No of approved", value: 12, color: "#8884d8" },
    { label: "No of rejected", value: 12, color: "#FF69B4" },
  ];
  const pieData = [
    { name: "Male", value: 80 },
    { name: "Female", value: 45 },
  ];
  const COLORS = ["#6cc091", "#b7e4c7"];

  return (
    <div className='container'>
    
      <div className="innerframe">
        <header>
          <img src={rmklogo} alt='RMK Logo' className="logo" />
          <h1 className="title">INFORMATION TECHNOLOGY</h1>
        </header>

        <div className="profile-card">
          <div className='banner'>
            <img src={banner} alt="banner" className='banner-img' />
            <img src={ammuni} alt="profile" className='ammuni-img' />
          </div>
          <div className='det'>
            <h2>Year Coordinator Name</h2>
            <a href="mailto:annalakshmi@gmail.com">annalakshmi@gmail.com</a>
            <p>
              Number of Students: 121 &nbsp; <span className="dot">•</span> &nbsp;
              Degree: B.Tech - Information Technology &nbsp; <span className="dot">•</span> &nbsp;
              College: R.M.K. Group of Institutions
            </p>
          </div>
        </div>



        {/* Chart section */}
        <div className='charts-section'>
          <div className='bar-chart-box compact'>
            <div className="bar-header">
              <h4 className='chart-heading'>OUTPASS TRACKER</h4>
            </div>
            <div className="bar-body">
              <div className="chart-wrapper">
                <ResponsiveContainer width="100%" height={140}>
                  <BarChart data={barData}>
                    <XAxis dataKey="day" fontSize={10} />
                    <YAxis fontSize={10} />
                    <Tooltip />
                    <Bar dataKey="pending" fill="#00C49F" barSize={10} />
                    <Bar dataKey="approved" fill="#8884d8" barSize={10} />
                    <Bar dataKey="rejected" fill="#FF69B4" barSize={10} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="summary-legend">
                <table className="summary-table">
                  <thead>
                    <tr>
                      <th align="left">Label</th>
                      <th>Value</th>
                      <th>%</th>
                    </tr>
                  </thead>
                  <tbody>
                    {summary.map((item) => (
                      <tr key={item.label}>
                        <td style={{ color: item.color }}>{item.label}</td>
                        <td align="center">{item.value}</td>
                        <td align="center">28.6%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          <div className='pie-chart-box'>
            <h4 className='chart-heading' >ATTENDANCE</h4>
            <PieChart width={200} height={200} className='pie'>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={75}
                fill="#8884d8"
                paddingAngle={0}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="pie-summary">
              <h5 className='tot'>TOTAL<h2 >125</h2></h5>

              <div className="legend">
                <span><span className='dot green'></span> MALE</span>
                <span><span className='dot lightgreen'></span> FEMALE</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboardhead;