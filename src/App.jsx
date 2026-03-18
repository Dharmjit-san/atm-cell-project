import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import ManageBranch from "./pages/ManageBranch";
import ManageUser from "./pages/ManageUser";
import ManageCard from "./pages/ManageCard";
import TransferCards from "./pages/TransferCards";
import BranchCardSearch from "./pages/BranchCardSearch";

function App() {
  const role = localStorage.getItem("role");

  return (
    <Router>
      <Home></Home>
      <Routes>
        {role === "Admin" ? (
          <Route path="/" element={<AdminDashboard />} />
        ) : role === "Staff" ? (
          <Route path="/" element={<StaffDashboard />} />
        ) : (
          <Route path="/" element={<Login />} />
        )}

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/staff/dashboard" element={<StaffDashboard />} />
        <Route path="/admin/branch" element={<ManageBranch />} />
        <Route path="/admin/users" element={<ManageUser />} />
        <Route path="/admin/cards" element={<ManageCard />} />
        <Route path="/admin/transfer" element={<TransferCards />} />
        <Route path="/admin/search" element={<BranchCardSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
