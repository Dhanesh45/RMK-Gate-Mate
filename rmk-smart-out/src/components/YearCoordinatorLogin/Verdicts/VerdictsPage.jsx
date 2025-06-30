// src/components/YearCoordinatorLogin/Verdicts/VerdictsPage.jsx

import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
import VerdictChart from "./VerdictChart.jsx";
import PieChart from "./PieChart.jsx";
import StudentList from "./StudentList.jsx";

const VerdictsPage = () => (
  <div
    style={{
      marginLeft: "20px",
      marginRight:"20px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      height: "auto",
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
          style={{ width: "40%", height: "auto", border:"1px solid black" }}
        />
      </div>
      <h2 style={{textAlign: "end",color:"rgba(14, 73, 71, 1)", fontSize:"15px"}}>
        INFORMATION TECHNOLOGY
      </h2>
    </div>

    {/* Page Title */}
    <h3 style={{ textAlign: "center",color:"rgba(14, 73, 71, 1)", fontSize:"20px" }}>VERDICTS</h3>

    {/* Charts Container */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "20px",
        marginTop: "5px",
        marginBottom: "10px",
      }}
    >
      <VerdictChart />
      <PieChart />
    </div>

    {/* Student Table */}
    <StudentList />
  </div>
);

export default VerdictsPage;