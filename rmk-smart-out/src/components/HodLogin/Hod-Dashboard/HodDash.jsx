import React, { useState } from 'react'
import HodSidebar from './HodSidebar'
import HodDashboard from './HodDashboard'
import StudentApproval from '../StudentApproval'
import VerdictsPage from '../../CounsellorLogin/Verdicts/VerdictsPage'

const HodDash = () => {

  const [activePage,setActivePage]=useState('DASHBOARD')

  return (
    <div className='flex h-screen w-screen'>
        <HodSidebar  setActivePage={setActivePage}/>
        {activePage==='DASHBOARD' && <HodDashboard />}
        {activePage==='APPROVAL LIST' && <StudentApproval />}
        {activePage==='VERDICTS' && <VerdictsPage />}
    </div>
  )
}

export default HodDash