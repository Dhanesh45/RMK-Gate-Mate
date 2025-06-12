import React from 'react';
import image from "../../assets/LandingPageimg/rmklogo.png";

const students =[
    
        {id:1,name:'AKASH',regNo:'111723203001',yearSec:'IT-A'},
        {id:2,name:'GOKUL',regNo:'111723203002',yearSec:'IT-A'},
        {id:3,name:'HARISH',regNo:'111723203003',yearSec:'IT-A'},
        {id:4,name:'RAJ',regNo:'111723203004',yearSec:'IT-A'},
        {id:5,name:'MUKESH',regNo:'111723203005',yearSec:'IT-A'},
        {id:6,name:'LEO',regNo:'111723203006',yearSec:'IT-A'},
        {id:7,name:'SANJAY',regNo:'111723203007',yearSec:'IT-A'},
    
];

const AttendanceTable=()=>{
    return(
    
       
        
        <div className="table-container">
           
            <table className='attendance-table'>
                
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>Reg.No</th>
                        <th>Year-Sec</th>
                        <th>Attendance Entry</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s,index)=>(
                        <tr key={s.id}>
                            <td>{index+1}</td>
                            <td>{s.name}</td>
                            <td>{s.regNo}</td>
                            <td>{s.yearSec}</td>
                            <td>
                                <button className='present'>PRESENT</button>
                                <button className='absent'>ABSENT</button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceTable;