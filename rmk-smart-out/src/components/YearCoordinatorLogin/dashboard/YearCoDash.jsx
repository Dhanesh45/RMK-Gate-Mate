import React, { useState } from 'react'
import YearCoSidebar from './YearCoSidebar'
import YearCoordinatorDashboard from "./YearCoordinatorDashboard"
import StudentApproval from '../StudentApproval';
import VerdictsPage from "../Verdicts/VerdictsPage"

const YearCoDash = () => {

  const [activePage,setActivePage]=useState('DASHBOARD');  

  return (
    <div style={{width:"100vw",height:"100vh",display:"flex"}}>
        <YearCoSidebar setActivePage={setActivePage}/>
        {activePage==='DASHBOARD' && <YearCoordinatorDashboard />}
        {activePage==='APPROVAL LIST' && <StudentApproval />}
        {activePage=== 'VERDICTS' && <VerdictsPage />}
    </div>
  )
}

export default YearCoDash