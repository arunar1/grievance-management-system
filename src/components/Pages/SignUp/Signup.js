import React from 'react';

export default function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="row g-3 w-50">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputFirstname4" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="inputFirstname4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputLastname4" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="inputLastname4" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Agree to Terms and Conditions
              </label>
            </div>
          </div>
        </div>
        <div className="row">
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
