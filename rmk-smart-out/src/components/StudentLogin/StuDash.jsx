import React, { useState } from 'react'
import StudentSidebar from './StudentSideBar'
import StudentDashboard from './StudentDashboard'
import GeneralOutpass from './GeneralOutpass'
import SpecialOutPass from './SpecialOutPass'
import OnDutyForm from './OnDutyForm'

const StuDash = () => {

  const [activePage,setActivePage]=useState("DASHBOARD")

  return (
    <div style={{width:"100%",height:"100vh" ,display:"flex"}}>
        <StudentSidebar setActivePage={setActivePage}/>
        {activePage==="DASHBOARD" && <StudentDashboard />}
        {activePage==="GENERAL OUTPASS" && <GeneralOutpass />}
        {activePage==="SPECIAL OUTPASS" && <SpecialOutPass />}
        {activePage==="ON DUTY FORM" && <OnDutyForm />}

        
    </div>
  )
}

export default StuDash