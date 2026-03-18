import React from "react";
import { FaUserCircle } from "react-icons/fa";

function AdminNavbar() {
  const logout = () => {
    localStorage.removeItem("role");
    window.location.href = "/";
  };
  return (
    <nav className="navbar navbar-light bg-white shadow px-4">
      <h4 className="m-0">ATM Card Portal</h4>

      <div>
        <FaUserCircle size={28} />

        <span className="ms-2">Admin</span>

        <button className="btn btn-danger ms-3" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default AdminNavbar;
