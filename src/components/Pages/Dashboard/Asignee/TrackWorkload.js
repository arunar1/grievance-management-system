import React from 'react'
import { ShowCard } from '../../../Card/ShowCard'
import { useNavigate } from 'react-router-dom'
export default function TrackWorkload() {
    const navigation = useNavigate();

  return (
    <div className=" col-12 bg-white container-fluid">
      <div className="backbtn mt-2 mb-5">
        <i
          class="btn fa-solid fa-arrow-left fa-2x"
          onClick={(e) => {
            e.stopPropagation();
            navigation(-1);
          }}
        ></i>
      </div>
      <h2 className="mb-4 container">Overall Grievance</h2>
      <div className="user-data min-vh-md-75 align-items-center m-md-5 d-flex justify-content-center">
        <ShowCard />
      </div>
    </div>
  );
}
