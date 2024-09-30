import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userDetailsContext } from "../../Hooks/context/UserDetails";
import { Alert } from "../../Alert/Alert";
import { Loading } from "../../Loading/Loading";

export default function Main() {

  // console.log(process.env.REACT_APP_URL);

  const [alertMessage,setAlertMessage] = useState(false)
  const [alertMessageContext,setAlertMessageContext]=useState("");
  const [alertMessageTitle,setAlertMessageTitle]=useState("Info");
  const [loading,setLoading]=useState(false);

   const { userDetail, setUserDetails } = useContext(userDetailsContext);


  const navigate = useNavigate();
  const [userType, setUserType] = useState("User");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (event) => {
    setUserType(event.target.textContent);
    console.log(event.target.textContent)
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  setLoading(true); 

  try {
    const response = await axios.get(`${process.env.REACT_APP_URL}/getUser`, {
      params: { email, password },
    });

    if (response?.data) {
      const { statusCode,message, data } = response.data;

      console.log("Message: ", message);
      console.log("Data: ", data);

      setUserDetails(data); 

      if (statusCode == 200) {
        if (userType !== data.userType) {
          setLoading(false);
          setAlertMessageContext("User type incorrect");
          setAlertMessage(true); 
          return;
        }

        switch (userType) {
          case "User":
            navigate("/user_home");
            break;
          case "Supervisor":
            navigate("/supervisor_home");
            break;
          case "Asignee":
            navigate("/asignee_home");
            break;
          default:
            setAlertMessageContext("Invalid user type");
            setAlertMessage(true); 
        }
      }
      else
      {
        setLoading(false);
        setAlertMessageContext(message);
        setAlertMessage(true);
        return;
      }
    } else {
      setAlertMessageContext("User not found or invalid credentials");
      setAlertMessage(true)
    }

    setLoading(false); 
  } catch (error) {
    // setAlertMessageContext("An error occurred during login.");
    // setAlertMessage(true); 
    setLoading(false); 
  }
};


  return (
    <div className="container d-flex  login-container ">
      {loading && (
        <Loading/>
      )}
      {alertMessage && (
      <Alert
        title={alertMessageTitle}
        message={alertMessageContext}
        state={alertMessage}
        stateChange={{ setAlertMessage }}
      />
      )}
      <form onSubmit={handleSubmit} className="login-form text-white">
        <div className="row mb-3">
          <label className="col-sm-4 col-form-label">Role</label>
          <div className="col-sm-8">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-white custome-dropdown"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {userType}
              </button>
              <ul className="dropdown-menu">
                <li className="">
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleUserTypeChange}
                  >
                    User
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleUserTypeChange}
                  >
                    Supervisor
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={handleUserTypeChange}
                  >
                    Asignee
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* {userType==='Asignee' ? ():()} */}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-4 col-form-label">
            Email
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
