import React, { useContext, useEffect, useState } from "react";
import "./ShowCard.css";
import { assigneeGrievanceContext } from "../Hooks/context/AsigneeGrievance";
import { userDetailsContext } from "../Hooks/context/UserDetails";
import { supervisorGrievanceContext } from "../Hooks/context/SupervisorGrievance";
export const ShowCard = () => {
    const {assigneeGrievance, setAssigneeGrievance} = useContext(assigneeGrievanceContext);
    const {supervisorGrievance,setSupervisorGrievance} = useContext(supervisorGrievanceContext);

    const  {userDetail,setUserDetails}=useContext(userDetailsContext);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [pending,setPending]=useState("00");
  const [completed,setCompleted]=useState("00")
  const [total,setTotal]=useState("00")

  console.log(userDetail.userType)

  
  useEffect(() => {
    if (userDetail) {
      if (userDetail.userType === "Asignee") {
        const totalGrievances = assigneeGrievance?.length || 0;
        const completedGrievances =
          assigneeGrievance?.filter((item) => item.status === "Resolved")
            .length || 0;
        setTotal(totalGrievances.toString());
        setCompleted(completedGrievances.toString());
        setPending(
          (totalGrievances - completedGrievances).toString()
        );
      } else if (userDetail.userType === "Supervisor") {
        const totalGrievances = supervisorGrievance?.length || 0;
        const completedGrievances =
          supervisorGrievance?.filter((item) => item.status === "Resolved")
            .length || 0;
        setTotal(totalGrievances.toString());
        setCompleted(completedGrievances.toString());
        setPending(
          (totalGrievances - completedGrievances).toString()
        );
      }
    }
  }, [userDetail, assigneeGrievance, supervisorGrievance]);


  const descriptions = [
    "Grievance Pending",
    "Grievance Completed",
    "Total Grievance",
  ];

  return (
    <div className="container mt-4">
      <div className="row h-100">
        <div className="col-md-6 col-sm-12 mb-3 mb-md-0">
          <div
            className={`box d-flex align-items-center justify-content-center ${
              hoveredIndex === 0 ? "hovered" : ""
            }`}
            style={{ height: "16rem" }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p style={{ fontSize: "5rem" }}>
              {pending.toString().length == 1 ? "0" : ""}
              {pending}
            </p>
            {hoveredIndex === 0 && (
              <div className="description">{descriptions[0]}</div>
            )}
          </div>
        </div>

        <div className="col-md-6 col-sm-12">
          <div
            className={`box d-flex align-items-center m-2 justify-content-center ${
              hoveredIndex === 1 ? "hovered" : ""
            }`}
            style={{ height: "8rem" }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p style={{ fontSize: "3rem" }}>
              {completed.toString().length == 1 ? "0" : ""}
              {completed}
            </p>
            {hoveredIndex === 1 && (
              <div className="description">{descriptions[1]}</div>
            )}
          </div>
          <div
            className={`box d-flex align-items-center m-2 justify-content-center ${
              hoveredIndex === 2 ? "hovered" : ""
            }`}
            style={{ height: "8rem" }}
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <p style={{ fontSize: "3rem" }}>
              {total.toString().length == 1 ? "0" : ""}
              {total}
            </p>
            {hoveredIndex === 2 && (
              <div className="description">{descriptions[2]}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
