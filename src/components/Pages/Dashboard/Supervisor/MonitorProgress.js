import React, { useContext } from "react";
import { supervisorGrievanceContext } from "../../../Hooks/context/SupervisorGrievance";
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from "react-router-dom";
export default function MonitorProgress() {
  const { supervisorGrievance, setSupervisorGrievance } = useContext(
    supervisorGrievanceContext
  );

  const navigation = useNavigate();
  const Card = supervisorGrievance
    .filter((item) => item.status != "Resolved")
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
      {supervisorGrievance.filter((item) => item.status != "Resolved").length ==
        0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>No Grievance are in Pending or Working on</h5>
        </div>
      )}
    </div>
  );
}