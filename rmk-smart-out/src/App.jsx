import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import CommonLogin from './components/LandingPage/CommonLogin'
import StudentApproval from './components/CounsellorLogin/StudentApproval'
import Sidebar from './components/CounsellorLogin/Sidebar'
import StudentLogin from './components/StudentLogin/StudentLogin'
import CounsDashboard from './components/CounsellorLogin/Counsellors-Dashboard/CounsDashboard'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      {/* <CommonLogin /> */}
      {/* <StudentApproval /> */}
      {/* <Sidebar /> */}
      <StudentLogin />
      <CounsDashboard />
      
    </div>
  )
}

export default App