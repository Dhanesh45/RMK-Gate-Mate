import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import CommonLogin from './components/LandingPage/CommonLogin'
import StudentApproval from './components/CounsellorLogin/StudentApproval'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      {/* <CommonLogin /> */}
      <StudentApproval />
    </div>
  )
}

export default App