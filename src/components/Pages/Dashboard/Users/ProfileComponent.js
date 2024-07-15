import React from 'react'

export default function ProfileComponent() {
  return (
    <div className="container-fluid   p-lg-5 ">
      <div class="card align-items-center  rounded-circle">
        <i class="fa-solid fa-user fa-4x mt-3 "></i>
        <div class="card-body" style={{ textAlign: "center" }}>
          <h5 class="card-title pb-3 ">Arun A R</h5>
          <p class="card-text ">Email : arun@123gmail.com</p>
          <p class="card-text ">City : Kozhikode</p>
          <p class="card-text ">Pin : 673307</p>
          <a href="#" class="btn btn-primary">
            Edit
          </a>
        </div>
      </div>
    </div>
  );
}
