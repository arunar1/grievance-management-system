import React, { useContext, useEffect, useState } from 'react'
import { assigneeGrievanceContext } from '../../../Hooks/context/AsigneeGrievance'
import { GrievanceCard } from '../../../Card/GrievanceCard';
import { useNavigate } from 'react-router-dom';
import { Filter } from '../Filter/Filter';
export default function ViewMyAssignments() {
  const {assigneeGrievance, setAssigneeGrievance} = useContext(assigneeGrievanceContext);

  const [filterMail,setFilterMail] =useState('');
  const [Card,setCard]=useState([])

  const navigation = useNavigate();

  useEffect(() => {
    const Card = [...assigneeGrievance]
      ?.filter((item) => item.status !== "Resolved" )
      ?.sort((a, b) => new Date(a.date) - new Date(b.date))
      ?.filter((item) => item.email.includes(filterMail.trim()))
      ?.map((item) => <GrievanceCard key={item.id} data={item} />);
    setCard(Card);
  }, [filterMail, assigneeGrievance]);



  

    console.log(filterMail)


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
      
      <h2 className="mb-4 container">Assigned Grievances</h2>
      <Filter  value ={{setFilterMail,filterMail}} />
      {Card}
      {[...assigneeGrievance].filter((item) => item.status !== "Resolved").length ==
        0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>No Grievance Available</h5>
        </div>
      )}
    </div>
  );
  
}
