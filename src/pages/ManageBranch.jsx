import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

function ManageBranch() {
  const [branchName, setBranchName] = useState("");
  const [branchId, setBranchCode] = useState("");
  const [address, setLocation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [branches, setBranches] = useState([]);
  const [search, setSearch] = useState("");

  // LOAD BRANCHES
  useEffect(() => {
    loadBranches();
  }, []);

  const loadBranches = async () => {
    const res = await axios.get("http://localhost:5000/api/branch/list");

    setBranches(res.data);
  };

  // ADD BRANCH
  const addBranch = async () => {
    const res = await axios.post("http://localhost:5000/api/branch/add", {
      branchName,
      branchId,
      address,
      phoneNumber,
    });
    if(res.data.status == "success")
    {
        alert("Branch Added");
    }
    else
    {
        alert(res.data.message);
    }

    loadBranches();
  };

  // DELETE BRANCH
  const deleteBranch = async (id) => {
    if (window.confirm("Are you sure you want to delete this branch?")) {
      await axios.delete(`http://localhost:5000/api/branch/delete/${id}`);
      alert("Branch Deleted Successfully");
      loadBranches();
    }
  };
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 admin-right-panel">
        <AdminNavbar />
        <div className="container mt-4">
          <h4>Manage Branch</h4>

          <div className="card p-3 mb-4">
             <input
              className="form-control mb-2"
              placeholder="Branch Code"
              onChange={(e) => setBranchCode(e.target.value)}
              required
            />

            <input
              className="form-control mb-2"
              placeholder="Branch Name"
              onChange={(e) => setBranchName(e.target.value)}
              required
            />

            <input
              className="form-control mb-2"
              placeholder="Address"
              onChange={(e) => setLocation(e.target.value)}
              required
            />

            <input
              className="form-control mb-2"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />

            <button className="btn btn-success" onClick={addBranch}>
              Add Branch
            </button>
          </div>
          <div>
            <input
              className="form-control mb-3"
              placeholder="Search Branch..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>SNo</th>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {branches
                  .filter((b) =>
                    b.branchName.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((b, index) => (
                    <tr key={b._id}>
                      <td>{index + 1}</td>
                      <td>{b.branchName}</td>
                      <td>{b.branchId}</td>
                      <td>{b.address}</td>
                      <td>{b.phoneNumber}</td>

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteBranch(b._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default ManageBranch;
