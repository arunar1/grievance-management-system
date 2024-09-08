import React, { useContext } from 'react'
import { userGrievanceContext } from '../../../Hooks/context/UserGrievance'
import { GrievanceCard } from "../../../Card/GrievanceCard";
import { useNavigate } from 'react-router-dom';


export default function TrackGrievance() {

  const navigation = useNavigate();
  const { userGrievance } = useContext(userGrievanceContext);
  console.log(userGrievance)
  const Card = userGrievance.map((item)=>{
    return <GrievanceCard data={item} />;
  })


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
      {Card}
    </div>
  );
}
