import React from "react";
import "./Alert.css"; 

export const Alert = (props) => {
  const { setAlertMessage } = props.stateChange;

  const handleClose = () => {
    setAlertMessage(false); 
  };

  return (
    <>
      {props.state && ( 
        <div className="overlay">
          <div className="custom-alert">
            <div className="custom-alert-content">
              <div className="custom-alert-header">
                <h5 className="custom-alert-title">{props.title}</h5>
                <button className="custom-alert-close" onClick={handleClose}>
                  &times;
                </button>
              </div>
              <div className="custom-alert-body">{props.message}</div>
             
            </div>
          </div>
        </div>
      )}
    </>
  );
};
