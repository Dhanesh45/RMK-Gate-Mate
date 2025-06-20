import React from 'react';
import './Attendance.css';
import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
import Sidebar from "./Sidebar";

const Attendance = () => {
  const students = [
    { id: 1. , name: 'AKASH', reg: '111723203001', year: 'II–A' },
    { id: 2. , name: 'GOKUL', reg: '111723203001', year: 'II–A' },
    { id: 3. , name: 'HARISH', reg: '111723203001', year: 'II–A' },
    { id: 4. , name: 'DHANESH', reg: '111723203001', year: 'II–A' },
    { id: 5. , name: 'DHANRAJ', reg: '111723203001', year: 'II–A' },
    { id: 6. , name: 'DHINESH', reg: '111723203001', year: 'II–A' },
    { id: 7. , name: 'AKASH', reg: '111723203001', year: 'II–A' },
    { id: 8. , name: 'GOKUL', reg: '111723203001', year: 'II–A' },
    { id: 9. , name: 'HARISH', reg: '111723203001', year: 'II–A' },
    { id: 10. , name: 'DHANESH', reg: '111723203001', year: 'II–A' },
    { id: 11. , name: 'DHANRAJ', reg: '111723203001', year: 'II–A' }
  ];

  return (
    <div className="container">
        <Sidebar/>
      <div className="content">
        <div className="header">
          <img src={ rmklogo } className='logo'/>
          <h1 className="title">INFORMATION TECHNOLOGY</h1>
        </div>
        <div className="sub">
          <h3 className="subtitle">STUDENT ATTENDANCE SYSTEM</h3>
        </div>
        <div className="table-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>SI</th>
                <th>NAME</th>
                <th>REG.NO</th>
                <th>YEAR–SEC</th>
                <th>ATTENDANCE ENTRY</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.reg}</td>
                  <td>{student.year}</td>
                  <td>
                    <button className="present">PRESENT</button>
                    <button className="absent">ABSENT</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
