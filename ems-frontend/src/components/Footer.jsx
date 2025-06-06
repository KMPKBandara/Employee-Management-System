/*import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <span>All rights reserved 2025 by pramuditha </span>
      </footer>
    </div>
  );
};

export default Footer;*/
import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer className="simple-footer bg-light border-top mt-auto">
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Center - Description */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <p className="footer-description mb-0">
              Employee Management System
            </p>
          </div>

          {/* Right Side - Copyright */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex align-items-center justify-content-center justify-content-md-end">
              <FaRegCopyright className="me-1" />
              <span className="copyright-text">
                2025 <strong>EMS</strong>. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
