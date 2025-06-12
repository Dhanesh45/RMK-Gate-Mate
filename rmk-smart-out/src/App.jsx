import React from 'react'
// import LandingPage from './components/LandingPage/LandingPage'
import { Attendance } from './components/CounsellorLogin/Attendace-system/Attendance'
import Navbar from './components/CounsellorLogin/Attendace-system/Navbar'

const App = () => {
  return (
    <div>
      {/* <LandingPage /> */}
      <Attendance/>
      <Navbar/>
    </div>
  )
}

export default App