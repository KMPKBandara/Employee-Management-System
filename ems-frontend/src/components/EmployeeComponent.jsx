import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaSave,
  FaArrowLeft,
  FaUserPlus,
  FaUserEdit,
} from "react-icons/fa";
import "./css/EmployeeComponent.css";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      getEmployee(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmail(response.data.email);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const employee = { firstName, lastName, email };
      console.log(employee);

      if (id) {
        updateEmployee(id, employee)
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            navigator("/employees");
          })
          .catch((error) => {
            console.log(error);
            setIsLoading(false);
          });
      } else {
        createEmployee(employee)
          .then((response) => {
            console.log(response.data);
            setIsLoading(false);
            navigator("/employees");
          })
          .catch((error) => {
            console.error(error);
            setIsLoading(false);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    // Enhanced validation
    if (firstName.trim()) {
      if (firstName.trim().length < 2) {
        errorsCopy.firstName = "First name must be at least 2 characters";
        valid = false;
      } else {
        errorsCopy.firstName = "";
      }
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      if (lastName.trim().length < 2) {
        errorsCopy.lastName = "Last name must be at least 2 characters";
        valid = false;
      } else {
        errorsCopy.lastName = "";
      }
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errorsCopy.email = "Please enter a valid email address";
        valid = false;
      } else {
        errorsCopy.email = "";
      }
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function getPageTitle() {
    if (id) {
      return {
        title: "Update Employee",
        subtitle: "Modify employee information",
        icon: <FaUserEdit />,
      };
    } else {
      return {
        title: "Add New Employee",
        subtitle: "Create a new employee record",
        icon: <FaUserPlus />,
      };
    }
  }

  const pageInfo = getPageTitle();

  return (
    <div className="employee-form-container">
      {/* Header Section */}
      <div className="employee-form-header">
        <div className="container">
          <div className="row align-items-center py-4">
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-outline-secondary me-3"
                onClick={() => navigator("/employees")}
              >
                <FaArrowLeft className="me-2" />
                Back to Employees
              </button>
            </div>
            <div className="col">
              <div className="d-flex align-items-center">
                <div className="page-icon me-3">{pageInfo.icon}</div>
                <div>
                  <h1 className="page-title mb-1">{pageInfo.title}</h1>
                  <p className="page-subtitle mb-0">{pageInfo.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="employee-form-content">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="employee-form-card">
                <div className="card-body p-4 p-md-5">
                  {isLoading && (
                    <div className="loading-overlay">
                      <div
                        className="spinner-border text-primary"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  )}

                  <form onSubmit={saveOrUpdateEmployee} noValidate>
                    {/* First Name Field */}
                    <div className="form-group mb-4">
                      <label className="form-label fw-semibold">
                        <FaUser className="me-2 text-primary" />
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter employee's first name"
                        name="firstName"
                        value={firstName}
                        className={`form-control form-control-lg ${
                          errors.firstName ? "is-invalid" : ""
                        }`}
                        onChange={(e) => setFirstName(e.target.value)}
                        disabled={isLoading}
                      />
                      {errors.firstName && (
                        <div className="invalid-feedback d-flex align-items-center">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          {errors.firstName}
                        </div>
                      )}
                    </div>

                    {/* Last Name Field */}
                    <div className="form-group mb-4">
                      <label className="form-label fw-semibold">
                        <FaUser className="me-2 text-primary" />
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter employee's last name"
                        name="lastName"
                        value={lastName}
                        className={`form-control form-control-lg ${
                          errors.lastName ? "is-invalid" : ""
                        }`}
                        onChange={(e) => setLastName(e.target.value)}
                        disabled={isLoading}
                      />
                      {errors.lastName && (
                        <div className="invalid-feedback d-flex align-items-center">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          {errors.lastName}
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="form-group mb-4">
                      <label className="form-label fw-semibold">
                        <FaEnvelope className="me-2 text-primary" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Enter employee's email address"
                        name="email"
                        value={email}
                        className={`form-control form-control-lg ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-flex align-items-center">
                          <i className="fas fa-exclamation-circle me-2"></i>
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <div className="form-actions">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            ></span>
                            {id ? "Updating..." : "Adding..."}
                          </>
                        ) : (
                          <>
                            <FaSave className="me-2" />
                            {id ? "Update Employee" : "Add Employee"}
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Help Text */}
              <div className="help-text mt-4">
                <div className="alert alert-light border">
                  <div className="d-flex">
                    <i className="fas fa-info-circle text-primary me-3 mt-1"></i>
                    <div>
                      <h6 className="alert-heading mb-2">Form Guidelines</h6>
                      <ul className="mb-0 small">
                        <li>
                          First and last names must be at least 2 characters
                          long
                        </li>
                        <li>
                          Email address must be in a valid format (e.g.,
                          user@example.com)
                        </li>
                        <li>All fields are required and cannot be empty</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
