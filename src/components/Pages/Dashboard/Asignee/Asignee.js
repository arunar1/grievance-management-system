import React, { useContext,useEffect } from 'react'
import ProfileComponent from '../Users/ProfileComponent';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { userDetailsContext } from '../../../Hooks/context/UserDetails';
import axios from 'axios';
import { assigneeGrievanceContext } from '../../../Hooks/context/AsigneeGrievance';
import { ShowCard } from '../../../Card/ShowCard';


export default function Asignee() {
  const {userDetail} = useContext(userDetailsContext);
      const {assigneeGrievance, setAssigneeGrievance} = useContext(assigneeGrievanceContext);



  const navigate = useNavigate();

   useEffect(() => {
     const fetchData = async () => {
       try {
         const response = await axios.get(
           `${process.env.REACT_APP_URL}/grievanceByCategory`,
           { params: { category: userDetail.category } }
         );

         if(response.status==200){
          console.log(response)
          setAssigneeGrievance(response.data.data ||[]);
         }
       } catch (error) {}
     };
     fetchData();
   }, []);


   console.log(userDetail)
  


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
                    navigate("/asignee_home/view_my_assignment");
                  }}
                >
                  View Assignments
                </div>
                {/* <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/asignee_home/update_grievance_status");
                  }}
                >
                  Update Grievance Status
                </div> */}
                <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/asignee_home/close_grievance");
                  }}
                >
                  Closed Grievance
                </div>
                <div
                  className="btn btn-success m-3"
                  onClick={() => {
                    navigate("/asignee_home/track_workload");
                  }}
                >
                  Track Workload
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
