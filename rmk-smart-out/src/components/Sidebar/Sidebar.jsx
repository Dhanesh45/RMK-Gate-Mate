import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>YEAR COORDINATOR</h3>
      <ul>
        <li>Dashboard</li>
        <li>Approval List</li>
        <li className="active">Verdicts</li>
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
