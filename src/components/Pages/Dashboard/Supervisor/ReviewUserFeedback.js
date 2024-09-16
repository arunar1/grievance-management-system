import React, { useContext } from "react";
import { supervisorGrievanceContext } from "../../../Hooks/context/SupervisorGrievance";
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from "react-router-dom";
export default function ReviewUserFeedback() {
  const { supervisorGrievance, setSupervisorGrievance } = useContext(
    supervisorGrievanceContext
  );

  const navigation = useNavigate();
  const Card = supervisorGrievance
    .filter((item) => item.feedback != null)
    ?.map((item) => {
      return <GrievanceCard data={item} display={true}  />;
    });

  return (
    <div className="container-fluid">
      <div className="backbtn mt-2 mb-5">
        <i
          class="btn fa-solid fa-arrow-left fa-2x"
          onClick={(e) => {
            e.stopPropagation();
            navigation(-1);
          }}
        ></i>
      </div>
      <h2 className="mb-4 container">Feedback</h2>
      {Card}
      {supervisorGrievance.filter((item) => item.feedback != null).length ==
        0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>No Feedback Submitted</h5>
        </div>
      )}
    </div>
  );
}
