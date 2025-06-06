import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserCog,
  FaUsers,
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
  FaSearch,
  FaChartBar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="hero-title">
                  Welcome to <span className="text-primary">EMS</span>
                </h1>
                <h2 className="hero-subtitle">Employee Management System</h2>
                <p className="hero-description">
                  Streamline your HR operations with our comprehensive employee
                  management solution. Manage employee records, track
                  information, and maintain your workforce data efficiently.
                </p>
                <div className="hero-buttons">
                  <Link
                    to="/employees"
                    className="btn btn-primary btn-lg me-3 mb-2"
                  >
                    <FaUsers className="me-2" />
                    View All Employees
                  </Link>
                  <Link
                    to="/add-employee"
                    className="btn btn-outline-success btn-lg mb-2"
                  >
                    <FaPlusCircle className="me-2" />
                    Add New Employee
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <div className="hero-card">
                  <div className="card-header">
                    <h5 className="mb-0">Employee Dashboard</h5>
                  </div>
                  <div className="card-body">
                    <div className="demo-stat">
                      <FaUsers className="stat-icon text-primary" />
                      <div>
                        <h6 className="mb-0">Total Employees</h6>
                        <small className="text-muted">Manage your team</small>
                      </div>
                    </div>
                    <div className="demo-stat">
                      <FaPlusCircle className="stat-icon text-success" />
                      <div>
                        <h6 className="mb-0">Quick Add</h6>
                        <small className="text-muted">
                          Onboard new members
                        </small>
                      </div>
                    </div>
                    <div className="demo-stat">
                      <FaEdit className="stat-icon text-warning" />
                      <div>
                        <h6 className="mb-0">Easy Updates</h6>
                        <small className="text-muted">
                          Modify employee data
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Core Features</h2>
            <p className="section-subtitle">
              Everything you need to manage your employees effectively
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon bg-primary">
                  <FaUsers />
                </div>
                <h4>Employee Directory</h4>
                <p>
                  View and manage all employee records in one centralized
                  location. Browse through employee details including ID, name,
                  and email information.
                </p>
                <Link to="/employees" className="feature-link">
                  View Employees <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon bg-success">
                  <FaPlusCircle />
                </div>
                <h4>Add New Employees</h4>
                <p>
                  Quickly onboard new team members with our user-friendly form.
                  Enter employee details and add them to your system instantly.
                </p>
                <Link to="/add-employee" className="feature-link">
                  Add Employee <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon bg-warning">
                  <FaEdit />
                </div>
                <h4>Update Records</h4>
                <p>
                  Easily modify employee information when changes occur. Keep
                  your employee database current and accurate.
                </p>
                <div className="feature-link text-muted">
                  Update via Employee List
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon bg-danger">
                  <FaTrashAlt />
                </div>
                <h4>Remove Employees</h4>
                <p>
                  Safely remove employee records when they leave the
                  organization. Maintain clean and organized employee data.
                </p>
                <div className="feature-link text-muted">
                  Delete via Employee List
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon bg-info">
                  <FaSearch />
                </div>
                <h4>Easy Search</h4>
                <p>
                  Find specific employees quickly with search functionality.
                  Locate team members by name, email, or employee ID.
                </p>
                <div className="feature-link text-muted">
                  Available in Employee List
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="feature-card">
                <div className="feature-icon bg-secondary">
                  <FaUserCog />
                </div>
                <h4>Data Management</h4>
                <p>
                  Comprehensive employee data management with secure storage.
                  Keep track of essential employee information efficiently.
                </p>
                <div className="feature-link text-muted">Integrated System</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose Our EMS?</h2>
            <p className="section-subtitle">
              Built for simplicity and efficiency
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <FaClock />
                </div>
                <h5>Time Saving</h5>
                <p>
                  Reduce administrative overhead with streamlined employee
                  management processes.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <FaShieldAlt />
                </div>
                <h5>Secure & Reliable</h5>
                <p>
                  Your employee data is safely stored and managed with modern
                  web technologies.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <FaChartBar />
                </div>
                <h5>Organized Data</h5>
                <p>
                  Keep all employee information organized and easily accessible
                  when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="quickstart-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h3 className="mb-3">Ready to get started?</h3>
              <p className="mb-0">
                Begin managing your employees today. Add your first employee or
                browse existing records to see how easy it is to use.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/add-employee" className="btn btn-primary btn-lg">
                <FaPlusCircle className="me-2" />
                Add First Employee
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
