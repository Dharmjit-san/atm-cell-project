import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      console.log("Login Response:", res.data);

      if (res.data.status === "success") {
        localStorage.setItem("role", res.data.role);

        if (res.data.role === "Admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/staff/dashboard");
        }
      } else {
        alert("Invalid Login Credentials");
      }
    } catch (error) {
      console.error("Axios Error:", error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-header text-center">
              <h4>ATM Card Portal Login</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary w-100">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
