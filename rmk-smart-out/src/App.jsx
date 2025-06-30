import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage/LandingPage"
import CommonLogin from "./components/LandingPage/CommonLogin"
import CounsDashboard from "./components/CounsellorLogin/Counsellors-Dashboard/CounsDashboard"
import CounsellorLoginPage from "./components/CounsellorLogin/CounsellorLoginPage"
import HodLoginPage from "./components/HodLogin/HodLoginPage"
import StudentLoginPage from "./components/StudentLogin/StudentLoginPage"
import YearCoordinatorLoginPage from "./components/YearCoordinatorLogin/YearCoordinatorLoginPage"
import OfficeAssistantLoginPage from "./components/OfficeAssistantLogin/OfficeAssistantLoginPage"

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={< LandingPage/>}/>
          <Route path="/ComLogin" element={ <CommonLogin />} />
          <Route path="/StudentLoginPage" element={<StudentLoginPage />} />
          <Route path="/CounsellorLoginPage" element={<CounsellorLoginPage />}/>
          <Route path="/CounsellorDashboard" element={<CounsDashboard /> } />
          <Route path="/YearCoordinatorLoginPage" element={<YearCoordinatorLoginPage />}/>
          <Route path="/HodLoginPage" element={<HodLoginPage />}/> 
          <Route path="/OfficeAssistantLoginPage" element={<OfficeAssistantLoginPage />}/>
        </Routes>
     </BrowserRouter> 
    </div>
  )
}

export default App