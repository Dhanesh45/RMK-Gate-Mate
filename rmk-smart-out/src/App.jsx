import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import CommonLogin from './components/LandingPage/CommonLogin'
import StudentApproval from './components/CounsellorLogin/StudentApproval'
import Sidebar from './components/CounsellorLogin/Sidebar'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      {/* <CommonLogin /> */}
      <StudentApproval />
      {/* <Sidebar /> */}
      
    </div>
  )
}

export default App