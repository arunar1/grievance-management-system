import React from "react";
import Header from "../Home/Header";

export default function Contact() {
  return (
    <div className="min-vh-100 contact-page">
      <Header />
      <div className="container bg-success d-flex justify-content-center align-items-center">
        <div className="w-50">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                aria-label="First name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone Number"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
