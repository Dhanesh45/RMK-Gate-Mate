// src/components/YearCoordinatorLogin/Verdicts/VerdictsPage.jsx

import rmklogo from "../../../assets/LandingPageimg/rmklogo.png";
import VerdictChart from "./VerdictChart.jsx";
import PieChart from "./PieChart.jsx";
import StudentList from "./StudentList.jsx";

const VerdictsPage = () => (
  <div
    style={{
      padding: "20px",
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
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={rmklogo}
          alt="RMK Logo"
          style={{ width: "150px", height: "auto" }}
        />
      </div>
      <h2 style={{ flex: 1, textAlign: "end", marginRight: "10px" }}>
        INFORMATION TECHNOLOGY
      </h2>
    </div>

    {/* Page Title */}
    <h3 style={{ textAlign: "center", margin: "5px 0 0 0" }}>VERDICTS</h3>

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
