import React from 'react'

export default function ProfileComponent() {
  return (
    <div className="container-fluid   p-lg-5  ">
      <div class="card align-items-center">
        <i class="fa-solid fa-user fa-4x mt-3 "></i>
        <div class="card-body rounded-pill" style={{ textAlign: "center" }}>
          <h5 class="card-title pb-2 text-uppercase">Arun A R</h5>
          
          {/* <p class="card-text ">
            Email : <span>arun@123gmail.com</span>
          </p>
          <p class="card-text ">
            City : <span>Kozhikode</span>
          </p>
          <p class="card-text ">
            Pin : <span>673307</span>
          </p>
          <a href="#" class="btn btn-primary">
            Edit
          </a> */}
        </div>
      </div>
    </div>
  );
}
