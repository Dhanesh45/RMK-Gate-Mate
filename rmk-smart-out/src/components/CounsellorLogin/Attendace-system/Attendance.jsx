import React from "react";
import "./Attendance.css"; // optional if you want to style
import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";

export const Attendance = () => {
  const students = [
    { id: 1, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 2, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 3, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 4, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 5, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 6, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 7, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 8, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 9, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 10, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 11, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 12, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 13, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 14, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 15, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 16, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 17, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 18, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 19, name: "Akash", reg: "111723203034", year: "III - 'A'" },
    { id: 20, name: "Akash", reg: "111723203034", year: "III - 'A'" },
  ];

  return (
    <div style={{ display: "flex", backgroundColor: "#eee" }}>
      <div style={{width: "15%",height: "100vh",border: "1px solid black",backgroundColor: "white",}}>
      <div className="container">
        <div className="logo-container">
          <img src={rmklogo} alt="RMK Logo" className="logo" />
          <h2 className="side ">INFORMATION TECHNOLOGY</h2>
          <h3 className="title">STUDENT ATTENDANCE SYSTEM</h3>
          <div className="table-scroll-container">
            <table className="blacky">
              <thead className="head">
                <tr>
                  <th>S.I</th>
                  <th>NAME</th>
                  <th>REG.NO</th>
                  <th>YEAR-SEC</th>
                  <th>ATTENDANCE ENTRY</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.reg}</td>
                    <td>{student.year}</td>
                    <td className="gap">
                      <button className="gun">PRESENT</button>
                      <button className="bun">ABSENT</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </div>
      </div>
    </div>



  );
};
