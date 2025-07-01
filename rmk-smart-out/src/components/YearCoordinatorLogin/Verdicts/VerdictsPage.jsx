// src/components/Counsellor/Verdicts/VerdictsPage.jsx

import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
import VerdictChart from "./VerdictChart.jsx";
import PieChart from "./PieChart.jsx";
import StudentList from "./StudentList.jsx";

const VerdictsPage = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      
      width: "85%",
      height: "100vh",
      boxSizing: "border-box",

    }}
  >
    {/* Header */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div>
        <img
          src={rmklogo}
          alt="RMK Logo"
          style={{ width: "45%", height: "auto"}}
        />
      </div>
      <h2 style={{textAlign: "end",color:"rgba(14, 73, 71, 1)", fontSize:"15px",fontWeight:"bold" , padding:"1% 1% 0% 0%"}}>
        INFORMATION TECHNOLOGY
      </h2>
    </div>

    {/* Page Title */}
    <h3 style={{ textAlign: "center",color:"rgba(14, 73, 71, 1)", fontSize:"20px",fontWeight:"bold" }}>VERDICTS</h3>

    {/* Charts Container */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px",
        margin:"1% 2% 1% 2%"
      }}
    >
      <VerdictChart />
      <PieChart />
    </div>

    {/* Student Table */}
    <div style={{width:"100%",height:"49%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <StudentList />
    </div>
  </div>
);

export default VerdictsPage;