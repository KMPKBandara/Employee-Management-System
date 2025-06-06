import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="simple-footer bg-light border-top mt-auto">
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Left Side - Description */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <p className="footer-description mb-0">
              Employee Management System
            </p>
          </div>

          {/* Center - Copyright */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center">
              <FaRegCopyright className="me-1" />
              <span className="copyright-text">
                2025 <strong>EMS</strong>. All rights reserved.
              </span>
            </div>
          </div>

          {/* Right Side - Empty column to balance the layout */}
          <div className="col-md-4"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
