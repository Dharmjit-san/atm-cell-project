import React from "react";
import { Link } from "react-router-dom";

function StaffDashboard() {

  const logout = () => {
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div className="container mt-4">

      <h2 className="mb-4">Staff Dashboard</h2>

      {/* Summary Cards */}
      <div className="row">

        <div className="col-md-4">
          <div className="card text-bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Cards</h5>
              <h3>1200</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Available Cards</h5>
              <h3>800</h3>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Issued Cards</h5>
              <h3>400</h3>
            </div>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="mt-4">

        <Link to="/staff/cards" className="btn btn-primary me-2">
          View Cards
        </Link>

        <Link to="/staff/issue" className="btn btn-success me-2">
          Issue Card
        </Link>

        <Link to="/staff/return" className="btn btn-warning me-2">
          Return Card
        </Link>

        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>

      </div>

    </div>
  );
}

export default StaffDashboard;