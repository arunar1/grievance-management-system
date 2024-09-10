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
    .map((item) => {
      return <GrievanceCard data={item} />;
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
      <h2 className="mb-4 container">Grievances</h2>
      {Card}
    </div>
  );
}
