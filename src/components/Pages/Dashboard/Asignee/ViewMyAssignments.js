import React, { useContext } from 'react'
import { assigneeGrievanceContext } from '../../../Hooks/context/AsigneeGrievance'
import { GrievanceCard } from '../../../Card/GrievanceCard';
import { useNavigate } from 'react-router-dom';
export default function ViewMyAssignments() {
  const {assigneeGrievance, setAssigneeGrievance} = useContext(assigneeGrievanceContext);

  console.log(assigneeGrievance)
  const navigation = useNavigate();
  const Card = assigneeGrievance
    .filter((item) => item.status !== "Resolved")
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map((item) => <GrievanceCard key={item.id} data={item} />);


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
