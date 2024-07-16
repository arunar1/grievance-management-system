import React from "react";
import Header from "./Header";
import Main from "./Main";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 login-background">
      <Header />

      <div className="row">
        <div className="col-6 d-none d-lg-block  m-5 p-1 text-white"></div>
      </div>

      <div className="container-fluid d-flex flex-grow-1 align-items-center align-items-md-end pb-md-4">
        <div className="row w-100 ps-md-2">
          <div className="col-lg-7 d-none d-lg-flex flex-column justify-content-center align-items-center  text-center text-white">
            <div className="rounded m-2 p-5 main-text">
              <div
                id="carouselExampleAutoplaying"
                class="carousel slide"
                data-bs-ride="carousel"
                data-bs-interval="3000"
                data-bs-pause="hover"
              >
                <div class="carousel-inner">
                  <div class="carousel-item p-2 active" >
                    <h5>
                      Welcome to our Grievance Management System. Easily submit
                      and track your grievances with our secure and
                      user-friendly platform. Register now to ensure your
                      concerns are heard and addressed promptly.
                    </h5>
                    <Link to="/signup">
                      <button className="btn btn-success mt-3">Register</button>
                    </Link>
                  </div>
                  <div class="carousel-item">
                    <h3>Simplified Grievance Submission</h3>
                    <p>
                      Our Grievance Management System makes it easy to submit
                      complaints or feedback through a user-friendly interface,
                      ensuring your voice is heard and addressed promptly.
                      Suitable for organizations of all sizes, it handles
                      various types of grievances efficiently.
                    </p>
                  </div>
                  <div className="carousel-item">
                    <h3>Secure and Confidential</h3>
                    <p>
                      We prioritize the security and confidentiality of all
                      grievances. Robust security measures protect user data,
                      ensuring complaints are handled discreetly and
                      professionally, maintaining the integrity of the grievance
                      process.
                    </p>
                  </div>
                  <div className="carousel-item">
                    <h3>Efficient Tracking and Resolution</h3>
                    <p>
                      Easily track the status of your grievances with real-time
                      updates from submission to resolution. This transparency
                      builds trust and ensures accountability, fostering a
                      positive environment within the organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 d-flex justify-content-end">
            <div className="pe-md-4">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
