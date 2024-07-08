import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    passCode:"",
    category:"",
    role: "User",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    zip: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRoleChange = (role) => {
    setFormData({
      ...formData,
      role,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "6rem" }}
    >
      <form className="row g-3 signup-container" onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">Role</label>
          <div className="col-sm-4">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle custome-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.role || "Select Role"}
              </button>
              <ul className="dropdown-menu">
                {["User", "Supervisor", "Asignee"].map((role) => (
                  <li key={role}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleRoleChange(role)}
                    >
                      {role}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="inputFirstname4" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputFirstname4"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastname4" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputLastname4"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          {formData.role != "User" ? (
            <div className="col-md-6">
              <label htmlFor="inputFirstname4" className="form-label">
                Pass Code
              </label>
              <input
                type="text"
                className="form-control"
                id="inputlicenseId4"
                name="passCode"
                value={formData.passCode}
                onChange={handleChange}
              />
            </div>
          ) : null}
          {formData.role === "Asignee" ? (
            <div className="col-md-6">
              <label htmlFor="inputCategory4" className="form-label">
                Category
              </label>
              <select
                className="form-control"
                id="inputCategory4"
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
          ) : null}
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputZip"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Agree to Terms and Conditions
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
