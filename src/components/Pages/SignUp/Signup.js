import axios from "axios";
import React, { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    passCode: "",
    category: "",
    userType: "User",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    location: "",
    phone: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRoleChange = (userType) => {
    setFormData({
      ...formData,
      userType,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, lastName, email, password , category, phone , location, userType} = formData; 

    console.log(formData);
    try {
      const response = await axios.post("http://localhost:8080/addUser", {
        firstName,
        lastName,
        email,
        password,
        category,
        phone,
        location,
        userType,
      });

      console.log(response.data);
      if(response.data.success){
        alert("Registration is Successful");
         setFormData({
           passCode: "",
           category: "",
           userType: "User",
           firstName: "",
           lastName: "",
           email: "",
           password: "",
           location: "",
           phone: "",
           agree: false,
         });
      }
      else{
        alert(response.data.message)
      }
    } catch (error) {}
  };

  return (
    <div
      className="d-flex justify-content-center mb-2"
      style={{ marginTop: "4rem" }}
    >
      <form
        className="row g-3 signup-container m-4 m-md-0 p-1 p-md-2 p-lg-5"
        onSubmit={handleSubmit}
      >
        <div className="row" style={{ marginBottom: "4rem" }}>
          <label className="col-sm-2 col-form-label">Role</label>
          <div className="col-sm-4">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle custome-dropdown bg-white"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {formData.userType || "Select Role"}
              </button>
              <ul className="dropdown-menu">
                {["User", "Supervisor", "Asignee"].map((userType) => (
                  <li key={userType}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => handleRoleChange(userType)}
                    >
                      {userType}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
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
          {formData.userType !== "User" ? (
            <div className="col-md-6 mb-3 mb-md-0">
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
          {formData.userType === "Asignee" ? (
            <div className="col-md-6">
              <label htmlFor="inputCategory4" className="form-label">
                Category
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCategory4"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
          ) : null}
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
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
          <div className="col-md-6 mb-3 mb-md-0">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPhone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhone"
              name="phone"
              value={formData.phone}
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
