import React, { useContext, useState,useEffect } from "react";
import "./GrievanceCard.css";
import { userGrievanceContext } from "../Hooks/context/UserGrievance";
import axios from "axios";
import { userDetailsContext } from "../Hooks/context/UserDetails";
import { assigneeGrievanceContext } from "../Hooks/context/AsigneeGrievance";
import { Alert } from "../Alert/Alert";


export const GrievanceCard = (props) => {
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
    category
  } = props.data;

  const type =props.type;

  

  const [grievanceStatus, setGrievanceStatus] = useState(status);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const [messageDisplay,setMessageDisplay]=useState(message);
  const [feedbackUser,setFeedbackUser]=useState("")
  const [feedbackDisplay,setFeedbackDisplay]=useState(feedback);

  useEffect(() => {
    if (message) {
      setGrievanceStatus("Resolved");
    }
  }, [message]);


  const showMessageBoxOnResolve = () => {
    setIsModalOpen(true);
  };

  const viewDetails = () => {
    setIsModalOpen((prev)=>!prev);
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
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/updateStatus/${slNumber}`,{
          status: newStatus}
      );

      console.log(response);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };


  const handleMessageSubmit = async () => {
    if(messageInput.trim().length==0){
        setAlertMessageContext("Add Response");
        setAlertMessage(true);
        return;
    }
    try {
      const response = await axios.put(`${process.env.REACT_APP_URL}/addMessage/${slNumber}`,{
        message:messageInput
      });
      console.log(response)
      if (response.data.statusCode==200) {
        setGrievanceStatus("Resolved");
      } 
      setMessageDisplay(messageInput);
      handleStatus("Resolved")
      setMessageInput("");
    } catch (error) {
      // console.error("Error submitting message:", error);
    }
  };

  const deleteItem = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_URL}/deleteGrievance/${slNumber}`
      );
      console.log(response)

      if (response.status === 200) {
        setRefresh((prev) => !prev);
        setUserGrievance((prevGrievances) =>
          prevGrievances.filter((item) => item.slNumber !== slNumber)
        );
        if (response.data.statusCode==200) {
          setAlertMessageContext("Deleted Grievance successfully...");
          setAlertMessage(true);
        }
          
      }
    } catch (error) {
      // console.error("Error deleting grievance:", error);
    }
  };

  const addFeedback =async()=>{
    if(feedbackUser.trim().length==0){
      setAlertMessageContext("Add some content");
      setAlertMessage(true)
      return;
    }
    try {
      const response =await axios.put(`${process.env.REACT_APP_URL}/addfeedback/${slNumber}`,{
        feedback:feedbackUser
      });
      if(response.status==200){
        setFeedbackDisplay(feedbackUser);
        setFeedbackUser("");
      }
      if (response.data.statusCode == 200){
        setAlertMessageContext("Feedback added Successfully");
        setAlertMessage(true);
      }
       console.log(response);

    } catch (error) {
      
    }
  }



  return (
    <div className="grievance-card container card shadow-sm mb-3">
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
              {grievanceStatus !== "Resolved" && (
                <>
                  <button
                    className={`btn btn-sm me-2 btn-outline-dark`}
                    style={{
                      backgroundColor:
                        grievanceStatus === "pending" ? "#0d6efd" : "",
                      color: grievanceStatus === "pending" ? "white" : "",
                    }}
                    onClick={() => {
                      setGrievanceStatus("pending");
                      handleStatus("pending");
                    }}
                  >
                    Pending
                  </button>
                  <button
                    className="btn btn-outline-dark btn-sm me-2"
                    style={{
                      backgroundColor:
                        grievanceStatus === "working on" ? "#0d6efd" : "",
                      color: grievanceStatus === "working on" ? "white" : "",
                    }}
                    onClick={() => {
                      setGrievanceStatus("working on");
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
                  backgroundColor:
                    grievanceStatus === "Resolved" ? "#0d6efd" : "",
                  color: grievanceStatus === "Resolved" ? "white" : "",
                }}
                onClick={() => {
                  setGrievanceStatus("Resolved");
                  handleStatus("Resolved");
                }}
                disabled
              >
                Resolved
              </button>
            </div>
          )}
          <p className="mt-5 mt-md-0">
            <strong>Date :</strong> {date}
          </p>
          {userDetail.userType != "User" && (
            <p>
              <strong>Email :</strong> {email}
            </p>
          )}
          <div className="col-md-6 col-12 mb-2 pe-lg-5">
            <strong>Subject :</strong> {subject}
          </div>
          <div className="col-md-6 col-12 mb-2 d-flex ">
            <strong className=" pe-2">Status:</strong> <div className="ps-2 pe-2" style={{backgroundColor:"rgba(234,233,86,1)",borderRadius:10}}>{grievanceStatus}</div>
          </div>

          <div className="col-md-6 col-12 mb-2 pe-lg-5">
            {grievanceStatus === "Resolved" && messageDisplay != null && (
              <div className="pt-2">
                <strong>Response :</strong> {messageDisplay}
              </div>
            )}
            {feedbackDisplay && userDetail.userType == "Asignee" && (
              <p className="pt-3">
                <strong>Feedback :</strong> {feedbackDisplay}
              </p>
            )}
            {feedbackDisplay &&
              userDetail.userType == "Supervisor" &&
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
              {type == "feed" && !feedbackDisplay ? "Add Feedback" : "View"}
            </button>
            {((grievanceStatus == "pending" && userDetail.userType == "User") ||
              userDetail.userType == "Supervisor") && (
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

            {feedbackDisplay && userDetail.userType == "User" && (
              <p>
                <strong>Feedback :</strong> {feedbackDisplay}
              </p>
            )}

            {userDetail.userType === "Asignee" &&
              grievanceStatus === "working on" &&
              message == null && (
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
            {type == "feed" && feedbackDisplay == null && (
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
