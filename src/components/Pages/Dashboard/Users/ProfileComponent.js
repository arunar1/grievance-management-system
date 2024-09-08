import React from 'react'
import { useContext } from 'react';
import { userDetailsContext } from '../../../Hooks/context/UserDetails';
export default function ProfileComponent() {

  const { userDetail, setUserDetails } = useContext(userDetailsContext);
  // console.log(userDetail)

  return (
    <div className="container-fluid   p-lg-5  ">
      <div class="card align-items-center">
        <i class="fa-solid fa-user fa-4x mt-3 "></i>
        <div class="card-body rounded-pill" style={{ textAlign: "center" }}>
          <h5 class="card-title pb-2 text-uppercase">
            {userDetail.firstName ? userDetail.firstName.trim() : null} &nbsp;{" "}
            {userDetail.lastName ? userDetail.lastName.trim() : null}
          </h5>
          <h6 class="card-title pb-2 text-uppercase text-secondary">
            {userDetail.userType}
          </h6>

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
