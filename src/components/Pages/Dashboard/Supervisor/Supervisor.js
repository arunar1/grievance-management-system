import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileComponent from "../Users/ProfileComponent";
import { Link } from 'react-router-dom';
import { ShowCard } from "../../../Card/ShowCard";
import { supervisorGrievanceContext } from '../../../Hooks/context/SupervisorGrievance';
import { allUserContext } from '../../../Hooks/context/Alluser';
import axios from 'axios';

export default function Supervisor() {

  const {supervisorGrievance,setSupervisorGrievance} = useContext(supervisorGrievanceContext);
  const {allusers,setAllusers} = useContext(allUserContext)


  const navigate = useNavigate();

useEffect(() => {
  const fetchAllGrievance = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/allGrievance`);
      console.log(response.data);
      setSupervisorGrievance(response.data)
    } catch (error) {
      console.error("Error fetching grievances:", error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL}/allUsers`);
      console.log(response.data);
      setAllusers(response.data)
    } catch (error) {
      // console.error("Error fetching users:", error);
    }
  };

  fetchAllGrievance();
  fetchAllUsers();
}, []);



  return (
    <div className="container-fluid" style={{ backgroundColor: "black" }}>
      <div className="row">
        <div
          className="col-md-1 bg-black text-md-center d-flex d-md-block justify-content-between"
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
          <div className=" d-md-none col-md-1 d-flex ">
            <i
              onClick={() => {
                navigate("/");
              }}
              class="btn fa-solid fa-right-from-bracket fa-2x"
              style={{ color: "white" }}
            ></i>
          </div>

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
                <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/supervisor_home/view_all_grievance");
                  }}
                >
                  View Grievances
                </div>

                {/* <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/supervisor_home/approve_reject_grievance");
                  }}
                >
                  Approve or Reject Grievances
                </div> */}
                <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/supervisor_home/monitor_progress");
                  }}
                >
                  Pending Grievance
                </div>
                {/* <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/supervisor_home/generate_report");
                  }}
                >
                  Generate Reports
                </div> */}
                <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/supervisor_home/review_user_feedback");
                  }}
                >
                  User Feedbacks
                </div>
                <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/supervisor_home/assign_grievance");
                  }}
                >
                  Assignees
                </div>
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
              <div className="user-data min-vh-md-100 align-items-center m-5 d-flex pt-5 pt-md-0 justify-content-center">
                <ShowCard />
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
