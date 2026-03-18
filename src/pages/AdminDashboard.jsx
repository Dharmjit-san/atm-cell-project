import React from "react";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function AdminDashboard() {
  const data = {
    labels: ["Cards", "Issued", "Available"],

    datasets: [
      {
        label: "Statistics",
        data: [1500, 1000, 500],
        backgroundColor: ["#198754", "#ffc107", "#dc3545"],
      },
    ],
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 admin-right-panel">
        <AdminNavbar />

        <div className="container mt-4">
          <h3>Admin Dashboard</h3>

          <div className="row mt-4">
            <div className="col-md-3">
              <div className="card shadow p-3">
                <h5>Total Branch</h5>
                <h2>25</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3">
                <h5>Total Cards</h5>
                <h2>1500</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3">
                <h5>Issued Cards</h5>
                <h2>1000</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card shadow p-3">
                <h5>Available Cards</h5>
                <h2>500</h2>
              </div>
            </div>
          </div>

          <div className="card mt-5 p-4 shadow">
            <h5>Card Statistics</h5>

            <Bar data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
