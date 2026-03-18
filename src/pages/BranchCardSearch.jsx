import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";
function BranchCardSearch() {
  const [branch, setBranch] = useState("");
  const [cardType, setCardType] = useState("");
  const [cards, setCards] = useState([]);
  const [branches, setBranches] = useState([]);
  useEffect(() => {
    loadBranches();
  }, []);
  const searchCards = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/card/search?branch=${branch}&cardType=${cardType}`,
    );

    setCards(res.data);
  };

  const loadBranches = async () => {
    const res = await axios.get("http://localhost:5000/api/branch/list");

    setBranches(res.data);
  };

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="flex-grow-1 admin-right-panel">
        <AdminNavbar />

        <div className="container mt-4">
          <h4>Branch Wise Card Search</h4>

          <div className="card p-3 mb-4">
            <select
              className="form-control mb-2"
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">Select Branch</option>
              {branches.map((b) => (
                <option key={b._id} value={b.branchName}>
                  {b.branchName}
                </option>
              ))}
            </select>
            <select
              className="form-control mb-2"
              value={cardType}
              onChange={(e) => setCardType(e.target.value)}
            >
              <option value="">Select Card Type</option>
              <option>Visa</option>
              <option>MasterCard</option>
              <option>RuPay</option>
            </select>

            <button className="btn btn-primary" onClick={searchCards}>
              Search Cards
            </button>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Card Number</th>
                <th>Card Type</th>
                <th>Branch</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {cards.map((c, index) => (
                <tr key={c._id}>
                  <td>{index + 1}</td>
                  <td>{c.cardNumber}</td>
                  <td>{c.cardType}</td>
                  <td>{c.branch}</td>
                  <td>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BranchCardSearch;
