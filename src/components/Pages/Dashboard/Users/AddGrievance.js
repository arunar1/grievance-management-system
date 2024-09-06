import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddGrievance() {
  const navigation = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [urgency, setUrgency] = useState("");

  const categories = ["Category 1", "Category 2", "Category 3"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name: "aama",
      email: "ar@12",
      title,
      description,
      category,
      date,
      location,
      urgency,
    });
  };

  return (
    <div className="m-3 m-md-0">
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
          {/* <div className="form-group">
            <label>Name</label>
            <input type="text" value="aama" className="form-control" readOnly />
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              value="ar@12"
              className="form-control"
              readOnly
            />
          </div> */}
          <div className="form-group mt-3">
            <label>Subject</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={urgency}
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
