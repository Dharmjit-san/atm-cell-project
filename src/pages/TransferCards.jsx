import React, { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

function TransferCards() {
  const [fromBranch, setFromBranch] = useState("");
  const [toBranch, setToBranch] = useState("");
  const [quantity, setQuantity] = useState("");

  const transferCards = async () => {
    const res = await axios.post("http://localhost:5000/api/card/transfer", {
      fromBranch,
      toBranch,
      quantity,
    });

    alert(res.data.message);
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 admin-right-panel">
        <AdminNavbar />
        <div className="container mt-4">
          <h4>Transfer Cards</h4>

          <div className="card p-3">
            <select
              className="form-control mb-2"
              onChange={(e) => setFromBranch(e.target.value)}
            >
              <option value="">From Branch</option>
              <option>HO</option>
              <option>Sangrur</option>
              <option>Patiala</option>
            </select>

            <select
              className="form-control mb-2"
              onChange={(e) => setToBranch(e.target.value)}
            >
              <option value="">To Branch</option>
              <option>HO</option>
              <option>Sangrur</option>
              <option>Patiala</option>
            </select>

            <input
              className="form-control mb-2"
              placeholder="Quantity"
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />

            <button className="btn btn-primary" onClick={transferCards}>
              Transfer Cards
            </button>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default TransferCards;
