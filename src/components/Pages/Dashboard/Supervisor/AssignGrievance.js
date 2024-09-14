import React, { useContext } from 'react'
import ProfileComponent from '../Users/ProfileComponent'
import { allUserContext } from '../../../Hooks/context/Alluser'
import { useNavigate } from 'react-router-dom'

export const AssignGrievance = () => {
  const navigation = useNavigate();
  const {allusers,setAllusers} = useContext(allUserContext)

  const card = [...allusers].filter((item)=>item.userType=="Asignee")?.map((item)=>{
    return <ProfileComponent data={item} user="sup"/>
  })

  return (
    <div className="container-fuild">
      <div className="backbtn mt-2 mb-5">
        <i
          class="btn fa-solid fa-arrow-left fa-2x"
          onClick={(e) => {
            e.stopPropagation();
            navigation(-1);
          }}
        ></i>
      </div>
      <h2 className="mb-4 container">Assignees</h2>
      <div className="container">{card}</div>
      {[...allusers].filter((item)=>item.userType=="Asignee").length == 0 && (
        <div
          className="container text-center d-flex justify-content-center align-items-center"
          style={{ height: "300px" }}
        >
          <h5>Assignees Are Not Registered</h5>
        </div>
      )}
    </div>
  );
}
