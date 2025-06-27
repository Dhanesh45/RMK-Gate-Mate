import { BrowserRouter, Route, Routes } from "react-router-dom"

import LandingPage from "./components/LandingPage/LandingPage"
import CommonLogin from "./components/LandingPage/CommonLogin"
import StudentLogin from "./components/StudentLogin/StudentLogin"

const App = () => {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={< LandingPage/>}/>
          <Route path="/ComLogin" element={ <CommonLogin />} />
          <Route path="/StudentLogin" element={<StudentLogin />} />
        </Routes>
     </BrowserRouter>
      
    </div>
  )
}

export default App