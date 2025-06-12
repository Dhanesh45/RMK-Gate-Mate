import React from "react";
import RmkLogo from '../../../assets/LandingPageimg/rmklogo.png'
import { useState } from 'react';

const StudentDetails = () => {
    const [students, setStudents] = useState([]);
    const [details, setDetails] = useState({
        name: "",
        regNo: "",
        email: "",
    })
    const handleNameChange = (e) => {
        setDetails({ ...details, name: e.target.value })
    }
    const handleRegNoChange = (e) => {
        setDetails({ ...details, regNo: e.target.value })
    }
    const handleEmailChange = (e) => {
        setDetails({ ...details, email: e.target.value })
    }
    const handleAdd = () => {
        if (details.name && details.regNo && details.email) {       //checking all fields filled
            setStudents([...students, details]);   //after clicking add button student details listed
            setDetails({ name: "", regNo: "", email: "" }); //clear form
        }
    }
    return (

        <div className="container1">
            <div className="sidebar">
            </div>
            <div className="innerframe">
                <div className="container2">
                    <img src={RmkLogo} width="9%" height="9%" alt="rmklogo" style={{ padding: "0.5%", border: "1px solid black" }}></img>
                    <h1 className="dept1">INFORMATION TECHNOLOGY</h1>
                </div>
                <div className="title">
                    <h1 className="title1">STUDENT DETAILS</h1>
                </div>
                <div className="container3">
                    <div className="input">
                        <input type="text" name="name" value={details.name} placeholder="STUDENT NAME" onChange={handleNameChange} ></input>
                        <input type="text" name="regNo" value={details.regNo} placeholder="REGISTER NUMBER" onChange={handleRegNoChange}></input>
                        <input type="email" name="email" value={details.email} placeholder="E-MAIL-ID" onChange={handleEmailChange}></input>
                        <button onClick={handleAdd}>ADD</button>
                    </div>
                </div>
                <div className="container4">
                    <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th style={{ paddingRight: '180px' }}>S.NO</th>
                                    <th style={{ paddingRight: '180px' }}>NAME</th>
                                    <th style={{ paddingRight: '180px' }}>REG.NO.</th>
                                    <th style={{ paddingRight: '180px' }}>E-MAIL</th>
                                    <th style={{ paddingRight: '180px' }}>CONTROL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    students.map((student, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{student.name}</td>
                                            <td>{student.regNo}</td>
                                            <td>{student.email}</td>
                                            <td>
                                                <button>DELETE</button>
                                                <button>Edit</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default StudentDetails