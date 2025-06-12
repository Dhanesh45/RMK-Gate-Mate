import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import ApprovalList from './pages/ApprovalList'
import Verdicts from './pages/Verdicts'



function App() {
  return (
    <div style={{ display: 'flex',backgroundColor:"#eeee" }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/approval-list" element={<ApprovalList />} />
          <Route path="/verdicts" element={<Verdicts />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
