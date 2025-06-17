import React from 'react';
import './VerdictsPage.css';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import VerdictChart from '../VerdictChart/VerdictChart';
import CustomPieChart from '../PieChart/PieChart';
import StudentList from '../StudentList/StudentList';

const VerdictsPage = () => (
  <div className="main-layout">
    <Sidebar />
    <div className="main-content">
      <Header />
      <h2 className="title">VERDICTS</h2>

      {/* Chart Box Wrapper */}
      <div className="charts-container">
        <div className="chart-box">
          <div className="chart-left">
            <VerdictChart />
          </div>
          <div className="chart-right">
            <CustomPieChart />
          </div>
        </div>
      </div>

      {/* Student List Section */}
      <div className="student-scroll-container">
        <StudentList />
      </div>
    </div>
  </div>
);

export default VerdictsPage;