import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Sidebar from './components/CounsellorLogin/Attendace-system/Sidebar'
import { Attendance } from './components/CounsellorLogin/Attendace-system/Attendance'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      <Attendance/>
      <Sidebar/>
    </div>
  )
}

export default App