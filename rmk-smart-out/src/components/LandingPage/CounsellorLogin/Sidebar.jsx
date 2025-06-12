import React from 'react';

import {FaUserCircle} from 'react-icons/fa';
const Sidebar=()=>{
    return(
        <aside className='sidebar'>
            <div className='logo'><tab>R.M.K</tab><br/>Group of Institutions</div>
            
            <ul className='nav'>
                <li>Dashboard</li>
                <li>Student Details</li>
                <li>Approval List</li>
                <li>Verdicts</li>
                <li className='active'>Attendance</li>

            </ul><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <footer style={{marginLeft:'6px'}}>
                <FaUserCircle style={{marginRight:'4px',verticalAlign:'middle'}}/>Counsellor</footer>
            <button style={{marginLeft:'8px'}}>Log Out</button>
        </aside>
    );
};

export default Sidebar;