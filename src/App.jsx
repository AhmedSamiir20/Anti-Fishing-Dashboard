import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import View from "./Components/shared/View";
import SensorPage from "./Pages/Sensor/SensorPage";
import AddNewSensor from "./Pages/Sensor/AddNewSensor";
import CameraPage from "./Pages/Camera/CameraPage";
import RegisterForm from "./Pages/Registeration/RegisterForm";
import UserPage from "./Pages/UserPage";
import InstructionPage from "./Pages/Instruction/InstructionPage";
import AddNewInstruction from "./Pages/Instruction/AddNewInstruction";
import Dashboard from "./Pages/Dashboard";
import AddNewCamera from "./Pages/Camera/AddNewCamera";
import RegionPage from "./Pages/Region/RegionPage";
import AddNewRegion from "./Pages/Region/AddNewRegion";
import LoginPage from "./Pages/Login/LoginPage";
import LakePage from "./Pages/Lake/LakePage";
import AddNewLake from "./Pages/Lake/AddNewLake";
import SchedulePage from "./Pages/Schedule/SchedulePage";
import AddNewSchedule from "./Pages/Schedule/AddNewSchedule";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This function is called when the user successfully logs in
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />

        {isLoggedIn && (
          <Route path="/" element={<View />}>
            <Route path="/sensors" element={<SensorPage />} />
            <Route path="/sensors/add" element={<AddNewSensor />} />
            <Route path="/camera" element={<CameraPage />} />
            <Route path="/camera/add" element={<AddNewCamera />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/users" element={<UserPage />} />
            <Route path="/instructions" element={<InstructionPage />} />
            <Route path="/instructions/add" element={<AddNewInstruction />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/regions" element={<RegionPage />} />
            <Route path="/regions/add" element={<AddNewRegion />} />
            <Route path="/lakes" element={<LakePage />} />
            <Route path="/lakes/add" element={<AddNewLake />} />
            <Route path="/schedules" element={<SchedulePage />} />
            <Route path="/schedules/add" element={<AddNewSchedule />} />
          </Route>
        )}

        {!isLoggedIn && <Route path="/*" element={<Navigate to="/login" />} />}
      </Routes>
    </Router>
  );
}

export default App;
