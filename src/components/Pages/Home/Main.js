import React, { useState } from "react";

export default function Main() {
  const [userType, setUserType] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.textContent);
    console.log(event.target.textContent)
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("User Type:", userType);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="container d-flex  login-container  "
    >
      <form onSubmit={handleSubmit} className="login-form text-white">
        <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Role</label>
          <div className="col-sm-8">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-white custome-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userType}
              </button>
              <ul className="dropdown-menu">
                <li className="">
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleUserTypeChange}
                  >
                    User
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleUserTypeChange}
                  >
                    Supervisor
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleUserTypeChange}
                  >
                    Asignee
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* {userType==='Asignee' ? ():()} */}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
            Email
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
