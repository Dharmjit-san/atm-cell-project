import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTachometerAlt,
  FaSearch,
  FaBuilding,
  FaUsers,
  FaCreditCard,
  FaExchangeAlt,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="text-white vh-100 p-3"
      style={{
        width: isOpen ? "220px" : "80px",
        backgroundColor: "#0f5132",
        transition: "0.3s",
      }}
    >
      <button
        className="btn btn-outline-light mb-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </button>

      <ul className="nav flex-column" style={{ fontSize: "14px" }}>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/dashboard">
            <FaTachometerAlt className="me-2" />
            {isOpen && "Dashboard"}
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white sidebar-link" to="/admin/search">
            <FaSearch className="me-2" />
            {isOpen && "Branch Wise Search"}
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/branch">
            <FaBuilding className="me-2" />
            {isOpen && "Manage Branch"}
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/users">
            <FaUsers className="me-2" />
            {isOpen && "Manage Users"}
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/cards">
            <FaCreditCard className="me-2" />
            {isOpen && "Manage Cards"}
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/admin/transfer">
            <FaExchangeAlt className="me-2" />
            {isOpen && "Transfer Cards"}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
