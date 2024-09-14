import React, { useContext } from "react";
import { userGrievanceContext } from "../../../Hooks/context/UserGrievance";
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from "react-router-dom";

export default function AddFeedback() {
  const navigation = useNavigate();
  const { userGrievance } = useContext(userGrievanceContext);
  console.log(userGrievance);
  const Card = userGrievance
    .filter((item) => item.status === "Resolved")
    ?.map((item) => {
      return <GrievanceCard data={item} type="feed" />;
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
      <h2 className="mb-4 container">Grievances Feedback</h2>
      {Card}
      {userGrievance.filter((item) => item.status === "Resolved").length ==
        0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>No Grievance Available for Feedback Submission</h5>
        </div>
      )}
    </div>
  );
}
