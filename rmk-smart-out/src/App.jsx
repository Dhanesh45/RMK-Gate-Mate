import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import CommonLogin from "./components/LandingPage/CommonLogin"
import CounsDashboard from "./components/CounsellorLogin/Counsellors-Dashboard/CounsDashboard"
import CounsellorLoginPage from "./components/CounsellorLogin/CounsellorLoginPage"
import HodLoginPage from "./components/HodLogin/HodLoginPage"
import StudentLoginPage from "./components/StudentLogin/StudentLoginPage"
import YearCoordinatorLoginPage from "./components/YearCoordinatorLogin/YearCoordinatorLoginPage"
import OfficeAssistantLoginPage from "./components/OfficeAssistantLogin/OfficeAssistantLoginPage"
import Sidebar from "./components/CounsellorLogin/Counsellors-Dashboard/Sidebar"
import CounsDash from "./components/CounsellorLogin/Counsellors-Dashboard/CounsDash"
import StudentSidebar from "./components/StudentLogin/StudentSideBar"
import StudentDashboard from "./components/StudentLogin/StudentDashboard"
import StuDash from "./components/StudentLogin/StuDash"
import StudentApproval from "./components/HodLogin/StudentApproval"
import YearCoDash from "./components/YearCoordinatorLogin/dashboard/YearCoDash"
import YearCoSidebar from "./components/YearCoordinatorLogin/dashboard/YearCoSidebar"
import HodDash from "./components/HodLogin/Hod-Dashboard/HodDash"

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>

          {/* LandingPage */}
          <Route path="/" element={< LandingPage/>}/>
          <Route path="/ComLogin" element={ <CommonLogin />} />

          {/* StudentLogin */}
          <Route path="/StudentLoginPage" element={<StudentLoginPage />} />
          <Route path="/StudentDashboard" element={<StuDash />}/>

          {/* Counsellor Login */}
          <Route path="/CounsellorLoginPage" element={<CounsellorLoginPage />}/>
          <Route path="/CounsellorDashboard" element={<CounsDash /> } />

          {/* Year Coordinator Login */}
          <Route path="/YearCoordinatorLoginPage" element={<YearCoordinatorLoginPage />}/>
          <Route path="/YearCoordinatorDashboard" element={<YearCoDash />} />

          {/* HoD Login */}
          <Route path="/HodLoginPage" element={<HodLoginPage />}/> 
          <Route path="/HodDashboard" element={<HodDash />} />

          {/* Office Assistant Login */}
          <Route path="/OfficeAssistantLoginPage" element={<OfficeAssistantLoginPage />}/>
        </Routes>
     </BrowserRouter> 

     
    </div>
    
  )
}

export default App