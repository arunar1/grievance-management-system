import React from "react";

export default function User() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div
          className="col-md-1 bg-black text-md-center"
          style={{ padding: "20px" }}
        >
          <button
            class="bi bi-list"
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
                <div className="btn btn-success m-3">Add Grievance</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6 bg-success">
              <div className="user-data min-vh-md-100 align-items-center d-flex justify-content-center">
                Profile component
              </div>
            </div>
            <div className="col-md-6 bg-white">
              <div className="user-data min-vh-md-100 align-items-center d-flex justify-content-center">
                Add Grievance component
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
