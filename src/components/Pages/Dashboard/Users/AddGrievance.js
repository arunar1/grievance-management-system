import React, { useState } from "react";

export default function AddGrievance() {
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
    <div className="grievance-form">
      <h2>Submit New Grievance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value="aama" readOnly />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value="ar@12" readOnly />
        </div>
        <div>
          <label>Title/Subject:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Date of Occurrence:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div>
          <label>Urgency Level:</label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            required
          >
            <option value="">Select Urgency</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit">Submit Grievance</button>
      </form>
    </div>
  );
}
