import React from 'react';
import './VerdictsPage.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import VerdictChart from '../../components/VerdictChart/VerdictChart';
import CustomPieChart from '../../components/PieChart/PieChart';
import StudentList from '../../components/StudentList/StudentList';

const VerdictsPage = () => (
  <div className="main-layout">
    <Sidebar />
    <div className="main-content">
      <Header />
      <h2 className="title">VERDICTS</h2>
      <div className="charts">
        <VerdictChart />
        <CustomPieChart />
      </div>
      <StudentList />
    </div>
  </div>
);

export default VerdictsPage;
