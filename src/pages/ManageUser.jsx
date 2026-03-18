import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import AdminNavbar from "../components/AdminNavbar";

function ManageUser() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  // LOAD USERS
  useEffect(() => {
    loadUsers();
    loadBranches();
    loadRoles();
  }, []);

  const loadUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/user/list");

    setUsers(res.data);
  };

  const loadRoles = async () => {
    const res = await axios.get("http://localhost:5000/api/role/list");

    setRoles(res.data);
  };

  const loadBranches = async () => {
    const res = await axios.get("http://localhost:5000/api/branch/list");

    setBranches(res.data);
  };

  // ADD USER
  const addUser = async () => {
    const res = await axios.post("http://localhost:5000/api/user/add", {
      name,
      username,
      password,
      role,
      branch,
    });

    console.log("Login Response:", res.data.message);

    alert(res.data.message);

    loadUsers();
  };

  // DELETE USER
  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:5000/api/user/delete/${id}`);
      alert("User Deleted Successfully");
      loadUsers();
    }
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 admin-right-panel">
        <AdminNavbar />
        <div className="container mt-4">
          <h4>Manage Users</h4>

          <div className="card p-3 mb-4">
            <input
              className="form-control mb-2"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              className="form-control mb-2"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select Role</option>
              {roles.map((r) => (
                <option key={r._id} value={r.role}>
                  {r.role}
                </option>
              ))}
            </select>

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

            <button className="btn btn-success" onClick={addUser}>
              Add User
            </button>
          </div>

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>SNo</th>
                <th>Name</th>
                <th>Username</th>
                <th>Role</th>
                <th>Branch</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, index) => (
                <tr key={u._id}>
                  <td>{index + 1}</td>
                  <td>{u.name}</td>
                  <td>{u.username}</td>
                  <td>{u.role}</td>
                  <td>{u.branch}</td>

                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteUser(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUser;
