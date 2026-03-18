import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* Header */}
      <div className="header">

        <div className="d-flex justify-content-center align-items-center">

          {/* Logo */}
          <img
            src="/src/assets/logo.png"
            alt="Bank Logo"
            width="70"
            className="me-3"
          />

          {/* Bank Name */}
          <h2 className="m-0">
            The Sangrur Central Cooperative Bank Ltd.
          </h2>

        </div>

        <h5 className="mt-2">ATM Card Management Portal</h5>

      </div>

    </div>
  );
}

export default Home;