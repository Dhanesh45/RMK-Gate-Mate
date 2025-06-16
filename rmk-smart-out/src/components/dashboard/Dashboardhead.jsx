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

  const pieData = [
    { name: "Male", value: 80 },
    { name: "Female", value: 45 },
  ];
  const COLORS = ["#6cc091", "#b7e4c7"];

  return (
    <div className='container'>
      <div className="sidebar"></div>

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
          <div className='bar-chart-box'>
            <h4 className='chart-heading'>OUTPASS TRACKER</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pending" fill="#00C49F" />
                <Bar dataKey="approved" fill="#8884d8" />
                <Bar dataKey="rejected" fill="#FF69B4" />
              </BarChart>
            </ResponsiveContainer>
            <div className="bar-summary">
              
              <ul>
                <li><span className="dot green"></span> pending - 12 (28.6%)</li>
                <li><span className="dot blue"></span> No of approved - 12 (28.6%)</li>
                <li><span className="dot pink"></span> No of rejected - 12 (28.6%)</li>
              </ul>
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
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <div className="pie-summary">
              <h5>TOTAL</h5>
              <h2>125</h2>
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
