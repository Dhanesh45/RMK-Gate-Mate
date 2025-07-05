import Sidebar from "./Sidebar";
import VerdictsPage from '../Verdicts/VerdictsPage';
import StudentApproval from '../StudentApproval';
import Attendance from "../Attendance";
import CounsDashboard from './CounsDashboard';
import StudentDetails from '../student-details/StudentDetails';
import { useState } from "react";


const CounsDash = () => {

const [activePage, setActivePage] = useState("DASHBOARD");

  return (
    <div className='w-screen h-screen overflow-hidden flex'>
        <Sidebar setActivePage={setActivePage}/>
        {activePage === "DASHBOARD" && <CounsDashboard />}
        {activePage === "STUDENTS DETAILS" && <StudentDetails />}
        {activePage === "APPROVAL LIST" && <StudentApproval />}
        {activePage === "VERDICTS" && <VerdictsPage />}
        {activePage === "ATTENDANCE" && <Attendance />}
        
    </div>
  )
}

export default CounsDash