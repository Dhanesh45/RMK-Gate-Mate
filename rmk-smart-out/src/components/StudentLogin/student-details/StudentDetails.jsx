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
                    <div className="container5">
                        <div style={{ maxHeight: '520px', overflowY: 'scroll' }}>
                            <table className="table1">
                                <thead>
                                    <tr>
                                        <th style={{ padding: '1% 0.5% 1% 1%', width: "9%" }}>S.NO</th>
                                        <th style={{ padding: '1% 0.5% 1% 0%', width: "9%" }}>NAME</th>
                                        <th style={{ padding: '1% 0.5% 1% 0%', width: "9%" }}>REG.NO.</th>
                                        <th style={{ padding: '1% 0.5% 1% 0%', width: "9%" }}>E-MAIL</th>
                                        <th style={{ padding: '1% 0.5% 1% 0%', width: "9%" }}>CONTROL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        students.map((student, index) => (
                                            <tr style={{ margin: '10%' }} key={index}>
                                                <td style={{ padding: '1% 0.5% 1% 1%',width: "9%" }}>{index + 1}</td>
                                                <td style={{ padding: '1% 0.5% 1% 0%' ,width: "9%"}}>{student.name}</td>
                                                <td style={{ padding: '1% 0.5% 1% 0%' ,width: "9%"}}>{student.regNo}</td>
                                                <td style={{ padding: '1% 0.5% 1% 0%',width: "9%" }}>{student.email}</td>
                                                <td style={{ padding: '1% 0.5% 1% 0%',width: "9%" }}>
                                                    <button style={{ margin: '0% 5% 0% 0%', fontWeight: 'bold', backgroundColor: 'rgba(197, 9, 12, 1)', borderRadius: '5px', color: 'white', border: 'none', padding: '1.5%',width:'35%' }}>DELETE</button>
                                                    <button style={{ fontWeight: 'bold', backgroundColor: 'rgba(14, 73, 71, 1)', color: 'white', border: 'none', padding: '1.5%', borderRadius: '5px',width:'35%' }}>EDIT</button>
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
        </div >

    )
}
export default StudentDetails