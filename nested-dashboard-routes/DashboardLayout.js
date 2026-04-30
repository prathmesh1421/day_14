import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="dashboard">

      <div className="sidebar">
        <h2>Dashboard</h2>

        <NavLink to="/dashboard">Overview</NavLink>
        <NavLink to="profile">Profile</NavLink>
        <NavLink to="reports">Reports</NavLink>
        <NavLink to="settings">Settings</NavLink>
      </div>

      <div className="main">
        <div className="header">
          <h2>Welcome</h2>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
