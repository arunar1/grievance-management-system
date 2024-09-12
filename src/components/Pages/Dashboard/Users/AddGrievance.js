import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userDetailsContext } from "../../../Hooks/context/UserDetails";
import { Alert } from "../../../Alert/Alert";
export default function AddGrievance() {
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertMessageContext, setAlertMessageContext] = useState("");
  const [alertMessageTitle, setAlertMessageTitle] = useState("Info");

 const [categories, setCategories] = useState([]);

 const fetchCategories = async () => {
   try {
     const response = await axios.get(
       `${process.env.REACT_APP_URL}/distinctCategories`
     );
     setCategories(response.data);
     console.log(response.data);
     
   } catch (error) {
    //  console.error("Error fetching categories:", error);
   }
 };
 useEffect(() => {
   fetchCategories();
 }, []);

 console.log(categories)



  const{userDetail,setUserDetails}=useContext(userDetailsContext);
  const navigation = useNavigate();
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [urgencyLevel, setUrgency] = useState("");
  const [email,SetEmail]=useState(userDetail.email);


  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}/addGrievance`, {
        subject,
        description,
        category,
        location,
        urgencyLevel,
        email,
      });

      console.log(response)
      if (response.data.success) {
        setAlertMessageContext("Grievance submitted successfully");
        setAlertMessage(true);
        setSubject("");
        setDescription("");
        setCategory("");
        setLocation("");
        setUrgency("");
      }
      
    } catch (error) {
      
    }
    console.log({
      subject,
      description,
      category,
      location,
      urgencyLevel,
    });
  };

  return (
    <div className="m-3 m-md-0">
      {alertMessage && (
        <Alert
          title={alertMessageTitle}
          message={alertMessageContext}
          state={alertMessage}
          stateChange={{ setAlertMessage }}
        />
      )}
      <div className="backbtn m-md-5">
        <i
          class="btn fa-solid fa-arrow-left fa-2x"
          onClick={() => {
            navigation(-1);
          }}
        ></i>
      </div>
      <div className="container  mt-5">
        <h2 className="mb-4">Submit Grievance</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label>Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="form-group mt-3">
            <label>Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-control"
              required
            >
              <option value=""></option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mt-3">
            <label>Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="form-group mt-3">
            <label>Urgency Level</label>
            <select
              value={urgencyLevel}
              onChange={(e) => setUrgency(e.target.value)}
              className="form-control"
              required
            >
              <option value=""></option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="form-group mt-3">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4 mb-4">
            Submit Grievance
          </button>
        </form>
      </div>
    </div>
  );
}
