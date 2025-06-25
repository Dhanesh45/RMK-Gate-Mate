// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import CounsellorSidebar from "./components/Counsellor/Verdicts/Sidebar.jsx";
import CounsellorVerdictsPage from "./components/Counsellor/Verdicts/VerdictsPage.jsx";

import YearCoordinatorSidebar from "./components/YearCoordinatorLogin/Verdicts/Sidebar.jsx";
import YearCoordinatorVerdictsPage from "./components/YearCoordinatorLogin/Verdicts/VerdictsPage.jsx";

const Layout = ({ SidebarComponent, PageComponent }) => (
  <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
    <SidebarComponent />
    <PageComponent />
  </div>
);

const App = () => {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/counsellor" />} />

      {/* Counsellor view */}
      <Route
        path="/counsellor"
        element={
          <Layout
            SidebarComponent={CounsellorSidebar}
            PageComponent={CounsellorVerdictsPage}
          />
        }
      />

      {/* Year Coordinator view */}
      <Route
        path="/yearcoordinator"
        element={
          <Layout
            SidebarComponent={YearCoordinatorSidebar}
            PageComponent={YearCoordinatorVerdictsPage}
          />
        }
      />
    </Routes>
  );
};

export default App;
