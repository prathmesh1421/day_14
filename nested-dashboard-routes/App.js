import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";
import Overview from "./Overview";
import Profile from "./Profile";
import Reports from "./Reports";
import Settings from "./Settings";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root → dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
