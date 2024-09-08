import React, { useContext, useState } from "react";
import "./GrievanceCard.css";
import { userGrievanceContext } from "../Hooks/context/UserGrievance";
import axios from "axios";

export const GrievanceCard = (props) => {
  const { setRefresh,setUserGrievance } = useContext(userGrievanceContext);
  const { status, subject, description, email, urgencyLevel, slNumber } =
    props.data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const viewDetails = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteItem = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/deleteGrievance/${slNumber}`
      );

      if (response.status === 200) {
        setRefresh((prev)=>!prev)
        setUserGrievance((prevGrievances) =>
          prevGrievances.filter((item) => item.slNumber !== slNumber)
        );
      }
    } catch (error) {
      console.error("Error deleting grievance:", error);
    }
  };

  return (
    <div className="grievance-card container card shadow-sm mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-12 mb-2 pe-lg-5">
            <strong>Subject :</strong> {subject}
          </div>
          <div className="col-md-6 col-12 mb-2">
            <strong>Status:</strong> {status}
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={viewDetails}
            >
              View
            </button>
            <button className="btn btn-danger btn-sm" onClick={deleteItem}>
              Delete
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>
              <strong>Email :</strong> {email}
            </p>
            <p>
              <strong>Urgency :</strong> {urgencyLevel}
            </p>
            <p>
              <strong>Description :</strong> {description}
            </p>
            <button className="btn btn-secondary btn-sm" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
