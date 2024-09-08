import React from "react";
import Header from "../Home/Header";

export default function Contact() {
  return (
    <div className="min-vh-100 contact-page bg-light">
      <Header />
      <div className="container py-5 d-flex justify-content-center align-items-center">
        <div className="w-50 p-4 bg-white rounded shadow-sm">
          <h3 className="text-center mb-4">Contact Us</h3>
          <form>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Enter your first name"
                  aria-label="First name"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Enter your phone number"
                  aria-label="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
