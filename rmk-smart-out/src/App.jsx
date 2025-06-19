// src/App.jsx

import Sidebar from "./components/YearCoordinatorLogin/Verdicts/Sidebar.jsx";
import VerdictsPage from "./components/YearCoordinatorLogin/Verdicts/VerdictsPage.jsx";

const App = () => {
  return (
    <div style={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      <Sidebar />
      <VerdictsPage />
    </div>
  );
};

export default App;
