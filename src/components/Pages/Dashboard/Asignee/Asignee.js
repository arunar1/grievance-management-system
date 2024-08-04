import React from 'react'
import ProfileComponent from '../Users/ProfileComponent';
import { Link } from 'react-router-dom';
export default function Asignee() {

  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div
          className="col-md-1 bg-black text-md-center"
          style={{ padding: "20px" }}
        >
          <button
            className="bg-black text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
            <i className="fa-solid fa-bars fa-2x"></i>
          </button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabindex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasScrollingLabel">
                Menu
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body text-center">
              <div className="d-flex flex-column p-5">
                <div className="btn btn-success m-3">Show Grievance</div>
                <div className="btn btn-success m-3">option 1</div>
                <div className="btn btn-success m-3">option 2</div>
                <div className="btn btn-success m-3">option 3</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6 bg-success">
              <div className="user-data min-vh-md-100 align-items-center d-flex justify-content-center  pt-4 pb-4 p-lg-5">
                <ProfileComponent />
              </div>
            </div>
            <div className="col-md-6 bg-white">
              <div className="user-data min-vh-md-100 align-items-center d-flex pt-5 pt-md-0 justify-content-center">
                <div
                  class="text-secondary pt-5 mt-5 mt-md-0 pt-md-0"
                  style={{ textAlign: "center" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-none d-md-block col-md-1 text-center">
          <Link to="/">
            <i
              class="fa-solid fa-right-from-bracket fa-2x"
              style={{ color: "white", marginTop: "20px" }}
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
