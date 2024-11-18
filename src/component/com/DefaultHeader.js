import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/LandingPage.css"; 
import Assets from "../assets/Assets";

function DefaultHeader() {
  const navigate = useNavigate();

  return (
    <div className="nav-bar">
      <div className="container-fluid">
        {/* Header */}
        <div className="row align-items-center py-3">
          {/* Logo */}
          <div className="col-6 col-md-4">
            <img
              src={Assets?.LSmediaLOGO}
              alt="Logo"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>

          {/* Buttons for Login and Registration */}
          <div className="col-6 col-md-8 text-end">
            <div className="d-flex justify-content-end gap-3 flex-wrap">
              <button
                className="btn btn-outline-primary m-1"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button className="btn btn-danger m-1 " onClick={()=>navigate("/register")}>Register</button>
              <button
                className="btn btn-danger m-1"
                onClick={() => navigate("/companyRegister")}
              >
                Company Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultHeader;
