import React, { useState } from "react";

export const Filter = (props)=> {

  const { setFilterMail, filterMail } = props.value;

  const handleSearch = (event) => {
    const value = event.target.value;
    setFilterMail(value);
  };


  return (
    <div className="search-bar mb-4 container col-12 col-md-6 col-lg-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by email"
        value={filterMail}
        onChange={handleSearch}
      />
    </div>
  );
}
