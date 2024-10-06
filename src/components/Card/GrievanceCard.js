import React, { useContext, useState, useEffect } from "react";
import "./GrievanceCard.css";
import { userGrievanceContext } from "../Hooks/context/UserGrievance";
import axios from "axios";
import { userDetailsContext } from "../Hooks/context/UserDetails";
import { assigneeGrievanceContext } from "../Hooks/context/AsigneeGrievance";
import { Alert } from "../Alert/Alert";
import { Loading } from "../Loading/Loading";

export const GrievanceCard = (props) => {
  const [loading, setLoading] = useState(false);

  const [alertMessage, setAlertMessage] = useState(false);
  const [alertMessageContext, setAlertMessageContext] = useState("");
  const [alertMessageTitle, setAlertMessageTitle] = useState("Info");
  const { assigneeGrievance, setAssigneeGrievance } = useContext(
    assigneeGrievanceContext
  );
  const { setRefresh, setUserGrievance } = useContext(userGrievanceContext);
  const { userDetail } = useContext(userDetailsContext);

  const {
    status,
    subject,
    description,
    email,
    urgencyLevel,
    slNumber,
    date,
    time,
    message,
    feedback,
    category,
  } = props.data;

  const type = props.type;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messageDisplay, setMessageDisplay] = useState(message);
  const [feedbackUser, setFeedbackUser] = useState("");
  const [feedbackDisplay, setFeedbackDisplay] = useState(feedback);

  useEffect(() => {
    if (message) {
      handleStatus("Resolved");
      // setMessageDisplay(message);
    }
  }, []);

  const showMessageBoxOnResolve = () => {
    setIsModalOpen(true);
  };

  const viewDetails = () => {
    setIsModalOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setMessageInput(event.target.value);
  };

  const handleFeedbackInputChange = (event) => {
    setFeedbackUser(event.target.value);
  };

  const handleStatus = async (newStatus) => {
    if (newStatus === status) return; 
    setLoading(true)
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/updateStatus/${slNumber}`,
        { status: newStatus }
      );
      if(response){
        setLoading(false);
      }

      if (response.data.statusCode === 200) {
        // Update context
        setAssigneeGrievance((prev) =>
          prev.map((item) =>
            item.slNumber === slNumber ? { ...item, status: newStatus } : item
          )
        );
      }
    } catch (error) {
      setLoading(false)
      // console.error("Error updating status:", error);
    }
  };

  const handleMessageSubmit = async () => {
    if (messageInput.trim().length === 0) {
      setAlertMessageContext("Add Response");
      setAlertMessage(true);
      return;
    }
    setLoading(true)
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/addMessage/${slNumber}`,
        {
          message: messageInput,
        }
      );
      if (response) {
        setLoading(false);
      }
      if (response.data.statusCode === 200) {
        // Update context
        setAssigneeGrievance((prev) =>
          prev.map((item) =>
            item.slNumber === slNumber
              ? { ...item, message: messageInput, status: "Resolved" }
              : item
          )
        );
        setMessageDisplay(messageInput);
        handleStatus("Resolved");
      }
      setMessageInput("");
    } catch (error) {
      setLoading(false)
      // console.error("Error submitting message:", error);
    }
  };

  const deleteItem = async () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!isConfirmed) {
      return;
    }

    setLoading(true)

    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL}/deleteGrievance/${slNumber}`
      );
    
      if (response) {
        setLoading(false);
      }

      if (response.data.statusCode === 200) {
        setRefresh((prev) => !prev);
        setUserGrievance((prevGrievances) =>
          prevGrievances.filter((item) => item.slNumber !== slNumber)
        );
          setAlertMessageContext("Deleted Grievance successfully...");
          setAlertMessage(true);
      }
    } catch (error) {
      setLoading(false)
      // console.error("Error deleting grievance:", error);
    }
  };

  const addFeedback = async () => {
    if (feedbackUser.trim().length === 0) {
      setAlertMessageContext("Please add some feedback");
      setAlertMessage(true);
      return;
    }
    setLoading(true)
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/addfeedback/${slNumber}`,
        {
          feedback: feedbackUser,
        }
      );
      if (response) {
        setLoading(false);
      }
      if (response.data.statusCode === 200) {
        setFeedbackDisplay(feedbackUser);
        setFeedbackUser("");
        // Update context
        setAssigneeGrievance((prev) =>
          prev.map((item) =>
            item.slNumber === slNumber
              ? { ...item, feedback: feedbackUser }
              : item
          )
        );
      }
        setAlertMessageContext("Feedback added Successfully");
        setAlertMessage(true);
    } catch (error) {
      setLoading(false)
      console.error("Error adding feedback:", error);
    }
  };

  return (
    <div className="grievance-card container card shadow-sm mb-3">
      {loading && <Loading />}
      {alertMessage && (
        <Alert
          title={alertMessageTitle}
          message={alertMessageContext}
          state={alertMessage}
          stateChange={{ setAlertMessage }}
        />
      )}
      <div className="card-body">
        <div className="row">
          {userDetail.userType === "Asignee" && (
            <div className="col-12 d-flex justify-content-end">
              {status !== "Resolved" && (
                <>
                  <button
                    className={`btn btn-sm me-2 btn-outline-dark`}
                    style={{
                      backgroundColor: status === "pending" ? "#0d6efd" : "",
                      color: status === "pending" ? "white" : "",
                    }}
                    onClick={() => handleStatus("pending")}
                  >
                    Pending
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm me-2"
                    style={{
                      backgroundColor: status === "working on" ? "#0d6efd" : "",
                      color: status === "working on" ? "white" : "",
                    }}
                    onClick={() => {
                      handleStatus("working on");
                      showMessageBoxOnResolve();
                    }}
                  >
                    Working on
                  </button>
                </>
              )}
              <button
                className="btn btn-outline-dark btn-sm me-2"
                style={{
                  backgroundColor: status === "Resolved" ? "#0d6efd" : "",
                  color: status === "Resolved" ? "white" : "",
                }}
                onClick={() => handleStatus("Resolved")}
                disabled
              >
                Resolved
              </button>
            </div>
          )}
          <p className="mt-5 mt-md-0">
            <strong>Date :</strong> {date}
          </p>
          {userDetail.userType !== "User" && (
            <p>
              <strong>Email :</strong> {email}
            </p>
          )}
          <div className="col-md-6 col-12 mb-2 pe-lg-5">
            <strong>Subject :</strong> {subject}
          </div>
          <div className="col-md-6 col-12 mb-2 d-flex ">
            <strong className="pe-2">Status:</strong>
            <div
              className="ps-2 pe-2"
              style={{
                backgroundColor: "rgba(234,233,86,1)",
                borderRadius: 10,
              }}
            >
              {status}
            </div>
          </div>

          <div className="col-md-6 col-12 mb-2 pe-lg-5">
            {status === "Resolved" && messageDisplay && (
              <div className="pt-2">
                <strong>Response :</strong> {messageDisplay}
              </div>
            )}
            {feedbackDisplay && userDetail.userType === "Asignee" && (
              <p className="pt-3">
                <strong>Feedback :</strong> {feedbackDisplay}
              </p>
            )}
            {feedbackDisplay &&
              userDetail.userType === "Supervisor" &&
              props.display && (
                <p className="pt-3">
                  <strong>Feedback :</strong> {feedbackDisplay}
                </p>
              )}
          </div>
          <div className="col-12 d-flex justify-content-end">
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={viewDetails}
            >
              {type === "feed" && !feedbackDisplay ? "Add Feedback" : "View"}
            </button>
            {((status === "pending" && userDetail.userType === "User") ||
              userDetail.userType === "Supervisor") && (
              <button className="btn btn-danger btn-sm" onClick={deleteItem}>
                Delete
              </button>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>
              <strong>Time :</strong> {time}
            </p>
            <p>
              <strong>Category :</strong> {category}
            </p>
            <p>
              <strong>Urgency :</strong> {urgencyLevel}
            </p>
            <p>
              <strong>Description :</strong> {description}
            </p>

            {feedbackDisplay && userDetail.userType === "User" && (
              <p>
                <strong>Feedback :</strong> {feedbackDisplay}
              </p>
            )}

            {userDetail.userType === "Asignee" &&
              status === "working on" &&
              !message && (
                <div className="message-box">
                  <textarea
                    className="form-control mb-2"
                    rows="3"
                    placeholder="Enter your message"
                    value={messageInput}
                    onChange={handleInputChange}
                    required
                  />
                  <button
                    className="btn btn-success btn-sm"
                    onClick={handleMessageSubmit}
                  >
                    Submit Message
                  </button>
                </div>
              )}
            {type === "feed" && !feedbackDisplay && (
              <div className="message-box">
                <textarea
                  className="form-control mb-2"
                  rows="3"
                  placeholder="Submit feedback"
                  value={feedbackUser}
                  onChange={handleFeedbackInputChange}
                  required
                />
                <button
                  className="btn btn-success btn-sm"
                  onClick={addFeedback}
                >
                  Submit Message
                </button>
              </div>
            )}

            <button
              className="btn btn-secondary btn-sm mt-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
