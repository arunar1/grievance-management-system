import React, { useContext } from "react";
import { assigneeGrievanceContext } from "../../../Hooks/context/AsigneeGrievance";
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from "react-router-dom";
export default function CloseGrievance() {
  const { assigneeGrievance, setAssigneeGrievance } = useContext(
    assigneeGrievanceContext
  );

  console.log(assigneeGrievance);
  const navigation = useNavigate();
  const Card = assigneeGrievance.filter((item)=> item.status=="Resolved")?.map((item) => {
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
      <h2 className="mb-4 container">Grievance Resolved</h2>
      {Card}
      {assigneeGrievance.filter((item)=> item.status=="Resolved").length ==
        0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>No Grievance </h5>
        </div>
      )}
    </div>
  );
}
