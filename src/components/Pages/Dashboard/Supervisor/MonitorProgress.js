import React, { useContext, useEffect,useState} from "react";
import { supervisorGrievanceContext } from "../../../Hooks/context/SupervisorGrievance";
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from "react-router-dom";
import { Filter } from "../Filter/Filter";
export default function MonitorProgress() {

  const [filterMail, setFilterMail] = useState("");
  const [Card, setCard] = useState([]);

  const { supervisorGrievance, setSupervisorGrievance } = useContext(
    supervisorGrievanceContext
  );

  const navigation = useNavigate();
  useEffect(()=>{
    const Card = [...supervisorGrievance]
      ?.filter((item) => item.status != "Resolved")
      ?.filter((item) => item.email.includes(filterMail.trim()))
      ?.map((item) => {
        return <GrievanceCard data={item} />;
      });
      setCard(Card);
  },[filterMail,supervisorGrievance])

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
      <Filter value={{ setFilterMail, filterMail }} />
      {Card}
      {[...supervisorGrievance].filter((item) => item.status != "Resolved")
        .length == 0 && (
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