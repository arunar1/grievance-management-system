import React, { useContext } from "react";
import { userGrievanceContext } from "../../../Hooks/context/UserGrievance";
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from "react-router-dom";

export default function TrackGrievance() {
  const navigation = useNavigate();
  const { userGrievance } = useContext(userGrievanceContext);

  const unresolvedGrievances = [...userGrievance]
    .reverse()
    ?.filter((item) => item.status !== "Resolved")
    .map((item) => {
      return <GrievanceCard data={item} key={item.slNumber} />;
    });

  const resolvedGrievances = [...userGrievance]
    .reverse()
    ?.filter((item) => item.status === "Resolved")
    .map((item) => {
      return <GrievanceCard data={item} key={item.slNumber} />;
    });

  return (
    <div className="container-fluid">
      <div className="backbtn mt-2 mb-5">
        <i
          className="btn fa-solid fa-arrow-left fa-2x"
          onClick={(e) => {
            e.stopPropagation();
            navigation(-1);
          }}
        ></i>
      </div>

      <h2 className="mb-4 container">Track Grievances</h2>

      <div className="unresolved-grievances mb-5 container">
        <h5 className=" text-primary">Unresolved Grievances</h5>
        {unresolvedGrievances.length > 0 ? (
          unresolvedGrievances
        ) : (
          <p>No unresolved grievances found.</p>
        )}
      </div>

      <div className="resolved-grievances container">
        <h5 className=" text-primary">Resolved Grievances</h5>
        {resolvedGrievances.length > 0 ? (
          resolvedGrievances
        ) : (
          <p>No resolved grievances found.</p>
        )}
      </div>

      {userGrievance.length === 0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>No Grievance Submitted</h5>
        </div>
      )}
    </div>
  );
}
