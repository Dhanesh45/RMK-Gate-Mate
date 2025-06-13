import React from 'react';
import './StudentList.css';

const students = [
  { name: "AKASH", reg: "111723203001", email: "alexarawles@gmail.com", year: "II & A" },
  { name: "GOKUL", reg: "111723203001", email: "alexarawles@gmail.com", year: "II & A" },
  { name: "HARISH", reg: "111723203001", email: "alexarawles@gmail.com", year: "II & A" }
];

const StudentList = () => (
  <div className="student-list">
    <div className="header-row">
      <span>Name</span>
      <span>Reg. No</span>
      <span>Email ID</span>
      <span>Year & Sec</span>
    </div>
    {students.map((s, idx) => (
      <div className="student-row" key={idx}>
        <span>{s.name}</span>
        <span>{s.reg}</span>
        <span>{s.email}</span>
        <span>{s.year}</span>
      </div>
    ))}
  </div>
);

export default StudentList;
