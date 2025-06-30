import React from "react"
import StudentDetails from "./components/StudentLogin/student-details/StudentDetails"
import HodDash from "./components/HodLogin/Hod-Dashboard/HodDash"
import "./components/StudentLogin/student-details/StudentDetails.css"
import HodLog from "./components/HodLogin/HodLog"
import "./index.css"
const App = () => {
  return (
    <div>
      {/* <StudentDetails /> */}
     <HodDash />
      {/* <HodLog /> */}
    </div>
  )
}

export default App