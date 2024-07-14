import React from "react";

export default function User() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div className="d-none d-md-block col-md-1 bg-black">
          <button
            class="btn btn-danger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasScrolling"
            aria-controls="offcanvasScrolling"
          >
           Menu
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
                Offcanvas with body scrolling
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-6 bg-success">
              <div className="user-data min-vh-md-100">Hoi</div>
            </div>
            <div className="col-md-6 bg-white">
              <div className="add-grievance min-vh-md-100">Hi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
