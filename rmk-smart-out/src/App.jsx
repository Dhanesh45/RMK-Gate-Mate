import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Sidebar from './components/LandingPage/CounsellorLogin/Sidebar';
import AttendanceTable from './components/LandingPage/CounsellorLogin/AttendanceTable';
import './App.css';

const App = () => {
  return (
    <div>
    
      <div className='app'>
      <Sidebar/>
      <main className='main'>
         <div className='header'>
          
          <h1>Information Technology</h1>
          <h2>Student Attendance System</h2>
        </div>
        <AttendanceTable/>

      </main>
    </div>
    </div>
  )
}

export default App;