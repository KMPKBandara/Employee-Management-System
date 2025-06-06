import React, { useEffect, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaPlusCircle,
  FaEdit,
  FaTrashAlt,
  FaSearch,
  FaUserTie,
  FaEnvelope,
  FaIdCard,
} from "react-icons/fa";
import "./css/ListEmployee.css";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    // Filter employees based on search term
    const filtered = employees.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.id.toString().includes(searchTerm)
    );
    setFilteredEmployees(filtered);
  }, [employees, searchTerm]);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewEmployee() {
    navigator("/add-employee");
  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }

  function removeEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      console.log(id);
      deleteEmployee(id)
        .then((response) => {
          getAllEmployees();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="employee-list-container">
      {/* Header Section */}
      <div className="employee-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="header-content">
                <div className="header-icon">
                  <FaUsers />
                </div>
                <div>
                  <h1 className="page-title">Employee Directory</h1>
                  <p className="page-subtitle">
                    Manage your team members and their information
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-lg-end">
              <button className="btn btn-add-employee" onClick={addNewEmployee}>
                <FaPlusCircle className="me-2" />
                Add New Employee
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-4">
        {/* Search and Stats Section */}
        <div className="row mb-4">
          <div className="col-lg-8">
            <div className="search-container">
              <div className="search-input-wrapper">
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search employees by name, email, or ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="stats-card">
              <div className="stats-content">
                <h3 className="stats-number">{filteredEmployees.length}</h3>
                <p className="stats-label">
                  {searchTerm ? "Found" : "Total"} Employees
                </p>
              </div>
              <div className="stats-icon">
                <FaUserTie />
              </div>
            </div>
          </div>
        </div>

        {/* Employee Cards for Mobile */}
        <div className="d-lg-none">
          <div className="row">
            {filteredEmployees.map((employee) => (
              <div key={employee.id} className="col-12 mb-3">
                <div className="employee-card-mobile">
                  <div className="employee-card-header">
                    <div className="employee-avatar">
                      <FaUserTie />
                    </div>
                    <div className="employee-info">
                      <h5 className="employee-name">
                        {employee.firstName} {employee.lastName}
                      </h5>
                      <p className="employee-email">
                        <FaEnvelope className="me-2" />
                        {employee.email}
                      </p>
                      <p className="employee-id">
                        <FaIdCard className="me-2" />
                        ID: {employee.id}
                      </p>
                    </div>
                  </div>
                  <div className="employee-actions">
                    <button
                      className="btn btn-action btn-edit"
                      onClick={() => updateEmployee(employee.id)}
                    >
                      <FaEdit className="me-1" />
                      Edit
                    </button>
                    <button
                      className="btn btn-action btn-delete"
                      onClick={() => removeEmployee(employee.id)}
                    >
                      <FaTrashAlt className="me-1" />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Employee Table for Desktop */}
        <div className="d-none d-lg-block">
          <div className="table-container">
            <div className="table-responsive">
              <table className="table employee-table">
                <thead>
                  <tr>
                    <th>
                      <FaIdCard className="me-2" />
                      Employee ID
                    </th>
                    <th>
                      <FaUserTie className="me-2" />
                      First Name
                    </th>
                    <th>
                      <FaUserTie className="me-2" />
                      Last Name
                    </th>
                    <th>
                      <FaEnvelope className="me-2" />
                      Email
                    </th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map((employee) => (
                    <tr key={employee.id}>
                      <td>
                        <span className="employee-id-badge">{employee.id}</span>
                      </td>
                      <td>
                        <div className="employee-name-cell">
                          <div className="employee-avatar-small">
                            <FaUserTie />
                          </div>
                          {employee.firstName}
                        </div>
                      </td>
                      <td>{employee.lastName}</td>
                      <td>
                        <a
                          href={`mailto:${employee.email}`}
                          className="email-link"
                        >
                          {employee.email}
                        </a>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button
                            className="btn btn-action btn-edit"
                            onClick={() => updateEmployee(employee.id)}
                            title="Edit Employee"
                          >
                            <FaEdit />
                          </button>
                          <button
                            className="btn btn-action btn-delete"
                            onClick={() => removeEmployee(employee.id)}
                            title="Delete Employee"
                          >
                            <FaTrashAlt />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredEmployees.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <FaUsers />
            </div>
            <h3>{searchTerm ? "No employees found" : "No employees yet"}</h3>
            <p>
              {searchTerm
                ? "Try adjusting your search terms"
                : "Start by adding your first employee"}
            </p>
            {!searchTerm && (
              <button className="btn btn-add-employee" onClick={addNewEmployee}>
                <FaPlusCircle className="me-2" />
                Add First Employee
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
