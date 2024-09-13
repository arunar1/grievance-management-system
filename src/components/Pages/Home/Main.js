import React, { useEffect, useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userDetailsContext } from "../../Hooks/context/UserDetails";
import { Alert } from "../../Alert/Alert";
import { Loading } from "../../Loading/Loading";

export default function Main() {

  console.log(process.env.REACT_APP_URL);

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

   try {
     const response = await axios.get(`${process.env.REACT_APP_URL}/getUser`, {
       params: { email: email, password: password },
     });
     setLoading(true)
     

     if (response.data) {
      console.log(response)
       setUserDetails(response.data);
       setLoading(false)

       if (response.status === 200) {
        console.log(response.data.userType);

        if (response.data.userType && userType != response.data.userType) {
          setAlertMessageContext("User type incorrect");
          setAlertMessage(true);
          return;
        }
        
        if (response.data == "User doesn't exist"){
          setAlertMessageContext("User doesn't exist")
          setAlertMessage(true)
          
          return
        }
        if (response.data == "Password is Incorrect"){
          setAlertMessageContext("Password is Incorrect")
          setAlertMessage(true)
          return
        }
        if (response.data.userType && userType != response.data.userType) {
          setAlertMessageContext("User type incorrect");
          setAlertMessage(true);
          return;
        }
        
          if (response.data.userType === "User") {
            navigate("/user_home");
          } else if (response.data.userType === "Supervisor") {
            navigate("/supervisor_home");
          } else if (response.data.userType === "Asignee") {
            navigate("/asignee_home");
          }
       }
     } else {
       console.log("User not found or invalid credentials");
       setLoading(false)
     }
   } catch (error) {
    //  console.error("Error during request:", error);
   }
 };

  return (
    <div className="container d-flex  login-container ">
      <Loading/>
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
