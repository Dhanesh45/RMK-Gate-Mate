import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FaTachometerAlt, FaCheckSquare, FaGavel, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        {isOpen && <h3>YEAR COORDINATOR</h3>}
        <button onClick={toggleSidebar}>{isOpen ? '⮜⮜' : '⮞⮞'}</button>
      </div>
      <div className="sidebar-options">
        <Link to="/" className={`sidebar-link ${location.pathname === '/' ? 'active' : ''}`}>
          <FaTachometerAlt className="sidebar-icon" />
          {isOpen && <span>Dashboard</span>}
        </Link>
        <Link to="/approval-list" className={`sidebar-link ${location.pathname === '/approval-list' ? 'active' : ''}`}>
          <FaCheckSquare className="sidebar-icon" />
          {isOpen && <span>Approval List</span>}
        </Link>
        <Link to="/verdicts" className={`sidebar-link ${location.pathname === '/verdicts' ? 'active' : ''}`}>
          <FaGavel className="sidebar-icon" />
          {isOpen && <span>Verdicts</span>}
        </Link>
      </div>
      <div className="sidebar-footer">
        {isOpen && <div className="coordinator-name">YEAR COORDINATOR</div>}
        <button className="logout-btn">
          <FaSignOutAlt className="sidebar-icon" />
          {isOpen && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;