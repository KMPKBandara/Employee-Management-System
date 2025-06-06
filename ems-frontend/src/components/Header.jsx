import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import "./css/Header.css";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed-top">
      <nav
        className={`navbar navbar-expand-lg navbar-light bg-white shadow-sm ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container">
          {/* Brand Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="brand-icon-wrapper me-2">
              <FaUsers className="brand-icon" />
            </div>
            <span className="brand-text">EMS</span>
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links - Centered */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  to="/employees"
                  className={`nav-link ${
                    location.pathname === "/employees" ? "active" : ""
                  }`}
                >
                  Employees
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link
                  to="/add-employee"
                  className={`nav-link ${
                    location.pathname === "/add-employee" ? "active" : ""
                  }`}
                >
                  Add Employee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
